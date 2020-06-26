---
description: Messaging patterns.
---

# Introduction

There are a number of components and methods available to display messages and information to the customer. Whether you are trying to display a global message, a journey or task specific message, or a warning or error, below we highlight multiple examples of how our components should be used to display those messages to our customers. 

## Global

### Using `<ns-skyline>`

In order to notify customers of important site-wide or non-page specific events, we have the `<ns-skyline>`. This component is positioned directly beneath the global navigation and above any content. `<ns-skyline>` displays high-level messages to the user, specifically:

- Informational - to show useful information that the user may want to be aware of, e.g. upcoming price changes.
- Warning - to warn users of potential upcoming or current issues e.g. weather warning.

You can [read more information about the `<ns-skyline>` here](https://docs.britishgas.design/components/ns-skyline).

## Warning & error handling

### Form control validation

Our form controls are handled by the `<ns-inputter>` component, these include several variants of the text input, along with radio buttons and checkboxes, a select drop down, and a textarea. Validation requirements can be added to the component for a number of general or specific types of information. The validation messages are there to assist that valid values are added and to show an error message when they're not. 

You can [read more information about the `<ns-inputter>` here](https://docs.britishgas.design/components/ns-inputter).
You can [see examples of `<ns-inputter>` here](https://docs.britishgas.design/components/ns-inputter).

### Using <ns-highlighter>

A component that communicates the message that a service is not available to them or that there are technical issues on specific pages only. These messages are different to global messages as they only apply to some pages not site-wide e.g. a message that says the top-up service is not available would only apply to pages that customers will look at in order to top up.

You can [read more information about the `<ns-highlighter>` here](https://docs.britishgas.design/components/ns-highlighter).
You can [see examples of `<ns-highlighter>` here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--error).

### Using Roadblock

The Roadblock page type is there to present key information to a user when they reach an unexpected end to the task they were trying to complete. This can be related to a problem with a service that their task requires - these are 400 client side errors or 500 internal server error pages.

The page should describe to the user what has happened and tell them how to fix it if possible.

You can [read more information about the Roadblock here](https://docs.britishgas.design/page-types/roadblock).

## Valuable Information

### Using <ns-highlighter>

Along with handling warning and error messages, the `<ns-highlighter>` can be used to display two further types of messaging:

Informational messages - 


You can [read more information about the <ns-highlighter> here](https://docs.britishgas.design/components/ns-highlighter).
You can [see examples of <ns-highlighter> here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--error).




Feedback
Do you have insights or concerns to share? You can raise an issue via Github bugs.
See all the issues already raised via Github issues.
💩 🎉 🦄 You can also contact the team on Slack on the #product-nucleus channel!

