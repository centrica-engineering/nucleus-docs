---
description: Selector component.
---

# ns-selector

## Introduction

> Ns-selectors are used to group an image or illustration with a label into a card. They  showcase a product, service or option, which users can select. They can function as single, or multiple selection for the user.

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

**Does it live in a panel?**  
No

**What layout classes can be used?**  
N/A

**Does it live inside other components?**  
No - Does it not live inside inputter?

**Atomic type**  
Molecule

## Specification

| **Name**| Named slot `description` |
| :--- | :--- |
| **Description** | The text content of the selector, this can contain paragraphs and lists |
| **Type** | HTML |
| **Default** | n/a |
| **Options** | n/a |

| **Name**| Named slot `image` |
| :--- | :--- |
| **Description** | The url of the image (optional) |
| **Type** | string |
| **Default** | n/a |
| **Options** | n/a |

| **Name**| Named slot `decoration` |
| :--- | :--- |
| **Description** | The name of the illustration (optional) |
| **Type** | string |
| **Default** | n/a |
| **Options** | n/a |


## Best practices

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

## Content guidance

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-selector`| n/a | 16:9 | 640x360px | &lt; 50kb | jpeg | [ns-selector-640x360px](https://user-images.githubusercontent.com/50207859/68392177-1ee4fb80-0161-11ea-8826-14326d2c976a.jpg)

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
