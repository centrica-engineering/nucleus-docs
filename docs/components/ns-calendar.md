---
description: Molecule | Calendar component.
---

# ns-calendar

## Introduction

> Ns-calendar allows the user to select a date from a monthly calendar view.

Ns-calendar is an internal component that is designed to be used inside any component that requires the user to view and choose a date in a calendar style view.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-calendar)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-calendar”%}

## Specification

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `year` | `year`  |   | Todays date | The year that the calendar will initially display
| `month` | `number`  |   |  Todays date | The month that the calendar will initially display
| `minDate` | `string`  |  null |  | The minimum selectable date in ISO 8601 format (eg. yyyy-mm-dd)
| `maxDate` | `string`  |  null | | The maximum selectable date in ISO 8601 format (eg. yyyy-mm-dd)
| `disabledDates` | `array`  |  null |  | An array of dates that should be disabled/un-selectable.
| `enabledDates` | `array`  |  null |  | An array of dates that should be enabled.  This will override disabledDates and only enable the specified dates.
| `selectOnFocus` | `boolean` | false | true, false | When using keyboard navigation on dates; if `selectOnFocus` is set to true, then the current date in focus will automatically be selected.

| Event      | Description |
|----------|------------|
| `change` | Dispatched when a date is selected

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use inside other components that require a calendar view  | Use ns-calendar directly for data entry, it should be used within other components. eg. ns-date-picker |


### Considerations of best practices

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-calendar)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-calendar" caption="" %}

```html
<ns-calendar year="2020" month="6"></ns-calendar>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes - Can be used inside components |
| **What layout classes can be used?**  | None |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
