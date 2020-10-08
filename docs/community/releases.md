---
description: Here are our release notes - enjoy!
---

# Release notes

## Version 1.18.0

**Columns and slots 🎰**

Release date - 2020/10/06

**New components 📆**

* First, we released `ns-columns`, to open up support for more column options, and we'll start with a 4-columns layout! Stay tuned for more options.

* Very excited to release this one: `ns-slot-picker` is the last piece of something big to come... pick a slot!

* We add bubbles to the manual-address event on `nsx-address-selector`

**Bug fixes 🐛**

* The _lockjaw_ version of `ns-lockup`had its layout breaking when the image failed to load.... well not anymore!


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.17.2

**Quick bug fix, don't mind us... 🙃**

Release date - 2020/09/28


**Bug fixes 🐛**

* There was an issue when firing multiple change events for radio buttons and checkboxes in `ns-inputter`... no more.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.17.1

**And the winner is ... 🏆**

Release date - 2020/09/23

**Improvement 🅰/🅱**

* We have chosen the winner of the testimonial A/B test. The winning version is the card version, and the loser is the flat version. This is now available as of today!

* We add bubbles to the manual-address event on `nsx-address-selector`

**Bug fixes 🐛**

* The values passed by the experience pattern `nsx-marketing-consent` was not consistent with the API, they now speak the same language.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.17.0

**It's not always all-inclusive**

Release date - 2020/09/16

**New feature ❌**

* we have introduced a new type of unordered list: `ul-crossed`. This style can be used to list exclusions from a product for example.

**Improvement 👂**

* We added an event on `nsx-address-selector` when a user clicks to add an address manually

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.16.5

**Computer said no to multiple values**

Release date - 2020/09/14

**Bug fixes 🐛**

* When multiple values were passed using the `ns-inputter`, it would mean that nothing was passed. We have fixed this now and made it possible.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.16.4

**A marginal update...**

Release date - 2020/09/14

**Bug fixes 🐛**

* we fixed the margin of the paragraph for the lakeside `ns-lanmdmark`


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.16.3

**A marginal update...**

Release date - 2020/09/10

**Bug fixes 🐛**

* we fixed the margin of the paragraph for the lakeside `ns-lanmdmark`


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.16.3

**We don't like rogue margins going 'round... 👀**

Release date - 2020/09/09

**Bug fixes 🐛**

* We fixed an issue where the scroll wasn't showing for a `ns-table` with a long fixed value
* We captured and exterminated a rogue margin in the `ns-landmark` if there is no CTA.



**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.16.2

**The bug goes squish! 🐜**

Release date - 2020/09/02

**Bug fixes 🐛**

* The underline from the direct link type for `ns-cta`  was visible on primary CTAs on Android devices. We fixed this.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.16.1

**Dots and dashes ┅**

Release date - 2020/08/24

**What’s new around here 👍**

**Improvements 🔨**

* We added dot and backslash as seperators for masked `ns-inputter` text inputs.

**Bug fixes 🐛**

* The validation for `ns-inputter` when entering letters in number type inputs wasn't working on IE11. This is now fixed!
* The header logo wasn't displaying correctly on the `ns-header`, it now looks wonderful.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.16.0

**Fifty shades of red! 🎈**

Release date - 2020/08/20

**What’s new around here 🚩**

**New feature 🔨**

* We added our red gradient to the to the available options


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.15.2

**All about putting labels on things this time! 🏷**

Release date - 2020/08/20

**What’s new around here 📻**

**Improvements 🔨**

* We have made the radio and checkbox labels for `ns-inputter` more consistent


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.15.1

**We had to slow down a bit, and we had a bug party! 🐌**

Release date - 2020/08/18

**What’s new around here 🐅**

**Improvements 🔨**

* The rendering of `nsx-footer` was so fast that the cookie policy/settings link didn't have time to check for the presence of the OneTrust script to display the right link. We tamed it a little to allow time for the right link to be populated.

