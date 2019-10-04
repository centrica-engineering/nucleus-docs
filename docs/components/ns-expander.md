
---
description: Expander component.
---

# ns-expander

## Introduction

> Expanders are used to show or hide content within an accordion component.

An expander consists of a heading and a content slot.  When the heading is clicked the component expands to reveal the content.
When in an expanded state, clicking the heading will hide the content.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-expander--expander)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-expander" caption="" %}

```markup
<ns-expander>
  <h3 slot="heading">Can I manage my account online?</h3>

  Yes, with an online account you can arrange a service visit,
  find out whatʼs happening with your appointment, submit a meter reading and book an engineer.
  Weʼve even got a free smartphone app.

</ns-expander>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
N/A

**Does it live inside other components?**  
ns-accordion

**Atomic type**  
molecule

## Specification

| **Name** | Named slot `heading` |
| :--- | :--- |
| **Description** | The heading for the entire accordion |
| **Type** | String |
| **Default** | n/a |
| **Options** | n/a |

| **Name** | Anonymous slot |
| :--- | :--- |
| **Description** | Place html content into this slot |
| **Type** | html |
| **Default** | n/a |
| **Options** | n/a |

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |

### Considerations of best practises

* 

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

