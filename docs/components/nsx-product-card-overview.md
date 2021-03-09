---
description: Experience | Product Card Comparison.
---

## Introduction

The product card overview is an experience pattern that can be used to compare HomeCare products against each other and see the difference in price when choosing to have an excess or not - without having to reload the entire page.

## Content guidance
Wrap the overview component in `ns-panel` and use its `decoration` attribute for decoration. It is possible to use any [decoration](ns-panel#specification) for ns-panel. However we recommanded to use **only** `invert-concave-grey-light` decoration for better accessibility of the contents inside the overview component.

```markup
<ns-panel decoration="invert-concave-grey-light">
    <nsx-product-card-overview></nsx-product-card-overview>
</ns-panel>
```

### With Excess
When `excess` property of the overview component is set with an array of price options, the excess prices are displayed as radio options in the overview component. When a user selects a radio option, an `excess-change` event is dispatched from the overview component. The consuming wrapper component has to listen for the event and sets the updated ns-product-card prices back in the `data` attribute of the component.

#### Usage

```markup
<nsx-product-card-overview excess="[60,0]" data='[{"monthly": 1200,"annually": 14400,"excess": 90}]' priceheading="Estimated Price"></nsx-product-card-overview>
```

![Experience pattern - Product Card Overview with Excess](https://user-images.githubusercontent.com/78729952/110317836-943a3800-8004-11eb-85e8-437f8d4edb16.png)

### Without Excess

#### Usage
```markup
<nsx-product-card-overview data='[{"monthly": 1200,"annually": 14400,"excess": 90}]' priceheading="Estimated Price"></nsx-product-card-overview>
```
![Experience pattern - Product Card Overview](https://user-images.githubusercontent.com/78729952/110448202-e177e180-80b8-11eb-8a02-6c40db07a9ba.png)

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :------ |
| `data` | `array` | `[]` | `required` | The list of price values to be updated in the product card price slots |
| `excess` | `array` | `[]` | `optional` | The list of excess prices that will be displayed as radio options to the user for excess selection|
| `priceheading` | `string` | `Estimated Price` | `optional` | The product card price heading prefix used to display in product card price heading slot along with excess value if any|

| Slots | Type |
| :--- | :--- |
| `heading` | `h` tag |
| `content` | `ns-content` tag |
| `product-*` |  `ns-product-card` tag |
| `download-files` | `ul` tag with nested multiple`li` of `ns-download` for multiple files |

## Events

| Event | Description | Details |
| :--- | :-----| :--- |
| `excess-change` | Dispatched when the user changes the excess price radio option | |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always use `data` attribute to set price in product cards. | Use `price` slot in each product card  |
| Always use `priceheading` attribute to set price heading in product cards. | Use `price-heading` slot in each product card |
| Always use `ns-content` for `content` slot to add subheading and description of the overview component. |  |

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** |  ✅ Yes  |
| **Does it live inside other components?** | ❌  No |
| **What decoration can be used?**  | `invert-concave-grey-light` |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[nsx-marketing-consent]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[nsx-marketing-consent]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!