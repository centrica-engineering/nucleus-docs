---
description: Molecule | Password component.
---

import { Storybook } from '../../includes/storybook.js'

## Introduction

The ns-password component displays a simple input which allows the users to toggle between hiding and showing the password they are entering.
This should only be used within a form.

## Functionality

The ns-password component provides the following attributes and functionality:

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

## Usage

<Storybook story="form-components-ns-password--standard"></Storybook>

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ✅ Yes -  `ns-form`|
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value`   | `string` | `''` |  | The value of the input or group of inputs inside `ns-inputter`. This can be used to add an initial value |
| `helper` | `string` |  |  | Adds a message between the label and the input. Used to convey a message to help the user to fill in the input |
| `name` | `string` |  |  | The name of this field as it will display in the form data. |

| Slots | Type |
| :--- | :--- |
| `tip-details` | `p tag` |

| Event | Description |
| :--- | :--- |
| `change` | Will be dispatched when input changes |

## Specification notes

### Helper

* A way to help the user understand why or why not enter information

### Tip-details slot

* This requires helper property which is initially hidden and can be revealed by the user when they click on the helper text.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-password]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-password]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-form](components/ns-form.md)
* [ns-cta](components/ns-cta.md)
