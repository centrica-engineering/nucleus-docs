import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { createRenderer } from 'remark-expressive-code';
import { toHtml } from 'hast-util-to-html';
import { prettify } from 'htmlfy';
import { Task, TaskStatus } from '@lit/task';

export class NucleusCodeSnippet extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      _hideTopBorderRadius: { type: Boolean, attribute: 'hide-top-radius' },
      _formattedSrc: {}
    };
  }

  constructor() {
    super();
    this._hideTopBorderRadius = false;
    this._formattedSrc = new Task(this, {
      task: async ([src, hideBorderRadius], {signal} ) => {
        const {ec, themeStyles, baseStyles, jsModules} = await createRenderer({
          themes:['github-dark', 'github-light'],
          useDarkModeMediaQuery: true
        });
        const { renderedGroupAst, styles } = await ec.render({
          code: src,
          language: 'html',
          meta: ''
        });

        const borderRadiusStyles = hideBorderRadius ? '0 0 var(--header-border-radius) var(--header-border-radius)' : 'var(--header-border-radius)';
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
          ${`
            .expressive-code .frame {
              border-radius: ${borderRadiusStyles}
            }
            .expressive-code pre {
              border-radius: ${borderRadiusStyles}
            }
            .expressive-code .copy button {
              opacity: var(--ec-frm-inlBtnBrdOpa);
              position: relative;
              border: 1px solid var(--ec-frm-inlBtnBrd);
              
              &::before {
                pointer-events: auto;
                border: none;
                content: 'Copy';
                opacity: 1;
                color: var(--ec-codeFg);
                width: max-content;
                top: 50%;
                transform: translate(min(calc(-100% - 0.5rem)), -50%);
              }
            }
            `
          }
          ${themedStyles ?? ''}
          ${(baseStyles || themedStyles) ? '</style>' : ''}
          ${htmlContentParts[1]}`;
        return html`${unsafeHTML(htmlContent)}`;
      },
      args: () => [this._prettifySrc, this._hideTopBorderRadius]
    });
  }

  get _prettifySrc() {
    return this.src?.replaceAll('><', '>\n<');
  }

  updated() {
    super.updated();

    if (this._formattedSrc.status === TaskStatus.COMPLETE) {
      const copyBtn = this.shadowRoot.querySelector('.copy button');
      copyBtn?.addEventListener('click', this._clickHandler.bind(this));
    }
  }

  _clickHandler(event) {
    let btn=event.currentTarget;
    let code=btn.getAttribute('data-code').replace(/\u007f/g,'\n');
    navigator.clipboard.writeText(code);

    let tt=document.createElement('div');
    tt.classList.add('feedback');
    tt.append(btn.dataset.copied);
    btn.before(tt);

    tt.offsetWidth;
    requestAnimationFrame(()=>tt.classList.add('show'));
    let h=() => !tt || tt.classList.remove('show');
    let r=() => {
      if(!(!tt || parseFloat(getComputedStyle(tt).opacity)>0)){
        tt.remove();
        tt=null
      }
    };
    setTimeout(h,1500);
    setTimeout(r,2500);
    btn.addEventListener('blur',h);
    tt.addEventListener('transitioncancel',r);
    tt.addEventListener('transitionend',r);
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
