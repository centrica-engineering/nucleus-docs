---
description: Molecule | Calendar component.
---

# ns-calendar

## Introduction

> Displays a single month in an interactive calendar layout

This component can used to display a month and allow the user to select a date.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use the default type for picking a date from a range | Change the date format |
| Use the default type for picking a date that the user might not be sure of (e.g. Next Friday) |  |
| Use the mask type for picking a dates that are well know to the user (e.g. Date of birth) |  |

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
| **Does it live inside other components?** | ✅ Yes - `ns-form` |
| **What layout classes can be used?**  | None |

## Specification

Also see ns-inputter [specification](https://docs.britishgas.design/components/ns-inputter#specification)

| Attribute      | Type      | Default   | Options | Description |
|----------------|-----------|-----------|---------|-----------|
| `month` | `number`  | 1  |         | Month number (Jan=1, Feb=2 etc)


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
