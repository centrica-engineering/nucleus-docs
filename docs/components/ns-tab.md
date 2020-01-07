---
description: Tab component.
---

# ns-tab

## Introduction

> The singular tab that dictates what the area is about.

The tab is the button that can be clicked to change the content in the `ns-tabs`. It shows the user what content there is with a heading and an optional icon.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-tab--tab).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-tab" caption="" %}

```markup
<ns-tab>Electricity</ns-tab>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
None

**Does it live inside other components?**  
`ns-tabs`

**Atomic type**  
Atom

## Specification

| **Name** | selected |
| :--- | :--- |
| **Description** | The state of the tab |
| **Type** | Boolean |
| **Default** | false |
| **Options** | true, false |

| **Name** | icon |
| :--- | :--- |
| **Description** | Optional decoration for the text |
| **Type** | String |
| **Default** | '' |
| **Options** | Please see the documentation for ns-icon |

| **Name** | Anonymous slot |
| :--- | :--- |
| **Description** | The heading text |
| **Type** | TextNode |
| **Default** | '' |
| **Options** | n/a |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always add heading text | Add an icon to one tab and not to the other tabs |
|  | Add more than 2 words to the heading |
|  | Add different types of icons (solid, outline, functional) |

### Considerations of best practice

* Only use inside `ns-tabs` as a slot of `tab`.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-tab]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-tab]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

