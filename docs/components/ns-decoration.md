---
description: Decoration component.
---

# ns-decoration

## Introduction

> Adds background decoration to components

Holds the SVG decoration and masks that display the layout decoration for panels.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-decoration--circle-green).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-decoration" caption="" %}

```markup
<ns-decoration type="circle-green"></ns-decoration>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
None

**Does it live inside other components?**  
`ns-panel`

**Atomic type**  
Atom

## Specification

| **Name** | type |
| :--- | :--- |
| **Description** | Name |
| **Type** | String |
| **Default** | invert-concave |
| **Options** | invert-concave, invert-convex, invert-ramp, invert-bridge, circle-yellow, circle-green |

| **Name** | position |
| :--- | :--- |
| **Description** | Name |
| **Type** | String |
| **Default** | '' |
| **Options** | left, right, top, bottom |
| **Notes** | Used for styling only |

## Best practice

### Considerations of best practice

* This is a building block component that is used to add decoration for the panel.
* These should be used as backgrounds and should not be in the foreground.
* Don't add these to layouts or pages, instead raise an [RFC](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=&template=b--request-a-change.md&title=%5BRFC%5D), if you believe something is missing in another component.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-decoration]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-decoration]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-panel](https://docs.britishgas.design/components/ns-panel).

