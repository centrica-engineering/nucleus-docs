import { LitElement, html } from 'lit';

export class NucleusTOC extends LitElement {

  static get properties() {
    return {
      _current: { type: HTMLAnchorElement, state: true },
      _minH: { type: Number, state: true },
      _maxH: { type: Number, state: true },
      _links: { type: Array, state: true }
    };
  }

  constructor() {
    super();

    this._minH = parseInt(this.dataset.minH || '2', 10);
    this._maxH = parseInt(this.dataset.maxH || '3', 10);
    this._links = [...this.querySelectorAll('a')];
  }

  /** Test if an element is a table-of-contents heading. */
  isHeading(el) {
    if (el instanceof HTMLHeadingElement) {
      // Special case for page title h1
      if (el.id === '_top') return true;
      // Check the heading level is within the user-configured limits for the ToC
      const level = el.tagName[1];
      if (level) {
        const int = parseInt(level, 10);
        if (int >= this._minH && int <= this._maxH) return true;
      }
    }
    return false;
  }

  /** Walk up the DOM to find the nearest heading. */
  getElementHeading(el) {
    if (!el) return null;
    const origin = el;
    while (el) {
      if (this.isHeading(el)) return el;
      // Assign the previous sibling’s last, most deeply nested child to el.
      el = el.previousElementSibling;
      while (el?.lastElementChild) {
        el = el.lastElementChild;
      }
      // Look for headings amongst siblings.
      const h = this.getElementHeading(el);
      if (h) return h;
    }
    // Walk back up the parent.
    return this.getElementHeading(origin.parentElement);
  }

  /** Handle intersections and set the current link to the heading for the current intersection. */
  setCurrent(entries) {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      const heading = this.getElementHeading(target);
      if (!heading) continue;
      const link = this._links.find((link) => link.hash === '#' + encodeURIComponent(heading.id));
      if (link) {
        this.updateCurrent(link);
        break;
      }
    }
  }

  connectedCallback() {
    const toObserve = document.querySelectorAll('main [id], main [id] ~ *, main .content > *');
    let observer;
    const observe = () => {
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(this.setCurrent.bind(this), { rootMargin: this.getRootMargin() });
      toObserve.forEach((h) => {
        observer?.observe(h)
      });
    };
    observe();

    if (!this._current) {
      let link = this._links.find((link) => link.getAttribute('aria-current'));
      if (link) {
        this._current = link;
      } else {
        this.updateCurrent(this._links[0]);
      }
    }
  }

  getHeaderHeight() {
    const headerRect = document.querySelector('header')?.getBoundingClientRect();
    let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;
     // get the width of the window 
     let viewPortRight = window.innerWidth || document.documentElement.clientWidth;

     let isTopInViewPort = headerRect?.top >= 0,
         isLeftInViewPort = headerRect?.left >= 0,
         isBottomInViewPort = headerRect?.bottom <= viewPortBottom,
         isRightInViewPort = headerRect?.right <= viewPortRight;

    // check if element is completely visible inside the viewport
    return (isTopInViewPort && isLeftInViewPort && isBottomInViewPort && isRightInViewPort) ? headerRect.height : 0;
  }

  getRootMargin() {
		const navBarHeight = this.getHeaderHeight() || 0;
    const sectionTabsHeight = document.querySelector('.section-tabs')?.getBoundingClientRect().height || 0;
		// `<summary>` only exists in mobile ToC, so will fall back to 0 in large viewport component.
		const mobileTocHeight = this.querySelector('summary')?.getBoundingClientRect().height || 0;
		/** Start intersections at nav height + 2rem padding. */
		const top = navBarHeight + sectionTabsHeight + mobileTocHeight + 32;
		/** End intersections 1.5rem later. */
		const bottom = top + 24;
		const height = document.documentElement.clientHeight;
		return `-${top}px 0% ${bottom - height}px`;
	}

  updateCurrent(link) {
		if (link === this._current) {
      return;
    }
		if (this._current) {
      this._current.removeAttribute('aria-current');
    }
		link.setAttribute('aria-current', 'true');
		this._current = link;
	}

  render() {
    return html`
      <slot />
    `;
  }
}

customElements.define('nucleus-toc', NucleusTOC);
