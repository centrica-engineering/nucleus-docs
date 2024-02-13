---
description: Atom | Price component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Standardises the way dates and time are displayed.

Takes an input of a standard date and/or time string (YYYY-MM-DDTHH:MM) and outputs it into the correct date and/or time format.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Display a date only | Hide the month and only show day and year |
| Display a time only |  |


### Considerations of best practice



## Usage

<StorybookStory story="components-ns-date-time--standard"></StorybookStory>

## Component placement

ns-date-time can be used in any html text element.

## Specification

| Attribute | Property | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |-------------|
| `date` | `date` | `string` | `YYYY-MM-DDTHH:MM`, `YYYY-MM-DD`, `HH:MM` | | The date and/or time to display |
| `hide-date` | `hideDate` | `boolean` | `false` | | Whether to hide the date |
| `hide-time` | `hideTime` | `boolean` | `false` | | Whether to hide the time |
| `hideDay` | `hideDay` | `boolean` | `false` | | Whether to hide the day |
| `hideMonth` | `hideMonth` | `boolean` | `false` | | Whether to hide the month |
| `hide-year` | `hideYear` | `boolean` | `false` | | Whether to hide the year |

## Specification notes

### date

The time specified in the `date` attribute is in  24hrs format. It is displayed with am/pm following the tone of voice guidelines. 

Be careful when passing timezones in the date string due to British Summer Time.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-price]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-price]).

<PageFooter></PageFooter>
