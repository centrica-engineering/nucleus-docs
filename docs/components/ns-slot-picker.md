---
description: Molecule | Slot picker component.
---

# ns-slot-picker

## Introduction

> Ns-slot-picker is used to allow the user to select a time slot from one or more dates and time slots.

Ns-slot-picker component is used any time you want a user to select a time slot.  This would typically be used for booking an appointment.
It can display time slots for a single day or multiple days.


## Specification

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `heading` | `string`  |   |  “” | The heading of the slot picker.
| `slotdata` | `array`  |   |           | Array of objects representing dates.

| Event      | Description |
|----------|------------|
| `change` | Dispatched when a specific slot is selected

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-slot-picker)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-slot-picker" caption="" %}

ns-slot-picker’s main property/attribute is `slotData`.  This would typically be set by setting the property through code as it is a fairly complex object.

#### SlotData

The slotdata array should consist of objects containing a date property and a slots property.

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

```html
<ns-form>
  <ns-slot-picker></ns-slot-picker>
</ns-form>
```

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use this when the user needs to select a specific appointment slot from a known selection of dates | Use this when there are many (More than 7??? Ask team) dates to choose from, use ns-appointment-picker |

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No  |
| **Does it live inside other components?** | ✅ Yes -  `ns-form` |
| **What layout classes can be used?**  | ❌ None |



