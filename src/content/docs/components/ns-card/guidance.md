---
title: ns-card guidance
sidebar:
  label: Guidance
---

## Section

![Card - Section](./images/content-guidance-section-card.webp)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| B | Content | A single, short paragraph works best. You are able to use inline text links within the paragraph if necessary. Don't add additional headings within the paragraph and the copy length should not exceed more than two paragraphs of 3 lines each. Can contain bold copy `<b>`, inline links `<a>`, lists `<ul>` `<ol>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| C | CTA | Keep the text ‘short, relevant, and actionable’. It should not exceed more than 24 characters. |
| D | Illustration | Use to support and highlight the content. The illustration should relate to the product or service you are talking about. The [specification table](#specification) has a list of options. |

## Support

![Card - Support](./images/content-guidance-suppport-image-card.webp)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| B | Content | A single, short paragraph works best. You are able to use inline text links within the paragraph if necessary. Don't add additional headings within the paragraph and the copy length should not exceed more than two paragraphs of 3 lines each. Can contain bold copy `<b>`, inline links `<a>`, lists `<ul>` `<ol>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| C | CTA | Keep the text ‘short, relevant, and actionable’. It should not exceed more than 24 characters. |
| D | Image | This is the image that will be used above the ns-card. It should have an aspect ratio of 16:9, the dimensions should be 640x360px, the file type should be jpg, and the file size should be no more than 50kb. Don't use imagery with white backgrounds. |

## Flat

![Card - Flat](./images/content-guidance-flat-card.webp)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| B | Content | A single, short paragraph works best. You are able to use inline text links within the paragraph if necessary. Don't add additional headings within the paragraph and the copy length should not exceed more than two paragraphs of 3 lines each. Can contain bold copy `<b>`, inline links `<a>`, lists `<ul>` `<ol>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| C | CTA | Keep the text ‘short, relevant, and actionable’. It should not exceed more than 24 characters. |

## Image

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-card`| `support` | 16:9 | 640x360px | &lt; 50kb | jpeg | [ns-card-support-640x360px](https://user-images.githubusercontent.com/50207859/67642149-d3c91e00-f900-11e9-983c-9b812217b801.jpg) |

## Usage

### action

```html
<ns-card type="support" decoration="bulb">
  <h3 slot="heading">Get energy with us</h3>
  <p slot="paragraph">We've got a tariff to suit every home and family.</p>
  <div slot="action">
    <!-- action content ns-cta/ns-form -->
  </div>
</ns-card>
```

### ns-pill

To add a `ns-pill` to the card it needs to be placed inside one of the slots. Be careful about using it within the heading slot, as the pill content will be read out as part of the heading for screen readers.

If you have a group of cards, try to make sure that the pill is placed in the same location throughout those cards. This will make improve the readability of the cards.

#### Screen readers with ns-pill

```html
<ns-card>
  <h3 slot="heading">
    <ns-pill>Special Offer</ns-pill>
    Get energy with us
  </h3>
  ...
</ns-card>
```

In the above example the screen reader will read out "Special Offer Get energy with us". Make sure that is what is expected. Remember the pill cannot be used on its own within a heading. Our advice is to rarely put pills in headings as they are normally conveying a message related to the heading, but is not heading content.

#### Pill over image

If using with a type of `support` with an image. There is also the option to place the pill over the image using the `pillOverImage` attribute. Note the `ns-pill` will need to be in the `paragraph` slot as it is no longer related to the heading.

```html
<ns-card type="support" image="path/to/image" pillOverImage>
  <h3 slot="heading">
    Get energy with us
  </h3>
  <p slot="paragraph">
    <ns-pill>Special Offer</ns-pill>
    ...
  </p>
  ...
</ns-card>
```

More details on how to use the ns-pill can be found on the [ns-pill documentation](/components/ns-pill)

