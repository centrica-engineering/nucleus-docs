---
title: ns-card placement
---

## Component placement

The ns-card component can be used in the following components:

- [ns-column](#!)
- `<div>`

### Using with action

```html
<ns-card type="support" decoration="bulb">
  <h3 slot="heading">Get energy with us</h3>
  <p slot="paragraph">We've got a tariff to suit every home and family.</p>
  <div slot="action">
    <!-- action content ns-cta/ns-form -->
  </div>
</ns-card>
```

### Using with ns-pill

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
