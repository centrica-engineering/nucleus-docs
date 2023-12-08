import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

export class ExampleView extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      __minHeight: { type: Number, state: true },
      __isDragging: { type: Boolean, state: true }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }

      h2 {
        margin: 0;
        padding: 0;
        font-size: 1.5em;
      }

      .example {
        background: #fff;
        height: 100%;
        border-radius: 4px;
        padding: 0.5rem;
        border: 1px solid var(--sl-color-gray-6);
      }

      iframe {
        border: none;
        height: 100%;
        width: 100%;
        min-height: var(--min-height);
        
      }

      .preview {
        height: 100%;
        min-height: var(--min-height);
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
    `;
  }

  constructor() {
    super();

    this.title = 'Example';

    this.__minHeight = 200;
    this.__isDragging = false;
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

  render() {
    const styles = {
      '--min-height': `${this.__minHeight}px`
    };

    return html`
      <div class="example">
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
      </div>
    `;
  }
}

customElements.define('example-view', ExampleView);
