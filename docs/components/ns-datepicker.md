---
description: Molecule | Date picker component.
---

# ns-datepicker

## Introduction

> Use to help the user enter a date in a form.

This component wraps our ns-inputter component. Guidelines defined on the ns-inputter should also be followed when using this component.
[ns-inputter documentation](https://docs.britishgas.design/components/ns-inputter)

## Best practice

Also see ns-inputter [best practices](https://docs.britishgas.design/components/ns-inputter#best-practice)

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use the default type for picking a date from a range |  |
| Use the default type for picking a date that the user might not be sure of (e.g. Next Friday) |  |
| Use the mask type for picking a dates that are well know to the user (e.g. Date of birth) |  |

### Considerations of best practices

When the browser supports the `<input type="date">` the format of the input will change depending on the settings of thier device. For example users in UK will get the dd/mm/yyyy date format wheras users in United States of America will get the m/d/yy date format. Regardless of the input format dates are always returned following the ISO 8601 date format

### ISO 8601 date format

This component uses the ISO 8601 date format: YYYY-MM-DD. This allows us to build upon the native `<input type="date">` which also uses the same standard and provides a consistent approach to hadndling dates throughout nucleus.

## Browser support

Some browsers do not support `type='date'` (e.g. Safari on Desktop). The component detects if the browser supports this input and will fallback to use the mask type instead.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-datepicker)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-datepicker" caption="" %}

```html
<ns-form>
  <ns-datepicker label="Date" value="2020-12-31"></ns-datepicker>
</ns-form>
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
| `autocomplete` | `string`  | "off"     |         | Value to pass to the input autocomplete attribute.
| `helper`       | `string`  |           |         | See [ns-inputter](https://docs.britishgas.design/components/ns-inputter#specification). |
| `label`        | `string`  |           |         | The text to place in the label. |
| `max`          | `string`  |           |         | The maximum date allowed to be entered into the input. Must be in YYYY-MM-DD format. Validation will trigger if date is entered after this value |
| `min`          | `string`  |           |         | The minimum date allowed to be entered into the input. Must be in YYYY-MM-DD format. Validation will trigger if date is before after this value |
| `name`         | `string`  | "date"    |         | See [ns-inputter](https://docs.britishgas.design/components/ns-inputter#specification). |
| `type`         | `string`  | "default" | `default`, `mask` | Use to select the input format. Default is the native date input. |
| `validation`   | `array`   |           |         | See [ns-inputter](https://docs.britishgas.design/components/ns-inputter#specification). minDate and Max date are automatically applied if the min and max values are populated. |
| `value`        | `string`  |           |         | The value the input inside the component. This can be used to add an intial value. |

| Slots | Type |
| :--- | :--- |
| `tip-details` | `div` |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!


## Related links

* [ns-inputter](https://docs.britishgas.design/components/ns-inputter)
* [ns-form](https://docs.britishgas.design/components/ns-fieldset)
