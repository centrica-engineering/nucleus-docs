---
title: ns-card implementation
sidebar:
  label: Implementation
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

## Component placement

The ns-card component can be used in the following components:

- [ns-column](#!)
- `<div>`

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
