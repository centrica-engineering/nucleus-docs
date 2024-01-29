import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { getHighlighter } from 'shikiji';
import { Task } from '@lit/task';

export class NucleusCodeSnippet extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      _formattedSrc: {}
    };
  }

  constructor() {
    super();
    this._formattedSrc = new Task(this, {
      task: async ([src], {signal} ) => {
        const highlighter = await getHighlighter({ themes: ['github-dark', 'github-light'] });
        const htmlContent = highlighter.codeToHtml(src, {theme: 'github-dark'});
        return html`${unsafeHTML(htmlContent)}`;
      },
      args: () => [this.src]
    });
  }

  render() {
    return this._formattedSrc.render({
      pending: () => html`<p>Loading...</p>`,
      complete: (codeSnippet) => {
        return html`${codeSnippet}`;
      },
      error: (e) => html`<p>Error${e}</p>`
    });
  }
}

customElements.define('code-snippet', NucleusCodeSnippet);
