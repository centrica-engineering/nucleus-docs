import { LitElement, html, css } from 'lit';

export class NucleusSectionTabs extends LitElement {

  static get properties() {
    return {
      _current: { type: HTMLAnchorElement, state: true }
    };
  }

  constructor() {
    super();

    const PAGE_TITLE_ID = '_top';
    const links = [...this.querySelectorAll('a')];

    /** Test if an element is a table-of-contents heading. */
    const isHeading = (el) => {
      if (el instanceof HTMLHeadingElement) {
        // Special case for page title h1
        if (el.id === PAGE_TITLE_ID) return true;
        // Check the heading level is within the user-configured limits for the ToC
        const level = el.tagName[1];
        if (level) {
          const int = parseInt(level, 10);
          if (int == 2) return true;
        }
      }
      return false;
    };

    /** Walk up the DOM to find the nearest heading. */
    const getElementHeading = (el) => {
      if (!el) return null;
      const origin = el;
      while (el) {
        if (isHeading(el)) return el;
        // Assign the previous sibling’s last, most deeply nested child to el.
        el = el.previousElementSibling;
        while (el?.lastElementChild) {
          el = el.lastElementChild;
        }
        // Look for headings amongst siblings.
        const h = getElementHeading(el);
        if (h) return h;
      }
      // Walk back up the parent.
      return getElementHeading(origin.parentElement);
    };

    /** Handle intersections and set the current link to the heading for the current intersection. */
    const setCurrent = (entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        const heading = getElementHeading(target);
        if (!heading) continue;
        const link = links.find((link) => link.hash === '#' + encodeURIComponent(heading.id));
        if (link) {
          this.updateCurrent(link);
          break;
        }
      }
    };

    const toObserve = document.querySelectorAll('main [id]');
    let observer;
    const observe = () => {
      if (observer) observer.disconnect();
      observer = new IntersectionObserver(setCurrent, { rootMargin: this.getRootMargin() });
      toObserve.forEach((h) => {
        console.log(h);
        observer?.observe(h)
      });
    };
		observe();
  }

  getRootMargin() {
		const navBarHeight = document.querySelector('header')?.getBoundingClientRect().height || 0;
		// `<summary>` only exists in mobile ToC, so will fall back to 0 in large viewport component.
		const mobileTocHeight = this.querySelector('summary')?.getBoundingClientRect().height || 0;
		/** Start intersections at nav height + 2rem padding. */
		const top = navBarHeight + mobileTocHeight + 32;
		/** End intersections 1.5rem later. */
		const bottom = top + 24;
		const height = document.documentElement.clientHeight;
		return `-${top}px 0% ${bottom - height}px`;
	}

  updateCurrent(link) {
    console.log('current ', link);
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

customElements.define('section-tabs', NucleusSectionTabs);
