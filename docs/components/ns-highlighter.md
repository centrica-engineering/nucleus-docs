---
description: Organism | Highlighter component.
---

## Introduction

> Highlighters can be used to communicate information or error, warning and success messages.

A component that communicates the message that a service is not available to them or that there are technical issues on specific pages only. These messages are different to global messages as they only apply to some pages not site wide e.g. a message that says the top up service is not available would only apply to pages that customers will look at in order to top up.

## Content guidance

![Highlighter - Error](https://user-images.githubusercontent.com/45626534/76082861-32d02b00-5fa4-11ea-9a5a-3efc9f2f89e8.png)


| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Icon | This is the icon inside the Highlighter. This is dictated by the `type` of Highlighter. The [specification table](https://docs.britishgas.design/components/ns-highlighter#specification) has a list of options. |
| B | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. |
| C | Content | A single, short paragraph works best. You are able to use inline text links within the paragraph if necessary. Don't add additional headings within the paragraph and the copy length should not exceed more than two paragraphs of 3 lines each. Can contain bold copy `<b>`, inline links `<a>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| D | Accent | This is to support the context of the messaging. This colour matches that of the icon. |

The content for highlighters is dependent on the type that is used:

### Error Messages `type="error"`

![Highlighter - Error](https://user-images.githubusercontent.com/28779/75970263-fc24e280-5ec7-11ea-9e31-90df5e7344ba.png)

For communicating failure with urgence. A task cannot be completed without the user remedying something.

### Informational Messages `type="info"`

![Highlighter - Informational](https://user-images.githubusercontent.com/28779/75970267-fcbd7900-5ec7-11ea-91fb-15374a536a42.png)

For communicating a useful piece of information that the user might find helpful to carry out their action.

### Success Messages `type="success"`

![Highlighter - Success](https://user-images.githubusercontent.com/28779/75970268-fd560f80-5ec7-11ea-8ad3-081592da15f1.png)

For communicating that an action has been successful.

### Warning Messages `type="warning"`

![Highlighter - Warning](https://user-images.githubusercontent.com/28779/75970265-fcbd7900-5ec7-11ea-98a2-a43127c9af28.png)

For communicating a piece of information with less severity. These include foreseeable problematic events, failures, outages and how to avoid errors.


## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep the messages concise |  Use for generic message that is not in context to the page it is displayed in |
| Use an icon to alert the user what type of message it is |  Use it for Roadblock error messaging |

### Considerations of best practice

* Be clear and concise

The message must be in plain English, and help the user out of the situation by providing an actionable link if possible.

## Usage

To see examples visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-highlighter--error).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-highlighter" caption="" %}

```markup
<ns-highlighter type="error">
  <h2 slot="heading">Unfortunately, we're having technical problems at the moment.</h2>
  <p>Either stay on this page and try again in a few moments, or try again later.</p>
  <p>Thank you for your patience. We’re sorry for the inconvenience this might cause.</p>
</ns-highlighter>
```
## Component relationship

| **Relationship** |  |
| :---  | :--- |
| **Does it live in a panel?** | ✅ Yes|
| **Does it live inside other components?** | ❌ No  |
| **What layout classes can be used?** | `splash` |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `decoration` | `string` |           |See [Icon component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-icon--error)| Icon that is shown in the type of highlighter |
| `type`       | `string` | "error" | "error", "success", "warning", "info" | Defines the role of the highlighter and changes the styles |

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag` |
| Anonymous | `p tag` |

## Specification notes

### Type

* Required for all four types of highlighter

### Heading

* This should be a heading level 2


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-highlighter]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-highlighter])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [Related links]
