import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import ceDoc from '@connectedhomes/nucleus/ce-doc.json';

export class NucleusComponentRenderer extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      src: { type: String },
      _minHeight: { type: Number, state: true },
      zoom: { type: Boolean },
      _viewport: { type: String, state: true },
      _customElement: { type: Object, state: true }
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
        height: var(--example-min-height);
        overflow: hidden;
      }

      iframe {
        border: none;
        transform-origin: 0 0;
        max-width: initial !important;
        min-height: var(--iframe-min-height);

        &.zoom-75 {
          transform: scale(0.75);
          width: 133% !important;
        }

        &.zoom-50 {
          transform: scale(0.50);
          width: 200% !important;
        }

        &.viewport-mobile {
          width: 45% !important;
        }
      }

      .form {
        display: flex;
        background-color: var(--sl-color-bg-nav);
        border-bottom: 1px solid var(--sl-color-gray-6);
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
    this.zoom = '75';
  }

  willUpdate() {
    if (this.name) {
      this._customElement = ceDoc.find((ce) => ce.name === this.name);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    let observer;
    const observe = () => {
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(() => this.requestUpdate());
      observer?.observe(this);
    };
    observe();
  }

  get _componentWrapper() {
    if (this.name === 'ns-selector') {
      return `<ns-inputter>${this.src}</ns-inputter>`;
    } else if (this.name === 'ns-timeline-event'){
      return`${this.src}<ns-timeline-event status="invalid"></ns-timeline-event>`;
    } else {
      return this.src;
    }
  }

  get doc() {
    const wrapper = this._customElement?.placements?.includes('main') ? this._componentWrapper : `
      <ns-panel>
        <div>
          ${this._componentWrapper}
        </div>
      </ns-panel>
    `;
    return `
      <head>
        <script src="https://www.britishgas.co.uk/nucleus/nucleus.min.js" type="text/javascript"></script>
      </head>
      <body>
        <main class="ndsn" id="content">
          ${wrapper}
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
      zoomOption.checked = zoomOption.value === this.zoom;
      zoomOption.addEventListener('change', (event) => this.zoom =  event.target.value );
    });
  }

  updated() {
    super.updated();
    this._onIframeLoad();
  }

  _onIframeLoad() {
    const iframe = this.shadowRoot.querySelector('.example-iframe');
    if (iframe) {
      const iframeDoc = iframe.contentWindow.document;
      const main = iframeDoc.getElementById('content');
      this._minHeight = main?.offsetHeight;

      const clickables = iframeDoc?.body?.querySelectorAll('[href^="#"]');
      clickables?.forEach((clickable) => {
        clickable.addEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    }
  }

  render() {
    const wrapperHeight = (this._minHeight * this.zoom) / 100;
    const styles = {
      '--iframe-min-height': `${this._minHeight}px !important`,
      '--example-min-height': `${wrapperHeight < 300 ? 300 : wrapperHeight + 48}px !important`
    };

    const classes = {
      'example-iframe': true,
      'zoom-100': this.zoom === '100',
      'zoom-75': this.zoom === '75',
      'zoom-50': this.zoom === '50',
      'viewport-mobile': this._viewport === 'mobile',
      'viewport-desktop': this._viewport === 'desktop',
    };

    return html`
      <div class="example preview" style=${styleMap(styles)}>
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
              <label><input type="radio" name="zoom" value="100"> 100%</label>
            </div>
            <div class="radio-element">
              <label><input type="radio" name="zoom" value="75"> 75%</label>
            </div>
            <div class="radio-element">
              <label><input type="radio" name="zoom" value="50"> 50%</label>
            </div>
          </div>
        </div>
        <iframe
          class=${classMap(classes)}
          srcdoc=${this.doc}
          width="100%"
          height="100%"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin"
          @load=${() => setTimeout(() => this._onIframeLoad(), 300)}
        ></iframe>
      </div>
    `;
  }
}

customElements.define('example-view', NucleusComponentRenderer);
