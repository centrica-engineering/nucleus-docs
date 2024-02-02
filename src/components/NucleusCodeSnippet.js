import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { createRenderer } from 'remark-expressive-code';
import { toHtml } from 'hast-util-to-html';
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
        const {ec, themeStyles, baseStyles, jsModules} = await createRenderer({
          themes:['github-dark', 'github-light'],
          useDarkModeMediaQuery: true
        });
        const { renderedGroupAst, styles } = await ec.render({
          code: src,
          language: 'html',
          meta: ''
        });

        let htmlContent = toHtml(renderedGroupAst);
        const frameSelector = 'figure class="frame';
        let index = htmlContent.indexOf(frameSelector);
        if(index > 0) {
          htmlContent = htmlContent.split(frameSelector).join(`${frameSelector} not-content`);
        }
        //map data-theme to the code block theme
        const themedStyles = themeStyles?.replaceAll(':root', ':host').replaceAll('github-dark', 'light').replaceAll('github-light', 'dark');
        // Collect styles and add them before the HTML content
        const prefixToLookup = 'class="expressive-code">';
        const htmlContentParts = htmlContent.split(prefixToLookup);
        htmlContent = `${htmlContentParts[0]}${prefixToLookup}
          ${(baseStyles || themedStyles) ? '<style>' : ''}
          ${baseStyles ?? ''}
          ${themedStyles ?? ''}
          ${(baseStyles || themedStyles) ? '</style>' : ''}
          <script>${jsModules}</script>
          ${htmlContentParts[1]}`;
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
