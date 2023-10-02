---
description: Organism | Appointment picker component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'


## Introduction

> `ns-appointment-picker` is used to select a date and time slot for an appointment.

`ns-appointment-picker` is used to select a date and time slot for an appointment. The component is comprised of an `ns-calendar` to pick the date, and an `ns-inputter` to show the available time slots for the selected date.


## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use this when the customer needs to select a date and a time slot for an appointment | Use to select an appointment slot on a single date. Use `ns-inputter` radio options instead |
| Use `ns-inputter` to surface the best suitable slots for a customer before presenting the full appointment picker, where appropriate. | Don't force customers to use the appointment picker first if there is very poor appointment availability. Present the next available appointments in a `ns-inputter` radio first. |
| Use `ns-alert` alongside `ns-appointment-picker` to surface any important notifications regarding a customer booking.| |
| Use multiple appointment pickers in ns-tabs so users can easily access different types of bookings.| |


## Usage

<StorybookStory story="components-ns-appointment-picker--standard"></StorybookStory>

The main property of `ns-appointment-picker` is `slotData`.  This would typically be set by setting the property through code as it is a fairly complex object.

## Usage example

![ns-appointment-picker](images/ns-appointment-picker/usage-example-ns-appointment-picker.webp)

| Key | Description | 
| :--- | :--- |
| A | `ns-calendar` - Calendar component|
| B | `ns-inputter` - Inputter component |


## Specification

| Attribute | Property | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `slot-data` | `slotData` | `array` | | | Array of objects representing dates.
| `value` | `value` | `string` | | | Value of the selected appointment.

| Event | Description |
| :--- | :--- |
| `change` | Dispatched when a specific slot is selected

### Slot Data

The `slotData` array property should consist of objects containing a `date` property and a `slots` property.

date: String - eg. 2020-01-28 (28th January 2020)
slots: Array of objects with a name and value property 

```js
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

<ComponentPlacement component="ns-appointment-picker" parentComponents="ns-form,ns-fieldset"></ComponentPlacement>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-appointment-picker]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-appointment-picker]).

<PageFooter></PageFooter>
