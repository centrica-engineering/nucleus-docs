import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';

export class NucleusComponentRenderer extends LitElement {

  static get properties() {
    return {
      src: { type: String },
      _minHeight: { type: Number, state: true },
      _zoom: { type: Boolean, state: true },
      viewport: { type: String }
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
        min-height: var(--iframe-min-height);
      }

      iframe {
        transform-origin: 0 0;
        max-width: initial !important;
        min-height: var(--iframe-min-height);

        &.zoom-out {
          transform: scale(0.75);
          width: 133% !important;
        }
      }
    `;
  }

  constructor() {
    super();

    this._minHeight = 400;
    this.viewport = 'desktop';
    this._zoom = 'zoom-out';
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



  firstUpdated() {
    super.firstUpdated();
    const viewports = this.shadowRoot.querySelectorAll('input[name="viewport"]');
    viewports?.forEach((viewport) => {
      viewport.checked = viewport.value === this._viewport;
      console.log(viewport.checked);
      viewport.addEventListener('change', (event) => {
        this._viewport = Array.from(viewports)?.filter((viewport) => viewport.checked).map((viewport) => viewport.value);
      });
    });

    const zoomOptions = this.shadowRoot.querySelectorAll('input[name="zoom"]');
    console.log(Array.from(zoomOptions));
    zoomOptions?.forEach((zoomOption) => {
      zoomOption.checked = zoomOption.value === this._zoom;
      zoomOption.addEventListener('change', (event) => {
        this._zoom =  event.target.value;
      });
    });
  }

  updated() {
    super.updated();
    const iframe = this.shadowRoot.querySelector('.example-iframe');
    if (iframe) {
      // iframe.height = iframe.contentWindow.document.body.scrollHeight + "px !important;";
      this._minHeight = iframe.contentWindow.document.body.scrollHeight;
      console.log('minHeight ', this._minHeight);
    }
  }

  render() {
    const styles = {
      '--iframe-min-height': `${this._minHeight}px !important`
    };

    const classes = {
      'example-iframe': true,
      'zoom-in': this._zoom === 'zoom-in',
      'zoom-out': this._zoom === 'zoom-out',
      'viewport-mobile': this.viewport === 'mobile',
      'viewport-desktop': this.viewport === 'desktop',
    };

    return html`
      <div class="zoom">
        <input type="radio" name="zoom" id="zoom-in" value="zoom-in">
        <label for="zoom-in">Zoom in</label>
        <input type="radio" name="zoom" id="zoom-out" value="zoom-out">
        <label for="zoom-out">Zoom out</label>
      </div>
      <div class="example preview">
        <iframe
          class=${classMap(classes)}
          style=${styleMap(styles)}
          srcdoc=${this.doc}
          width="100%"
          height="100%"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    `;
  }
}

customElements.define('example-view', NucleusComponentRenderer);
