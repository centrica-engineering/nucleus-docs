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
> **Note:** This component is deprecated. Please refer to the ns-form-group component.

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

<!--Above this line have been reworded from the original for a knowledgeable audience, neutral in formality, general domain and with the intent to inform. Checked for correctness and clarity. -->

## ns-header

> Primary navigation for the website

The header provides the primary navigation for the website, whilst also being our main brand presence with the logo.

> NOTE: This is the UI component for the header - if you are looking for the header with the navigational content please use nsx-header.

The default choice of header across the main British Gas UK home site should be the nsx-header.