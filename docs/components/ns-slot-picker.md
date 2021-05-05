---
description: Molecule | Slot picker component.
---

import { Storybook } from '../../includes/storybook.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> Ns-slot-picker is used to allow the user to select a time slot from one or more dates and time slots.

Ns-slot-picker is used any time you want a customer to select a time slot. This would typically be used for booking an appointment. It can display time slots for a single day or multiple days. It can be used on it's own or upfront before displaying ns-appointment-picker. It is also used in [ns-appointment-picker](components/ns-appointment-picker.md).

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use this when the customer needs to select a specific appointment slot from a known selection of dates | Use this when there are many (more than 5) dates to choose from, use ns-appointment-picker |
| Use this to present a number of suitable slots upfront to a customer |  |
| Use this to help a customer find the soonest available appointment time when there is poor appointment availability |  |

## Usage

<Storybook story="components-ns-slot-picker--standard"></Storybook>

## Usage example 

![Slot picker](https://user-images.githubusercontent.com/3082819/98025907-3b625500-1e02-11eb-8297-9be9525629ff.png)

## Specification

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `heading` | `string`  |   |  “” | The heading of the slot picker.
| `slotdata` | `array`  |   |           | Array of objects representing dates.

| Event      | Description |
|----------|------------|
| `change` | Dispatched when a specific slot is selected

#### Slot Data

The slotData array should consist of objects containing a date property and a slots property.

date: String - eg. 2020-01-28 (28th January 2020)
slots: Array of objects with a name and value property 

```
const slots = [{
  name: '9am to 12pm',
  value: '0900-1200'
}, {
  name: '10am to 2pm',
  value: '1000-1400'
}, {
  name: '12am to 5pm',
  value: '1200-1700'
}]

const slotData = [{ date: '2020-01-28', slots: slots }, { date: '2020-01-29', slots: slots }];

```

## Component placement

<ComponentPlacement component="ns-slot-picker" parentComponents="ns-form,ns-fieldset"></ComponentPlacement>

<Tokens component="slot-picker"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-slot-picker]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-slot-picker]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!


