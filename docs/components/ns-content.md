---
description: Molecule | Content component.
---

import { Storybook } from '../../includes/storybook.js'
import { Tokens } from '../../includes/tokens.js'

## Introduction

> ns-content is used to display typography and media.

`ns-content` is used inside other components and has been created to help add consistency to typography styling, and to improve how typography interacts with other components.

## Content guidance

We do not currently have content guidance as this will change depending on the context in which it's being used.

## Best practice

ns-content relies on clean HTML in order to display correctly. Avoid using additional `<div>` tags to wrap content as this will break the styling.

## Usage

<Storybook story="ns-content--standard"></Storybook>

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes - ns-article |
| **What layout classes can be used?**  | None |

## Specification

| Slots | Type |
| :--- | :--- |
| anonymous | html content |

<Tokens component="content"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-content]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-content]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-article](components/ns-article.md)
