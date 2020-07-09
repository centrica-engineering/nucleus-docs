---
description: Organism | Product card component.
---

# ns-product-card

## Introduction

> Product card enables users to compare multiple products

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for products | Use for other content types, use ns-card instead |
| Use the same sections for all products in a section | Use in a form |
| Give multiple cards one parent | |
| Use `role="list` and `role="listitem"` when used in multiples | |

### Considerations of best practises

Give multiple cards one parent - To improve scanabilty between multiple products the name, price, and description sections will adjust to be the same height. They do this using a common parent.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-product-card--single)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-product-card" caption="" %}

```markup
<ns-product-card keyline="green">
  <ns-image slot="image" src="/aem6/content/dam/britishgas/images/ns/image16_9.png" alt="Description of image" ratio="16x9"></ns-image>
  <p slot="highlight">Recommended</p>
  <h2 slot="name">Product Name</h2>
  <h3 slot="priceHeading">Estimated</h3>
  <p slot="price">
    <b>
      <ns-price pence="1200"></ns-price>
    </b> / month
  </p>
  <p slot="secondaryPrice">
    <ns-price pence="14400"></ns-price> / year
  </p>
  <div slot="description">
    <p>A description of this product</p>
    <ul class="ul-ticked">
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
      <li>Feature 4</li>
    </ul>
  </div>
  <ns-expander slot="expander">
    <h3 slot="heading">Expander</h3>
    <p>Expander details</p>
  </ns-expander>
  <ns-expander slot="expander">
    <h3 slot="heading">Expander</h3>
    <p>Expander details</p>
  </ns-expander>
  <ns-cta href="#" slot="cta">Do something</ns-cta>
</ns-product-card>
```

## Component relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ✅ Yes |
| **Does it live inside other components?** | ✅ Yes |
| **What layout classes can be used?** | `splash` `splosh` `triple` |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `keyline` | `string` | none | `blue`, `yellow`, `green`, `cyan` | Add a graident accross the top of the card |


| Slots | Type |
| :--- | :--- |
| `image` | `<ns-image>` |
| `highlight` | `<p>` |
| `name` | `<h2>`, `<h3>` |
| `priceHeading` | `<h3>`, `<h4>` |
| `price` | `<p>` |
| `secondaryPrice` | `<p>` |
| `description` | `<div>` |
| `expander` | `<ns-expander>` |
| `cta` | `<ns-cta >` |

## Specification notes

### image

* Check the [ns-image documentation](https://docs.britishgas.design/components/ns-image) for more information.

### name and priceHeading

* priceHeading should be one heading level lower than name

### Price (price and secondaryPrice)

* Should be wrapped around `<ns-price>`
* Check the [ns-price documentation](https://docs.britishgas.design/components/ns-price) for more information.

### Description

* Div should only contain `<p>`, `<ul>`, `<ol>`

### Expander

* Multiple expanders may be used
* Check the [ns-expander documentation](https://docs.britishgas.design/components/ns-expander) for more information.

### cta

* Should always have a href
* Check the [ns-cta documentation](https://docs.britishgas.design/components/ns-image) for more information.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-product-card]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-product-card]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
