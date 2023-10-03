---
description: Atom | Icon component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Icons are visual symbols used to represent functions, products and services.

Icons provide clarity to users reducing the cognitive load. Icons always supplement a single line of text and are not treated as a description. They are solid or outline a single colour.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use icons within the component | Create your own icons |
| Use this when building new Nucleus components | Add them as content |
| Use them in colours | Use a mix of outline and solid icons |
| Keep them small |  |

### Considerations of best practices

* Icons can be used as navigational elements as solid or outline single colour.
* If you want to use larger iconography have a look at ns-illustration.
* Solid icons are the default and are the preferred choice as they are quicker to recognise.
* If you want to have perceived more detail then outline icons can be used.

## Usage

<StorybookStory story="components-ns-icon--standard"></StorybookStory>

## Component placement

The ns-icon component can be used in a number of components to help create bespoke UIs

## Specification

| Attribute    | Property | Type  | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `type` | `type` | `string` | `standard` | `standard` | Type of the icon. |
| `name` | `name` | `string` | `arrow` | `appliance`, `appliance-outline`, `appliance-solid`, `arrow`, `arrow-left`, `arrow-right`, `bill`, `bill-outline`, `bill-solid`, `boiler`, `boiler-outline`, `boiler-solid`, `calendar`, `calendar-outline`, `calendar-solid`, `chevron`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `clock`, `clock-outline`, `clock-solid`, `cross`, `download`, `electricity`, `electricity-outline`, `electricity-solid`, `energy`, `energy-outline`, `energy-solid`, `error`, `error-outline`, `error-solid`, `gas`, `gas-outline`, `gas-solid`, `hide`, `hive`, `home`, `home-outline`, `home-solid`, `info`, `info-outline`, `info-solid`, `loading`, `location`, `location-outline`, `location-solid`, `menu`, `meter`, `meter-outline`, `meter-solid`, `minus`, `payment`, `payment-outline`, `payment-solid`, `plus`, `protect`, `protect-outline`, `protect-solid`, `rewards`, `rewards-outline`, `rewards-solid`, `search`, `settings`, `show`, `spanner`, `spanner-outline`, `spanner-solid`, `success`, `success-outline`, `success-solid`, `tag`, `tag-outline`, `tag-solid`, `tick`, `user`, `user-outline`, `user-solid`, `warning`, `warning-outline`, `warning-solid` See [Icon component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-icon--standard) | Picks the icon that is to be shown. |
| `size` | `size` | `number` | `''` | `''`, `1`, `2`, `3`, `4`, `5` | Changes the size of the icon, with 1 being the smallest. |



## Specification notes

### Type

* Functional icons like 'arrow' only have one version while products and services like 'gas' have an outline and solid versions where solid is the default

### Size

* If you pass an empty size the icon will fill the parent element

## Creating new icons

If you are looking to create a new icon then please check there is not something similar already in use. If there is no suitable icon then you should let us know and we can look at creating it for the design system.

Read our [icon foundation page](foundations/icons.md#creating-new-icons) for more information on creating icons.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-icon]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-icon]).

<PageFooter></PageFooter>

## Related links

* [ns-cta](components/ns-cta.md).
* Creating an engaging experience through illustrations and the difference between icons and illustrations in [Brand Guidelines](https://centrica.frontify.com/d/6307mViOlfHB/visual-identity#/illustrations/creating-an-engaging-experience-through-illustration).
