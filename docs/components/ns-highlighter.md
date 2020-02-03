---
description: Organism | Highlighter component.
---

# ns-card

## Introduction

> Highlighters can be used to communicate information or error, warning and success messages.

A component that communicates the message that a service is not available to them or that there are technical issues on specific pages only. These messages are different to global messages as they only apply to some pages not site wide e.g. a message that says the top up service is not available would only apply to pages that customers will look at in order to top up.

## Content guidance

| Field type | Guidelines |
| :--- | :--- |
| Heading      |  |
| Paragraph    |  |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep the messages concise |  Use for generic message that is not in context to the page it is displayed in |
| Use an icon to alert the user what type of message it is |  Use it for error messaging |

### Considerations of best practice

* Be clear and concise

The message must be in plain English, and help the user out of the situation by providing an actionable link if possible.

## Usage

To see examples visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--error).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-highlighter" %}

```markup
<ns-highlighter type="error">
    <h2 slot="heading">Unfortunately, we're having technical problems at the moment.</h2>
    <p slot="paragraph">Either stay on this page and try again in a few moments, or try again later.</p>
    <p slot="paragraph">Thank you for your patience. We’re sorry for the inconvenience this might cause.</p>
</ns-highlighter>
```
## Component Relationship

| **Relationship** |  |
| :---  | :--- |
| **Does it live in a panel?** | ✅ Yes|
| **Does it live inside other components?** | ❌ No  |
| **What layout classes can be used?** | `splash` |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `decoration` | `string` |           |See [Icon component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-icon--error)| Icon that is shown in the error type of highlighter |
| `type`       | `string` | "error" | "error", "success", "warning", "info" | Defines the role of the highlighter and changes the styles |

| Slots        | Type                |
| :--- | :--- |
| `heading`    | `h tag` |
| `paragraph`  | `p tag` |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-highlighter]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-highlighter])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [Related links]