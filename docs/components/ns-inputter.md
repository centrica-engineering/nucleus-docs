---
description: Molecule | Inputter component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

The ns-inputter is a multi-purpose wrapper component that helps with the display of the following form control types:

- text (including tel, email, and number)
- radio buttons
- checkboxes
- select (drop-downs)
- textareas

These types of inputs are used to help customers enter and select information. Inputs can only be used within a form. 
If you would like to use a password input then please see the [ns-password](components/ns-password.md) component.

## Most common input types

### Text Input

The text input is ideal for entering text that takes up a single line, such as asking a customer their name or email address. If you require a longer answer from a customer then you should use the textarea input type.

![Text input](https://user-images.githubusercontent.com/45626534/95720272-ec912780-0c68-11eb-815c-c0e57f311374.jpg)

[See `<ns-inputter>` text input on Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--text-input).

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Only use our specified text type. (eg. Text, Email etc) | Use more than one text input within an inputter |
| Use autocomplete attribute | Put anything inside the text input |
| Base width of input on expected length of input |  |
| Make your labels easy to read and understand |  |

### Radio Buttons

Radio buttons are for when customers need to select only one option from a list. If you need them to select multiple options then you should use checkboxes. If there are many items to choose from then you should consider a select instead. 

Radio buttons are automatically grouped together in a `<fieldset>`, the `heading` attribute mentioned above is used to provide a `<legend>` to describe the options. These are usually in the form of a question - such as "Are you a British Gas customer?".

![Radio buttons](https://user-images.githubusercontent.com/45626534/95720264-eac76400-0c68-11eb-9619-4453cb5171d1.jpg)

[See `<ns-inputter>` radio buttons on Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--radio).

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep you heading/legend short | Use just one |
| Make your labels easy to read and understand | Pre-select an option |
| Use a label with each radio button | Place radio button side by side |
| Associate every radio button with it's label using ID & for attributes |  |
| Consider using a select for more than 5 |  |

### Checkboxes

Checkboxes are for when customers can select multiple options from a list, or choose to toggle a single option on or off. If you need them to select a single option from a list then you should use radio buttons.

Checkboxes are automatically grouped together in a `<fieldset>`, the `heading` attribute mentioned above is used to provide a `<legend>` to describe the options. These are usually in the form of a question - such as "Which British Gas services would you like to choose?".

![Checkboxes](https://user-images.githubusercontent.com/45626534/95720257-e9963700-0c68-11eb-8980-26d511829195.jpg)

[See `<ns-inputter>` checkboxes on Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--checkbox).


| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep you heading/legend short | Use as lists |
| Make your labels easy to read and understand | Use as a radio button |
| Use only one label with each checkbox | Pre-select any option(s) |
| Allow user to opt in as opposed to opt out |  |
| Consider splitting question out for when more than 5 checkboxes are required |  |

### Select

Selects should be used to select an item from a list of many choices. Selects can be problematic for screen reader users if there is a long list of options. Consider distilling your questions so that there are fewer options, this might allow you to use radio buttons instead.

![Select](https://user-images.githubusercontent.com/45626534/95720267-ebf89100-0c68-11eb-8a8a-21c2f7e470a2.jpg)

[See `<ns-inputter>` select on Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--select).

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| If adding a "Please Select" option then add an empty `value=""` attribute |  |
| Consider improving your questions to offer fewer options |  |

### Textarea

Textareas are used for capturing a longer answer. Always consider whether or not you need to ask a customer a free form question before doing so.

You can [see an example of `<ns-inputter>` textarea here](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--textarea).

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always include a label | Add placeholder content |
| Consider askign more specific questions | Use this for addresses |

### Date input

[Use the `ns-datepicker` compontent instead](components/ns-datepicker.md)


## Functionality

The ns-inputter provides the following attributes and functionality:

### Headings

The `heading` attribute is used for checkboxes and radio buttons to provide a `<legend>`. These are usually in the form of a question - such as "Are you a British Gas customer?".

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use to Introduce a set of checkboxes or radio buttons |  |
| Use for questions |  |
| Use sentence case |  |
| Only use text |  |
| Punctuate sentences |  |

### Labels

Every input requires a label. Your labels should be easy to read and understand. You must not use a placeholder as a label.

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Be concise | Use full stops |
| Use `<label>` element | Add classes to labels |
| Use sentence case | Use as links |
| Only use text | Rely on placeholders |

### Helper text

The `helper` attribute allows you to add a message between the label and the input to help the user to fill in the input.

When used with radio buttons or checkboxes, this will appear between the `<legend>` and the options.

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep it to one line | Use for error messaging |
| Use it to explain why we need information | Put examples of inputs inside |
| Use it when the reason for asking maybe unclear |  |
| Use as a prompt |  |

### Tip Detail

If you need to provide more detailed context to the options available, you can use the tip detail in conjuntion with the `helper`.

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use to provide additional context to helper text | Repeat helper text |
| Use basic formatting for copy | Add imagery |
| Use as an explanation | Exceed two paragraphs. Link off if necessary |
| Use as a prompt |  |

### Placeholder

The `placeholder` is for providing the customer with an example of what you expect them to input into the field. This should not be used as a replacement for either a `<label>` or `helper` text.

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Provide example of expected input | Use real data |
| Use 'eg.' before example | Use as an explanation or a prompt |

### Validation

Validation is there to assist the customer in providing valid information. If information is missing, or the information they have provided does not align with the field type, then an error message is displayed so enable the customer to identify the mistake, and help them to correct it.

The following is a list of validation types that `<ns-inputter>` supports. These can be used individually or in a combination:


|  **Validation type**  | **Usage** |
| :--- | :--- |
| `isRequired` | value must be completed |
| `isNumber` | value must be a number | 
| `isInteger`| value must be a whole number with no decimal point | 
| `isPostcode(includeEIR)` | value must be a valid UK or Ireland postcode |
| `isFirstName` | value must only contain letters, apostrophes, or hyphens. There is a character limit of 24 |
| `isLastName` | value must only contain letters, apostrophes, or hyphens. There is a character limit of 32 |
| `isFullName` | value must only contain letters, apostrophes, or hyphens. There is a character limit of 60 | 
| `isTitle` | value must be a valid title prefix | 
| `isEmail` | value must be in a valid email format |
| `isPhoneNumber(includeIreland)` | value must be in a valid UK or Ireland telephone format |  
| `isMobileNumber` | value must be in a valid mobile phone format | 
| `isPassword` | value must be a password | 
| `isDate` | value must be a date |
| `minDate(date)` | value must be a date no earlier than the date set in brackets |
| `maxDate(date)` | value must be a date no later than the date set in brackets | 
| `isDateOfBirth` | value must be the customers date of birth |
| `minLength(x)` | value must be no shorter in length than the number set in brackets | 
| `maxLength(x)` | value must be no longer in length than the number set in brackets |

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use only when required | Use real data |
| Only use to validate the format of the input | Don't used for... |

### Masks and separators

The `mask` is similar to a placeholder, this can be used to show what can be entered. However it stays when values are entered. 

The `separator` is used with the mask to manipulate the inputted value if it needs to be formatted in a certain way, like as a sort code or reference number.

![Separator - used for sort code](https://user-images.githubusercontent.com/45626534/95720270-ec912780-0c68-11eb-944e-71e3d3184e2a.jpg)

[See `<ns-inputter>` mask on Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--mask).

![Mask - used for meter readings](https://user-images.githubusercontent.com/45626534/95720262-eac76400-0c68-11eb-9378-0009e25087cc.jpg)

[See `<ns-inputter>` separator on Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--separator).


| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Only use an input type | Use a textarea, checkbox or radio button |
| Only use a character for a separator | Use a "placeholder" attribute on the input |
|  | Put more than one separator together, e.g. `00--00` |
|  | Start or end with a separator |


## Autocomplete and input sizing

* Use native autocompletes on inputs ([Autocomplete attribute documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete))
* Inputs will resize when using the autocomplete attribute for `honorific-prefix`, `given-name`, `family-name` and `postal-code`.

## Considerations of best practices

* Use defined conventions for common fields.
* Use standard examples for placeholder copy.
* If you are asking for first and last name within a text input, spell check should be disabled.
* Refer to the text input auto complete definitions.
* Always try and have a default selected radio button unless... .

## Usage

<StorybookStory story="form-components-ns-inputter--text-input"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-inputter" parentComponents="ns-form,ns-fieldset"></ComponentPlacement>

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

## Specification notes

### Helper

* A way to help the user understand why or why not enter information

### LabelID

* Used if the label is outside of `ns-inputter`, such as a heading for the page. Always try to use a label or the heading first. Only use this if the element you are referring to and the label are the same.

### Mask

* This will create a max length on the input to the length of the mask.

### Separator

* Requires a mask. Can only be one character.

### Ignore Separator

* Setting the ignoreseparator property to true will force length validations (such as minLength and maxLength) to not include the separator when calculating the length. eg. With '-' as the separator: '12-34-56' would have a length of 8, if ignoreseparator is true it would count it as 6 characters

### Anonymous slot

* For single type inputs (text, email, etc), there's no need to add id/for unless you need to on the `<label>` and `<input>`
* Make sure to add id/for if it is a checkbox, select or radio input type.
* Be careful when adding additional elements outside of input and label * these scenarios haven't been tested and may need a request for change raised.

### Label slot

* To be used for single input types (text, email, etc).

### Tip-details slot

* This requires helper property which is initially hidden and can be revealed by the user when they click on the helper text.

### Validation

* It is possible to have multiple validations. For example: ["isRequired", "isNumber", "isInteger"]

* Some of the validation options can be configured by passing in values within the parentheses:

  * minLength(x) - Shows error if the input value is less than x chars.

  * maxLength(x) - Shows error if the input value is greater than x chars.

  * isDate() - Shows error if the input value is not a valid date, the expected format is dd/mm/yyyy

  * minDate(date) - Shows an error if the input value date is less than provided date.  eg. `minDate('20/12/2020')`

  * maxDate(date) - Shows an error if the input vale date is greater than the provided date.  eg. `maxDate('31/12/2022')`

  * isPostcode(includeEircode) - Shows an error if the input value is not a valid UK postcode.  This validation will include Eircode (Irish postcodes) when you pass a parameter of `true` to the validation function.  eg. `isPostcode(true)`

  * isPhoneNumber(includeIreland) - Shows an error if the input value is not a valid UK phone number.  This validation will include Irish phone numbers when you pass a parameter of `true` to the validation function.  eg. `isPhoneNumber(true)`

<Tokens component="inputter"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-inputter]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-inputter]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-form](components/ns-form.md)
* [ns-fieldset](components/ns-fieldset.md)
* [ns-datepicker](components/ns-datepicker.md)
* [ns-password](components/ns-password.md)
* [ns-cta](components/ns-cta.md)
