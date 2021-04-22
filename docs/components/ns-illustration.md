---
description: Atom | Illustration component.
---

import { Storybook } from '../../includes/storybook.js'
import { Tokens } from '../../includes/tokens.js'

## Introduction

> Illustrations are visual symbols used to bring the warmth of British Gas brand and personality to the website.

Illustrations simplify products and services to users in a friendly manner. Illustrations always accompany content.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use them to convey depth | Make the illustrations small |
|  | Use on their own as the primary visual element |

### Considerations of best practices

* List of when to use which illustration (need to talk to Will about it).

## Usage

<Storybook story="components-ns-illustration--standard"></Storybook>

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ✅ Yes -  `ns-lockup` `ns-card` |
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type`| `string`  | `gas` | `appliance`, `boiler`, `boilerRepair`, `bulb`, `centralHeating`, `clock`, `dualFuel`, `electrics`, `electricVehicle`, `engineer`, `gas`, `help`, `home`, `oven`, `pipeAndDrain`, `protect`, `tap`, `savings`, `yellowShield` See [Illustration component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustration--standard) | Picks the illustration that is to be shown. |
| `size` | `number` | `''` | `''`, `1`, `2`, `3`, `4`, `5` | Changes the size of the illustration, with 1 being the smallest. |
| `inactive` | `string` | `false` | `true`, `false` | Will grey out the illustration. |

## Specification notes

### Size

* If you pass an empty size the icon will fill the parent element

### Inactive

* This is for decorative purposes only (does not work in IE11).

## Creating new illustrations

If you are looking to create a new illustration then please check there is not something similar already in use. If there is no suitable illustration then you should let us know and we can look at creating it for the design system.

Read our [illustration foundation page](foundations/illustrations.md#creating-new-illustrations) for more information on creating illustrations.

<Tokens component="illustration"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-illustration]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-illustration]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* Exporting illustrations SVG in Sketch [https://github.com/ConnectedHomes/nucleus/issues/670](https://github.com/ConnectedHomes/nucleus/issues/670).
* Creating an engaging experience through illustrations and the difference between icons and illustrations in [Brand Guidelines](https://centrica.frontify.com/d/6307mViOlfHB/visual-identity#/illustrations/creating-an-engaging-experience-through-illustration).
