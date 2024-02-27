import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';

export class NucleusPageRenderer extends LitElement {

  static get properties() {
    return {
      src: { type: String }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding-block-start: 1.5rem;  
      }

      .page-iframe {
        display: block;
        width: auto;
        min-height: 544px;
        height: auto;
        border-style: solid;
        border-color: #4d4d4d;
        border-top-width: 64px;
        border-right-width: 12px;
        border-bottom-width: 64px;
        border-left-width: 12px;
        resize: both;
        background: #ffffff;
        overflow: auto;
        position: relative;
        min-width: 399px;
        min-height: 795px;
        border-radius: 50px;
      }
    `;
  }

  _onIframeLoad() {
    const iframe = this.shadowRoot.querySelector('.page-iframe');
    if (iframe) {
      const iframeDoc = iframe.contentWindow.document;
      const clickables = iframeDoc.body.querySelectorAll('[href^="#"]');
      clickables?.forEach((clickable) => {
        clickable.addEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    }
  }

  render() {
    const classes = {
      'page-iframe': true
    };

    return html`
      <div class="page preview">
        <iframe
          class=${classMap(classes)}
          srcdoc=${this.src}
          width="100%"
          height="100%"
          allowfullscreen
          sandbox="allow-scripts allow-same-origin"
          @load=${() => this._onIframeLoad()}
        ></iframe>
      </div>
    `;
  }
}

customElements.define('page-view', NucleusPageRenderer);


