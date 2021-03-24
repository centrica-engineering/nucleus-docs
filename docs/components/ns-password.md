---
description: Molecule | Password component.
---

import { Storybook } from '../../includes/storybook.js'

## Introduction

> Use to help the user enter a password in a form.

This component wraps our ns-inputter component. Guidelines defined on the ns-inputter should also be followed when using this component.
[ns-inputter documentation](components/ns-inputter.md)

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

* [ns-inputter](components/ns-inputter.md)
* [ns-form](components/ns-fieldset.md)
