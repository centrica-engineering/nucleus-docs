---
title: ns-inputter implementation
---

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value`   | `string` | `''` |  | The value of the input or group of inputs inside `ns-inputter`. This can be used to add an initial value |
| `validation` | `array` |  | `isRequired`, `isNumber`,  `isInteger`, `isPostcode(includeEIR)`, `isFirstName`, `isLastName`, `isFullName`, `isTitle`, `isEmail`, `isPhoneNumber(includeIreland)`, `isMobileNumber`, `isPassword`, `isDate`, `minDate(date)`, `maxDate(date)`, `isDateOfBirth`, `minLength(x)`, `maxLength(x)` | A way to assist that valid values are added and to show an error message when they're not. |
| `ignoreseparator` | `boolean` | `false` | `true`, `false` | Setting this to true will force length validations to not include the separator when calculating the length|
| `execute` | `boolean` | `false` | `true`, `false` | Will trigger the validation even if the input hasn't been touched. |
| `helper` | `string` |  |  | Adds a message between the label and the input. Used to convey a message to help the user to fill in the input |
| `labelID` | `string` |  |  | Used if the label isn't part of the inputter |
| `heading` | `string` |  |  | Used for checkboxes and radio buttons instead of a label |
| `mask` | `string` |  |  | Shows what can be entered. Similar to a placeholder, but stays when values are entered. |
| `separator` | `string` |  |  | Allows the mask to manipulate the inputted value if it needs to be formatted in a certain way. |
| `name` | `string` |  |  | The name of this field as it will display in the form data. |

| Slots | Type |
| :--- | :--- |
| `label` | `label tag` |
| `tip-details` | `p tag` |
| `anonymous` | `label` `input` `select` |

| Event | Description |
| :--- | :--- |
| `change` | Will be dispatched when input changes |

## Notes

### Helper

- A way to help the user understand why or why not enter information

### LabelID

- Used if the label is outside of `ns-inputter`, such as a heading for the page. Always try to use a label or the heading first. Only use this if the element you are referring to and the label are the same.

### Mask

- This will create a max length on the input to the length of the mask.

### Separator

- Requires a mask. Can only be one character.

### Ignore Separator

- Setting the ignoreseparator property to true will force length validations (such as minLength and maxLength) to not include the separator when calculating the length. eg. With '-' as the separator: '12-34-56' would have a length of 8, if ignoreseparator is true it would count it as 6 characters

### Anonymous slot

- For single type inputs (text, email, etc), there's no need to add id/for unless you need to on the `<label>` and `<input>`
- Make sure to add id/for if it is a checkbox, select or radio input type.
- Be careful when adding additional elements outside of input and label * these scenarios haven't been tested and may need a request for change raised.

### Label slot

- To be used for single input types (text, email, etc).

### Tip-details slot

- This requires helper property which is initially hidden and can be revealed by the user when they click on the helper text.

### Validation

- It is possible to have multiple validations. For example: ["isRequired", "isNumber", "isInteger"]
- Some of the validation options can be configured by passing in values within the parentheses:
  - minLength(x) - Shows error if the input value is less than x chars.
  - maxLength(x) - Shows error if the input value is greater than x chars.
  - isDate() - Shows error if the input value is not a valid date, the expected format is dd/mm/yyyy
  - minDate(date) - Shows an error if the input value date is less than provided date.  eg. `minDate('20/12/2020')`
  - maxDate(date) - Shows an error if the input vale date is greater than the provided date.  eg. `maxDate('31/12/2022')`
  - isPostcode(includeEircode) - Shows an error if the input value is not a valid UK postcode.  This validation will include Eircode (Irish postcodes) when you pass a parameter of `true` to the validation function.  eg. `isPostcode(true)`
  - isPhoneNumber(includeIreland) - Shows an error if the input value is not a valid UK phone number.  This validation will include Irish phone numbers when you pass a parameter of `true` to the validation function.  eg. `isPhoneNumber(true)`

### Considerations

- Use defined conventions for common fields.
- Use standard examples for placeholder copy.
- If you are asking for first and last name within a text input, spell check should be disabled.
- Refer to the text input auto complete definitions.
- Always try and have a default selected radio button unless...

## Component placement

The ns-inputter component can be used in the following components:

- [ns-component](#!)
- [ns-component](#!)
