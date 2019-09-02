---
description: Form component.
---

# ns-form

## Introduction

> The form component is used to wrap around ns-inputters and manage their validation.

Additional intro text...

## Usage

To see examples visit:
[Storybook - ns-form](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-form--form)
[Storybook - ns-inputter](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-inputter--text)

### Form Example
```html
<ns-form>
    
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
  
    <ns-inputter name="customer" validation='["isRequired"]' heading="Are you a British Gas customer?" helper="Are you a customer?">
        <div slot="tip-details">Answer this yes if you are!</div>
        <input type="radio" id="question-yes" name="question" value="yes">
        <label for="question-yes">Yes</label>
        <input type="radio" id="question-no" name="question" value="no">
        <label for="question-no">No</label>
    </ns-inputter>
    
    <ns-inputter name="products" validation='["isRequired"]' heading="What do you want?" helper="">
      <input type="checkbox" id="question-gas" name="question" value="gas" checked="">
      <label for="question-gas">Gas</label>
      <input type="checkbox" id="question-elec" name="question" value="electricity">
      <label for="question-elec">Electricity</label>
    </ns-inputter>
    
    <ns-inputter name="firstname" validation='["isRequired", "minLength(10)"]'>
        <label slot="label" for="input-first-name">First name</label>
    </ns-inputter>
    
    <ns-inputter name="surname" validation='["isRequired", "maxLength(15)"]'>
        <label slot="label" for="input-surname">Surname</label>
    </ns-inputter>
    
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
| **Description** | The variant of the landmark |
| **Type** | string |
| **Default** | summit |
| **Options** | summit, hillside |


## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep content in Landmarks very concise | Always add a cta |
| Content must be relevant to the page | |


### Considerations of best practises

* Shorter and simpler words tend to work better in the heading.
* The recommended copy length is between 1 and 5 words for the Subheading.
* If the purpose of the page is to understand more about a product or service, then it is considered bad practice to include a CTA within the landmark, as users are likely to drop out. This is because users believe the next step is to click the CTA, rather than reading the page to get a better understanding of how they should proceed.
* Let the page type define the type of landmark you use. For example if the page purpose is to be informative / educational then we recommend using`<ns-landmark type="hillside”>`. If the page purpose is promotional we recommend using `<ns-landmark type="summit" >`.
* If you are designing a series of informative / educational pages that all follow a similar theme eg boilers, it would be considered best practice to use the same coloured decoration within the `<ns-landmark type="hillside">`.


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-landmark]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-landmark]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
