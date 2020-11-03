---
description: Organism | Appointment picker component.
---

# ns-appointment-picker

## Introduction

> Ns-appointment-picker is used to select a date and time slot for an appointment.

Ns-appointment-picker is used to select a date and time slot for an appointment. The component is comprised of an ns-calendar to pick the date, and an ns-slot-picker to show the available time slots.


## Specification

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `slotdata` | `array`  |   |           | Array of objects representing dates.

| Event      | Description |
|----------|------------|
| `change` | Dispatched when a specific slot is selected

### Slot Data

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

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-appointment-picker)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-appointment-picker" caption="" %}

ns-appointment-picker’s main property/attribute is `slotData`.  This would typically be set by setting the property through code as it is a fairly complex object.

```html
<ns-form>
  <ns-appointment-picker></ns-appointment-picker>
</ns-form>
```

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use this when the customer needs to select a date and a specific appointment slot | Use to select an appointment slot on a single date, use ns-slot-picker instead |

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No  |
| **Does it live inside other components?** | ✅ Yes -  `ns-form` |
| **What layout classes can be used?**  | ❌ None |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-appointment-picker]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-appointment-picker]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!


