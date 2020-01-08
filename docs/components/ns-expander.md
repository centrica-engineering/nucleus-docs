---
description: Expander component.
---

# ns-expander

## Introduction

> Expanders are used to show or hide content.

An expander consists of a heading and a content slot.  When the heading is clicked the component opens to reveal the content.
When in an open state, clicking the heading will hide the content.

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

**Does it live in a panel?**  
No

**What layout classes can be used?**  
N/A

**Does it live inside other components?**  
`ns-accordion`
`ns-skyline`

**Atomic type**  
molecule

## Specification

| **Name** | Named slot `heading` |
| :--- | :--- |
| **Description** | The heading for the entire accordion |
| **Type** | String |
| **Default** | n/a |
| **Options** | n/a |

| **Name** | open |
| :--- | :--- |
| **Description** | Defines if the expander is in an open or closed state |
| **Type** | Boolean |
| **Default** | false |
| **Options** | true,false |

| **Name** | Anonymous slot |
| :--- | :--- |
| **Description** | Place html content into this slot |
| **Type** | html |
| **Default** | n/a |
| **Options** | n/a |

## Best practises

| 💚 Do | 💔 Don't |
| :--- | :--- |
| Use instead of modal | Use to hide important information (such as caveats) |
| Use headings, paragraphs, lists for content | Use as a solution to excessive copy on a page |
| Make sure heading relates to content | Nest expanders within expanders |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-expander]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-expander]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
