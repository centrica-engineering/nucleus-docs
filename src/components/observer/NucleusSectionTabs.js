import { NucleusTOC } from './NucleusTOC';

export class NucleusSectionTabs extends NucleusTOC {

  constructor() {
    super();

    this._minH = 2;
    this._maxH = 2;
  }
}

customElements.define('section-tabs', NucleusSectionTabs);
