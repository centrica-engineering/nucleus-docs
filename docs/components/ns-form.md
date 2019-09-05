---
description: Form component.
---

# ns-form

## Introduction

> The form component is used to contain ns-inputters and manage their validations.

ns-form acts as a wrapper for your ns-inputters.  It's main purpose is to manage the validations of it's child ns-inputters.  When the validate() method is called the form will validate each of it's ns-inputters and return an object with all the relevant information about the form fields and their validations.

## Usage

To see examples visit:
- [Storybook - ns-form](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-form--form)
- [Storybook - ns-inputter](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-inputter--text)

### Form Example
```html
<ns-form>
    <!-- Select example -->
    <ns-inputter name="option" validation="[&quot;isRequired&quot;]" heading="Select an option" helper="">
      <label slot="label">Select an option</label>
      <select name="select">
        <option value="">Please Select an option</option>
        <option value="value-01">One</option>
        <option value="value-02">Two</option>
        <option value="value-03">Three</option>
        <option value="value-04">Four</option>
      </select>
    </ns-inputter>
    <!--  Radio example -->  
    <ns-inputter name="customer" validation='["isRequired"]' heading="Are you a British Gas customer?" helper="Are you a customer?">
        <div slot="tip-details">Answer this yes if you are!</div>
        <input type="radio" id="question-yes" name="question" value="yes">
        <label for="question-yes">Yes</label>
        <input type="radio" id="question-no" name="question" value="no">
        <label for="question-no">No</label>
    </ns-inputter>
    <!-- Checkbox example -->  
    <ns-inputter name="products" validation='["isRequired"]' heading="What do you want?" helper="">
      <input type="checkbox" id="question-gas" name="question" value="gas" checked="">
      <label for="question-gas">Gas</label>
      <input type="checkbox" id="question-elec" name="question" value="electricity">
      <label for="question-elec">Electricity</label>
    </ns-inputter>
    <!-- Text example -->  
    <ns-inputter name="firstname" validation='["isRequired", "minLength(10)"]'>
        <label slot="label" for="input-first-name">First name</label>
    </ns-inputter>
    <!-- Text example -->  
    <ns-inputter name="surname" validation='["isRequired", "maxLength(15)"]'>
        <label slot="label" for="input-surname">Surname</label>
    </ns-inputter>
    <!--  Text example -->  
    <ns-inputter name="email" validation='["isRequired", "isEmail"]'>
        <label slot="label" for="input-email">Email</label>
    </ns-inputter>
    
</ns-form>
```
Ember twiddle: (https://ember-twiddle.com/0de7a10c20cdef6c19d57aacbd560b50?openFiles=form-test.template.hbs%2C)

Validate

Calling the ns-form's validate() method will run all of the validations from the forms ns-inputters.  The validate method returns an object with information about the forms validity and it's fields and their individual validation statuses.

```
const form = document.querySelector('ns-form');
const formData = form.validate();
```


## Component Relationship

**Does it live in a panel?**  
No

**What layout class can be used?**  
N/A

**Does it live inside other components?**  
No

**Atomic type**  
Organism

## Specification

| **Name** | Type |
| :--- | :--- |
| **Description** |  |
| **Type** | string |
| **Default** | summit |
| **Options** | summit, hillside |


## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use ns-inputters for your form fields |  |
| Use ns-inputters to validate the fields | Don't write your own validations |


### Considerations of best practises


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-landmark]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-landmark]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
