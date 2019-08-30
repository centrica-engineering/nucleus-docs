---
description: Editorial.
---

# ns-editorial

## Introduction

> The editorial component is a self-contained or supporting piece of content that is more informative than promotional in nature. In some cases, it is necessary to explain something in more detail without the user needing to take an immediate action.


[What and why details here (2-3 lines)]

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-inputter--text [EDIT LINK])

```html
<ns-editorial image="/my-images/my-image.png">
  <h2 slot="heading">Put your heading here</h2>
  <slot>
    <h3>Sub heading</h3>
    <p>Content here. Glossier hot chicken literally vegan, hoodie artisan sustainable forage lyft gentrify bespoke vinyl. Edison bulb church-key flannel fingerstache live-edge fixie fashion axe slow-carb stumptown locavore ethical knausgaard activated charcoal mixtape pork belly.</p>
    <ul class="ul-bullet">
      <li>Edison bulb</li>
      <li>Ethical knausgaard</li>
      <li>Activated</li>
      <li>Charcoal mixtape</li>
    </ul>
  </slot>
</ns-editorial>
```


## Component Relationship

- Does it live in a panel? (yes/no)
  - What layout classes can be used? (Splash/Splish/Triple)
- Does it live inside other components?
  - xyz
  - xyz
  - xyz
- Atomic type: molecule

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
| **Description** | The HTML content of the article |
| **Type**        | html |
| **Default**     | n/a |
| **Options**     | n/a |


## Best practises

| ✅ Do's | 💔 Don'ts |
| ------ | -------- |
| Use subheaders to split large paragraphs up | Add images to the article content |
|        |          |
|        |          |
|        |          |
|        |          |

### Considerations of best practises

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
