---
description: Molecule | Expander component.
---

import { Storybook } from '../../includes/storybook.js'
import { Tokens } from '../../includes/tokens.js'

## Introduction

> Expanders are used to show or hide content.

An expander consists of a heading and a anonymous content slot.  When the heading is clicked the component opens to reveal the content. When in an open state, clicking the heading will hide the content.

## Content guidance

![Expander - Being used in an Accordion](https://user-images.githubusercontent.com/45626534/75039379-7315b080-54b0-11ea-9816-8b679a290a19.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Heading | This is the heading to the anonymous content. When the heading is clicked the component opens to reveal the content.   |
| B | Content | Expander can accommodate multiple paragraph slots, these should be concise, using sub-headings to split large paragraphs. Can contain bold copy `<b>`, inline links `<a>`, and lists `<ul>` `<ol>`. We recommend to use `ns-content` as a container for the html content.|

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use instead of modal | Use to hide important information (such as caveats) |
| Use headings, paragraphs, lists for content | Use as a solution to excessive copy on a page |
| Make sure heading relates to content | Nest expanders within expanders |
| Use a coloured expander to draw attention to a promotion in an expander on a product card | Use multiple coloured expanders on one page |
|  | Use a coloured expander to draw attention to a warning message. Use ns-highlighter or ns-skyline instead. |

## Usage

<Storybook story="components-ns-expander--expander"></Storybook>

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ✅ Yes -  `ns-accordion` `ns-skyline` |
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | `standard` | `skyline`, `standard` | Variants for the expander. |
| `open` | `string` | `false` | `true`, `false` | If true will open the expander to show the content. |
| `icon` | `string` |  | `info`, `warning`. See [`ns-icon` component](https://britishgas.design/components/ns-icon) | Only use for a `type` of `skyline` |
| `colour` | `string` |  | `yellow` | Sets the colour for the heading - Only use for a `type` of `standard` |

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag`      |
| anonymous | `ns-content` or html content  |

## Specification notes

### Heading

* This is the heading to the anonymous content.

### Open

* Defines if the expander is in an open or closed state.

### Anonymous

* Place the content of what you want to be expanded (or hidden) in this slot.

<Tokens component="expander"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-expander]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-expander]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-accordion](components/ns-accordion.md)
* [ns-skyline](components/ns-skyline.md)
