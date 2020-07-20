---
description: Organism | Product card component.
---

# ns-product-card

## Introduction

> Product card enables users to browse and compare multiple products

## Content guidance

![Product card](https://user-images.githubusercontent.com/3082819/87520796-5c4c4200-c67b-11ea-91a9-951c3ae9cb5c.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Product name | The product name should be brief and memorable, ideally 2 to 3 words (10 to 15 characters). Maximum 25 characters. |
| B | Price subtitle | This should be used to give context to your product price. 15 to 23 characters maximum. |
| C | Primary price | The is the leading product price. This is optional as a product price may not always be available. |
| D | Secondary price | This is the secondary product price. This is also optional.|
| E | Product description | The product description can accommodate multiple sub headings, lists and paragraphs. The content should be concise and use bulleted or checked lists to support skim reading. Comparable product features should be repeated in the same list order across all products. Content can contain bold copy `<b>` `<strong>`, inline links `<a>`, lists `<ul>` `<ol>`, and caveats if required `<a href="#caveat">1</a>`. |
| F | Expander | Expanders can be used to provide additional product detail. Each product should have a maximum of 3 expanders. |
| G | Call to action | Keep the text ‘short, relevant, and actionable’. It should not exceed more than 10 characters. |
| H | Keyline | An optional colour keyline can be added to distinguish and draw attention to your products. |
| I | Image | An optional image (16x9, 4x3 or 1x1) can be added to support your product description. |


## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for products | Use for other content types, use ns-card instead |
| Use the same sections for all products in a group | Use in a form |
| Give multiple cards the same html parent | |
| Use `role="list` and `role="listitem"` when used in multiples | |

### Considerations of best practises

Give multiple cards the same html parent - To improve scannability between multiple products; the name, price, and description sections will adjust to be the same height. They do this using a common html parent that's used to share css variables.

For example

💚 Do

```markup
<div role="list`>
  <ns-product-card role="listitem">...</ns-product-card>
  <ns-product-card role="listitem">...</ns-product-card>
  <ns-product-card role="listitem">...</ns-product-card>
</div>
```

💔 Don't

```markup
<div role="list`>
  <div role="listitem">
    <ns-product-card >...</ns-product-card>
  </div>
  <div role="listitem">
    <ns-product-card >...</ns-product-card>
  </div>
  <div role="listitem">
    <ns-product-card >...</ns-product-card>
  </div>
</div>
```

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-product-card--single)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-product-card" caption="" %}

```markup
<ns-product-card keyline="green-light">
  <ns-image slot="image" src="/aem6/content/dam/britishgas/images/ns/image16_9.png" alt="Description of image" ratio="16x9"></ns-image>
  <p slot="highlight">Recommended</p>
  <h2 slot="name">Product Name</h2>
  <h3 slot="price-heading">Estimated</h3>
  <div slot="price">
    <p><b><ns-price pence="1200"></ns-price></b> / month</p>
    <p><ns-price pence="14400"></ns-price> / year</p>
  </div>
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
| **What layout classes can be used?** | `splash` `triple` |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `keyline` | `string` | none | `blue`, `yellow`, `green-light`, `cyan` | Add a graident accross the top of the card |


| Slots | Type |
| :--- | :--- |
| `image` | `<ns-image>` |
| `highlight` | `<p>` |
| `name` | `<h2>`, `<h3>` |
| `price-heading` | `<h3>`, `<h4>` |
| `price` | `<div>` |
| `description` | `<div>` |
| `expander` | `<ns-expander>` |
| `cta` | `<ns-cta >` |

## Specification notes

### image

* Check the [ns-image documentation](https://docs.britishgas.design/components/ns-image) for more information.

### name and price-heading

* priceHeading should be one heading level lower than name

### Price

* Use multiple `<p>` containing `<ns-price>`
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
