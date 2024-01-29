import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { toHtml } from 'hast-util-to-html';
import {until } from 'lit/directives/until.js';
import { createRenderer } from 'remark-expressive-code';
import shiki from 'shiki';

export class NucleusCodeSnippet extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      _formattedSrc: { state: true }
    };
  }

  // willUpdate() {
  //   super.willUpdate();
  //   this._formattedSrc = shiki.getHighlighter({ theme: 'github-dark' }).then(highlighter => {
  //     const htmlContent = highlighter.codeToHtml(this.src, {lang: 'html'});
  //     console.log(htmlContent);
  //     return htmlContent;
  //   });
  // }

  async _codeSnippet() {
      const highlighter = await shiki.getHighlighter({ theme: 'github-dark' });
      this._formattedSrc = highlighter.codeToHtml(this.src, {lang: 'html'});
      console.log(this._formattedSrc);
    // return (async () => {
    //   const {ec, themeStyles, baseStyles, jsModules} = await createRenderer({
    //     useDarkModeMediaQuery: true
    //   });
    //   const { renderedGroupAst, styles } = await ec?.render({
    //     code: this.src,
    //     language: 'html',
    //     meta: ''
    //   });
    //   let htmlContent = toHtml(renderedGroupAst);
    //   return htmlContent;
    // })();
  }
  connectedCallback() {
    super.connectedCallback();
    until(this._codeSnippet(), 'Loading...');
  }

  render() {
    return html`${this._formattedSrc}`;
  }
}

customElements.define('code-snippet', NucleusCodeSnippet);
