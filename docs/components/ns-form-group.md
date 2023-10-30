---
description: Molecule | Form Group component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> The form group component is used to group related ns-inputters.

Use where you would normally use a vanilla html fieldset element. This element extends the layout for `ns-form`.

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Provide a `legend` property with value| Group unrelated ns-inputters |
| Only use inside the `ns-form` component | Nest `ns-form-group`s unnecessarily, as this can lead to confusion |

### Considerations of best practises

The `legend` property is required to make the form group component accessible.

## Usage

<StorybookStory story="form-components-ns-form-group--standard"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-form-group" parentComponents="ns-form"></ComponentPlacement>

### Note
When adding radio buttons and checkboxes to `ns-inputter` inside an `ns-form-group`, its heading size will match the size of all labels from other `ns-inputter`. This helps keep a logical visual hierarchy in a form.

## Specification

| Attribute | Property | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `legend` | `legend` | `text`  |  |  | Add a legend to describe the contents of the form group |

| Slots | Type |
| :--- | :--- |
| Anonymous | `ns-inputter`s |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form-group]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form-group]).

<PageFooter></PageFooter>

## Related links

* [ns-form](components/ns-form.md)
* [ns-inputter](components/ns-inputter.md)
