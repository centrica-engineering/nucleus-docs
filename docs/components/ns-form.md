---
description: Form component.
---

# ns-form

## Introduction

> The form component is used to contain ns-inputters and manage their validations.

The `ns-form` component is a wrapper for `ns-inputters`. It's main purpose is to manage the validations of these `ns-inputters`.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-form--form)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-form" caption="" %}

```markup
<ns-form>
  <ns-inputter validation='["isRequired"]'>
    ...
  </ns-inputter>
  <ns-cta onClick="submitForm">Submit</ns-cta>
</ns-form>
```

```javascript
submitForm() {
  const form = document.querySelector('ns-form');
  const formData = form.validate();
}
```

## Component Relationship

**Does it live in a panel?**  
Yes

**What layout classes can be used?**  
`splash`  
`splosh`

**Does it live inside other components?**  
No

**Atomic type**  
Atom

## Specification

| **Name** | validate |
| :--- | :--- |
| **Description** | validates all of the fields within the form and returns an object containing the field and validation data |
| **Type** | Function |
| **Default** | n/a |
| **Options** | n/a |

An **invalid validate return response** looks like:

```javascript
{
  "isValid": false,
  "fields": [
    {
      "name": "email-address",
      "isValid": false,
      "value": "",
      "error": "This field is required",
      "input": {}
    },
    {
      "name": "password",
      "isValid": false,
      "value": "",
      "error": "This field is required",
      "input": {}
    }
  ],
  "fieldsByName": {
    "email-address": {
      "name": "email-address",
      "isValid": false,
      "value": "",
      "error": "This field is required",
      "input": {}
    },
    "password": {
      "name": "password",
      "isValid": false,
      "value": "",
      "error": "This field is required",
      "input": {}
    }
  }
}
```

A **valid validate return response** looks like:

```javascript
{
  "isValid": true,
  "fields": [
    {
      "name": "email-address",
      "isValid": true,
      "value": "hello@example.com",
      "input": {}
    },
    {
      "name": "password",
      "isValid": true,
      "value": "password12",
      "input": {}
    }
  ],
  "fieldsByName": {
    "email-address": {
      "name": "email-address",
      "isValid": true,
      "value": "hello@example.com",
      "input": {}
    },
    "password": {
      "name": "password",
      "isValid": true,
      "value": "password12",
      "input": {}
    }
  }
}
```

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use `ns-inputter` for your form fields | Don't write your own validations |
| Use `ns-cta` to submit your form | Don't rely on front end validation alone. |

### Considerations of best practises

* Alyways use the `ns-inputter` component inside `ns-form`, input and other form elements shouldn't be on their own.
* Speak with the Nucleus team for advice on experience patterns.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

