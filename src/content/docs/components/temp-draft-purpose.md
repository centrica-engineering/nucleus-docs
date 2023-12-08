---
title: Temporary Purpose file
---

# Draft: 'Purpose'

## ns-accordion

> Use accordions to expand and collapse multiple sections of content.

We use accordions to break down content into meaningful sections, helping to reduce information overload. Accordions can be useful for things like frequently asked questions or displaying multiple blocks of related content inside an ns-expander.

## ns-alert

> Use alerts to communicate contextual messages to customers.

**Important:** This component has an ARIA role of `alert`, which immediately brings the content to the user's attention. Use it for its role and not for its look.

## ns-appointment-picker

> Use the appointment-picker for selecting date and time slots for an appointment.

The appointment-picker comprises a calendar  to select a date and a radio-button type inputter to show the available time slots for the selected date.

## ns-article

> Use the ns-article component to display long-form content.
> **Note:** This component is currently under review for deprecation.

The ns-article component is a container for long-form content such as blogs, editorials and support articles.  Use it to split the content into easy-to-consume chapters or sections.

## ns-card

> Use cards to contain content in a consistent and structured way.

Cards are to be used to apply a container around a related grouping of information. Achieve this through a combination of imagery, illustrations and typography.

## ns-caveat

> Use caveats to provide additional information and legal details to the content.

Caveats link to content on the page, providing more information about legality and eligibility by separating it to the bottom of the page.

## ns-column

> Use columns to bring flexibility and control to responsive layouts.

Allows the user interface to split into multiple columns by defining the number of columns required at specific viewports.

Use for arranging components and content, not for gratuitous numerous columns as perhaps seen in a newspaper or magazine.

## ns-content

> Use the ns-content component to display typography and media.
> **Note:** This component is currently under review for deprecation.

The ns-content component's placement is inside other components. It helps to add consistency to the styling of typography, improving how it interacts with the other components.

## ns-cta

> Use a CTA (call-to-action) to allow users to take action once they are ready.

Users can perform particular actions through the use of the ns-cta component. An example of these actions could be to submit a form through an event (i.e. a click event) or navigate with a hyperlink.

There is no distinction between a hyperlink or an action through the design of the ns-cta component. Use its textual content to convey the intent of the CTA to the user.

## ns-datepicker

> Use the datepicker to enter a date in a form.

