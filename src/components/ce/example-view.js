import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { ref } from 'lit/directives/ref.js';

export class ExampleView extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      fullscreen: { type: Boolean, reflect: true },
      __code: { type: String, state: true },
      __minHeight: { type: Number, state: true },
      __isDragging: { type: Boolean, state: true }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
        border: 1px solid currentColor;
        border-radius: 4px;
        padding: 1em;
      }

      h2 {
        margin: 0;
        padding: 0;
        font-size: 1.5em;
      }

      iframe {
        border: none;
        height: 100%;
        width: 100%;
        min-height: var(--min-height);
      }

      .preview {
        height: 100%;
        width: 100%;
        min-height: var(--min-height);
      }

      .code {
        height: 100%;
        width: 100%;
      }

      .code pre {
        margin: 0;
        height: 100%;
        width: 100%;
        padding: 0.5em;
        color: currentColor;
      }

      .slider {
        cursor: ns-resize;
        width: 100%;
        text-align: center;
        background: #eee;
        user-select: none;
        color: #666;
        border: none;
      }

      .slider:active {
        background: #ccc;
      }

      .slider:active::after {
        content: '';
        position: absolute;
        left: 30px;
        right: 30px;
        top: 30px;
        bottom: 30px;
      }

      :host([fullscreen]) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 0;
        z-index: 99999999999;
        background: #fff;
        isolation: isolate;
      }
    `;
  }

  constructor() {
    super();

    this.title = 'Example';
    this.fullscreen = false;

    this.__code = '';
    this.__minHeight = 200;
    this.__isDragging = false;
  }

  connectedCallback() {
    super.connectedCallback();

    this.__code = html_beautify(this.innerHTML.toString().trim(),
      {
        indent_size: 2,
        space_in_empty_paren: true,
        end_with_newline: true,
        wrap_line_length: 0,
        indent_inner_html: true
      }
    );
  }

  get doc() {
    const inner = this.innerHTML;

    return `
      <head>
        <script src="https://www.britishgas.co.uk/nucleus/nucleus.min.js" type="text/javascript"></script>
      </head>
      <body class="ndsn">
      ${inner}
      </body>
    `;
  }

  addCode(el) {
    if (el) {
      el.textContent = this.__code;
    }
  }

  copySnippet(e) {
    const target = e.target;
    navigator.clipboard.writeText(this.__code);
    target.textContent = 'Copied!';

    setTimeout(() => {
      target.textContent = 'Copy';
    }, 1000);
  }

  sliderMove(e) {
    e.preventDefault();

    if (this.__isDragging) {
      const delta = e.movementY;

      this.__minHeight = Math.max(this.__minHeight + delta, 200);
    }
  }

  sliderUp(e) {
    if (e.buttons === 0) {
      this.__isDragging = false;
    }
  }

  slideDown() {
    this.__isDragging = true;
  }

  enableFullscreen() {
    this.fullscreen = true;
  }

  render() {
    const styles = {
      '--min-height': `${this.__minHeight}px`
    };

    return html`
      <h2>${this.title}</h2>
      <div class="preview" style=${styleMap(styles)}>
      <iframe
        style=${styleMap(styles)}
        .srcdoc=${this.doc}
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      </div>
      <button class="slider" @mousedown=${this.slideDown} @mousemove=${this.sliderMove} @mouseup=${this.sliderUp} @mouseleave=${this.sliderUp}>===</button>
      <div class="code-actions">
        <button @click=${this.copySnippet}>Copy</button>
        <button @click=${this.enableFullscreen}>Fullscreen</button>
      </div>
      <div class="code">
        <pre><code ${ref(this.addCode)}></code></pre>
      </div>
    `;
  }
}

customElements.define('example-view', ExampleView);