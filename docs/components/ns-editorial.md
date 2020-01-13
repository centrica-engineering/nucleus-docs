---
description: Organism |  Editorial component.
---

# ns-editorial

## Introduction

> The editorial component is a self-contained or supporting piece of content that is more informative than promotional in nature. In some cases, it is necessary to explain something in more detail without the user needing to take an immediate action.

## Content guidance

| Field type | Guidelines |
| :--- | :--- |
| Heading    |  |
| Image      |  |
| Content    |  |

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-editorial`| n/a | 4:3 | 480x360px | &lt; 50kb | jpeg | [ns-editorial-480x360px](https://user-images.githubusercontent.com/50207859/67642150-d461b480-f900-11e9-9803-5ff4df7ad9a7.jpg) |

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Use Sub-headings to split large paragraphs | Add images to the editorial content |
| Use a 4:3 ratio for imagery | Include a text or direct CTA |
| Include contextual text links with content | Use imagery with white backgrounds |
|  | Use imagery with copy embedded |

### Content best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Add lists | Start without a heading |
| ![image](https://user-images.githubusercontent.com/28779/65035656-a53f4700-d941-11e9-949d-64dbcf28d35d.png) | ![image](https://user-images.githubusercontent.com/28779/65036035-6bbb0b80-d942-11e9-832b-ef79afced5e5.png) |
| Break up long paragraphs with sub-headings | Add a CTA |
| ![image](https://user-images.githubusercontent.com/28779/65035911-331b3200-d942-11e9-9d0f-d95f02acb42b.png) | ![image](https://user-images.githubusercontent.com/28779/65036062-7a092780-d942-11e9-8806-6253a1b236b7.png) |
| Add contextual text links into copy | Have a long piece of content without any breaks |
| ![image](https://user-images.githubusercontent.com/28779/65035966-4af2b600-d942-11e9-9dc6-b30d5e94ca01.png) | ![image](https://user-images.githubusercontent.com/28779/65036084-842b2600-d942-11e9-8c1a-198a8769f166.png) |
| Use without an image |  |
| ![image](https://user-images.githubusercontent.com/28779/65035985-5514b480-d942-11e9-9b2c-753f3338c7f3.png) |  |
| Reverse the editorial |  |
| ![image](https://user-images.githubusercontent.com/28779/65036012-61990d00-d942-11e9-9e7a-f51f4ef7c47e.png) |  |

### Considerations of best practice

* When starting a page using `ns-editorial`, start with the text on the left and image on the right
* Break up long paragraphs with sub-headings to make content more readable
* Keep each editorial focused on one subject

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-editorial--editorial)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-editorial" caption="" %}

```markup
<ns-editorial image="/my-images/my-image.png">
  <h2 slot="heading">Typewriter seitan chartreuse musta</h2>
  <p>Polaroid actually neutra readymade. Glossier hot chicken literally vegan, hoodie artisan sustainable forage lyft gentrify bespoke vinyl.</p>
  <p>Edison bulb church-key flannel fingerstache live-edge fixie fashion axe slow-carb stumptown locavore ethical knausgaard activated charcoal mixtape pork belly.</p>
  <h3>Wayfarers taxidermy shabby chic heirloom</h3>
  <p>Woke sartorial truffaut bespoke pinterest fingerstache hexagon lyft green juice bushwick sustainable you probably haven't heard of them irony.</p>
  <p>Cardigan single-origin coffee jean shorts, blue bottle poke subway tile farm-to-table.</p>
  <h3>Helvetica fingerstache</h3>
  <ul class="ul-bullet">
    <li>Edison bulb</li>
    <li>Ethical knausgaard</li>
    <li>Activated</li>
    <li>Charcoal mixtape</li>
  </ul>
</ns-editorial>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ❌ No |
| **What layout classes can be used?**  | None |

## Specification

| Attribute    | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `image` | `string` |  |  | Url of the image. |
| `reverse` | `boolean` | `false` | `true`,`false` | Switches the image and content position. Default is text on the left and image on the right. |

| Slots       | Type          |
| ----------- | ------------- |
| `heading`   | `h tag`       |
| `anonymous` | html elements |

## Specification  notes

### Heading

*  This should be a heading level 2.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-editorial]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-editorial])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
