
---
description: Accordion component.
---

# ns-accordion

## Introduction

> Accordion enables users to expand and collapse sections of content.

We use accordions to break down information or to link content to other pages through text links. 

## Usage

- We use accordions to break down information or to link content to other pages through text links. 
- Accordions allow us to reduce the information overload by using progressive disclosure.
- Having the collapsed and expandable state, helps the user to read or find information that is divided by a meaningful order or area.
- Accordions are useful for things like frequently asked questions or displaying multiple blocks of content such as tariffs.
- We don't use key/important information in accordions.

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-accordion--singular)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-accordion" caption="" %}

```markup
<ns-accordion role="tablist">
  <h3 slot="heading">Frequently asked questions</h3>
  <ns-expander open="false">
    <h4 slot="heading">Can I manage my account online?</h4>
    <p>
      Yes, with an online account you can arrange a service visit, find out whatʼs happening with your appointment, submit a meter reading and book an engineer.
      Weʼve even got a free smartphone app.
    </p>
  </ns-expander>
</ns-accordion>
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

