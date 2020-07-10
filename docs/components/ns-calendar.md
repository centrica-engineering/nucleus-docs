---
description: Molecule | Calendar component.
---

# ns-calendar

## Introduction

> Displays a single month in an interactive calendar table

ns-calendar should be used inside components that are required to display dates in a calendar layout.

The component allows user to:
- View dates in a month as a calendar layout
- Navigate from month to month
- Navigate from day to day using arrow keys
- Select a date
- Disable particular days
- Restrict selectable dates to a date range


## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use inside other components that require a calendar view  | Use ns-calendar directly for data entry, it should be used within other components. eg. ns-date-picker |


### Considerations of best practices

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-calendar)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-calendar" caption="" %}

```html
<ns-calendar>
  <ns-datepicker year="2020" month="6"></ns-datepicker>
</ns-calendar>
```


## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes - `ns-date-picker (coming soon)` |
| **What layout classes can be used?**  | None |

## Specification

Also see ns-inputter [specification](https://docs.britishgas.design/components/ns-inputter#specification)

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `month` | `number`  | 1  |         | Month number (Jan=1, Feb=2 etc)
| `year` | `number`  | 1  |         | Year (eg. 2020)
| `minDate` | `string`  |  |         | Minimum date allowed on calendar in iso format: eg. `'2020-07-29'`
| `maxDate` | `string`  |  |         | Maximum date allowed on calendar in iso format: eg. `'2020-10-04'`
| `selectOnFocus` | `boolean` | `false` | `true`,`false` | When set to true, the calendar will automatically select any date in focus
| `disabledDates` | `array` | `[]` | | An array of dates that shuld not be selectable.  eg. `['2020-07-19', '2020-07-20', '2020-07-21']`



## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
