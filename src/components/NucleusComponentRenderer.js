import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';

export class NucleusComponentRenderer extends LitElement {

  static get properties() {
    return {
      src: { type: String },
      _minHeight: { type: Number, state: true },
      _zoom: { type: Boolean, state: true },
      _viewport: { type: String, state: true }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .example {
        background: #fff;
        border-start-start-radius: 0.5rem;
        border-start-end-radius: 0.5rem;
        border: 1px solid var(--sl-color-gray-6);
        min-height: var(--iframe-min-height);
      }

      iframe {
        border: none;
        transform-origin: 0 0;
        max-width: initial !important;
        min-height: var(--iframe-min-height);

        &.zoom-out {
          transform: scale(0.75);
          width: 133% !important;
        }

        &.viewport-mobile {
          width: 45% !important;
        }
      }

      .form {
        display: flex;
        background-color: var(--sl-color-bg-nav);
        padding-inline: 1rem;
        padding-block: 0.5rem;

        .viewport,
        .zoom {
          display: flex;
          gap: 0.5rem;
          align-items: center;

          &:last-of-type {
            margin-inline-start: auto;
          }

          span {
            font-weight: 500;
          }
        }

        .radio-element {
          display: inline-block;
          margin-inline-end: 0.5rem;

          &:last-of-type {
            margin-inline-end: 0;
          }

          label {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding-block-start: 0.25rem;
            padding-block-end: 0.25rem;
          }

          input {
            background-color: transparent;
            font-size: inherit;
            line-height: inherit;
            font-family: inherit;
            margin: 0;
            padding: 0;
            border: 0;
            width: 1rem;
            height: 1rem;
          }
        }
      }
    `;
  }

  constructor() {
    super();

    this._minHeight = 200;
    this._viewport = 'desktop';
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
      viewport.addEventListener('change', (event) => this._viewport = event.target.value);
    });

    const zoomOptions = this.shadowRoot.querySelectorAll('input[name="zoom"]');
    zoomOptions?.forEach((zoomOption) => {
      zoomOption.checked = zoomOption.value === this._zoom;
      zoomOption.addEventListener('change', (event) => this._zoom =  event.target.value );
    });
  }

  updated() {
    super.updated();
    this._iframeHeight();
  }

  _iframeHeight() {
    const iframe = this.shadowRoot.querySelector('.example-iframe');
    if (iframe) {
      this._minHeight = iframe.contentWindow.document.body.scrollHeight;
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
      'viewport-mobile': this._viewport === 'mobile',
      'viewport-desktop': this._viewport === 'desktop',
    };

    return html`
      <div class="example preview">
        <iframe
          class=${classMap(classes)}
          style=${styleMap(styles)}
          srcdoc=${this.doc}
          width="100%"
          height="100%"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin"
          @load=${() => this._iframeHeight()}
        ></iframe>
        <div class="form">
          <div class="viewport">
            <span>Viewport</span>
            <div class="radio-element">
              <label><input type="radio" name="viewport" value="mobile"> Mobile</label>
            </div>
            <div class="radio-element">
              <label><input type="radio" name="viewport" value="desktop"> Desktop</label>
            </div>
          </div>
          <div class="zoom">
            <span>Scale</span>
            <div class="radio-element">
              <label><input type="radio" name="zoom" value="zoom-in"> 100%</label>
            </div>
            <div class="radio-element">
              <label><input type="radio" name="zoom" value="zoom-out"> 75%</label>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('example-view', NucleusComponentRenderer);