**Bug fixes 🐛**

* The default value of `ns-inputter` was not as expected (when child input has value="0"). This is now fixed
* The message "Scroll for more information" was diplaying when no there was no scroll on `ns-table`. This is also fixed
* There was on overlap of the CTA over the Section type of `ns-card`, no more!
* When printing from a desktop device, we were using the mobile view. It now prints the desktop view.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.15.0

**Exciting news, our custom branded calendar is now ready! That's right! It's been a huge piece of work. It's probably the best looking and most accessible calendar that we ever built.**

Release date - 2020/08/10

**What’s new around here 💫**

**New component 🗓**

* `ns-calendar` is now released. It will enable users to pick a day, and can display current date, selected date, unavailable dates. And it is fully accessible. 


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.14.2

**Improving our address selector and a small bug fixes to improve accessibility**

Release date - 2020/08/06

**What’s new around here 🗝**

**Improvements 🔨**

* We made small changes to the manual address capture for the `nsx-address-selector`


**Bug fixes 🐛**

* We fixed the tab lock for `ns-expander`. This means that users won't be stuck on the first expander when navigating with their keyboard.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.14.1

**We have released some accesibility improvements on our accordion and squished a few bugs**

Release date - 2020/07/28

**What’s new around here 🎸**

**Improvements 🔨**

* We removed `tablist` from accordion to improve keyboard navigation and make the `ns-accordion` more accessible so it comes up on screen readers correctly.


**Bug fixes 🐛**

* we fixed an issue where `nsx-address-selector` was scrolling sideways on validation error
* We fixed an issue where `ns-panel` did not support more than two rows on IE11
* `ns-form` spacing issue between selectors in IE11 is now fixed



**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.14.0

**We are excited to announce the release of a component we have been working hard on: the product card!**

Release date - 2020/07/20

**What’s new around here 🎴**

