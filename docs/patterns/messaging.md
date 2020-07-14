---
description: Messaging patterns.
---

# Introduction

We have a number of methods available to display messages and information to the customer. 

Whether displaying a global message, a task specific message, a success, or error message. Here are examples of how our components should be used to display those, and other types of messages.

## Global messages

### Using `<ns-skyline>`

![ns-skyline](https://user-images.githubusercontent.com/28779/87171041-16cdf480-c2ca-11ea-92ab-09fa0d995648.png)

To notify customers of important global or site-wide events, we have `<ns-skyline>`.

This component is positioned directly beneath the global navigation and above any content. Presenting high-level messages to the user, specifically:

- **Informational** - to show useful information that the user may want to be aware of.
  - For example: Upcoming price changes.
- **Warning** - to warn users of potential upcoming or current issues.
  - For example: Weather warning.

You can [read more information about the `<ns-skyline>` here](https://docs.britishgas.design/components/ns-skyline).

## Warning & error handling

### Inline validation

![Validation message on radio buttons](https://user-images.githubusercontent.com/28779/87279940-7a823880-c4e9-11ea-92bf-0f9f923715bb.png)

The `<ns-inputter>` encapsulates the validation for each element on a form.

Validation can be included for both general and specific types of information.

An example of general validation is: If the field is required or to restrict the field to allow numbers only.

An example of specific validation is: First name and last name, also telephone and mobile numbers.

These validation rules ensure that the expected data is provided, and will display an inline validation message when incorrect.

- You can [read more information about the different `<ns-inputter>` validation options](https://docs.britishgas.design/components/ns-inputter#specification).
- You can [see examples of `<ns-inputter>` here](https://docs.britishgas.design/components/ns-inputter).

### Using `<ns-highlighter>`

![Warning message displayed in journey](https://user-images.githubusercontent.com/28779/87281719-693a2b80-c4eb-11ea-87a1-0a226f9b0399.png)

The `<ns-highlighter>` has two variants for displaying warning and error messages:

- **Error** - when a task cannot be completed without the customer remedying something.
- **Warning** - for communicating foreseeable problematic events.
  - For example: Temporary failures, planned outages and how to avoid common mistakes.

These messages are to be communicated during a customers engagement with a journey, ensure that they relate to the action they are trying to complete. These should not be used for global messages.

- You can [read more information about the `<ns-highlighter>` here](https://docs.britishgas.design/components/ns-highlighter).
- You can [see the error variant of `<ns-highlighter>` here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--error).
- You can [see the warning variant of `<ns-highlighter>` here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--warning).


### Using the Roadblock page type

![Roadblock message](https://user-images.githubusercontent.com/28779/87285140-106c9200-c4ef-11ea-9cdf-10f82f76ff42.png)

The Roadblock page type presents key information when a user reaches an unexpected end to the task they were trying to complete.

This can be related to a problem with a service that their task requires - these are 400 client side errors or 500 internal server error pages.

The page should describe to the user what has happened and tell them how to fix it if possible.

You can [read more information about the Roadblock page type here](https://docs.britishgas.design/page-types/roadblock).

## Valuable information & success messages

### Using `<ns-highlighter>`

![Messaging example for submitting a meter reading](https://user-images.githubusercontent.com/28779/87281975-aef6f400-c4eb-11ea-9368-34a0f2dbf412.png)

Along with handling warning and error messages, the `<ns-highlighter>` has two other variants that can be used for messaging:

- **Information** - for showing the customer a piece of important information that relates to their task.
- **Success** - for showing the customer an action they have taken as part of a journey has been a success.

These messages are to be communicated during a customers engagement with a journey, and they should relate to the action a customer is trying to complete. These should not be used for global messages.

- You can [read more information about the `<ns-highlighter>` here](https://docs.britishgas.design/components/ns-highlighter).
- You can [see the information variant of `<ns-highlighter>` here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--information).
- You can [see the success variant of `<ns-highlighter>` here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--success).

### Using the Confirmation page type

To inform the customer that their journey or task has been completed we have created the Confirmation page type.

You can [read more information about the Confirmation page type here](https://docs.britishgas.design/page-types/confirmation).


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[patterns-messaging]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[patterns-messaging]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