The ns-datepicker wraps the ns-inputter component. Guidelines defined for the ns-inputter should also be adhered to when using this component. See [ns-inputter](#) documentation.

## ns-download

> Use the ns-download component to create a downloadable link for an asset.

The ns-download component creates the visual and semantics of the action of downloading an asset, as opposed to navigation. It can be used singularly or as a list of downloads for multiple files.

## ns-editorial

> The editorial component is self-contained or supporting content that is more informative than promotional.
> **Note:** This component is currently under review for deprecation.

Sometimes, a more detailed explanation of something can be helpful – without requiring the user to take immediate action. That is where the ns-editorial component can help.

## ns-expander

> Use expanders to show or hide content.

An expander consists of a heading and an anonymous content slot. Click on a heading to reveal the content. Click it again to hide the content.

Use an ns-expander component in an accordion, a product card, or other contexts.

## ns-fieldset

> Use the fieldset to group related ns-inputter components.
> **Note:** This component is deprecated. Please refer to the [ns-form-group](#) component.

Use the ns-fieldset component instead of the usual HTML fieldset. The ns-fieldset extends the layout for the ns-form.

## ns-footer

> The footer comprises required links and information that needs repeating on every page.
> **Note:** This is the UI component for producing a customised footer. If you're looking for the default British Gas footer containing the links, please use the [nsx-footer](#) component.

The footer is the last component on the page and holds links and copyright notices that are legally required. It also contains information about the company.

## ns-form-group

> Use the form-group to group related ns-inputter components.

Use the ns-form-group component instead of the usual HTML fieldset. The ns-form-group extends the layout for [ns-form](#).

## ns-form

> Use the form component to collect customer input and provide a personal experience based on their needs.

The ns-form component mimics the native form element features. Its purpose is to allow customers to provide data and validate it before sending them to processing.

## ns-header

> Use the ns-header for the primary navigation of the website.

The header provides the primary navigation and conveys brand presence with the logo.

> **Note:** This is the UI component for the header - if you are looking for the header that includes the navigational content, please use [nsx-header](#).

The nsx-header should be the default choice of header across the main British Gas website.

## ns-highlighter

> Use highlighters to communicate information or error, warning and success messages.
> **Note:** This component is deprecated. Please refer to the [ns-alert](#) component.

The ns-highlighter communicates messages that a service may not be available or that there are technical issues on specific pages. These differ from global messages as they only apply to some pages and are not site-wide.

e.g. A message that says the top-up service may not be available would only apply to pages that customers will look at to top up.

## ns-icon

> Icons are visual symbols used to represent functions, products and services.

Icons provide clarity to users and reduce their cognitive load. Icons always supplement a single line of text and are not treated as a description. They are solid or outline a single colour.

## ns-illustration

> Illustrations are visual symbols used to bring the warmth of the British Gas brand and personality to the website.

Illustrations simplify products and services to users in a friendly manner. Illustrations always accompany the content.

## ns-image

> An image allows British Gas to share visual content.

British Gas has a variety of images to enhance content on the website and help sell a story. This component enables image use on the website at the correct ratios while ensuring the page loads quickly (utilising lazy loading).

## ns-inputter

> The ns-inputter is a multi-purpose wrapper component that helps display form input types.

Use these types of inputs to help customers enter and select information:

- Text (including tel, email, and number)
- Radio button
- Checkbox
- Select (drop-downs)
- Textarea

If you intend to use a password inputter, please see the ns-password component.

## ns-landmark

> Use the landmark component to introduce the page, informing users of their current location and its primary purpose.

Use landmarks to set the scene for what the page is for, what offers might be available and give helpful actions for users. It contains the main heading for the page and provides overarching context to the rest of the page.

## ns-live

> Use the ns-live component to draw attention to areas of the page that are dynamically updating.

The ns-live component comprises a loading icon, a helpful message and a subtle animation.

## ns-lockup

> Lockups are a promotional component that signposts to a product or service, highlighting key messages.

Use lockups to engage customers and promote products or services. The more relevant and contextual the content is for the intended customers, the better.

## ns-panel

> The ns-panel component is an empty container for each section on a page.

It provides an area to place a layout, add an optional decoration and apply the appropriate margins. There can be more than one ns-panel on a page.

## ns-password

> A standardised password component that supports users when entering an existing password.

Use the ns-password component to include a set of features that help users not only enter a password but also accommodate their need to create one.

This component wraps the ns-inputter. Consider the guidelines defined for the ns-inputter when using this component. See [ns-inputter](#) documentation.

## ns-pill

> The ns-pill component is a small coloured highlight. Use it to attract customer attention to a piece of information.

Use pills to highlight a small item of information to a customer. Within the British Gas experience, they are often used to attract attention to a promotional message or a notification. Only display a small detail of the content. The ns-pill component should not contain lengthy or complex information.

Pills can help to create a subtle sense of urgency or to draw a customer’s attention to the value of a product or service. For example, use them to highlight the date a promotional offer expires or to feature a gift offer.

## ns-price

> Use the ns-price component to standardise the way prices are displayed.

The ns-price component takes an input in pence and outputs it in the correct price format, prepends a pound symbol and adds an optional minus sign indicating negative values. It only works for pounds sterling.

## ns-product-card

> The product card enables users to browse, compare and choose a product.

## ns-progress

> Use an ns-progress component to indicate how far a user is through a journey and how many steps they have left to complete.

## ns-selector

> Use the ns-selector component to group an image or illustration with a label into a card. Showcase a product, service or option which users can select. This component can function as a single or multiple selection for the user.

## ns-skeleton

> The ns-skeleton component is a placeholder to show that content is loading.

[Example showing a paragraph type ns-skeleton]

The example above shows the visual representation of a paragraph. There are also options for text, headings, and subheadings.

## ns-skyline

> Use the ns-skyline component to notify users of current, ongoing or upcoming events that may be relevant to them.

The ns-skyline displays high-level messages to the user. Its position is always beneath the global navigation and above any content. Use it for notifications of important site-wide (not page-specific) events that may affect the experience of using the British Gas website.

Use the ns-skyline for either of these two purposes:

- **Informational**
Show helpful information the user may want to be made aware of, e.g. upcoming price changes.
- **Warning**
  Warn users of potential upcoming or current issues, e.g. a weather warning.

## ns-standout

> The purpose of the ns-standout component is to draw attention to important information that the user will need to know.

Use the ns-standout component to make information stand out from a page and to visually differentiate a concise block of text from the content that surrounds it, for example:

- Quotes (as in prices)
- Call-outs
- Examples
- Additional information about the page
- Emergency information

## ns-tab

> The ns-tab component is a singular tab that dictates what the area is about.

The ns-tab is the button that changes the content in the [ns-tabs](#) when clicked. It shows the user relevant content with a heading and an optional icon.

## ns-table

> Use the ns-table component to display information in a grid-like format of rows and columns. It organises information in a way that’s easy to scan so users can look for patterns and insights.

The table component consumes basic HTML table markup, which makes it accessible and responsive, as well as styling it.

## ns-tabs

> The ns-tabs component provides the organisation of content separated within the same context.

Use ns-tabs to separate related content into clearly labelled sections. It comprises multiple [ns-tab](#) components.

## ns-testimonial

> Use the ns-testimonial component to display verbatim quotes from people about us.

The testimonial should be used as an enticement to buy British Gas products and services. It works by providing the customer with confidence.

<!--Above this line have been reworded from the original for a knowledgeable audience, neutral in formality, general domain and with the intent to inform. Checked for correctness and clarity. -->
