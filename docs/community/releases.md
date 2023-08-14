---
title: Release notes
description: Here are our release notes - enjoy!

---


## Version 2.9.0

**Navigation updates mainly 🧭**



Release date - 10/05/2023


**Improvements 💡**

* `nsx-product-card-overview` - You can now set the default excess using the new 'initial-excess' attribute.
* `nsx-header` - Updated some links in the navigation header
* `nsx-footer` - Changed the Play Store/App Store icon links to point to the new mobile app content page 



## Version 2.8.0

**One file to bring them all 💍**

With this release, no more calling two separate files to have components and Nucleus Experiences on your page. It all comes in the same unique file from now on. As a famous meerkat would say: "Simples!"

Release date - 12/04/2023


**Improvements 💡**

* We moved all `nsx-` components to the main file, to simplify their consumption
* `nsx-footer` - Updated 'Complaints performance' to 'Complaints' in footer links
* `nsx-footer` - Removed 'Performance standards' link

**Bug Fixes 🪲** 

* `ns-card` and `ns-landmark` - fixed issue with 'pilloverimage' option
* `ns-timeline` - removed status knob from the step variant on storybook
* Fixed an issue with icons on components using the react wrapper

## Version 2.7.0

**The alternate timeline 🕰️**

A new timeline variant is now available. The 'step' variant is a simplified version of the component, that has no colours, no statuses. It allows for simpler successions of events to be displayed.

Release date - 14/02/2023

**New features 🔄**

* `ns-timeline` - new 'step' variant available

**Improvements 💡**

* `ns-product-card` - we changed the size of the pricing
* We improved the downloading and caching of SVGs in Firefox
* `nsx-product-card-overview` - Reduced font size for the month suffix in the pricing area 

**Bug Fixes 🪲** 

* `ns-header` - we fixed a horizontal scroll issue in Safari
* `ns-landmark` - we fixed the alignment with the panel
* `ns-image` - we fixed the corners to be rounded in Safari
* `ns-header` - the focus state for links has been fixed 
* `ns-card` - fixed the image border radius
* `ns-card` - we fixed the card image background for the `support` type

## Version 2.6.0

**Fresh it's so fresh! 🥶**

This release sees all the refreshed components going live, delivering the brand refresh to all our customers. We say goodbye to the 2018 brand identity and hello to the new one!

You can now see all the updated components reflecting the new brand identity.
Good work to all involved!

Release date - 02/02/2023

**New features 🔄**

* Brand refresh applied to the entire system (components, docs, Figma library)
* `nsx-product-card-overview` - we introduced monthly primary and secondary price variations for the product card overview

**Improvements 💡**

