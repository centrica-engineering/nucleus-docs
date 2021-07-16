---
description: Molecule | Password component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> A standardised Password component that supports users when entering an existing password.

The ns-password component has been developed to include a set of features that help a user not only enter a password but can accommodate their need to create one too.

This component wraps our ns-inputter component. Guidelines defined on the ns-inputter should also be considered when using this component.
[ns-inputter documentation](components/ns-inputter.md)

## Variants and purpose

There are 2 variants of the ns-password component. Each should be used for their specific purpose. Both accommodate password manager applications, display at an appropriate width for the amount of characters required, can have optional helper text, and use mono-spaced alignment for legibility.

### Standard

[Labelled IMAGE HERE]

Use this variant when a user needs to enter a password they have already have created to allow them access to secure information. It comprises a label, an input field with masking as default, a show/hide toggle and validation.

### Confirm Password

[Labelled IMAGE HERE]

This variant is more complex the Standard one. It allows a user to correctly format a new password and validate it against certain criteria. It comprises the same label, input field and show/hide toggle as the standard version but includes a more proactive and helpful in-line validation technique as well as a Confirm Password field to verify the user is entering what they intended.

The show/hide toggles are dependent on each other allowing easy comparing.

In-line validation changes as you type  - this helps provide useful feedback to the user on their formatting.

## Validation
[Table here showing the states and meanings/scenarios]

## Content guidance

[See other component pages and layout in consistent manner]

## Usage

<StorybookStory story="form-components-ns-password--standard"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-password" parentComponents="ns-form,ns-fieldset"></ComponentPlacement>

## Specification

Also see ns-inputter [specification](components/ns-inputter.md#specification)

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value`   | `string` | `''` |  | The value of the input or group of inputs inside `ns-inputter`. This can be used to add an initial value |
| `helper` | `string` |  |  | See [ns-inputter](components/ns-inputter.md#specification). |
| `name` | `string` | `password` |  | See [ns-inputter](components/ns-inputter.md#specification). |

| Slots | Type |
| :--- | :--- |
| `tip-details` | `p tag` |

<Tokens component="password"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-password]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-password]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-inputter](components/ns-inputter.md)
* [ns-form](components/ns-fieldset.md)