* You can now use the `ns-product-card` to enable users to browse, compare and choose a product. You can find out how to use it [on our documentation](https://docs.britishgas.design/components/ns-product-card)

**Improvements 🔨**

* `nsx-` experience patterns are now inheriting styles


**Bug fixes 🐛**

* `nsx-address-selector` and `nsx-marketing-consent` were too wide on mobile screens, and we fixed this issue

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.13.0

**Adding new form validations**

Release date - 2020-07-13

**What's new around here? 🛶**

* We've added password and full name validation

**Bug fixes 🐛**

* `ns-inputter` first name and last name validation now accepts a broader range of characters (including accents)
* `ns-inputter` storybook snippets now include `id` and `for` attributes
* We Updated `nsx-address-selector` and  `nsx-marketing-consent`  to use the new form submit event

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌


## Version 1.12.0

**Improving the accessibility of our forms**

Release date - 2020-06-25

**What's new around here? 🛶**

* We've added a new feature to `ns-form` that allows users to press enter to submit a form
* We've also added a new javascript `submit` event that gets dispatched for each submission attempt

**Bug fixes 🐛**

* `ns-editorial` bold can now be used in lists
* `ns-cta` and `ns-inputter` label widths have been narrowed
* `ns-cta` is now full width below device widths of 320px
* We fixed a copy error on `nsx-marketing-consent`
* The `nsx-address-selector` was not dispatching an event on "Change Postcode" and other errors. This is now fixed.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌


## Version 1.11.0

**Introducing the Datepicker and fixing a few bugs**

Release date - 2020-06-10

**What's new around here? 🛶**

* We've been working hard to create a solution that allows customers to select a date. The first iteration of `ns-datepicker` allows users to manually enter a date, or utilise their native browser calendar. 
* We're developing a bespoke `ns-calendar` capability right now, in future this will form part of the next iteration of `ns-datepicker`
* We added new links to `nsx-header`
* We now allow users to enter an address manually using `nsx-address-selector`


**Bug fixes 🐛**

* `ns-landmark type="lakeside"` alignment fix; you should see better left alignment in functional journeys now, where `ns-landmark` is used.
* `ns-lockup` illustration placement fixed in `type=locknut`; when you use lots of content in the `type=locknut`, the illustration will display in the right place.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌

## Version 1.10.0

**The all new Footer, an improvement to our Inputter and 5 bugs squashed**

Release date - 2020-06-03

**What's new around here? 🛥**

* The `nsx-footer` (experience pattern) has been updated beyond proof of concept in storybook. This will be the primary choice footer across the majority of the site, replacing the existing footer on CMS pages and many app screens. It looks nicer and performs better, what a result.😁
* We added `ignoreSeparator` knob in storybook for `ns-inputter`.

**Bug fixes 🐞**

We had a number of bugs to squash, thanks for spotting them! 

* We resolved the `ns-caveat` link size issue, which was making the link tiny or MASSIVE.
* In the `ns-landmark` the BG-VI css is no longer overriding paragraph style.
* In the `ns-expander` the BG-VI css is no longer overriding heading style.
* We've made validation messages on `ns-inputter` more user friendly.
* We fixed the overlap in download app images and britishgas logo text in `ns-footer` for IE11.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌


## Version 1.9.0

**ns-download in ns-form and A/B test designs for ns-testimonial**

Release date - 2020-05-04

**What's new around here? 🛥**

* When `ns-download` is used in `ns-form`, files now open in a new tab (if the browser can display the file type).
* New designs for `ns-testimonial` that will be A/B tested.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌


## Version 1.8.0

**Multiple download links, new illustrations, testimonials and more**

Release date - 2020-04-23

**What's new around here? 🛥**

* Multiple download links
  * First we created a standardised way to download documents. Now we've extended that to handle multiple documents in way that that helps the user find what they're looking for.
* Our illustration suite has expanded based on your feedback.
  * 6 new illustrations have been added, and can now be used to decorate pages:
  * `boiler-repair`, `dual-fuel`, `electric-vehicle`, `engineer`, `help`, `savings`
* Version 1 of our `ns-testimonial` component, born out of a successful AB test.
  * Use this to display positive customer feedback. Watch out for its evolution in our next release.

**Bug fixes 🐞**

You brought a couple of accessibility defects to our attention recently, and we've work hard to solve what turned out to be tricky problems. You'll now see:

* Better colour contrast of the placeholder text on the `ns-inputter`.
* Better colour contrast of the mask text on the `ns-inputter`.

**Improvements 🐑**

The design system is constantly evolving, that means improving what we have as well as adding something new. In this release we:

* Added syntax highlighting in html snippets to improve the Storybook experience.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌

## Version 1.7.0

**Label and Data**

Release date - 2020-04-02

**What’s new around here? 🚤**

* Label and Data - description list classes that can be used to present labelled content.

**Bug fixes 🐜**

* We've fixed a missing paragraph margin in the landmark component
* Textarea font size now matches other inputs

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌

## Version 1.6.0

**Download component and Irish postcode validation**

Release date - 2020-02-26

**What’s new around here? 🚤**

* Download link component.
  * A standardised way to download from our site, paying special attention to  the experience of our customers using screenreaders.
* Irish postcode validation for ns-inputter.
  * Improving the inputter to ensure customers across all of our markets have the same great experiences.

**Bug fixes 🐜**

* ns-skyline style fix for aem6
* Accessibility group fix for ns-inputter

**Improvements 🐑**

Some of the biggest improvements we've made have come from our community.

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

**What’s new around here? 🚤**

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

**What’s new around here? 🚤**

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

**What’s new around here? 🐣**

* We've simplified our [Request for change](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=RFC,+draft&template=b--request-a-change.md&title=[RFC]+Title+of+the+request) GitHub ticket template.
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
* Best practices - https://docs.britishgas.design/getting-started/best-practices
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
