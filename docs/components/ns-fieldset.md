---
description: Molecule | Fieldset component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> The ns-fieldset component is used to group related ns-inputters.

Use where you would normally use a vanilla html fieldset element. This element extends the layout for `ns-form`.

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Add a legend | Group unrelated ns-inputters |
| Only use inside the ns-form component | Nest `ns-fieldset`s unnecessarily, as this can lead to confusion |

### Considerations of best practises

A legend is required to make the fieldset accessible

https://www.w3.org/WAI/WCAG21/Techniques/html/H71

> The first element inside the fieldset must be a legend element, which provides a label or description for the group

## Usage

<StorybookStory story="form-components-ns-fieldset--standard"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-fieldset" parentComponents="ns-form"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `legend` | `text`  |  |  | Add a legend to describe the contents of the fieldset |

| Slots | Type |
| :--- | :--- |
| Anonymous | ns-inputters |

<Tokens component="fieldset"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-fieldset]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-fieldset]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-form](components/ns-form.md)
* [ns-inputter](components/ns-inputter.md)
