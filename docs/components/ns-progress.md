---
description: Molecule | Progress component.
---

import { Storybook } from '../../includes/storybook.js'

## Introduction

> A Progress component is used to indicate how far through a journey a user is and how many steps they have left to complete.

A progress component consists of a step count (eg. Step 1 of 3), an optional 'Info' heading statement, a stepped horizontal bar and track indicating the progress made and the step a user is on, and an optional 'Next' comment to predict the next step. It also has a 'Completed' status.

There are 3 types, Standard, Dynamic and Automated. Dynamic allows the progress to be advanced or retarded by user input such as previous and next buttons. Automated is intended for use such as checking details, generating quotes, etc and will proceed to the next step by itself until completed.

## Content guidance

![Progress - In progress and completed states](https://user-images.githubusercontent.com/78355810/115561512-90f5c580-a2ad-11eb-8f56-873e0402a338.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Step Count | This text informs you of the current step you are on and how many steps there are in total.    |
| B | Info | This is a heading statement about this particular step. It is optional.    |
| C | Bar | This represents the current step and those that have been already been completed. They overlay the track.    |
| D | Track | This represents each step there is in in the process in total. Up to 20 steps are permitted.    |
| E | Next | A statement of what the following step will be.  It is optional.    |
| F | Completed | The status shown on completion of the journey.    |



## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use to indicate progress of journey | Use to show anything else such as loading |
| Info and Next parts should show a statement describing the step | Use questions on Info and Next - keep it informative |
| Keep Info and Next statements concise or omit if unnecessary or duplicating content | Omit one step but not the rest for Info - instead use an 'all or nothing approach'  |
| Keep steps to a minimum for perceived simplicity | Nest as sub-process | 
| Use up to 20 steps but ideally not more than 10 | Use less than 2 steps | 


## Usage

<Storybook story="components-ns-progress--progress"></Storybook>

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ✅ Yes -  `ns-landmark` |
| **What layout classes can be used?**  | None |

## <<< ROB HAS COMPLETED TO THIS POINT >>>
## Specification

| Attribute | Type | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | `standard` | `skyline`, `standard` | Variants for the expander. |
| `open` | `string` | `false` | `true`, `false` | If true will open the expander to show the content. |
| `icon` | `string` |  | `info`, `warning`. See [`ns-icon` component](https://britishgas.design/components/ns-icon) | Only use for a `type` of `skyline` |
| `colour` | `string` |  | `yellow` | Sets the colour for the heading - Only use for a `type` of `standard` |

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag`      |
| anonymous | html content |

## Specification notes

### Heading

* This is the heading to the anonymous content.

### Open

* Defines if the expander is in an open or closed state.

### Anonymous

* Place the content of what you want to be expanded (or hidden) in this slot.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-expander]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-expander]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-accordion](components/ns-accordion.md)
* [ns-skyline](components/ns-skyline.md)
