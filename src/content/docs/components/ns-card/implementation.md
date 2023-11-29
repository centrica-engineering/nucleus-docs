---
title: ns-card implementation
---

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `alt`        | `string` |           |           | The alternative text for the image |
| `decoration` | `string` |           |See [Illustration component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--standard) and See [Icon component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-icon--error) | Illustration that is shown in the section type card and Icon used in ns-highlighter |
| `image`      | `string` |           |           | Adds an image above the card content for the support |
| `type`       | `string` | "section" | "section", "support", "flat" | Defines the role of the card and changing the style |
| `pillOverImage` | `boolean` |       |           | Used to put the pill in the top left of the image when using `type="support"` and an image | 

### Support and Flat

| Slots        | Type                | Description |
| :--- | :--- | :--- |
| `heading`    | `h tag` |  |
| `paragraph`  | `p tag` |  |
| `action`     | `ns-cta`, `ns-form` |  |
| `cta`        | `ns-cta` | Deprecated |

### Section

| Slots        | Type                |
| :--- | :--- |
| `heading`    | `h tag` |
| `paragraph`  | `p tag` |
| `cta`     | `ns-cta` |

## Notes

### Decoration

* Required if the type is section

### Image

* Images are always at a ratio of 16:9

### Heading

* This should be a heading level 3

### Action

* Action is used to hold interactive content e.g. buttons, forms, etc
* On `support` and `flat` types the action slot is not shown if the deprecated cta slot is used

### CTA

* Only for `section` types
* This should be an anchor with the [ns-cta](../components/ns-cta) or just the [ns-cta](../components/ns-cta)

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always use them in the triple layout | Use the text CTA in the section card |
| Use to direct customers to the actions | Mix card types in a row |
| Embolden text in the paragraph that is important | Have two or more cta's for a card |
| Make your CTA copy unique, stating the action | Repeat the CTA copy in each card |
| Use section cards to navigate users to primary actions | Use inline links in the paragraph |
| Consider using decoration in the panel to add emphasis on the cards | Use the section card without a decoration |

### Considerations

* Consider your CTA type and try to keep them consistent between rows across the cards, unless there is a need.
* There can be less than three cards in a row, but it should always use the triple layout. Always consider a lockup for this, before using the cards.
* Headings work best with one to four words.
* Please check the imagery guidelines when adding an image to the card.
* Be careful when using decoration in the panel with the section cards as the blue on blue with the CTA's will make them not accessible.
* There should always be a heading to the group of cards inside the panel.

## Usage

### Section

<StorybookStory story="components-ns-card--section"></StorybookStory>

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
