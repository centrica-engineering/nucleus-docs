---
description: Organism | Header component.
---

# ns-header

## Introduction

> Primary navigation for the website

The header provides the primary navigation for the website, whilst also being our main brand presence with the logo.

> NOTE: This is the UI component for the header - if you are looking for the header with the navigational content please use `nsx-header`.

The default choice of header across the main British Gas UK home site should be the nsx-header. 

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Create your own header if you are a micro site or external partner | Make your own header if you are part of the customer facing website. |
| Follow the correct structure for the navigation links | Add personalisation links into the navigation, as this can have an SEO issue. |
| Have a header on every page | Load links from an API of external source as this has a performance impact. |
|  | Add the header inside the `main` element. |

### Considerations of best practice

* There needs to be a very good reason to use this component instead of `nsx-header`.

## Usage

To see examples visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-footer--component).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-footer" %}

markup
<ns-header></ns-header>

## Component Relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ❌ No |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `logo`    | `string` | `https://www.britishgas.co.uk/nucleus/images/logo.svg` |  |URL to point to logo|
| `alt`    | `string` | `British Gas` |  |Alternative text for logo|
| `business`    | `string` |  |  |Optional link to business section|
| `help`    | `string` |  |  |Option link to help section|
| `account`    | `string` |  |  |Optional link to online account section|
| `hide-links` | `boolean` | `false` | `true`,`false` |Hide navigation and related navigational elements|

| Slots | Type |
| :--- | :--- |
| `anonymous` | `ul tag` |

## Specification notes

### Logo

* Only change if the header will be used in a non British Gas journey, for example a partnership with Bord Gais.
* Remember to give a new `alt` value.

### Alt

* This is the alt for the logo, so should be the company name.

### Hide links

* Add this attribute when there is no navigational links (when there is nothing in the anonymous slot).

### Anonymous slot

* This needs to follow the correct structure

#### Anonymous structure

The anonymous slot is an unordered list. Each list is a section and each list inside a section is a sub section. The list inside the sub section is a list of the links related to the sub section.

```html
<ul>
  <li> <-- First navigation section
    <h2><a href="/energy.html">Energy</a></h2> <-- navigation section heading (has a link)
    <ul>
      <li> <-- First sub section
        <h3>Gas & electricity</h3> <-- Sub section heading (no link)
        <ul> <-- list of links related to sub heading
          <li><a href="/energy.html">Gas & electricity services</a></li>
          <li><a href="/energy/gas-and-electricity.html">Our gas & electricity tariffs</a></li>
          <li><a href="/GetAQuote/">Get a quote</a></li>
          <li><a href="/energy/gas-and-electricity/new-connections.html">Connections for new builds</a></li>
          <li><a href="/energy/energy-saving/warm-home-discount.html">Warm Home Discount</a></li>
        </ul>
      </li>
      <li>
        <h3>Existing energy customers</h3>
        <ul>
          <li><a href="/energy/manage-your-energy.html">Manage your energy</a></li>
          <li><a href="/discover/home-move/">Moving home</a></li>
        </ul>
      </li>
      <li>
        <h3>Save energy</h3>
        <ul>
          <li><a href="/energy/energy-saving/energy-saving-tips.html">Energy saving tips</a></li>
          <li><a href="/energy/guides.html">Energy guides & advice</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-footer]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-footer])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
