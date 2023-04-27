---
description: Molecule | Panel component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> The `ns-panel` component is an empty container for each section on a page.

Each `ns-panel` provides an area to place a layout, add an optional decoration and apply the appropriate margins.

## Content guidance

![ns-panel-with-offset-decoration-and-columns](images/ns-panel/content-guidance.webp)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Decoration | This...    |
| B | Top offset | This...    |
| C | Bottom offset | This... |
| D | Columns | This... |

## Decoration

Adding decoration to an `ns-panel` utilises a coloured background. It provides visual separation from other sections on the page and introduces brand [colour](foundations/colours.md) and style.

[IMAGE - decoration yellow]

The decoration has configurable top and bottom margins. These are adjusted separately from the content and allow the content to overlap these edges, if required, to achieve a more visually desirable layout.

By default there is no decoration applied.
[IMAGE - no dec]

## Columns and content

It is possible to apply a number of columns to a layout within a single `ns-panel` by adding the `ns-column` component within it. (Note the 3 cards in the images above have been added this way. See [ns-column](ns-column.md)).

Another way to configure the layout is to use the `ns-content` component withing `ns-panel`. This allows formatting text and vertical spacing (see [ns-content](ns-content.md))

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use decoration to visually separate content | Add decoration to an `ns-panel` where the previous `ns-panel` has a decoration |
| Use appropriate colour for the purpose of page in decorations | Nest a panel in a panel |
| Include more than one layout option in a `ns-panel` |  |

### Considerations of best practice

* Treat each `ns-panel` as a section of the page.
* Include no more than two `ns-lockups` in one `ns-panel` with a decoration.
* Layout options are either a `div`, `ns-article`, `ns-content`, `ns-column` or `ns-lockup`.

## Usage

<StorybookStory story="components-ns-panel--content"></StorybookStory>

## Component placement

The ns-panel component can be used in the following elements/components:

* first child of `<main>`
* [ns-tabs](components/ns-tabs.md)

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `decoration` | `string` |  | `circle-yellow-left`, `circle-yellow-right`, `circle-green-left`, `circle-green-right`, `invert-concave-cyan`, `invert-concave-grey-light`, `invert-concave-green-light`, `invert-concave-yellow`, `invert-concave-blue`, `invert-bridge-cyan`, `invert-bridge-grey-light`, `invert-bridge-green-light`, `invert-bridge-yellow`, `invert-bridge-blue` | Decoration for the background, including the colour. |
| `type` | `string` | `panel` | `panel`, `nav` | The variant of the panel. |

| Slots | Type |
| :--- | :--- |
| `anonymous` | `div`, `ns-article`, `ns-content`, `ns-column`, `ns-lockup` |

## Specification notes

* `ns-panel` is **always** a child of the `<main>` element.

### Decoration

* Check the [gradient](foundations/colours.md#our-gradients) palette.

### Anonymous

* The ns-panel can only have the following children `div`, `ns-article`, `ns-content`, `ns-column` or `ns-lockup`.

<Tokens component="panel"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-panel]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-panel]).

<PageFooter></PageFooter>
