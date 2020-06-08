---
description: Molecule | Selector component.
---

# ns-selector

## Introduction

> Ns-selectors are used to group an image or illustration with a label into a card. They  showcase a product, service or option, which users can select. They can function as single, or multiple selection for the user.

## Content guidance

![ns-selector](https://user-images.githubusercontent.com/3082819/84010531-b1a27e80-a96c-11ea-94de-a534834f7aff.png)

| Field type | Guidelines |
| :--- | :--- |
| A | Label | The label should describe the selection being made using the most concise content possible. The recommended length is 21 characters maximum. |
| B | Heading | The heading can provide an expanded description of the item being selected. The recommended length is between 3 and 21 characters. This heading should use a light font weight to allow the emphasis on the label. |
| C| Paragraph  | The recommended length is 1 concise paragraph or 5 short bullet points, not exceeding 125 characters in total. Can contain bold copy <b>, inline links <a>, lists <ul> <ol>, and a caveat at the end of the relevant paragraph if required <a href="#caveat">1</a>. |

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
|  |Add a decoration behind the selectors |

### Considerations of best practices

* When deciding to use the ns-selector, it’s important to consider whether a radio or checkbox button itself would be more appropriate.
* In a many cases, a simple radio button or checkbox is all the user needs to make the choice. Only use the ns selector when adding more supporting information makes the decisioin for the user easier.
* If you are using the ns-selector with an illustration, it's important to make sure you are using a Nucleus illustration. [View illustrations in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--appliance)
* Make sure the supporting copy is clear and concise.
* Make sure the labels explain exactly what the user is selecting. If all content is removed other than the label, then the user would still understand what they are selecting.

## Usage

Ns-selector can be single selection (radio) or multiple selection (checkbox) it should be placed within a ns-inputter.

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-inputter--selectorradio)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-selector" caption="" %}

```html
<ns-inputter validation="['isRequired']" heading="Choose a product" name="product">

  <ns-selector decoration="gas" image="gas.png">
    <input type="radio" aria-describedby="item-1" name="question" value="gas">
    <label for="question-gas">Gas</label>
    <div slot="description" id="item-1">
      <ul class="ul-bullet">
        <li>Wolf plaid crucifix hammock</li>
        <li>Kale chips live-edge</li>
        <li>Subway tile squid godard occupy shabby chic blog</li>
      </ul>
    </div>
  </ns-selector>

  <ns-selector decoration="electricity" image="electricity.png">
    <input type="radio" aria-describedby="item-2" name="question" value="electricity">
    <label for="question-gas">Electricity</label>
    <div slot="description" id="item-2">
      <ul class="ul-bullet">
        <li>Wolf plaid crucifix hammock</li>
        <li>Kale chips live-edge</li>
        <li>Subway tile squid godard occupy shabby chic blog</li>
      </ul>
    </div>
  </ns-selector>

</ns-inputter>
```


## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes - `ns-inputter` |
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `checked` | `string` |  |  | Check the value. |
| `decoration` | `string` |  |See [Illustration component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--appliance)| Illustration that is show in the section type card |
| `image`      | `string` |  |  | Optional image |
| `value` | `any`     |  |  | Value of selection |

| Slots | Type |
| :--- | :--- |
| `description` | `div` |
| `anonymous` | `input` `label` |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
