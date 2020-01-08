---
description: Tabs component.
---

# ns-tabs

## Introduction

> Tabs provide organisation of content separated within the same context.

Related content can be separated into clearly labelled sections.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-tabs--tabs).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-tabs" caption="" %}

```markup
<ns-tabs>
  <ns-tab slot="tab">Electricity</ns-tab>
  <ns-panel slot="panel">

    ...

  </ns-panel>
  <ns-tab slot="tab">Home Services</ns-tab>
  <ns-panel slot="panel">

    ...

  </ns-panel>

  ...

</ns-tabs>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
None

**Does it live inside other components?**  
No

**Atomic type**  
Organism

A close relationship exists between `ns-tab` and `ns-panel`. Within `ns-tabs` a number of `ns-tab` and `ns-panel` pairs exist. Each of these pairs provide a tab to select and a panel to place a layout and related content.

## Specification

| **Name** | open |
| :--- | :--- |
| **Description** | Choose which tab should be opened first |
| **Type** | Number |
| **Default** | 0 |
| **Options** | 0, 1, 2, 3... |
| **Notes** | Number relates to the order of the tabs |

| **Name** | Named slot: tab |
| :--- | :--- |
| **Description** | Slot to add the tab |
| **Type** | HTMLElement |
| **Default** | '' |
| **Options** | n/a |
| **Notes** | Multiple tabs can be added |

| **Name** | Named slot: panel |
| :--- | :--- |
| **Description** | Slot to add the panel |
| **Type** | HTMLElement |
| **Default** | '' |
| **Options** | n/a |
| **Notes** | Multiple panels can be added |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use at least two tabs | Use an excessive amount of tabs |
| Be mindful of the extra page weight | Use more than two words for your tab label |

### Considerations of best practice

* It is advisable to use tabs alongside other components to avoid building a page that consists only of tabs.
* If you see that the tabs are bleeding over the edge of the page in Polo or Rugby, and you have followed the guidance on not using more than two words on the tab label, then you probably have too many tabs.
* Consider breaking out some of your content and make sure the content is all relevant to that page.
* Related tab and panel slots should be put together in order when adding the content.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[NAME%20OF%20COMPONENT]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[NAME%20OF%20COMPONENT]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

