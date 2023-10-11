---
title: ns-slot-picker
---

## Introduction

> The `ns-slot-picker` allows you to select a suitable time slot from a single date or multiple dates and times.

If you require your customers to select a time slot, the `ns-slot-picker` component is ideal. A typical use would be for booking appointments. You can display time slots for a single day or multiple days. Use it either by itself or in conjunction with [ns-appointment-picker](./ns-appointment-picker).

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use when the customer needs to select a specific appointment slot from a known selection of dates | Use this when there are many (more than 5) dates to choose from, use [ns-appointment-picker](./ns-appointment-picker) |
| Use to present a number of suitable slots in advance to a customer |  |
| Use to help a customer find the soonest appointment time when there is poor availability |  |

## Usage

<StorybookStory story="components-ns-slot-picker--standard"></StorybookStory>

Here's an example of how you can use the `ns-slot-picker` component in combination with headings and calls-to-action (CTAs):

![An example of how you can use the ns-slot-picker component in combination with headings and calls-to-action (CTAs)](../../../assets/ns-slot-picker/usage-example.webp)

## Specification

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `heading` | `string`  |   |  “” | The heading of the slot picker.
| `slotdata` | `array`  |   |           | Array of objects representing dates.

| Event      | Description |
|----------|------------|
| `change` | Dispatched when a specific slot is selected

### Slot Data

The slotData array should consist of objects containing a date property and a slots property.

date: String - eg. 2020-01-28 (28th January 2020)
slots: Array of objects with a name and value property 

```javascript

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

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-slot-picker]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-slot-picker]).

<PageFooter></PageFooter>
