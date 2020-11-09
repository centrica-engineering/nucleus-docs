---
description: Experience | Header component.
---

# nsx-header

## Introduction

> Primary navigation for the British Gas website

This experience pattern is a wrapper of the `ns-header`. The header experience pattern internally holds the sections and the secondary navigation.

The subheadings and links for the navigation can be passed in for each section to allow them to be quickly updated.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use on the British Gas website. | Use of partnership or micro sites. |
| Keep the header outside the `main` element | Only have heading links |
| Keep the header at the top | |

### Considerations of best practice

* Remember to have a `footer` id for the footer (nsx-footer adds one automatically) for the skip links.
* Remember to have a `content` id for the main content of the page (normally the `main` element) for the skip links.

## Usage

To see examples visit [Storybook](https://www.britishgas.co.uk/nucleus-experiences/demo/index.html?path=/story/nsx-header--standard).

```markup
<nsx-header sections=[SectionArray]></nsx-header>
```

## Component relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ❌ No |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `sections`    | `array` | |  | subheadings and links for each nav section |
| `hideA11yBtn`    | `boolean` | `false` |  | Ability to turn off Reciteme |

| Slots | Type |
| :--- | :--- |
| `link-*` | `a tag` |

## Specification notes

### Dynamic link slot

* This needs to follow the correct structure
* This is a dynamic slot.
* This must follow a flat DOM structure of just an anchor tag.

## Section structure

```json
[
  [
      {
        "heading": 'Gas & electricity',
        "links": [
          {
            text: 'Gas & electricity services',
            href: '/energy.html'
          },
          {
            text: 'Our gas & electricity tariffs',
            href: '/energy/gas-and-electricity.html'
          },
          {
            text: 'Get a quote',
            href: '/GetAQuote/'
          },
          {
            text: 'Connections for new builds',
            href: '/energy/gas-and-electricity/new-connections.html'
          },
          {
            text: 'Warm Home Discount',
            href: '/energy/energy-saving/warm-home-discount.html'
          }
        ]
      },
      ...
  ],
  ...
]
```

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[nsx-header]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[nsx-header])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
