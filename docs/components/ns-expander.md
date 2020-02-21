---
description: Molecule | Expander component.
---

# ns-expander

## Introduction

> Expanders are used to show or hide content.

An expander consists of a heading and a anonymous content slot.  When the heading is clicked the component opens to reveal the content. When in an open state, clicking the heading will hide the content.

## Content guidance

![Expander - Being used in an Accordion](https://user-images.githubusercontent.com/45626534/75039379-7315b080-54b0-11ea-9816-8b679a290a19.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Heading | This is the heading to the anonymous content. When the heading is clicked the component opens to reveal the content.   |
| B | Content | Expander can accommodate multiple paragraph slots, these should be concise, using sub-headings to split large paragraphs. Can contain bold copy `<b>`, inline links `<a>`, and lists `<ul>` `<ol>`. |

## Best practice

| 💚 Do | 💔 Don't |
| :--- | :--- |
| Use instead of modal | Use to hide important information (such as caveats) |
| Use headings, paragraphs, lists for content | Use as a solution to excessive copy on a page |
| Make sure heading relates to content | Nest expanders within expanders |

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-expander--expander)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-expander" caption="" %}

```markup
<ns-expander>
  <h3 slot="heading">Can I manage my account online?</h3>
  <p>Yes, with an online account you can arrange a service visit,
  find out whatʼs happening with your appointment, submit a meter reading and book an engineer.
  Weʼve even got a free smartphone app.</p>
</ns-expander>
```

## Component Relationship

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
| `icon` | `string` |  | `info`, `warning`. See [`ns-icon` component](https://britishgas.design/components/ns-icon) | Only used for skyline type |

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag`      |
| anonymous | html content |

## Specification notes

### Heading

* This is the heading to the anonymous content.

### Open

* Defines if the expander is in an open or closed state.

### Anonymous

* Place the content of what you want to be expanded (or hidden) in this slot.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-expander]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-expander]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-accordion](https://docs.britishgas.design/components/ns-accordion)
* [ns-skyline](https://docs.britishgas.design/components/ns-skyline)
