---
description: Here are our release notes - enjoy!
---

# Release notes

### Version 1.2.0

_Release Notes 2019-09-20: New components and documentation_

#### What’s new around here 👾

* The long awaited `ns-editorial` has made it into this release.
  * Introducing a new layout `.splosh` which, at this time is exclusively for `ns-editorial`.
* We have added the ability to include a `textarea` within `ns-inputter`.
* Prototype of the Nucleus header and footer.
  * Including `ns-header` and `ns-footer`.
  * Simple `cookie-message` included.
  * Additional `nav` variant of the `ns-card`.
  * To support the header and footer, we have added `type="nav"` to `ns-panel`
  * Adding the (burger) `menu` icon.

**Documentation**

* Component `ns-editorial` - [https://docs.britishgas.design/components/ns-editorial](https://docs.britishgas.design/components/ns-editorial).
* Textarea - [https://docs.britishgas.design/components/ns-inputter#textarea](https://docs.britishgas.design/components/ns-inputter#textarea).

#### Bug fixes 🙊

* Ensuring that the Nucleus container `.ndsn` class fills the width of the browser.
* Resolving an issue where text within the reversed `lockjaw` Lockup was against the edge of the browser.

#### Improvements 🌺

* Creating a `gradient-colour` mixin.
* Updating the Landmark Storybook stories to better reflect the different types.
* Tidying up a few stories within Storybook.

#### Feedback 👩🏽‍💻

All our Requests For Change can be found under the Requests milestone in GitHub. [https://github.com/ConnectedHomes/nucleus/milestone/18](https://github.com/ConnectedHomes/nucleus/milestone/18)

Any questions? Let us know 🙌🏼

### Version 1.1.4

_Release Notes 2019-07-31: Additional components, Improvements and bugfixes_

#### What’s new around here 🕑

* A Landmark variant `hillside` designed to be less promotional, with no image and no call to action.
* `ns-form` - The container for all `ns-inputter` components which manages the validation.
* Introducing the `select` variant of `ns-inputter` commonly known as - the dropdown.

#### Bug fixes 🦋

* Addressing an issue where the BG-VI.css anchor styles were overriding Nucleus.
* Ensuring that `ns-cta` is tabbable when not contained within an `<a>`.
* Slight change to the implementation of the CSS box model.
* Adding slot styling to the heading within the `flat` variant of `ns-card`.

#### Improvements 🐶

* Validation improvements to `ns-inputter` suppoting minLength, maxLength and isBetweenLength validations.
* Validation for radio buttons and `ns-inputter` `select` component.
* Deprecated "Key" variant from the `ns-cta` component.
* The default Landmark has been renamed from `hub` to `summit`.
* The `ns-cta` within `ns-lockup` and `ns-landmark` is now optional.
  * Choose 'none' from the 'CTA type' dropdown in the Knobs addon.

#### Feedback 🦉

All our Requests For Change can be found under the Requests milestone in GitHub. [https://github.com/ConnectedHomes/nucleus/milestone/18](https://github.com/ConnectedHomes/nucleus/milestone/18)

Any questions? Let us know 🙌🏼

### Version 1.1.3 👩🏼‍💻

_Release Notes 2019-06-24: Improvements and bugfixes_

#### What’s new around here 🌶

**Sketch Library 🐳**

* Fixed broken and duplicated Components / Templates.

#### Bug fixes 🏏

* Fixed the inconsistent positioning of the accordion chevron when multiple expanders were used.
* Addressed the IE11 bug where the incorrect text colour appeared within `ns-cta` and `ns-tab`.
* Enable the position `right` for the circle decoration.
* Fix initial value overwrite in `ns-inputter`.

#### Improvements 🌻

* Removed `slot="label"` from `ns-inputter` as we use the anonymous slot.
* Improve the `ns-tabs` Storybook story.
* Include the tap illustration.
* Adding the solid and outline _Energy_ icon.

#### Feedback 🦕

All our Requests For Change can be found under the Requests milestone in GitHub. [https://github.com/ConnectedHomes/nucleus/milestone/18](https://github.com/ConnectedHomes/nucleus/milestone/18)

Any questions? Let us know 🙌🏼

### Version 1.1.1 something for you, you and you! 🎉

_Release Notes 2019-06-11: Additional components_

#### What’s new around here 🌶

_`ns-inputter`_ - the 'vanilla first' of our form elements.

* Text, Email, Telephone, Password, Number, Radio, Checkbox.
* Field-level validation.
* Placeholder.
* Helper text.
* Helper details.

  _`ns-video`_ - include a YouTube video into a lockup.

  _`ns-tab`_ - the tab that lives within tabs.

  _`ns-tabs`_ - include a few tab to make a tabs.

**Sketch Library 🐍**

* Official release _Version 2.0_ - _(Out of Pre-release)_ :star2:.
* _Download_ the latest: [https://github.com/ConnectedHomes/centrica-ux/releases](https://github.com/ConnectedHomes/centrica-ux/releases).
* Added _Guides_ to give indication of where components can be placed.
* Included _Templates_ to quickly mockup a page and placing components in a layout.

#### Bug fixes 🐞

* Replace previous green outline on `ns-cta` with current yellow outline.
* Ensuring that the class of `blur` is implemented when required.
* Address the removal of `margin-bottom` on the last element.
* Improve specificity of typographic styling.
* Including robust techniques for setting attributes.

#### Improvements 🌸

* Storybook, split Playground and Foundations.
* Remove unused properties from our components.
* Setting a white background to `ns-expander` within `ns-accordion`.
* Including a variable for `@outline` colour.
* Adding the solid and outline _Rewards_ icon.

#### Feedback 🐢

All our RFC’s can be found under the Requests milestone in our GitHub Milestones. [https://github.com/ConnectedHomes/nucleus/milestone/18](https://github.com/ConnectedHomes/nucleus/milestone/18)

Any questions? Let us know 🙌🏼

#### Collaboration 🤗

A big thank you to everyone involved in contributing to this release!

* _OAM_ - for their collaboration throughout this release.
* _Energy Sales_ - for working with us to run a joint user testing session using a Nucleus coded prototype.
* _New Boiler_ - For collaborating with us to make sure the recent journeys contained Nucleus components.
* _Help & Support_ - for their patience with the Nucleus CMS page, allowing us time to build the video component.

### Version 1.0.0 our first major release! 🎉

_Release Notes 2019-04-15: Ember commons_

#### What’s new around here 🌶

_Integration with Ember commons._

_Sketch Nucleus Pattern Library_

* Added all available icons.
* Added Accordions.
* Added more screen sizes to each Component.

_Documentation_

* Becoming Nucleus [https://docs.britishgas.design/community/becoming-nucleus](https://docs.britishgas.design/community/becoming-nucleus).
* Best practices [https://docs.britishgas.design/community/best-practices](https://docs.britishgas.design/community/best-practices).
* Events [https://docs.britishgas.design/community/events](https://docs.britishgas.design/community/events).
* Modular scale [https://docs.britishgas.design/foundation/modular-scale](https://docs.britishgas.design/foundation/modular-scale).
* Typography - Sizes [https://docs.britishgas.design/foundation/typography](https://docs.britishgas.design/foundation/typography).
* Photography - Optimise your images [https://docs.britishgas.design/foundation/photography](https://docs.britishgas.design/foundation/photography).
* Our documentation [https://docs.britishgas.design](https://docs.britishgas.design).
* Accordion [https://docs.britishgas.design/components/ns-accordion](https://docs.britishgas.design/components/ns-accordion).

#### Bug fixes 🐞

* Vertical spacing adjustments.
* Adjusting the style of the heading within our Accordion.
* Setting all Actions to be 100% width at small screen.
* Removing the duplicate BG Flame font loading.
* Fixed the hierarchy of the screen sizes in Sketch library.

#### Feedback 🐳

The following request for changes have been started

* **491 RFC - Main navigation :banana:** [**https://github.com/ConnectedHomes/nucleus/issues/491**](https://github.com/ConnectedHomes/nucleus/issues/491)**.**
* **587 RFC - Tab panel :card\_index\_dividers:** [**https://github.com/ConnectedHomes/nucleus/issues/587**](https://github.com/ConnectedHomes/nucleus/issues/587)**.**
* **582 RFC - Selection cards :female-construction-worker:** [**https://github.com/ConnectedHomes/nucleus/issues/582**](https://github.com/ConnectedHomes/nucleus/issues/582)**.**
* **579 RFC - Form fields :pencil2:** [**https://github.com/ConnectedHomes/nucleus/issues/579**](https://github.com/ConnectedHomes/nucleus/issues/579)**.**

All our Requests For Change can be found under the Requests milestone in GitHub. [https://github.com/ConnectedHomes/nucleus/milestone/18](https://github.com/ConnectedHomes/nucleus/milestone/18)

Any questions? Let us know 🙌🏼

