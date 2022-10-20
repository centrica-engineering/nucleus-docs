---
description: Molecule | Progress component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> A Progress component is used to indicate how far through a journey a user is and how many steps they have left to complete.

A progress component consists of a step count (eg. Step 1 of 3), an optional 'Info' heading statement, a stepped horizontal bar and track indicating the progress made and the step a user is on, and an optional 'Next' comment to predict the next step. It also has a 'Completed' status.

The progress component can be manipulated in the DOM without the need to reload the component. This dynamic behaviour enhances the user experience and facilitates the following experiences:

* Updating after user input
* Using in combination with other components such as previous and next cta's
* Skipping steps
* Going back to previous steps
* Automatically proceeding to the next step by itself until completed
* Create "rest" steps that automatically proceed after checking details, generating quotes, etc

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
| Use decimal places to reduce the number of overall steps | Use more than 1 on a page |
| Use JavaScript to dynamically update the component rather than re-add on each page | Use the last step as the confirmation page |
| Use the completed state on the confirmation page |  |

## Browser support

Internet Explorer 11 and Microsoft Edge 18 and lower do not show the progress bar.

## Usage

<StorybookStory story="components-ns-progress--standard"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-progress" parentComponents="ns-panel,ns-landmark"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `steps` | `number` |  |  | The maximum number of steps to show |
| `current` | `number` | `1`|  | The step to show as active (can also accept a decimal value) |
| `info` | `string` |  |  | Information about the current step |
| `next` | `string` |  |  | Information about the next step |
| `complete` | `boolean` |  | `false` | Use to show the completed state |

<Tokens component="progress"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-progress]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-progress]).

<PageFooter></PageFooter>
