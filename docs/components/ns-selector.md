---
description: Molecule | Selector component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

Selectors are used to group an image or illustration with a label into a card. They showcase a product, service or option, which users can select. They can function as single, or multiple selection for the user.

## Content guidance

### Selector - Illustration

![Selector - Illustration](https://user-images.githubusercontent.com/78355810/115743858-f4552580-a389-11eb-88a9-55bf38d45716.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Label | The label should describe the selection being made using the most concise content possible. The recommended length is 21 characters maximum. |
| B | Heading | The heading can provide an expanded description of the item being selected. The recommended length is between 3 and 21 characters. This heading should use a light font weight to allow the emphasis on the label. |
| C | Paragraph  | The recommended length is 1 concise paragraph or 5 short bullet points, not exceeding 125 characters in total. Can contain bold copy `<b>`, inline links `<a>`, lists `<ul>` `<ol>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| D | Illustration | Use to support and highlight the content. The illustration should relate to the product or service you are talking about. The [specification table](../components/ns-card.md#specification) has a list of options. |
| E | Keyline | An optional colour keyline can be added to distinguish and draw attention to your selectors. |
| F | Pill | You can use a pill to promote an option that has something special like a discount, a promotion or a because it's eco-friendly. Use the pill the `h3` and the list. Try not to add a pill to each option as it may lose its attention grabbing power. |
| G | Expanders | An optional addition of an [ns-expander](../components/ns-expander) component within the selector allows for more detail to be discoverable. It consists of a heading and an anonymous content slot. When the heading is clicked the component opens to reveal the content. When in an open state, clicking the heading will hide the content.

### Selector - Image

![Selector - Image](https://user-images.githubusercontent.com/78355810/115587322-76c7e180-a2c5-11eb-9e44-d9ae09de9ad4.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Label | The label should describe the selection being made using the most concise content possible. The recommended length is 21 characters maximum. |
| B | Paragraph  | The recommended length is 1 concise paragraph or 5 short bullet points, not exceeding 125 characters in total. Can contain bold copy `<b>`, inline links `<a>`, lists `<ul>` `<ol>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| C | Image | This is the image that will be used above the ns-card. It should have an aspect ratio of 16:9, the dimensions should be 640x360px, the file type should be jpg, and the file size should be no more than 50kb. |
| D | Keyline | An optional colour keyline can be added to distinguish and draw attention to your selectors. |
| E | Expanders | An optional addition of an [ns-expander](../components/ns-expander) component within the selector allows for more detail to be discoverable. It consists of a heading and an anonymous content slot. When the heading is clicked the component opens to reveal the content. When in an open state, clicking the heading will hide the content.


### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-selector`| n/a | 16:9 | 640x360px | &lt; 50kb | jpeg | [ns-selector-640x360px](https://user-images.githubusercontent.com/50207859/68392177-1ee4fb80-0161-11ea-8826-14326d2c976a.jpg) |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use if you need to support the label with an image | Mix radio and checkboxes |
| Use if you need to support the label with an illustration | Use if the image or illustration make the selection harder to understand |
| Use a heading within the content when providing supporting copy | Add too much content, they should not be miniature web pages |
| Use inline text links into supporting content if necessary | Use without an image or an illustration |
| Bolden key messages eg. price within heading to highlight | Use imagery within ns-selector with copy embedded inside |
| Use a radio button or checkbox |  Use an image and an illustration together |
| Use expanders if you need to include more details |Add a decoration behind the selectors |
| | Use more than 5 expanders on a selector

### Considerations of best practices

* When deciding to use the ns-selector, it’s important to consider whether a radio or checkbox button itself would be more appropriate.
* In a many cases, a simple radio button or checkbox is all the user needs to make the choice. Only use the ns selector when adding more supporting information makes the decision for the user easier.
* If you are using the ns-selector with an illustration, it's important to make sure you are using a Nucleus illustration. [View illustrations in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--appliance)
* Make sure the supporting copy is clear and concise.
* Make sure the labels explain exactly what the user is selecting. If all content is removed other than the label, then the user would still understand what they are selecting.
* If using the optional Expander, keep the content concise – you can use lists in the content to help. Be mindful that once a heading is expanded it forces the bottom of that selector down and that of any other instances in the row. 

## Usage

<StorybookStory story="form-components-ns-selector--radio-with-image"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-selector" parentComponents="ns-inputter,ns-column"></ComponentPlacement>

When used in ns-column, ns-column must be a child of ns-inputter:

```html
<ns-inputter>
  <ns-column hockeypitch="3">
    <ns-selector>...</ns-selector>
    <ns-selector>...</ns-selector>
    <ns-selector>...</ns-selector>
  </ns-column>
</ns-inputter>
```

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `checked` | `string` |  |  | Check the value. |
| `decoration` | `string` |  |See [Illustration component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--appliance)| Illustration that is show in the section type card |
| `image`      | `string` |  |  | Optional image |
| `value` | `any`     |  |  | Value of selection |
| `keyline` | `string` | none | `blue`, `yellow`, `green-light`, `cyan`, `red` | Add a gradient across the top of the selector |

| Slots | Type |
| :--- | :--- |
| `description` | `div` |
| `anonymous` | `input` `label` |

<Tokens component="selector"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-inputter](../components/ns-inputter.md)
* [ns-pill](../components/ns-pill.md)
* [ns-expander](../components/ns-expander.md)
