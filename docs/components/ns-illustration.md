---
description: Atom | Illustration component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Illustrations are visual symbols used to bring the warmth of British Gas brand and personality to the website.

Illustrations simplify products and services to users in a friendly manner. Illustrations always accompany content.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use them to convey depth | Make the illustrations small |
| Use them to differentiate or define the content | Use on their own as the primary visual element |
| Use them to help signpost | Use instead of icons |
| Check existing usage | Alter the colours or apply visual effects |


### Considerations of best practices

When choosing an illustration from the available set in Nucleus, it should be relevant to the content. Each has a descriptive name to help aid selection. (See Usage below).

Avoid unnecessary duplication of an illustration on a page. Be aware of existing usage elsewhere.

## Usage

<StorybookStory story="components-ns-illustration--standard"></StorybookStory>

## Component placement

The ns-illustration component can be used in a number of components to help create bespoke user interfaces (UIs).

## Specification

| Attribute | Property | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `type` | `type` | `string` | `standard` | `standard` | Type of illustration. |
| `name` | `name` | `string` | `gas` | `appliance`, `appliance-cover`, `appliance-repair`, `battery`, `boiler`, `boiler-cover`, `boiler-repair`, `bulb`, `calendar`, `central-heating`, `chat`, `clock`, `compass`, `cosmo`, `document`, `dual-fuel`, `electric-charging-station`, `electric-vehicle`, `electrics`, `engineer`, `error`, `fix`, `fixed-sa`, `gas`, `green-leaf`, `help`, `home`, `home-insurance`, `laptop`, `low-carbon`, `multiple-people`, `oven`, `phone`, `pipe-and-drain`, `protect`, `radiator`, `savings`, `settings`, `sms`, `tap`, `track-engineer`, `van`, `whats-app`, `yellow-shield` See [Illustration component in Storybook](https://main--63ea3fa8c3721b415537bccc.chromatic.com/?path=/story/components-ns-illustration--all) | Picks the illustration that is to be shown. |
| `size` | `size` | `number` | `''` | `''`, `1`, `2`, `3`, `4`, `5` | Changes the size of the illustration, with 1 being the smallest. |
| `inactive` | `inactive` | `string` | `false` | `true`, `false` | Will grey out the illustration. |

## Specification notes

### Size

* If you pass an empty size the icon will fill the parent element

### Inactive

* This is for decorative purposes only (does not work in IE11).

## Creating new illustrations

If you are looking to create a new illustration, please check if there is not something similar already in use. If there is no suitable option, liaise with the brand team to define a new one and let us know so we can help with the required specification for adding it to the design system.

Read our [illustration foundation page](foundations/illustrations.md#creating-new-illustrations) for more information on creating illustrations.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-illustration]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-illustration]).

<PageFooter></PageFooter>

## Related links

* Creating an engaging experience through illustrations and the difference between icons and illustrations in [Brand Guidelines](https://centrica.frontify.com/d/6307mViOlfHB/visual-identity#/illustrations/creating-an-engaging-experience-through-illustration).
