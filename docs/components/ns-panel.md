---
description: Molecule | Panel component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'

## Introduction

`ns-panel` is an empty container that holds each section of a page. Each `ns-panel` provides an area to place a layout and add an optional decoration.

Adding a decoration to an `ns-panel` using a gradient background provides visual separation from the other sections of the page and introduces brand [colour](foundations/colours.md) and style. Using the circle decoration provides subtle emphasis to an `ns-panel`.

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

<StorybookStory story="components-ns-panel--standard"></StorybookStory>

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
| `anonymous` | `div`, `ns-article`, `ns-content`, `ns-column`, `ns-lockup`, `ns-standout` |

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

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
