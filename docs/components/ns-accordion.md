import { Storybook } from '../../includes/storybook.js'

## Introduction

> Accordion enables users to expand and collapse multiple sections of content.

We use accordions to break down content into meaningful sections, helping to reduce information overload. Accordions are useful for things like frequently asked questions or displaying multiple blocks of related content such as tariffs.

## Content guidance

![Accordion](https://user-images.githubusercontent.com/45626534/74158689-6a9cba80-4c12-11ea-8917-7bfabfd8582d.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total.  |
| B | Content | Use between 1 and 8 ns-expanders. Each expander consists of a heading and an anonymous content slot. When the heading is clicked the component opens to reveal the content. When in an open state, clicking the heading will hide the content. See [ns-expander](https://docs.britishgas.design/components/ns-expander) for further content guidance. |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for FAQs | Use a background with an accordion as the expanded state is white |
| Use to split up related content | Use more than 8 expanders |
| Make sure section headings relate to content | Use for critical information (such as caveats) |
|  | Use as a solution to excessive copy on a page |

### Considerations of best practises

Accordions should be used for FAQs or splitting related content into sections.  They should not be used for showing critical information such as caveats. We highly recommend that there are no more than eight content headings in a multiple accordion.
If more than eight are used we should stop to reassess why and perhaps breakdown the content even more.

## Usage

<Storybook story="ns-accordion--singular"></Storybook>

## Component relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ✅ Yes |
| **Does it live inside other components?** | ❌ No |
| **What layout classes can be used?** | `splash` `splosh` |

## Specification

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag` |
| Anonymous | `<ns-expander>` |

## Specification notes

### Heading

* The heading is for the entire accordion.
* Heading level should be h2 or h3 depending on if it is part of another heading.

### Anonymous

* Place ns-expanders into this slot.
* Check the [ns-expander documentation](https://docs.britishgas.design/components/ns-expander) for more information.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-accordion]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-accordion]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
