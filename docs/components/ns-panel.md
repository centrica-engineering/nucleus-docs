# ns-panel

## Introduction

Think of `ns-panel` as an empty container for each section of a page. Each `ns-panel` provides an area to place a layout and add an optional decoration.

Decorating a panel with a gradient background provides separation from the other sections of the page and introduces brand colour and style. Including the circle provides subtle emphasis.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/playground-panels--lockup-decoration-panel&knob-Decoration=invert-concave-cyan)

```html
<ns-panel>
  ...
</ns-panel>
```

## Component Relationship

- `ns-panel` is always a child of the `<main>` element  

## Specification
| **Name**| Decoration |
| ----------- | ------------------------------- |
| **Description** | The coloured gradients including circle, bridge, etc used to decorate the page |
| **Type**        | string |
| **Default**     | n/a |
| **Options**     | `invert-concave-colour`, `invert-bridge-colour`, `circle-colour-left`,`circle-colour-right`|
| **Note**     | The [gradient palette](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/foundations-colours--gradient-pallette) available: `white`, `cyan`, `yellow`, `green-light`, `grey-light`, `blue` |

| **Name**| Anonymous slot |
| ----------- | ------------------------------- |
| **Description** | The layouts of your choice |
| **Type**        | textNode |
| **Default**     | "" |
| **Options**     | n/a |


## Best practises

| ✅ Do's | 💔 Don'ts |
| ------ | -------- |
|   Alternate with and without the use of decoration     |    Don't add a decoration to every `ns-panel`    |
|   Use appropriate colour for purpose of page in decorations     |    Nest a panel in a panel      |
|   Include more than one layout in a `ns-panel`    |      |


### Considerations of best practises

- Treat each `ns-panel` as a section of the page
- Include no more than two `ns-lockups` in an `ns-panel` with a decoration
- Examples of a layout would be: `.splash` or an `ns-lockup`


## Feedback

- Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-panel]).
- See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-panel])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links
- Blog posts
- MDN articles
- Examples of where it is used
