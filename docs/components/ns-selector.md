---
description: Selector component.
---

# ns-selector

## Introduction

> Ns-selectors are used to group an image or illustration with a label into a card. They  showcase a product, service or option that allow users to select. They can be a single selection or the user to select more than one.

## Usage

Ns-selector can be single selection (radio) or multiple selection (checkbox) it should be placed within a ns-inputter.

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-inputter--selectorradio)


```html
<ns-inputter validation="['isRequired']" heading="Chose a product" helper="" name="product">

  <ns-selector selectedvalue="product1" image="image001.png" decoration="boiler" label="This is the label text" type="radio">
    <h2 slot="heading">Wolf plaid crucifix hammock</h2>
    <p slot="subheading">Kale chips live-edge</p>
    <div slot="content">Subway tile squid godard occupy shabby chic blog hell</div>
  </ns-selector>

  <ns-selector selectedvalue="product2" image="image001.png" decoration="appliance" label="This is the label text" type="radio">
    <h2 slot="heading">Fixie snackwave fam, chambray</h2>
    <p slot="subheading">Tbh before they sold out blue bottle</p>
    <div slot="content">Salvia yuccie stumptown, 90's portland quinoa chambray.</div>
  </ns-selector>

</ns-inputter>
```


## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
N/A

**Does it live inside other components?**  
No

**Atomic type**  
Molecule

## Specification

| **Name** | validate |
| :--- | :--- |
| **Description** | validates all of the fields within the form and returns an object containing the field and validation data |
| **Type** | Function |
| **Default** | n/a |
| **Options** | n/a |

| **Name**| Named slot `type` |
| :--- | :--- |
| **Description** | The type of selector button to use radio or checkbox |
| **Type** | string |
| **Default** | n/a |
| **Options** | radio, checkbox |

| **Name**| Named slot `heading` |
| :--- | :--- |
| **Description** | The heading of the selector, this will appear within an h2. |
| **Type** | string |
| **Default** | n/a |
| **Options** | n/a |

| **Name**| Named slot `subheading` |
| :--- | :--- |
| **Description** | The sub-heading of the selector, this will appear within an h3. |
| **Type** | string |
| **Default** | n/a |
| **Options** | n/a |

| **Name**| Named slot `content` |
| :--- | :--- |
| **Description** | The text content of the selector, this will appear within a paragraph |
| **Type** | string |
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


## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use if you need to support the label with an image | Mix radio and checkboxes |
| Use if you need to support the label with an illustration | Use if the image or illustration make the selection harder to understand |
| Use a heading within the content when providing supporting copy | Add too much content, they should not be miniature web pages |
| Use inline text links into supporting content if necessary | Use without an image or an illustration |
| Bolden key messages eg. price within heading to highlight | Use imagery within ns-selector with copy embedded inside | Use a radio button or checkbox |  Use an image and an illustration together |
||Add a decoration behind the selectors |



### Considerations of best practises

* When deciding to use the ns-selector. It’s important to consider the option to just use a radio or checkbox button.
* In a many cases, a simple radio button or checkbox is all the user needs to make the choice. So only use the ns selector when adding more supporting information makes the decisioin for the user easier
* If you are using the ns-selector with an illustration, it is important to make sure you are using a Nucleus illustration. View [illustrations in Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-illustrations--appliance)
* Make sure the supporting copy is clear and concise. 
* Make sure the labels explain exactly what the user is selecting. As a rule of thumb. If all the content is removed aside from the label. The user would understand what they are selecting.


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