* We refreshed the entire system to reflect the updated brand visual identity. (We won't list all individual changes as there would be too many)
* `ns-landmark` - we have reviewed the alignment of the lakeside type to be more coherent with the rest of the website's content alignment
* We added the new font files for the brand refresh

**Bug Fixes 🪲** 

* `ns-appointment-picker` - after this fix, the default value will be selected as expected
* `ns-appointment-picker` - the change event wasn't triggered when selecting a date, it is now fired as expected
* `ns-inputter` - used bind to correctly set 'this' on 'formatInput' to fix unit tests when used in the react wrapper
* `ns-header` - fixed the 'classlist' issue
* `ns-appointment-picker` -  we removed a console.log
* `ns-lockup` - the attribute 'reversed' has been changed to 'reverse' in the storybook knob to reflect the actual attribute name

## Version 2.5.0

**I am root! 🌳**

You can now skip subdomains on the header logo.
This will be helpful when different experiences sit on different subdomains and we want to keep the same behaviour: linking to the main domain.

Release date - 23/11/2022

**New features 🔄**

* `ns-header` - added a new attribute 'skip-subdomain' to specify a subdomain to be ignored in the logo link.

**Improvements 💡**

* `ns-pill` and `keyline` - added new colours
* `ns-header` - we moved the overview/level1 link to the top of the panel, and added 4 columns for the sub-navigation panel links
* `ns-header` - Level 2 subheadings are now clickable
* `ns-landmark` - we added the 16x9 ratio for the valley type, to help getting content higher up, especially on mobile devices.
* `nsx-header` - Updated the Boiler overview link
* `nsx-header` - Point the 'Repairs overview' link to the new repairs hub page

**Bug Fixes 🪲** 

* `ns-header` - there was a focus issue on the logo. No more
* `ns-card` - there was an issue with the `pilloverimage` option where the pill wasn't moving over the image. This is now fixed
* `ns-header` - we fixed the click event
* `ns-header` - the panel is closed when a link is clicked
* Fixed a scrolling issue in Safari
* `nsx-address-selector` - fixed an accessibility issue: now pressing the ENTER key on change postcode will work


## Version 2.4.0

**It's in your head 👤**

There  have been a fair amount of changes in the primary and secondary levels of the navigation. As a result, we are also changing our mobile navigation to also be applied to the `basketball court` (< 1079px) as there are now more items in the primary level. 

Release date - 13/09/2022

**Improvements 💡**

* `ns-header` - mobile version of the header will be displayed for basketball court
* `nsx-footer` - Added 'Energy' and 'Website terms and conditions' separately in the footer.
* `nsx-header` - Updated header primary and secondary links


**Bug Fixes 🪲** 

* `ns-inputter` - there was a spacing issue when using the inline inputter, no more. 


## Version 2.3.0

**Space, the final frontier... 🪐**

This release is all about space. 
The final design token piece of work, and probably some of the most complex work we've done on Nucleus, is the spacer work. We have audited the spacing options we have introduced and used over the course of the last three years. 

We have been working hard to update the spacing technique to something that complements today's state of Nucleus but also allows for the *tokenisation* of spacing and allows for scaling to other brands than British Gas.

Release date - 2022/08/31

**New features 🔄**

* `ns-inputter` - We added an inline styling option for radio and checkbox inputters

**Improvements 💡**

* `ns-header` - We added click events for anchor links in the header
* `ns-highlighter` - Size of the highlighter inside dl is fixed
* `ns-header` - Moved the login link up in the mobile viewports
* `ns-download` - Included filetype attribute to the component to use the href without filetype
* `ns-selector` - We made the description slot optional for a selector with an image
* `ns-video` - We added a lazy loading attribute to the placeholder image (the *façade image*)
* `ns-table` - We improved the font size when there is a longer piece of text in the cell
* We added the MarkPro font as an option for selected locations (H1 in landmark/lockup)
* `ns-form` - We have improved the validation approach for `ns-password` and a few variants of `ns-inputter`
* `ns-expander` - A custom event for the click on `ns-expander` has been added
* `ns-cta` - We improved the spacing for the direct call to action
* We deleted unused margin and padding declarations from spacing.less
* `ns-calendar` - We increased the outline offset in the calendar dates to make the selected date visibly different to other states (making it more accessible for high contrast mode)
* `ns-inputter` - you can now use the `pattern` and `title` attributes for an `ns-inputter` for validation (and override an error message with the value of the `title` attribute)
* `<ol>` tag will support `start` and `reversed` attributes now
* We made some changes to allow our components to be used natively in React
* `ns-inputter` - `isPhoneNumber` validation will accept 10 digits as well going forward
* Created a React component wrapper, they now work in React without an external dependency
* We added download to `index.js`
* Updated to PaDL 2 (2.0.1-alpha.8)
* `nsx-address-selector` - Fixed the space between the `Find address` call to action and the `Enter manual address` call to action
* `nsx-footer` - Added SafeSpaces plugin to the footer
* `nsx-header` - Updated ReciteMe endpoint
* `nsx-footer` - Added  link to the Priority Service Register page
* `nsx-footer` - Removed `British Gas Evolve` link from footer
* We updated the media object to use spacer names as gutters rather than numbers
* `ns-header` - Added `no-root-link` attribute to change logo navigation to have no link on partnership pages
* `ns-landmark` - Removed the vertical spacing at the bottom of the card within the valley
* `ns-password` - you can now customise the copy for the labels
* `ns-product-card` - We updated the styling for was/now strikethrough on prices
* `ns-video` - We added a "statechange" event for tracking video playbacks

**Spacing technique ⇥ ⇤**

***This work is about improving our approach to spacing, and make it better suited for design tokens and multiple brands.***

* `ns-tab` - Spacing technique has been improved
* `ns-pill` - Spacing technique has been improved
* `ns-expander` - Spacing technique has been improved
* `ns-column` - Spacing technique has been improved
* `ns-testimonial` - Spacing technique has been improved
* `ns-fieldset` - Spacing technique has been improved
* `ns-calendar` - Spacing technique has been improved
* `ns-panel` - Spacing technique has been improved
* `ns-download` - Spacing technique has been improved
* `ns-card` - Spacing technique has been improved
* `ns-datepicker` - Spacing technique has been improved
* `ns-inputter` - Spacing technique has been improved
* `ns-table` - Spacing technique has been improved
* `ns-highlighter` - Spacing technique has been improved
* `ns-skeleton` - Spacing technique has been improved
* `ns-landmark` - Spacing technique has been improved
* `ns-appointment-picker` - Spacing technique has been improved
* `ns-form` - Spacing technique has been improved
* `ns-caveat` - Spacing technique has been improved
* `ns-product-card` - Spacing technique has been improved
* `ns-content` - Spacing technique has been improved
* `ns-selector` - Spacing technique has been improved
* `ns-lockup` - Spacing technique has been improved
* `ns-editorial` - Spacing technique has been improved
* `ns-password` - Spacing technique has been improved
* `ns-standout` - Spacing technique has been improved
* `ns-live` - Spacing technique has been improved
* `ns-timeline` - Spacing technique has been improved
* `ns-tabs` - Spacing technique has been improved
* `ns-header` - Spacing technique has been improved
* `ns-footer` - Spacing technique has been improved
* `ns-progress` - Spacing technique has been improved
* Headings, Paragraphs, and lists - Spacing technique has been improved




**Bug fixes 🪲**


* `ns-password` - There was an issue when editing a password by changing characters in the middle of the string. No more!
* `ns-product-card` - There was an issue with an invalid keyline. No more!
* `ns-panel` - Horizontal scroll issue when using `circle-right` decoration in Safari is fixed
* `ns-inputter` - Fixed a Chrome crash in Android when entering a value
* `ns-inputter` - White space at the start/end of `ns-inputter` will be trimmed to avoid dirty data to be validated/submitted
* `ns-progress` - dynamic values were not accepted in the `current` attribute, it is now fixed
* `ol-numbered` - We fixed a numbering issue when `<ol>` is used in the page and has nested `<ol>` items inside `<dl>`
* Nucleus loading issue hotfix
* `ns-inputter` - Separator cursor issue has been fixed
* `nsx-address-selector` - Triggering the manual address form using the ENTER key is now allowed
* `ns-live` - Fixed the busy state in `ns-live`` component
* `ns-header` - in-app viewport size fixed
* `ns-image` - Image overflow in card has been fixed (safari)
* `ns-header` - Passed the header and subheader information to the event for click
* Fetch svg fix





**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 2.2.0

**{Jedi hand gesture 👋} This is the highlighter you are looking for...**

It's no secret, we have been misusing `ns-highlighter` almost from its inception. And you know what? This was on us. We didn't choose the right name. And because we highlighted (pun intended) those misuses so often, we felt an obligation to correct our mistake. 

Introducing `ns-standout`!
As it says on the tin: this component is here to make a piece of information on your page. A phone number, opening hours, a note, a contest, important-to-read mentions, a big fact, you name it. If it needs to stand out, it's a job for `ns-standout`.

First release comes with a "subtle" version, and we are working on a stronger version, but need to tweak our gradients to make it accessible. Watch this space!

In the meantime, [learn everything about `ns-standout` in the documentation!](https://nucleus.design/docs/components/ns-standout)


Release date - 2021/08/18

**New features 🔄**
* `ns-standout` - A component to make a piece of content stand out on a page


**Improvements 🤹‍♂️**

* GitHub action has been added to create GitHub packages for reducing release risk
* `ns-inputter` - There was an invalid state on inputs before interaction on screen readers. This is now fixed
* `ns-live` - We changed the function name so it's not the same as the property to avoid confusion
* We removed the Storybook shortcuts as they were conflicting when typing something in the text fields of the knobs as you configure a component
* `ns-password` - `isRequired` validation added for confirm password
* `ns-video` - We added a façade to improve the performance of the page and only load the video if user shows intent to play it
* `ns-live` - We added reflect for the `busy` property
* `ns-header` - We update the `<button>` tag instead of `<div>` for better accessibility
* We made Google Chrome use `styleSheet` instead of `adoptedStyleSheets` to avoid the issue in `next.js` routing
* `nsx-header` - Updated `Smart home` to `Smart home & EV`
* `nsx-footer` - Added link `Responsible disclosure`





**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 2.1.0

**Loading...**

It can sometimes take some time to give an updated piece of information because we need to get it from the backend. And we want to tell our users that we are busy retrieving the latest information for them. Well, we have that covered now! We also refreshed the editorial component, removed an old layout, and fixed a few bugs.

Release date - 2021/07/14

**New features 🔄**
* `ns-live` - This is a new component you can use when updating a piece of information on the back of an action (for example: changing the excess amount will update the quoted price). If your app needs to wait for a response from the micro-service, you can show a loading state while users wait for the outcome of their action


**Improvements 🤹‍♂️**

* `ns-editorial` - We have improved the typography styles of the editorial component. Those were pretty old now and dated from the early times of Nucleus. The editorial is now more in line with other components 
* `ns-illustration` - The WhatsApp logo is now available in the illustration options
* `ns-panel` - We removed the `splosh` layout


**Bug fixes 🪲**

* `ns-datepicker` - There was a small issue with the focus state of `select a date`. This is now fixed
* `ns-inputter` - Setting value attribute in inputter did not show the selected border of the `ns-selectors` contained in `ns-inputter`. This is now fixed
* `ns-table` - Table scrolling is fixed in smaller viewport (when you don't use div element inside `ns-panel`)





**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 2.0.0 🎉

**Goodbye dear Internet Explorer 👋**

You can see it in the version number. Something big enough to jump from 1.x to 2.0!
We have stopped supporting Internet Explorer 11 (and Edge 18). 
For the last few months, we have been encouraging the last remaining users of the British Gas website (less than 1% of all visits) to upgrade their browser to something more modern. And we have been monitoring analytics closely to decide stopping support for IE11.  

This means we are now able to save the time we used to spend to make sure components were compatible, and re-focus that time towards a better use. This also enables new possibilities, and more modern solutions to the problems we solve.


Release date - 2021/07/06

**Bug fixes 🐞** 

* `ns-landmark` - When the image in a summit landmark didn't load quickly, it collapsed the landmark for a brief moment, pulling more content above the fold and potentially increasing first content paint time. That had an impact on our page performance scores. This is now fixed
* `ns-password` - Toggle issue using ENTER key in show/hide password fixed
* `nsx-footer` - Added `British Gas Evolve` link



**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼



## Version 1.33.0

**Timeline ↦ ↦ ↦**

We are super excited to release this new component. The ns-timeline allows you to detail the steps in a journey, show the status of each of them with supporting information. It's highly configurable and works perfectly for confirmation pages, status updates, and similar steps in a customer journey. Communicate progress clearly and easily!

We have also continued the work on unlocking Nucleus for multiple brands and conducted a stress test with the Bord Gáis brand and it's looking promising! 

Get in touch if you want to know more.



Release date - 2021/06/24

**New features ⏱**

* `ns-timeline` is a component that shows the steps in a user journey and their status.

**Improvements 🤹‍♂️**

* `ns-cta` and `ns-card` - improved shadows: we have changed our method to render shadows, making them a little bit more visible and modern
* `nsx-header` - Disabled magnifier lens in recite me toolbar
* Nucleus experiences will no longer load `style.min.js` in Google Chrome when it's not needed

**Multibrand enablement and design tokens ☘️**


* Fixed accessibility issue that we are having with JAWs screen reader
* Improved landmark to help with page performance
* Used tokens to apply Bord Gáis branding to the tabs
* Made SVG URL configurable through tokens
* Tokens adjusted for Bord Gáis form elements
* Changes made to use tokens to change the background colour of the page




**Bug fixes 🐛**

* `ns-card` - Long direct CTA content clashed with section type cards. This is now fixed.



## Version 1.32.0

**Spacing and tokens ↔**

In this release, further work on design tokens, to allow more brands to consume Nucleus. We have also added a way to have different spacing on `ns-content` depending on the kind of content you are putting in it, as well as starting to work on our shadows to make them more modern and visible on high contrast settings.

Release date - 2021/06/03

**New features 🖋**
* `ns-content` - You now have a space attribute for the component that allows you to choose: make it compact, cozy, normal, or loose

**Improvements 🤹‍♂️**

* `ns-price` - Different currencies now allowed for ns-price
* `ns-card` - Improved shadow visibility by adding a light border to the card. This will make it more visible on screens with a high contrast setting
* `ns-image` - Improved the lazy loading of thumbnails
* `ns-skeleton` - Testimonial content width is increased to 100% to fit the component
* We have added page examples on the page type documentation under the *Examples* section for each of them
* Added an IE stylesheet for link styles




**Multibrand enablement and design tokens ☘️**

* `ns-calendar` - Added typography tokens
* `ns-datepicker` - Added typography tokens 
*  Bord Gáis header




**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.31.0

**Skeletons 🦴**

Skeletons are here! If you have content that is a tad slow to load, but still fast enough not to block the rendering of a page, these are for you! In a movie smart skeletons could be scary, but here they're a helpful hand!

Release date - 2021/05/20

**New features 🏁**
* `ns-skeleton` is a component that can be placed into other components if we expect content to take a short time to load. It reacts to its parent and knows exactly how to behave and replaces the content with animated shimmering bars. We recommend that ns-skeleton be used for content that takes up to 5 seconds to load. The element is used as a placeholder to be replaced with your content once it has loaded.
[Learn more about it here](https://nucleus.design/docs/components/ns-skeleton).

**Improvements 🤹‍♂️**
* `ns-card` - there was a `ns-pill` issue when used inline in cards, where it rendered a space at a specific viewport (hockey-pitch). This is now fixed
* `ns-header` - link being treated as a button is fixed
* `nsx-header` - ReciteMe was duplicating components when loading their magnifier. We have patched this
* We have made a few changes to allow ReciteMe to work properly.


**Multibrand enablement and design tokens ☘️**

* Stress testing design tokens - Bord Gáis `ns-lockup` (type="lockbox")
* Stress testing design tokens  - Bord Gáis `ns-landmark` (type="summit")
* Stress testing design tokens - Bord Gais `ns-cta`
* `ns-inputter` - Added typography tokens
* `ns-slot-picker` - Added typography tokens
* `ns-cta` - Added typography tokens
* `ns-content` - Added typography tokens



**Bug fixes 🐛**

* `ns-password` - `ns-form` did not recognize `ns-password` when submitting the form hitting the enter key. This is now fixed
* `ns-lockup` and `ns-landmark` - paragraph fonts in Safari were slightly inconsistent. They are fixed
* `ns-card` - the card background wasn't rendering at a specific viewport (basketball). This is now fixed.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.30.0

**Progress 👣**

*"We can only see a short distance ahead, but we can see plenty there that needs to be done."*
This is what Alan Turing said about making progress and knowing what is left to achieve. We thought it was a great way to introduce our brand new `ns-progress` component. Showing progress and setting expectations is a great incentive to complete a complex task. This is what we want to enable with this release. That, and bug fixes, improvements and further work on design tokens!

Release date - 2021/05/06

**New features 🏁**
* `ns-progress` enables you to show progress throughout a task. Wether it's short and easy or long and complex, you can set an expectation bny showing how many steps there are, where a user stands, and what's left and coming next. The component is very flexible and easy to setup, all the way to its completed state! [Learn more about it here](https://nucleus.design/docs/components/ns-progress) or [give it a go in Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-progress--standard).

**Improvements 🗓**
* `ns-datepicker` - We improved the focus on the inputter when inline validation triggers an error for a missing date and focuses back on the datepicker
* `ns-datepicker` - We moved the dialog outside of shadowroot, for display improvement in context of other components.

**Multibrand enablement and design tokens 🪙**

* `ns-selector` - Added typography tokens
* `ns-tabs` - Added typography tokens
* `ns-table` - Added typography tokens
* Stress testing our design tokens: Added Bord Gáis colour foundations



**Bug fixes 🐛**

* We separated *fetch* and *polyfill fetch* to fix avoid tests and builds failing in Dev environments
* `ns-table` - a bug where the download icon flowed over the fixed column of the table is now fixed
* 'ns-lockup' - a bug where the lockup which was not locking to the sides in smaller viewport is now fixed



**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.29.0

**✔ 8 characters long, with letters and numbers**

In the previous release, we introduced a new `ns-password` component that covered entering an existing password. This release brings you the second half, that is actually maybe bigger than the first half: it's all about creating a new password, and making that experience easier! Oh, and we also added expanders to `ns-selector` and continued with our design token work.
Meanwhile, NASA flew a helicopter on Mars. No big deal!

Release date - 2021/04/19

**New features ᐧ ᐧ ᐧ ᐧ**
* `ns-password` now also allows to create a new password. It features a show/hide interaction, inline validation with criteria being validated visually  to help users match the minimum requirements as they go and know what they're missing, as well as positive reinforcement in the messaging. Give it a go [in the component library](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-components-ns-password--confirm-password)!

**Improvements 🖋**
* `ns-selector` - you can now ad expanders to `ns-selector`


**Multibrand enablement and design tokens 🪙**

* `ns-pill` - Added typography tokens
* `ns-header` - Added typography tokens
* `ns-product-card` - Added typography tokens

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.28.0

**Tokens, tokens, tolkens 🪙🪙🪙 (oh, and passw ᐧ ᐧ ᐧ ᐧ!)**

Last release, we set the groundwork to start lifting the brand layer off of our components, and store those styles in tokens. Well, in this release, things are definitely in motion. We also have released the first half of a brand new password component, as well as a overview experience for the product cards. Read all about it below!

Release date - 2021/04/08

**New features ᐧ ᐧ ᐧ ᐧ**

* `ns-password`: a brand new password component is now available, and it's called `ns-password`! This is the first of two releases and allows the capture an existing password. Stay tuned for the password creation side of things! (The documentation will be released with that part of the component)
* `nsx-product-card-overview`: this Nucleus Experience is an interaction that allows users to get an overview of a series of products, change a parameter (choosing an excess amount for example) and see the impact on the product without having to reload the page. 


**Improvements 🖋**
* `ns-content` can now be consumed by *any* (most) component(s)

**Multibrand enablement and design tokens 🪙**

* `ns-testimonial` - Added typography tokens
* `ns-appointment-picker` - Added typography tokens
* `ns-calendar` - Added typography tokens
* `ns-fieldset` - Added typography tokens
* `ns-highlighter` - Added typography tokens
* `ns-lockup` - Added typography tokens
* `ns-landmark` - Added typography tokens
* `ns-expander` - Added typography tokens
* `ns-skyline` - Added typography tokens
* `ns-card` - Added typography tokens
* `ns-download` - Added typography tokens
* `ns-footer` - Added typography tokens
* `ns-editorial` - Added typography tokens
* `ns-accordion` - Added typography tokens



**Bug fixes 🐛**

* `ns-lockup` - override font size fix
* `ns-datepicker` - the calendar clashed with its surroundings in some scenarios. This is now fixed (first solution is content is pushed to allow calendar to open, a second more refined improvement is coming)
* `ns-article` - table alignment issue fixed


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼



## Version 1.27.0

**Getting ready for Spring! 🌷**

Spring is around the corner, but we already started our Spring cleaning! We are currently working towards the removal of the brand layer from the components, to allow non British Gas brands to use our design system! 
We also added a feature to the Selector, improved and fixed a few things!

Release date - 2021/03/16

**New features 🔘**

* `ns-selector` can now be decorated with a keyline to colour-code or highlight elements!


**Improvements 🏵**
* Decorations can now be used with Nucleus Experiences (`nsx-`)
* `ns-header` released some small visual improvements
* Sharable foundations through `nucleus-util` repo
* `ns-inputter` - You can now match a text type inputter and the password type inputter using the *autocomplete* attribute


**Multibrand enablement and design tokens 🪙**

* Colour: we enabled the foundation alteration via tokens
* Javascript: we enabled the foundation alteration via tokens
* Typography: we enabled the foundation alteration via tokens
* Typography: we applied design tokens to `h` tags, `h` classes and `p` classes
* `ns-caveat` - typography styles moved to design tokens.


**Bug fixes 🐛**

* `ns-pill` - caveat colour fixed in EDGE 18
* `ns-form` had an offset width on the call to action. This is now fixed
* `Storybook` had an issue in the grey and green decorations for `ns-panel`. This is now fixed
* We updated catch section to address localhost CORS failure
* `ns-illustration` - There was an error message displaying for an undefined illustration (no illustration name specified). This is now fixed
* `ns-card` - *aria-label* in card nav type was causing an accessibility issue. This is now fixed
* `ns-editorial` - Heading misalignment with paragraph in IE11. This is now fixed
* `ns-header` - The clickable target area for the logo was wider than expected. This is now fixed.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.26.0
**A whole lotta love .. and new shiny things!! 🥳**

This is the first release after 2 months of code freeze. A lot of new things to discover!
Happy New Year! (these wishes were waiting to be released too)

Release date - 2021/02/04

**New features ✍️**

* `ns-content` & `ns-article`: these 2 components are the core of the new editorial content rendition. They will enable you to display long form content, enriched with images and video, as well as the usual typographic styles
* `ns-datepicker`: we have added the calendar to our datepicker. It is now opening our `ns-calendar` except on touch devices where we open the native calendar
* `ns-inputter`: we have added a search variant
* `ns-column`: you can now have ratio layouts using columns
* `ns-illustration`: we have added a `yellow-shield` to illustrate COVID-aware messages
* `ns-icon`: we added the `search` option, a magnifier lens
* Multi-brand capability: we have released the foundation of what will enable us to open Nucleus to more than one brand 
* We upgraded Storybook to version 6
* We added analytics to Storybook to understand its usage.


**Improvements ✱**

* `ns-panel`: we made some small layout changes
* `ns-caveat`: you can now add a `<p>` to a caveat, without the need of a number. This allows you to have a generic footnote on a page
* We converted the es6 tokens to cti format. 


**Bug fixes 🐛**

* `dl-row`: we made the border visible for mobile
* `ns-landmark` We fixed a double tab issue in the `ns-cta` insite the landmark. This will improve tab navigation
* We fixed some PaDL issues.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.25.0

**Did you take that pill? **

Release date - 2020/12/03

**New feature 💈**

* You can now use pills with the `ns-inputter` `checkbox` and `radio button` to highlight something special about those options.


**Improvement 📖**

* Documentation: we removed the pills and make the default style of component names without the pill in Storybook.

**Bug fixes 🐛**


* Paragraph spacing of custom slots are fixed which fixes `nsx-marketing-consent`
* `ns-inputter`: editing values in separator will not move the cursor to the end anymore
* Fixed the console error in the Valley variant of the `ns-landmark`.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.24.0

**It's all in your head(er)**

Release date - 2020/11/24

**New feature 💈**

* You can add `ns-pill` to a `Valley` variant of `ns-landmark`to highlight a promotion, or special theme
* You can also add `ns-pill` to the `ns-selector` to highlight a promotion or theme to help customers make an informed choice.


**Improvement 📖**

* We have made a few changes to `ns-header` to manipulate header links using attributes and also included the Accessibility tools link to trigger and open the [ReciteMe toolbar](https://reciteme.com/).

**Bug fixes 🐛**


* ns-inputter - we made all validations optional if `isRequired` is not used
* ns-landmark - Google have now released a fix that addresses the `ns-landmark` display issue. It is available for their latest Chromium version(87). We have been looking at adoption rates of our customers so a majority have the latest version. This release removes the temporary fix.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼




## Version 1.23.0

**Take a pill 💊**

Release date - 2020/11/18

**New components 👏**

* `ns-landmark` has a new variant! The `Valley` landmark features a flat card the usual content (heading/sub-heading/paragraph/call to action) with an illustration image. It a half-way house between a landmark and a lockup.

* `ns-pill` placement on the `ns-card`: you can now use the pill on cards to highlight a promotion or discount!



**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.22.0

**Take a pill 💊**

Release date - 2020/11/12

**New components 👏**

* `ns-pill` is a merchandising component that will enable teams to add a commercial message that will grab a user's attention (example: discounts or free stuff campaigns)
* A variant of the `ns-expander` that has a yellow accent background, to visually grab a users attention to it (to add cmapaign details on a `ns-product-card` for example).

**Bug fixes 🐛**

* We made the validation on `ns-datepicker` optional
* We fixed a background overlapping and border radius bug for `ns-appopintment-picker`



**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.21.0

**Little things**

Release date - 2020/11/10


**Improvement 🏷 & 🕐**

* We added `tag`, `clock` to `ns-icon`, specifically for future use on an upcoming merchandising component
* We made the labels and headings of the `nsx-address-selector` more generic so they also work on anonymous journeys without confusing customers (eg : Change your postcode to Change postcode).

**Bug fixes 🐛**

* `ns-datepicker`: there was a bug when dynamically changing the label was causing an issue with the value. This is now a thing of the past!
* `ns-table` was displaying "Scroll for more information" on tables with 6 or more rows, independently of the height of the viewport.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼

## Version 1.20.0

**View(s)ports 📺**

Release date - 2020/11/05

**New components ⚽️**

* We worked hard to display 4 columns on our `ns-column` layout component on narrower viewports. This resulted in the need to introduce a new viewport that covers some of the range that was originally covered by the `hockey-pitch` viewport. We called it: `football-pitch` ! 


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.19.0

**You've got an appointment! 🕙**

Release date - 2020/11/03

**New components 📆**

* `ns-slot-picker` + `ns-calendar` = `ns-appointment-selector` ! The math is complete and we are very excited to release our appointment picker. Fully responsive and as accessible as we could make it. It has been a lot of work on a calendar and slot picker that would work great together and we can't wait for our customers to use it!


**Improvement 🅰/🅱**

* We added `electrics`, `centralHeating` and `pipeAndDrain` to `ns-illustration`.

**Bug fixes 🐛**

* We introduced a temporary fix for a chromium bug that Google is currently fixing. This bug impacts how the image of the `ns-landmark` is positioned. We'll monitor the release of Google's fix and roll back to the normal implementation.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.18.0

**Columns and slots 🎰**

Release date - 2020/10/06

**New components 📆**

* First, we released `ns-column`, to open up support for more column options, and we'll start with a 4-columns layout! Stay tuned for more options
* Very excited to release this one: `ns-slot-picker` it's the last piece of something big to come... a complete appointment selector.
  `ns-slot-picker` + `ns-calendar` = `ns-appointment-selector` !


**Improvement 🅰/🅱**

* We have chosen the winner of the testimonial A/B test. The winning version is the card version, and the loser is the flat version. This is now available as of today!
* We added bubbles to the manual-address event on `nsx-address-selector`

**Bug fixes 🐛**

* The _lockjaw_ version of `ns-lockup` had its layout breaking when the image failed to load.... well not anymore!
* The values passed by the experience pattern `nsx-marketing-consent` were not consistent with the API, they now speak the same language
* There was an issue when firing multiple change events for radio buttons and checkboxes in `ns-inputter`... no more.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼





## Version 1.17.0

**It's not always all-inclusive**

Release date - 2020/09/16

**New feature ❌**

* We have introduced a new type of unordered list: `ul-crossed`. This style can be used to list exclusions from a product for example.

**Improvement 👂**

* We added an event on `nsx-address-selector` when a user clicks to add an address manually
* We added dot and backslash as seperators for masked `ns-inputter` text inputs.


**Bug fixes 🐛**

* The validation for `ns-inputter` when entering letters in number type inputs wasn't working on IE11. This is now fixed!
* The header logo wasn't displaying correctly on the `ns-header`, it now looks wonderful
* The underline from the direct link type for `ns-cta`  was visible on primary CTAs on Android devices. We fixed this
* We fixed an issue where the scroll wasn't showing for a `ns-table` with a long fixed value
* We captured and exterminated a rogue margin in the `ns-landmark` if there is no CTA
* We fixed the margin of the paragraph for the lakeside `ns-lanmdmark`
* When multiple values were passed using the `ns-inputter`, it would mean that nothing was passed. We have fixed this now and made it possible.



**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.16.0

**Fifty shades of red! 🎈**

Release date - 2020/08/20

**What’s new around here 🚩**

**New feature 🔨**

* We added our red gradient to the available options.

**Improvements 🔨**

* The rendering of `nsx-footer` was so fast that the cookie policy/settings link didn't have time to check for the presence of the OneTrust script to display the right link. We tamed it a little to allow time for the right link to be populated
* We have made the radio and checkbox labels for `ns-inputter` more consistent


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

**Exciting news, our custom branded calendar is now ready! That's right! It's been a huge piece of work. It's probably the best looking and most accessible calendar that we have ever built.**

Release date - 2020/08/10

**What’s new around here 💫**

**New component 🗓**

* `ns-calendar` is now released. It will enable users to pick a day, and can display current date, selected date, unavailable dates. And it is fully accessible. 

**Improvements 🔨**

* We removed `tablist` from accordion to improve keyboard navigation and make the `ns-accordion` more accessible so it comes up on screen readers correctly
* We made small changes to the manual address capture for the `nsx-address-selector`

**Bug fixes 🐛**

* We fixed an issue where `nsx-address-selector` was scrolling sideways on validation error
* We fixed an issue where `ns-panel` did not support more than two rows on IE11
* `ns-form` spacing issue between selectors in IE11 is now fixed
* We fixed the tab lock for `ns-expander`. This means that users won't be stuck on the first expander when navigating with their keyboard.


**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.14.0

**We are excited to announce the release of a component we have been working hard on: the product card!**

Release date - 2020/07/20

**What’s new around here 🎴**

* You can now use the `ns-product-card` to enable users to browse, compare and choose a product. You can find out how to use it [on our documentation](components/ns-product-card.md)

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

* We've been working hard to create a solution that allows customers to select a date. The first iteration of `ns-datepicker` allows users to manually enter a date, or utilise their native browser calendar 
* We're developing a bespoke `ns-calendar` capability right now, in future this will form part of the next iteration of `ns-datepicker`
* We added new links to `nsx-header`
* We now allow users to enter an address manually using `nsx-address-selector`


**Bug fixes 🐛**

* `ns-landmark type="lakeside"` alignment fix; you should see better left alignment in functional journeys now, where `ns-landmark` is used
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

* We resolved the `ns-caveat` link size issue, which was making the link tiny or MASSIVE
* In the `ns-landmark` the BG-VI css is no longer overriding paragraph style
* In the `ns-expander` the BG-VI css is no longer overriding heading style
* We've made validation messages on `ns-inputter` more user friendly
* We fixed the overlap in download app images and britishgas logo text in `ns-footer` for IE11.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌


## Version 1.9.0

**ns-download in ns-form and A/B test designs for ns-testimonial**

Release date - 2020-05-04

**What's new around here? 🛥**

* When `ns-download` is used in `ns-form`, files now open in a new tab (if the browser can display the file type)
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
  * First we created a standardised way to download documents. Now we've extended that to handle multiple documents in way that that helps the user find what they're looking for
  * Our illustration suite has expanded based on your feedback.
  * 6 new illustrations have been added, and can now be used to decorate pages:
  * `boiler-repair`, `dual-fuel`, `electric-vehicle`, `engineer`, `help`, `savings`
* Version 1 of our `ns-testimonial` component, born out of a successful AB test.
  * Use this to display positive customer feedback. Watch out for its evolution in our next release.

**Bug fixes 🐞**

You brought a couple of accessibility defects to our attention recently, and we've work hard to solve what turned out to be tricky problems. You'll now see:

* Better colour contrast of the placeholder text on the `ns-inputter`
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
  * A standardised way to download from our site, paying special attention to  the experience of our customers using screenreaders
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
  * 4 different types, `warning`, `error`, `success` and `info`
  * Uniformly display prices with `ns-price`.
  * Formating currency
  * Introducing a replacement colour for `@warning` and reserving the yellow for `@focus`.
  * Focus colour added that takes the previous warning colour and warning colour now has a more accessible colour.

**Bug fixes 🐜**

* Fixed IE11 includes issue.

**Improvements 🐑**

* Removed old `nds-structure` class in favour of `ndsn` wrapper class
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
  * With the power to assist data entry such as sort codes and reference numbers
  * The Lakeside variant of our Landmark.
  * Used for conveying blocking messages e.g. 404 & 500, what we call Roadblock messages.
  * Useful as the primary component for confirmation pages
  * Introducing `ns-skyline`, a high level messaging component.
  * Notify the user of events that may affect their experience.
  * Weather warning, price changes etc
  * Adding 4 new icons to support messaging components.
  * `error`, `info`, `success`, `warning`

**Documentation 🐧**

* Details of how to use masks and separators with [ns-inputter](components/ns-inputter.md)
* Supporting the new additions to our component library.
  * Take a look at our documentation for [ns-skyline](components/ns-skyline.md)
  * Check out the best practice for [lakeside](components/ns-landmark.md) Landmark
* Include a summary of our Squad achievements on [December 4th](community/events.md)

**Bug fixes 🐜**

* Resolving an issue with BG-VI styles overriding form labels.

**Improvements 🐑**

* Introduce ES Lint to keep our Javascript in check
* Adding additional icons to support `ns-skyline`.

**Feedback 💌**

All our Requests For Change can be found in our Requests project board in Github.
https://github.com/ConnectedHomes/nucleus/projects/6

Any questions? Let us know 🙌🏼


## Version 1.3.0

**Selector and Table**

Release date - 2019-11-11

**What’s new around here? 🐣**

* We've simplified our [Request for change](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=RFC,+draft&template=b--request-a-change.md&title=[RFC]+Title+of+the+request) GitHub ticket template
* We have included `ns-selector` in this release.
  * Enhanced radio button or checkbox group.
  * Include either an illustration or an image and additional content to support decision
  * Our first release of `ns-table`.
  * A 'vanilla first' table with responsive behaviour.
  * A table specifically for displaying data.

**Documentation 🍂**

* Supporting documentation for [ns-selector](components/ns-selector.md)
* Also, the initial documentation for [ns-table](components/ns-table.md)
* Introducing **Image guidance** and supporting image templates to our components which use an image.
  * [ns-editorial](components/ns-editorial.md#image-guidance)
  * [ns-landmark](components/ns-landmark.md#image-guidance)
  * [ns-lockup](components/ns-lockup.md#image-guidance)
  * [ns-card](components/ns-card.md#image-guidance)
* We have introduced [Stale](https://github.com/apps/stale) to add a 'stale' label to RFCs that have had no activity in the previous 14 days.

**Bug fixes 🎒**

* In `ns-accordion` we moved the aria `role="tablist"` from the ShadowDOM into the LightDOM to improve accessibility
* Ensuring every page fills at least 100% of the viewport
* Setting the correct alignment of `slot="heading"` when `ns-editorial` is reversed when there is no image to push the heading to the right
* Improving the performance of `ns-inputter`.

**Improvements 🐬**

* We have added a compressed mobile version of the Superflame asset for the `summit` `ns-landmark` optimised for small screens. The original asset has been impacting our performance
* Removed the Frontify documentation styles
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
  * Introducing a new layout `.splosh` which, at this time is exclusively for `ns-editorial`
  * We have added the ability to include a `textarea` within `ns-inputter`
  * Prototype of the Nucleus header and footer.
  * Including `ns-header` and `ns-footer`.
  * Simple `cookie-message` included.
  * Additional `nav` variant of the `ns-card`.
  * To support the header and footer, we have added `type="nav"` to `ns-panel`
  * Adding the (burger) `menu` icon.

**Documentation**

* Component [ns-editorial](components/ns-editorial.md)
* Textarea - [ns-inputter](components/ns-inputter.md#textarea)

**Bug fixes 🙊**

* Ensuring that the Nucleus container `.ndsn` class fills the width of the browser
* Resolving an issue where text within the reversed `lockjaw` Lockup was against the edge of the browser.

**Improvements 🌺**

* Creating a `gradient-colour` mixin
* Updating the Landmark Storybook stories to better reflect the different types
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
  * It has no image and no call to action
  * `ns-form` - The container for all `ns-inputter` components which manages the validation
  * Introducing the `select` variant of `ns-inputter` commonly known as - the dropdown.

**Bugfixes 🦋**

* Addressing an issue where the BG-VI.css anchor styles were overriding Nucleus
* Ensuring that `ns-cta` is tabbable when not contained within an `<a>`
* Slight change to the implementation of the CSS box model
* Adding slot styling to the heading within the `flat` variant of `ns-card`.

**Improvements 🐶**

* Validation improvements to `ns-inputter` suppoting minLength, maxLength and isBetweenLength validations
* Validation for radio buttons and `ns-inputter` `select` component
* Deprecated "Key" variant from the `ns-cta` component
* The default Landmark has been renamed from `hub` to `summit`
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

* Fixed the inconsistent positioning of the accordion chevron when multiple expanders were used
* Addressed the IE11 bug where the incorrect text colour appeared within `ns-cta` and `ns-tab`
* Enable the position `right` for the circle decoration
* Fix initial value overwrite in `ns-inputter`.

**Improvements 🌻**

* Removed `slot="label"` from `ns-inputter` as we use the anonymous slot
* Improve the `ns-tabs` Storybook story
* Include the tap illustration
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
  * Helper details
  * `ns-video` - include a YouTube video into a lockup
  * `ns-tab` - the tab that lives within tabs
  * `ns-tabs` - include a few tab to make a tabs.

**Sketch Library**

* Release 2.0 - (Out of Pre-release).
  * Download the latest: https://github.com/ConnectedHomes/centrica-ux/releases
  * Added Guides to give indication of where components can be placed
  * Included Templates to quickly mockup a page and placing components in a layout.

**Bugfixes 🐞**

* Replace previous green outline on `ns-cta` with current yellow outline
* Ensuring that the class of `blur` is implemented when required
* Address the removal of `margin-bottom` on the last element
* Improve specificity of typographic styling
* Including robust techniques for setting attributes.

**Improvements 🌸**

* Storybook, split Playground and Foundations
* Remove unused properties from our components
* Setting a white background to `ns-expander` within `ns-accordion`
* Including a variable for `@outline` colour
* Adding the solid and outline Rewards icon.

**Collaboration 🤗**

A big thank you to everyone involved in contributing to this release!

* OAM - for their collaboration throughout this release
* Energy Sales - for working with us to run a joint user testing session using a Nucleus coded prototype
* New Boilers - For collaborating with us to make sure their recent journey contained Nucleus components
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

* Added all available icons
* Added Accordions
* Added more screen sizes to each Component.

**Documentation**

* Becoming Nucleus
* Best practices
* [Events](community/events.md)
* [Modular scale](foundations/modular-scale.md)
* [Typography sizes](foundations/typography.md)
* [Optimise your images](foundations/photography.md)
* Our documentation - [https://britishgas.design](https://britishgas.design)
* [Accordion](components/ns-accordion.md)

**Bugfixes 🐞**

* Vertical spacing adjustments
* Adjusting the style of the heading within our Accordion
* Setting all Actions to be 100% width at small screen
* Removing the duplicate BG Flame font loading
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