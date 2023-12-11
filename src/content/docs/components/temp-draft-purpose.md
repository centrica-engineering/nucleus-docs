---
title: Temporary Purpose file
---

# Draft: 'Purpose'

## ns-accordion

> Use `ns-accordion` to expand and collapse multiple sections of content.

We use accordions to break down content into meaningful sections, helping to reduce information overload. Accordions can be useful for things like frequently asked questions or displaying multiple blocks of related content inside an `ns-expander`.

## ns-alert

> Use `ns-alert` to communicate contextual messages to customers.

**Important:** This component has an ARIA role of `alert`, which immediately brings the content to the user's attention. Use it for its role and not for its look.

## ns-appointment-picker

> Use `ns-appointment-picker` for selecting date and time slots for an appointment.

The appointment-picker comprises a calendar  to select a date and a radio-button type inputter to show the available time slots for the selected date.

## ns-article

> Use `ns-article` to display long-form content.
> **Note:** This component is currently under review for deprecation.

:::note[Did you know?]
Astro helps you build faster websites with [“Islands Architecture”](https://docs.astro.build/en/concepts/islands/).
:::

The `ns-article` component is a container for long-form content such as blogs, editorials and support articles.  Use it to split the content into easy-to-consume chapters or sections.

## ns-card

> Use `ns-card` to contain content in a consistent and structured way.

Cards are to be used to apply a container around a related grouping of information. Achieve this through a combination of imagery, illustrations and typography.

## ns-caveat

> Use `ns-caveat` to provide additional information and legal details to the content.

Caveats link to content on the page, providing more information about legality and eligibility by separating it to the bottom of the page.

## ns-column

> Use `ns-column` to bring flexibility and control to responsive layouts.

Allows the user interface to split into multiple columns by defining the number of columns required at specific viewports.

Use for arranging components and content, not for gratuitous numerous columns as perhaps seen in a newspaper or magazine.

## ns-content

> Use `ns-content` to display typography and media.
> **Note:** This component is currently under review for deprecation.

The `ns-content` component's placement is inside other components. It helps to add consistency to the styling of typography, improving how it interacts with the other components.

## ns-cta

> Use `ns-cta` (call-to-action) to allow users to take action once they are ready.

Users can perform particular actions through the use of the `ns-cta` component. An example of these actions could be to submit a form through an event (i.e. a click event) or navigate with a hyperlink.

There is no distinction between a hyperlink or an action through the design of the `ns-cta` component. Use its textual content to convey the intent of the CTA to the user.

## ns-datepicker

> Use `ns-datepicker` to enter a date in a form.

The `ns-datepicker` wraps the `ns-inputter` component. Guidelines defined for the `ns-inputter` should also be adhered to when using this component. See [`ns-inputter`](#) documentation.

## ns-download

> Use `ns-download` component to create a downloadable link for an asset.

The `ns-download` component creates the visual and semantics of the action of downloading an asset, as opposed to navigation. It can be used singularly or as a list of downloads for multiple files.

## ns-editorial

> Use `ns-editorial` for self-contained or supporting content that is more informative than promotional.
> **Note:** This component is currently under review for deprecation.

Sometimes, a more detailed explanation of something can be helpful – without requiring the user to take immediate action. That is where the `ns-editorial` component can help.

## ns-expander

> Use `ns-expander` to show or hide content.

An expander consists of a heading and an anonymous content slot. Click on a heading to reveal the content. Click it again to hide the content.

Use an `ns-expander` component in an accordion, a product card, or other contexts.

## ns-fieldset

> Use the `ns-fieldset` to group related `ns-inputter` components.
> **Note:** This component is deprecated. Please refer to the [`ns-form`-group](#) component.

Use the `ns-fieldset` component instead of the usual HTML fieldset. The `ns-fieldset` extends the layout for the `ns-form`.

## ns-footer

> Use `ns-footer` for required links and information that needs repeating on every page.
> **Note:** This is the UI component for producing a customised footer. If you're looking for the default British Gas footer containing the links, please use the [nsx-footer](#) component.

The footer is the last component on the page and holds links and copyright notices that are legally required. It also contains information about the company.

## ns-form-group

> Use `ns-form-group` to group related `ns-inputter` components.

Use the `ns-form-group` component instead of the usual HTML fieldset. The `ns-form-group` extends the layout for [`ns-form`](#).

## ns-form

> Use `ns-form` component to collect customer input and provide a personal experience based on their needs.

The `ns-form` component mimics the native form element features. Its purpose is to allow customers to provide data and validate it before sending them to processing.

## ns-header

> Use `ns-header` for the primary navigation of the website.

The header provides the primary navigation and conveys brand presence with the logo.

> **Note:** This is the UI component for the header - if you are looking for the header that includes the navigational content, please use [nsx-header](#).

The nsx-header should be the default choice of header across the main British Gas website.

## ns-highlighter

> Use `ns-highlighter` to communicate information or error, warning and success messages.
> **Note:** This component is deprecated. Please refer to the [`ns-alert`](#) component.

The `ns-highlighter` communicates messages that a service may not be available or that there are technical issues on specific pages. These differ from global messages as they only apply to some pages and are not site-wide.

e.g. A message that says the top-up service may not be available would only apply to pages that customers will look at to top up.

## ns-icon

> Use `ns-icon` to display icons, the visual symbols used to represent functions, products and services.

Icons provide clarity to users and reduce their cognitive load. Icons always supplement a single line of text and are not treated as a description. They are solid or outline a single colour.

## ns-illustration

> Use `ns-illustration` to display illustrations, the visual symbols used to bring the warmth of the British Gas brand and personality to the website.

Illustrations simplify products and services to users in a friendly manner. Illustrations always accompany the content.

## ns-image

> Use `ns-image` to display images. An image allows British Gas to share visual content.

British Gas has a variety of images to enhance content on the website and help sell a story. This component enables image use on the website at the correct ratios while ensuring the page loads quickly (utilising lazy loading).

## ns-inputter

> The `ns-inputter` is a multi-purpose wrapper component that helps display form input types.

Use these types of inputs to help customers enter and select information:

- Text (including tel, email, and number)
- Radio button
- Checkbox
- Select (drop-downs)
- Textarea

If you intend to use a password inputter, please see the `ns-password` component.

## ns-landmark

> Use `ns-landmark` to introduce the page, informing users of their current location and its primary purpose.

Use landmarks to set the scene for what the page is for, what offers might be available and give helpful actions for users. It contains the main heading for the page and provides overarching context to the rest of the page.

## ns-live

> Use `ns-live` to draw attention to areas of the page that are dynamically updating.

The `ns-live` component comprises a loading icon, a helpful message and a subtle animation.

## ns-lockup

> Use `ns-lockup` as a promotional component that signposts to a product or service, highlighting key messages.

Use `ns-lockup` to engage customers and promote products or services. The more relevant and contextual the content is for the intended customers, the better.

## ns-panel

> Use `ns-panel` as an empty container for each section on a page.

It provides an area to place a layout, add an optional decoration and apply the appropriate margins. There can be more than one `ns-panel` on a page.

## ns-password

> Use `ns-password` as the standard component that supports users when entering a password.

The `ns-password` component includes a set of features that help users not only enter a password but also accommodate their need to create one.

This component wraps the `ns-inputter`. Consider the guidelines defined for the `ns-inputter` when using this component. See [`ns-inputter`](#) documentation.

## ns-pill

> The `ns-pill` component is a small coloured highlight. Use it to attract customer attention to a piece of information.

Use `ns-pill` to highlight a small item of information to a customer. Within the British Gas experience, they are often used to attract attention to a promotional message or a notification. Only display a small detail of the content. The `ns-pill` component should not contain lengthy or complex information.

Pills can help to create a subtle sense of urgency or to draw a customer’s attention to the value of a product or service. For example, use them to highlight the date a promotional offer expires or to feature a gift offer.

## ns-price

> Use `ns-price` to standardise the way prices are displayed.

The `ns-price` component takes an input in pence and outputs it in the correct price format, prepends a pound symbol and adds an optional minus sign indicating negative values. It only works for pounds sterling.

## ns-product-card

> Use `ns-product-card` to enable users to browse, compare and choose a product.

## ns-progress

> Use `ns-progress` to indicate how far a user is through a journey and how many steps they have left to complete.

## ns-selector

> Use `ns-selector` to group an image or illustration with a label into a card which users can select.

Showcase a product, service or option which users can select. The `ns-selector` component can function as a single or multiple selection for the user.

## ns-skeleton

> Use `ns-skeleton` as a placeholder to show that content is loading.

The `ns-skeleton` can be a visual representation of a paragraph and there are also options for text, headings, and subheadings.

## ns-skyline

> Use `ns-skyline` to notify users of current, ongoing or upcoming events that may be relevant to them.

The `ns-skyline` displays high-level messages to the user. Its position is always beneath the global navigation and above any content. Use it for notifications of important site-wide (not page-specific) events that may affect the experience of using the British Gas website.

Use `ns-skyline` for either of these two purposes:

- **Informational**
Show helpful information the user may want to be made aware of, e.g. upcoming price changes.
- **Warning**
Warn users of potential upcoming or current issues, e.g. a weather warning.

## ns-standout

> Use `ns-standout` to draw attention to important information that the user will need to know.

Use the `ns-standout` component to make information stand out from a page and to visually differentiate a concise block of text from the content that surrounds it, for example:

- Quotes (as in prices)
- Call-outs
- Examples
- Additional information about the page
- Emergency information

## ns-tab

> Use `ns-tab` as a singular tab that dictates what the area is about.

The `ns-tab` is the button that changes the content in the [`ns-tabs`](#) when clicked. It shows the user relevant content with a heading and an optional icon.

## ns-table

> Use `ns-table` to display information in a grid-like format of rows and columns. It organises information in a way that’s easy to scan so users can look for patterns and insights.

The table component consumes basic HTML table markup, which makes it accessible and responsive, as well as styling it.

## ns-tabs

> Use `ns-tabs` to provide the organisation of content separated within the same context.

The `ns-tabs` component separates related content into clearly labelled sections. It comprises multiple [`ns-tab`](#) components.

## ns-testimonial

> Use `ns-testimonial` to display verbatim quotes from people about us.

The testimonial should be used as an enticement to buy British Gas products and services. It works by providing the customer with confidence.

## ns-timeline

> Use `ns-timeline` to represent a sequence of events happening within a process.

The timeline gives an overview of a process and can show the progression of a customer journey. Its purpose is to create situational awareness for the user and manage expectations.

## ns-video

> Use `ns-video` to display videos. It helps us share more visual and engaging content.

British Gas creates many videos to engage customers. The `ns-video` component enables the use of these videos on the website and gives better context to the customer regarding what, how or why they should do something.

## nsx-address-selector

> The `nsx-address-selector` is a multi-functional experience pattern. Use this Nucleus experience (nsx-) for address-related tasks.

Use the address selector for any of the following tasks:

- Searching for a specific address by postcode
- Adding or entering a new address
- Amending an existing address
- Selecting an address from a list of existing premises (e.g. multi-premise landlords)

## nsx-footer

> The `nsx-footer` experience pattern is a wrapper of the `ns-footer` component. Use this Nucleus experience (nsx-) to display the website's legally required links and copyright information.

The `nsx-footer` is also an important SEO tool that includes links to social channels and our mobile apps.

The footer experience pattern comprises three parts. Legal links, SEO links and a brand and copyright notice. If links need updating for the website footer, use this experience pattern as your basis.

## nsx-header

> The `nsx-header` experience pattern is a wrapper of the `ns-header` component. Use this Nucleus experience (nsx-) as the primary navigation for the British Gas website.

The header experience pattern internally holds the sections and the secondary navigation.

The subheadings and links for the navigation are passed into each section of the nsx-header to allow them to be quickly updated.

## nsx-marketing-consent

> Use the `nsx-marketing-consent` experience pattern to capture a customer's contact preferences for marketing purposes.

Use this experience pattern in any journey where there is a need to capture and submit customer marketing preferences. Only use it for this purpose – do not use it for viewing or changing existing preferences.

## nsx-product-card-overview

> Use the `nsx-product-card-overview` experience pattern to compare HomeCare products against each other. See the price differences when choosing to apply an excess or not without reloading the entire page.

<!--Above this line have been reworded from the original for a knowledgeable audience, neutral in formality, general domain and with the intent to inform. Checked for correctness and clarity. -->
