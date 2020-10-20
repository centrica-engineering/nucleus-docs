---
description: Molecule | Appointment picker component.
---

# ns-appointment-picker

## Introduction

> Ns-appointment-picker is used to select a date and time slot for an appointment.

This component is used to select a date and time slot for an appointment.  The component is comprised of a ns-calendar to pick the date and a ns-slot-picker to show the available time slots.



## Specification

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `slotdata` | `array`  |   |           | Array of objects representing dates.

### SlotData

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
