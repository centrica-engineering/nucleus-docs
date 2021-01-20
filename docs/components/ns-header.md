---
description: Organism | Header component.
---

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
* If changing the logo - use an SVG. Make sure that the SVG has been compressed.
* Logo can only have a max height of `62px` i.e. the British Gas logo is 160px x 62px

## Usage

To see examples visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-header--component).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-header" %}

```markup
<ns-header></ns-header>
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
| `primary`    | `array` |  |  | Primary navigation heading, subheadings and links |
| `secondary`    | `array` |  |  | Secondary navigation links and buttons |
| `logo`    | `string` | `https://www.britishgas.co.uk/nucleus/images/logo.svg` |  |URL to point to logo|
| `alt`    | `string` | `British Gas` |  |Alternative text for logo|
| `hide-links` | `boolean` | `false` | `true`,`false` |Hide navigation and related navigational elements|

| Slots | Type |
| :--- | :--- |
| `link-*` | `a tag` |

## Specification notes

### Logo

* Only change if the header will be used in a non British Gas journey, for example a partnership with Bord Gais.
* Remember to give a new `alt` value.
* Logo can only have a max height of `62px` i.e. the British Gas logo is 160px x 62px.
* Hosting of the logo should be within our own systems not pointing to an outside resource.

### Alt

* This is the alt for the logo, so should be the company name.

### Hide links

* Add this attribute when there is no navigational links (when there is nothing in the anonymous slot).

### Dynamic link slot

* This is a dynamic slot.
* This must follow a flat DOM structure of just an anchor tag.
* The suffix of the slot corresponds to the the `data-link` attribute value on the link you want to take over.
* The link should be given text content and should correlate to what the link text content was previously.

### Primary structure

This is an array of each navigation section. Each navigation section is an object.

Each section:

* `heading`
* `href`
* `subheading`
  * `heading`
  * `links`
    * `text`
    * `href`
    * `data-link`

```json
[
    {
      "heading": "Energy",
      "href": "/energy.html",
      "subheadings": [
        {
          "heading": "Gas & electricity",
          "links": [
            {
              "text": "Gas & electricity services",
              "href": "/energy.html"
            },
            {
              "text": "Our gas & electricity tariffs",
              "href": "/energy/gas-and-electricity.html"
            },
            {
              "text": "Get a quote",
              "href": "/GetAQuote/"
            },
            {
              "text": "Connections for new builds",
              "href": "/energy/gas-and-electricity/new-connections.html"
            },
            {
              "text": "Warm Home Discount",
              "href": "/energy/energy-saving/warm-home-discount.html"
            }
          ]
        },
        ...
      ]
    },
    ...
```

### Secondary navigation structure

```json
[
  {
    "text": "Help & Support",
    "href": "/help-and-support"
  }
]
```

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-header]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-header])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
