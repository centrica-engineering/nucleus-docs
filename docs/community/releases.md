---
description: Here are our release notes - enjoy!
---

# Release notes

## Version 1.6.0

**Download component and Irish postcode validation**

Release date - 2020-02-26

**What’s new around here 🚤**

* Download link component
* Irish postcode validation for ns-inputter

**Bug fixes 🐜**

* ns-skyline style fix for aem6
* Accessibility group fix for ns-inputter

**Improvements 🐑**

* Subset fonts
* Storybook theme
* Storybook codesandbox
* Forbidden download ns-cta icon

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌

## Version 1.5.0

**Highlighter, price and focus/warning colour**

Release date - 2020-02-17

**What’s new around here 🚤**

* To present messaging in context `ns-highlighter`.
  * 4 different types, `warning`, `error`, `success` and `info`.
* Uniformly display prices with `ns-price`.
  * Formating currency.
* Introducing a replacement colour for `@warning` and reserving the yellow for `@focus`.
  * Focus colour added that takes the previous warning colour and warning colour now has a more accessible colour.

**Bug fixes 🐜**

* Fixed IE11 includes issue.

**Improvements 🐑**

* Removed old `nds-structure` class in favour of `ndsn` wrapper class.
* Optional ignore separator for validation for `ns-inputter`.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.4.0

**Skyline, Lakeside, Masks and Separators**

Release date - 2019-12-11

**What’s new around here 🚤**

* The masked `ns-inputter`.
  * Don't be fooled by it's apparent simplicity, this is a **BIG** introduction to Nucleus.
  * The outcome of everyone's hard work on the [Meter read RFC](https://github.com/ConnectedHomes/nucleus/issues/839).
  * With the power to assist data entry such as sort codes and reference numbers.
* The Lakeside variant of our Landmark.
  * Used for conveying blocking messages e.g. 404 & 500, what we call Roadblock messages.
  * Useful as the primary component for confirmation pages.
* Introducing `ns-skyline`, a high level messaging component.
  * Notify the user of events that may affect their experience.
  * Weather warning, price changes etc.
* Adding 4 new icons to support messaging components.
  * `error`, `info`, `success`, `warning`

**Documentation 🐧**

* Details of how to use masks and separators with `ns-inputter` - https://docs.britishgas.design/components/ns-inputter#masks-and-separators
* Supporting the new additions to our component library.
  * Take a look at our documentation for `ns-skyline` - https://docs.britishgas.design/components/ns-skyline
  * Check out the best practice for `lakeside` Landmark - https://docs.britishgas.design/components/ns-landmark#best-practice-for-lakeside
* Include a summary of our Squad achievements on December 4th - https://docs.britishgas.design/community/events

**Bug fixes 🐜**

* Resolving an issue with BG-VI styles overriding form labels.

**Improvements 🐑**

* Introduce ES Lint to keep our Javascript in check.
* Adding additional icons to support `ns-skyline`.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.3.0

**Selector and Table**

Release date - 2019-11-11

**What’s new around here 🐣**

* We've simplified our [Request for change](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=RFC%2C+draft&template=b--request-a-change.md&title=%5BRFC%5D+Title+of+the+request) GitHub ticket template.
* We have included `ns-selector` in this release.
  * Enhanced radio button or checkbox group.
  * Include either an illustration or an image and additional content to support decision.
* Our first release of `ns-table`.
  * A 'vanilla first' table with responsive behaviour.
  * A table specifically for displaying data.

**Documentation 🍂**

* Supporting documentation for `ns-selector` - https://docs.britishgas.design/components/ns-selector
* Also, the initial documentation for `ns-table` - https://docs.britishgas.design/components/ns-table
* Introducing **Image guidance** and supporting image templates to our components which use an image.
  * `ns-editorial` - https://docs.britishgas.design/components/ns-editorial#image-guidance
  * `ns-landmark` - https://docs.britishgas.design/components/ns-landmark#image-guidance
  * `ns-lockup` - https://docs.britishgas.design/components/ns-lockup#image-guidance
  * `ns-card` - https://docs.britishgas.design/components/ns-card#image-guidance
