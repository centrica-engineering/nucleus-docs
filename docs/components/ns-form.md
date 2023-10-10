---
description: Molecule | Form component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> The form component is used to collect customer input and provide personal experience to customer based on their needs.

The `ns-form` component mimics the native form element features. It's main purpose is to allow customers to provide data and validate the data before sending them to processing.

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use `ns-inputter`, `ns-password`, `ns-datepicker`, `ns-appointment-picker`, `nsx-address-selector`, `nsx-marketing-consent` for your form fields | Write your own validations |
| Use `ns-cta` submit type to submit your form | Rely on front end validation alone. |

### Considerations of best practises

* Always use nucleus components inside `ns-form`, input and other native form elements shouldn't be on their own.
* Speak with the Nucleus team for advice on experience patterns.

## Usage

<StorybookStory story="form-components-ns-form--multi-input-form"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-form" parentComponents="ns-panel,ns-card"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `validate` | `function`  |  |  | Validates all of the fields within the form and returns an object containing the field and validation data |

| Event | Description |
| :--- | :--- |
| `submit` | Dispatched when the user tries to submit a form. |
| `validated` | Will pass the object of the fields and validation when validate is called. |

## Specification notes

### Submit

The submit event is triggered in one of two ways:

* Clicking on ns-cta (without href attribute)
* Pressing enter when focused on an input

Exceptions:

* Nested ns-forms will not dispatch the submit event to a parent ns-form

#### Handling submit events

You will need to set up a way to listen for the submit event. This can be done using via `onsubmit` or using an event listener.

The returned event contains `event.detail.submitter` - this is the element that triggered the ns-form submit.

Note: submitting the form does not trigger validation, this will need to be handled separately. See Validated below.

onsubmit example:

```markup
<ns-form onsubmit="submittedForm(event)">
  <ns-inputter validation='["isRequired"]'>
    ...
  </ns-inputter>
  <ns-cta type="submit">Submit</ns-cta>
</ns-form>

<script>
  function submittedForm(event) {
    // do something as a result of the event

    // validate the form
    event.target.validate();
  }
</script>
```

### Validated

* This is only required if you need to listen for an event. The `validate` attribute will pass back the same object.

#### Validation data

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

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

<PageFooter></PageFooter>

## Related links

* [ns-inputter](components/ns-inputter.md)
* [ns-password](components/ns-password.md)
* [ns-datepicker](components/ns-datepicker.md)
* [ns-appointment-picker](components/ns-appointment-picker.md)
* [nsx-address-selector](components/nsx-address-selector.md)
* [nsx-marketing-consent](components/nsx-marketing-consent.md)
* [ns-fieldset](components/ns-fieldset.md)
