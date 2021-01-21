---
description: Atom | Testimonial component.
---

import { Storybook } from '../../includes/storybook.js'

## Introduction

A new component to display all the lovely things that people say about us. The testimonial should be used as an enticement to buy British Gas products and services. It works by providing the customer with confidence.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use a single sentence | Use multiple paragraphs |
| Use `<b>` to highlight key phrases | Link to a live twitter handle |
| Use positive feedback | Include anything negative, rude or which may be misconstrued  |
| | Include any personal information beyond first name or twitter handle |

### Considerations of best practice


## Usage

<Storybook story="ns-testimonial--standard"></Storybook>

## Component relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| citeUrl | `string` |  |  | This attribute should point to information explaining the context or the reference for the quote. |
| author | `string` |  |  | The name or handle of the author that provided the quote. |
| medium | `string` |  |  | The name of the platform that the author used to leave their message eg twitter.|
| quote | `string` |  |  | What the author wrote or said. |

## Specification notes


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-testimonial]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-testimonial]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
