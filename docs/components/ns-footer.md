---
description: Organism | Footer component.
---

import { Storybook } from '../../includes/storybook.js'

## Introduction

> Required links and information that need to be repeated on every page.

> NOTE: This is the UI component for producing a customised footer. If you are looking for the default British Gas footer which contains the links please use `nsx-footer`.

The last component on the page, this holds links and copyright notices that are legally required.
It also holds information about the company.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always have the footer at the bottom of the page. | Make your own footer if you are part of the customer facing website. |
| Keep the footer outside the `main` element |  |

### Considerations of best practice

* If you are using the footer add a `id` with the value `footer` to work with skip links

## Usage

<Storybook story="ns-footer--standard"></Storybook>

## Component relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ❌ No |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `company`    | `string` | `British Gas` |  | Change the company name in the copyright notice. |
| `hideLogo`   | `boolean` | `false` | `true` `false` | Show or hide the British Gas logo. |

| Slots | Type |
| :--- | :--- |
| `section` | `ns-card` |

## Specification notes

### Section slot

* Should use the `ns-card` with type `nav`.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-footer]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-footer])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
