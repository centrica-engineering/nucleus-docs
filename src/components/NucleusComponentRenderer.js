import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

export class NucleusComponentRenderer extends LitElement {

  static get properties() {
    return {
      src: { type: String },
      _minHeight: { type: Number, state: true }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 100%;
      }

      .example {
        background: #fff;
        border-start-start-radius: 0.5rem;
        border-start-end-radius: 0.5rem;
        padding: 0.5rem;
        border: 1px solid var(--sl-color-gray-6);
      }
      iframe {
        border: none;
        transform: scale(0.75);
        transform-origin: 0 0;
        max-width: initial !important;
        width: 133% !important;
      }
    `;
  }

  get doc() {
    return `
      <head>
        <script src="https://www.britishgas.co.uk/nucleus/nucleus.min.js" type="text/javascript"></script>
      </head>
      <body>
        <main class="ndsn" id="content">
          <ns-panel>
            <div>
              ${this.src}
            </div>
          </ns-panel>
        </main>
      </body>
    `;
  }

  updated() {
    super.updated();
    const iframe = this.shadowRoot.querySelector('iframe');
    console.log(iframe.contentWindow.document.body.scrollHeight);
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px !important;";
  }

  render() {
    return html`
      <div class="example">
        <div class="preview">
          <iframe
            class="example-iframe"
            .srcdoc=${this.doc}
            width="100%"
            height="100%"
            allowfullscreen
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    `;
  }
}

customElements.define('example-view', NucleusComponentRenderer);