* We have introduced [Stale](https://github.com/apps/stale) to add a 'stale' label to RFCs that have had no activity in the previous 14 days.

**Bug fixes 🎒**

* In `ns-accordion` we moved the aria `role="tablist"` from the ShadowDOM into the LightDOM to improve accessibility.
* Ensuring every page fills at least 100% of the viewport.
* Setting the correct alignment of `slot="heading"` when `ns-editorial` is reversed when there is no image to push the heading to the right.
* Improving the performance of `ns-inputter`.

**Improvements 🐬**

* We have added a compressed mobile version of the Superflame asset for the `summit` `ns-landmark` optimised for small screens. The original asset has been impacting our performance.
* Removed the Frontify documentation styles.
* Including the British Gas logo into Nucleus.

**Feedback 👩🏻‍🍳**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.2.0

**New components and documentation**

Release date - 2019-09-20

**What’s new around here 👾**

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

**Bug fixes 🙊**

* Ensuring that the Nucleus container `.ndsn` class fills the width of the browser.
* Resolving an issue where text within the reversed `lockjaw` Lockup was against the edge of the browser.

**Improvements 🌺**

* Creating a `gradient-colour` mixin.
* Updating the Landmark Storybook stories to better reflect the different types.
* Tidying up a few stories within Storybook.

**Feedback 👩🏽‍💻**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.1.4

**Additional components, bugfixes and improvements**

Release date - 2019-07-31

**What’s new around here 🕑**

* A Landmark variant `hillside` which is less promotional than `summit`
  * It has no image and no call to action.
* `ns-form` - The container for all `ns-inputter` components which manages the validation.
* Introducing the `select` variant of `ns-inputter` commonly known as - the dropdown.

**Bugfixes 🦋**

* Addressing an issue where the BG-VI.css anchor styles were overriding Nucleus.
* Ensuring that `ns-cta` is tabbable when not contained within an `<a>`.
* Slight change to the implementation of the CSS box model.
* Adding slot styling to the heading within the `flat` variant of `ns-card`.

**Improvements 🐶**

* Validation improvements to `ns-inputter` suppoting minLength, maxLength and isBetweenLength validations.
* Validation for radio buttons and `ns-inputter` `select` component.
* Deprecated "Key" variant from the `ns-cta` component.
* The default Landmark has been renamed from `hub` to `summit`.
* The `ns-cta` within `ns-lockup` and `ns-landmark` is now optional.
  * Choose 'none' from the 'CTA type' dropdown in the Knobs addon.

**Feedback 🦉**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.1.3

**Bugfixes and improvements**

Release date - 2019-06-24

**Sketch Library 🐳**

* Fixed broken and duplicated Components / Templates.

**Bugfixes 🏏**

* Fixed the inconsistent positioning of the accordion chevron when multiple expanders were used.
* Addressed the IE11 bug where the incorrect text colour appeared within `ns-cta` and `ns-tab`.
* Enable the position `right` for the circle decoration.
* Fix initial value overwrite in `ns-inputter`.

**Improvements 🌻**

* Removed `slot="label"` from `ns-inputter` as we use the anonymous slot.
* Improve the `ns-tabs` Storybook story.
* Include the tap illustration.
* Adding the solid and outline Energy icon.

**Feedback 🦕**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.1.1

**Something for you, you and you! 🎉**

Release date - 2019-06-11

**What’s new around here 🌶**

* `ns-inputter` - the vanilla first of our form elements.
  * Text, Email, Telephone, Password, Number, Radio, Checkbox.
  * Field-level validation.
  * Placeholder.
  * Helper text.
  * Helper details.
* `ns-video` - include a YouTube video into a lockup.
* `ns-tab` - the tab that lives within tabs.
* `ns-tabs` - include a few tab to make a tabs.

**Sketch Library**

* Release 2.0 - (Out of Pre-release).
  * Download the latest: https://github.com/ConnectedHomes/centrica-ux/releases.
* Added Guides to give indication of where components can be placed.
* Included Templates to quickly mockup a page and placing components in a layout.

**Bugfixes 🐞**

* Replace previous green outline on `ns-cta` with current yellow outline.
* Ensuring that the class of `blur` is implemented when required.
* Address the removal of `margin-bottom` on the last element.
* Improve specificity of typographic styling.
* Including robust techniques for setting attributes.

**Improvements 🌸**

* Storybook, split Playground and Foundations.
* Remove unused properties from our components.
* Setting a white background to `ns-expander` within `ns-accordion`.
* Including a variable for `@outline` colour.
* Adding the solid and outline Rewards icon.

**Collaboration 🤗**

A big thank you to everyone involved in contributing to this release!

* OAM - for their collaboration throughout this release.
* Energy Sales - for working with us to run a joint user testing session using a Nucleus coded prototype.
* New Boilers - For collaborating with us to make sure their recent journey contained Nucleus components.
* Help & Support - for their patience with the Nucleus CMS page, allowing us time to build the video component.

**Feedback 🐢**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼



## Version 1.0.0

**Our first major release! 🎉**

Release date - 2019-04-15

**What’s new around here 🌶**

**Integration with Ember Commons**
* A feature flag exists in Ember Commons to enable Nucleus.

**Sketch Nucleus Pattern Library**
* Added all available icons.
* Added Accordions.
* Added more screen sizes to each Component.

**Documentation**
* Becoming Nucleus - https://docs.britishgas.design/community/becoming-nucleus
* Best practices - https://docs.britishgas.design/community/best-practices
* Events - https://docs.britishgas.design/community/events
* Modular scale - https://docs.britishgas.design/foundation/modular-scale
* Typography sizes - https://docs.britishgas.design/foundation/typography
* Optimise your images - https://docs.britishgas.design/foundation/photography
* Our documentation - https://docs.britishgas.design
* Accordion - https://docs.britishgas.design/components/ns-accordion

**Bugfixes 🐞**

* Vertical spacing adjustments.
* Adjusting the style of the heading within our Accordion.
* Setting all Actions to be 100% width at small screen.
* Removing the duplicate BG Flame font loading.
* Fixed the hierarchy of the screen sizes in Sketch library.

**Feedback 🐳**

The following request for changes have been started

* Main navigation - https://github.com/ConnectedHomes/nucleus/issues/491
* Tab panel - https://github.com/ConnectedHomes/nucleus/issues/587
* Selection cards - https://github.com/ConnectedHomes/nucleus/issues/582
* Form fields - https://github.com/ConnectedHomes/nucleus/issues/579

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼
