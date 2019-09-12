---
description: A self-contained or supporting piece of content.
---

# ns-editorial [draft]

## Introduction

> The editorial component is a self-contained or supporting piece of content that is more informative than promotional in nature. In some cases, it is necessary to explain something in more detail without the user needing to take an immediate action.


## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-editorial--editorial)

```html
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

**Does it live in a panel?**  
No

**What layout class can be used?**  
N/A

**Does it live inside other components?**  
No

**Atomic type**  
Organism

## Specification

| **Name**| image |
| ----------- | ------------------------------- |
| **Description** | The url of the image |
| **Type**        | string |
| **Default**     | n/a |
| **Options**     | n/a |

| **Name**| Named slot `heading` |
| ----------- | ------------------------------- |
| **Description** | The headline of the editorial, this will appear within an h2. |
| **Type**        | string |
| **Default**     | n/a |
| **Options**     | n/a |

| **Name**| Anonymous slot |
| ----------- | ------------------------------- |
| **Description** | The HTML content of the editorial |
| **Type**        | html |
| **Default**     | n/a |
| **Options**     | n/a |


## Best practice

| ✅ Do's | 💔 Don'ts |
| ------ | -------- |
| Use subheaders to split large paragraphs up | Add images to the editorial content |
|        |          |
|        |          |
|        |          |
|        |          |

### Considerations of best practice

- xyz
- xyz
- Xyz

## Feedback

- Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[NAME OF COMPONENT]).
- See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[NAME OF COMPONENT])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links
- Blog posts
- MDN articles
- Examples of where it is used
