---
description: Atom | Customer testimonial component.
---

# ns-customer-testimonial [experimental]

## Introduction

> This component is currently under development.

A new component to display all the lovely things that customers say about us. The customer testimonial should be used as an enticement to buy British Gas products and services. It works by providing the customer with confidence.

## Best practice

| 💚 Do | 💔 Don't |
| :---  | :---  |
| Use a single sentence | Use multiple paragraphs |
| Use `<b>` to highlight keyphrases | Link to a live twitter handle |
| Use positive feedback | Include anything negative, rude or which may be misconstrued  |
| | Include any personal information beyond first name or twitter handle |

### Considerations of best practice


## Usage

<!--
To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-customer-testimonal--standard)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-customer-testimonal" caption="" %}
-->
```Suggested markup
<ns-customer-testimonal citeUrl="https://url-to-quote" customer="Charles Spencer" medium="twitter">
  <p slot="quote">Check your rewards if you've got an account with British Gas. There are fantastic rewards to choose from at the moment. <b>Many thanks @britishgas</b></p>
</blockquote>
</ns-customer-testimonal>
```


## Component Relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| citeUrl | `string` |  |  | This attribute should point to information explaining the context or the reference for the quote. |
| customer | `string` |  |  | The name or twitter handle of the customer that provided the quote |
| medium | `string` |  |  | The name of the platform that the customer used to leave their message |
| quote | `string` |  |  | What the customer said |

## Specification notes


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-customer-testimonal]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-customer-testimonal]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
