---
description: Card component.
---

# ns-card

## Introduction

> Cards give users a set of options for users to choose from

Cards give a story about why the user should go to the next action. This can be done through imagery, illustrations and typography. They can nudge users to a specific subject or area.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-card--section).

```html
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
Splash triple  
Splish triple

**Does it live inside other components?**  
No

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
| **Options** | See [Illustration component documentation](https://docs.britishgas.design/component/ns-illustration) |
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
| **Notes** | This should be an anchor with the [ns-cta](https://britishgas.design/components/ns-cta) or just the [ns-cta](https://britishgas.design/components/ns-cta) |

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always use them in the triple layout | Use the text CTA in the section card |
| Use to direct customers to the actions | Use the key CTA in any of the cards |
| Embolden text in the paragrah that is important | Mix card types in a row |
| Make your CTA copy unique, stating the action | Have two or more cta's for a card |
| Use section cards to navigate users to primary actions | Repeat the CTA copy in each card |
| Consider using decoration in the panel to add emphasis on the cards | Use inline links in the paragraph |
| | Use the section card without a decoration |

### Considerations of best practises

* Consider your CTA type and try to keep them consistent between rows across the cards, unless there is a need.
* There can be less than three cards in a row, but it should always use the triple layout. Always consider a lockup for this, before using the cards.
* Headings work best with one to four words.
* Please check the imagery guidlines when adding an image to the card.
* Be careful when using decoration in the panel with the section cards as the blue on blue with the CTA's will make them not accessible.
* There should always be a heading to the group of cards inside the panel.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-card]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-card]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-card section panel](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/playground-panels--section-cards).
* [ns-card support panel](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/playground-panels--support-image-cards).
