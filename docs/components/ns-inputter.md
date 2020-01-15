---
description: Molecule | Inputter component.
---

# ns-inputter

## Introduction

Inputters are used to help people enter and select information. Inputters are normally found within forms. There are different types of inputters including text, radio button, checkbox and select (drop-downs).

> A wrapper of native inputs to create a form. There are many types of inputs including text, radio button, checkbox and select.

## Content guidance

| Field type  | Guidelines |
| :--- | :--- |
| Heading |  |
| Labels |  |
| Placeholder |  |
| Helper |  |
| Tip |  |

## Best practice

### Headings

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use to Introduce a set of checkboxes or radio buttons |  |
| Use for questions |  |
| Use sentence case |  |
| Only use text |  |
| Punctuate sentences |  |

### Labels

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Be concise | Use full stops |
| Use `<label>` element | Add classes to labels |
| Use sentence case | Use as links |
| Only use text |  |

### Helper text

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep it to one line | Use for error messaging |
| Use it to explain why we need information | Put examples of inputs inside |
| Use it when the reason for asking maybe unclear |  |
| Use as a prompt |  |

### Tip Detail

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use to provide additional context to helper text | Repeat helper text |
| Use basic formatting for copy | Add imagery |
| Use as an explanation | Exceed two paragraphs. Link off if necessary |
| Use as a prompt |  |

### Placeholder

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Provide example of expected input | Use real data |
| Use 'eg.' before example | Use as an explanation or a prompt |

### Validation

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use only when required | Use real data |
| Only use to validate the format of the input | Don't used for... |

### Masks and separators

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Only use an input type | Use a textarea, checkbox or radio button |
| Only use a character for a separator | Use a "placeholder" attribute on the input |
|  | Put more than one separator together, e.g. `00--00` |
|  | Start or end with a separator |

### Text Input

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Only use our specified text type. (eg. Text, Password, etc) | Use more than one text input within an inputter |
| Use autocomplete attribute | Put anything inside the text input |
| Base width of input on expected length of input |  |

### Radio Buttons

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use a label with each radio button | Use just one |
| Associate  every radio button with it's label using ID & for attributes |  |
| Consider using a select for more than 5 | Place radio button side by side |

### Checkboxes

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use only one label with each checkbox | Use as lists |
| Allow user to opt in as opposed to opt out | Don't try and use as a radio button |
| Consider splitting question out for when more than 5 checkboxes are required |  |

### Select

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| If adding a "Please Select" option then add an empty `value=""` attribute |  |

### Textarea

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always include a label | Add placeholder content |

### Autocomplete and input sizing

* Use native autocompletes on inputs ([Autocomplete attribute docmentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete))
* Inputs will resize when using the autocomplete attribute for `honorific-prefix`, `given-name`, `family-name` and `postal-code`.

### Considerations of best practices

* Use defined conventions for common fields.
* Use standard examples for placeholder copy.
* If you are asking for first and last name within a text input, spell check should be disabled.
* Refer to the text input auto complete definitions.
* Always try and have a default selected radio button unless... .

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-inputter--text).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-inputter" caption="" %}

```markup
<ns-inputter validation="['isRequired']" helper="So we can send you love letters">
  <label slot="label">First name</label>
  <input type="text">
</ns-inputter>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ✅ Yes -  `ns-form` |
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value`   | `string` | `''` |  | The value of the input or group of inputs inside `ns-inputter`. This can be used to add an intial value |
| `validation` | `array` |  | `isRequired`, `isNumber`,  `isInteger`, `isPostcode`, `isFirstName`, `isLastName`, `isTitle`, `isEmail`, `isPhoneNumber`, `isMobileNumber`, `isDateOfBirth`, `minLength(x)`, `maxLength(x)` | A way to assist that valid values are added and to show an error message when they're not. |
| `execute` | `boolean` | `false` | `true`, `false` |  |
| `helper` | `string` |  |  | Adds a message between the label and the input. Used to convey a message to help the user to fill in the input |
| `labelID` | `string` |  |  | Used if the label isn't part of the inputter |
| `heading` | `string` |  |  | Used for checkboxes and radio buttons instead of a label |
| `mask` | `string` |  |  | Shows what can be entered. Similar to a placeholder, but stays when values are entered. |
| `separator` | `string` |  |  | Allows the mask to manipulate the inputted value if it needs to be formatted in a certain way. |

| Slots | Type |
| :--- | :--- |
| `label` | `label tag` |
| `tip-details` | `p tag` |
| `anonymous` | `label` `input` `select` |

| Event | Description |
| :--- | :--- |
| `change` | Will be dispatched when input changes |

## Specification notes

### Helper

* A way to help the user understand why or why not enter information

### LabelID

* Used if the label is outside of `ns-inputter`, such as a heading for the page. Always try to use a label or the heading first. Only use this if the element you are referring to and the label are the same.

### Mask

* This will create a max length on the input to the length of the mask.

### Seperator

* Requires a mask. Can only be one character.

### Anonymous slot

* For single type inputs (text, email, etc), there's no need to add id/for unless you need to on the `<label>` and `<input>`
* Make sure to add id/for if it is a checkbox, select or radio input type.
* Be careful when adding additional elements outside of input and label * these scenarios haven't been tested and may need a request for change raised.

### Label slot

* To be used for single input types (text, email, etc).

### Tip-details slot

* This requires helper property which is intially hidden and can be revealed by the user when they click on the helper text.

### Validation

* It is possible to have multiple validations. For example: ["isRequired", "isNumber", "isInteger"]

### Advanced validation

* Some of the validation options can be configured by passing in values within the parentheses:

  * minLength(x) - Shows error if the input value is less than x chars.

  * maxLength(x) - Shows error if the input value is greater than x chars.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[NAME%20OF%20COMPONENET]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[NAME%20OF%20COMPONENET]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
