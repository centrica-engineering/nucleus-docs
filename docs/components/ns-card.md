---
description: Card component.
---

# ns-card

## Introduction

> Cards can be used to contain content in a consistent and structured way.

Cards are used to apply a container around a related grouping of information; this can be done through imagery, illustrations and typography.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-card--section).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-card" caption="" %}

```markup
<ns-card type="section" decoration="bulb">
  <h2 slot="heading">Get energy with us</h2>
  <p slot="paragraph">We've got a tariff to suit every home and family.</p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">Get a quote</ns-cta>
  </a>
</ns-card>
```

## Component Relationship

**Does it live in a panel?**  
Yes

**What layout classes can be used?**  
`.splash` `.triple`  
`.splish` `.triple`

**Does it live inside other components?**  
`ns-caveat`  
`ns-landmark`  
`ns-tabs`

**Atomic type**  
Molecule

## Specification

| **Name** | type |
| :--- | :--- |
| **Description** | Defines the role of the card and changing the style |
| **Type** | String |
| **Default** | section |
| **Options** | section, support, flat |

| **Name** | decoration |
| :--- | :--- |
| **Description** | Illustration that is show in the section type card |
| **Type** | String |
| **Default** | '' |
| **Options** | See [Illustration component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--appliance) |
| **Notes** | Required if the type is section |

| **Name** | image |
| :--- | :--- |
| **Description** | Adds an image above the card content for the support card |
| **Type** | String |
| **Default** | '' |
| **Options** | n/a |
| **Notes** | Images is always at a ratio of 4x3 |

| **Name** | alt |
| :--- | :--- |
| **Description** | The alternative text for the image |
| **Type** | String |
| **Default** | '' |
| **Options** | n/a |

| **Name** | Named slot: heading |
| :--- | :--- |
| **Description** | Heading title text |
| **Type** | HTMLElement |
| **Default** | '' |
| **Options** | n/a |
| **Notes** | This should be a heading 3 |

| **Name** | Named slot: paragraph |
| :--- | :--- |
| **Description** | Paragraph content for the card |
| **Type** | HTMLElement |
| **Default** | '' |
| **Options** | n/a |
| **Notes** | This should be a paragraph tag |

| **Name** | Named slot: cta |
| :--- | :--- |
| **Description** | Action for the card |
| **Type** | HTMLElement |
| **Default** | '' |
| **Options** | n/a |
| **Notes** | This should be an anchor with the [ns-cta](https://docs.britishgas.design/components/ns-cta) or just the [ns-cta](https://docs.britishgas.design/components/ns-cta) |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always use them in the triple layout | Use the text CTA in the section card |
| Use to direct customers to the actions | Mix card types in a row |
| Embolden text in the paragrah that is important | Have two or more cta's for a card |
| Make your CTA copy unique, stating the action | Repeat the CTA copy in each card |
| Use section cards to navigate users to primary actions | Use inline links in the paragraph |
| Consider using decoration in the panel to add emphasis on the cards |  |
|  | Use the section card without a decoration |

### Considerations of best practice

* Consider your CTA type and try to keep them consistent between rows across the cards, unless there is a need.
* There can be less than three cards in a row, but it should always use the triple layout. Always consider a lockup for this, before using the cards.
* Headings work best with one to four words.
* Please check the imagery guidlines when adding an image to the card.
* Be careful when using decoration in the panel with the section cards as the blue on blue with the CTA's will make them not accessible.
* There should always be a heading to the group of cards inside the panel.

## Content guidance

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-card`| `support` | 16:9 | 640x360px | &lt; 50kb | jpeg | [ns-card-support-640x360px](https://user-images.githubusercontent.com/50207859/67642149-d3c91e00-f900-11e9-983c-9b812217b801.jpg)

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-card]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-card]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-card section panel](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-panels--section-cards).
* [ns-card support panel](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-panels--support-image-cards).


