---
description: Messaging patterns.
---

# Introduction

There are a number of components and methods available to display messages and information to the customer. Whether you are trying to display a global message, a journey or task specific message, or a warning or error, below we highlight multiple examples of how our components should be used to display those messages to our customers. 

## Global

### Using `<ns-skyline>`

![Global message on britishgas.co.uk](https://user-images.githubusercontent.com/45626534/86783221-ec750080-c057-11ea-9aa7-7b76a9c69c1c.png)

In order to notify customers of important site-wide or non-page specific events, we have the `<ns-skyline>`. This component is positioned directly beneath the global navigation and above any content. `<ns-skyline>` displays high-level messages to the user, specifically:

- **Informational** - to show useful information that the user may want to be aware of, e.g. upcoming price changes.
- **Warning** - to warn users of potential upcoming or current issues e.g. weather warning.

You can [read more information about the `<ns-skyline>` here](https://docs.britishgas.design/components/ns-skyline).

## Warning & error handling

### Form control validation

![Validation message on radio buttons](https://user-images.githubusercontent.com/45626534/86784027-f3e8d980-c058-11ea-837e-5afb39fd11da.png)

Our form controls are handled by the `<ns-inputter>` component, these include several variants of the text input, along with radio buttons and checkboxes, a select drop down, and a textarea. Validation requirements can be added to the component for a number of general or specific types of information. The validation messages are there to assist that valid values are added and to show an error message when they're not. 

- You can [read more information about the `<ns-inputter>` here](https://docs.britishgas.design/components/ns-inputter).
- You can [see examples of `<ns-inputter>` here](https://docs.britishgas.design/components/ns-inputter).

### Using `<ns-highlighter>` for errors and warnings

![Warning message displayed in journey](https://user-images.githubusercontent.com/45626534/86784458-72de1200-c059-11ea-98fe-75700c5056c0.png)

The `<ns-highlighter>` has two variants that can be used for displaying warning or error messages:

- **Error** - for showing that a task cannot be completed without the customer remedying something.
- **Warning** - for communicating foreseeable problematic events, failures, outages and how to avoid errors.

These messages are to be communicated during a customers engagement with a journey, and they should relate to the action a customer is trying to complete. These should not be used for global messages.

- You can [read more information about the `<ns-highlighter>` here](https://docs.britishgas.design/components/ns-highlighter).
- You can [see the error variant of `<ns-highlighter>` here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--error).
- You can [see the warning variant of `<ns-highlighter>` here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--warning).


### Using the Roadblock page type

![Roadblock message](https://user-images.githubusercontent.com/45626534/83500827-31d16b80-a4b7-11ea-9e53-315c9108950a.png)

The Roadblock page type is there to present key information to a user when they reach an unexpected end to the task they were trying to complete. This can be related to a problem with a service that their task requires - these are 400 client side errors or 500 internal server error pages.

The page should describe to the user what has happened and tell them how to fix it if possible.

You can [read more information about the Roadblock page type here](https://docs.britishgas.design/page-types/roadblock).

## Valuable information & success messages

### Using `<ns-highlighter>`

![Messaging example for submitting a meter reading](https://user-images.githubusercontent.com/45626534/86784635-a7ea6480-c059-11ea-96a4-b54f141a1a69.png)

Along with handling warning and error messages, the `<ns-highlighter>` has two further variants that can be used for messaging:

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
