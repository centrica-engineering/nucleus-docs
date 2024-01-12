---
description: Molecule | Action link component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Action links are decorative links used to navigate to another page or perform an action.

Action links are used to navigate to another page or perform an action. They are used to support the main actions on a page. It is expected that action links are grouped together and are not used in isolation.

These are more decorative links and can have illustrations to help convey the action.

## Content guidance

### Action link standard

### Action link stacked

## Best practice

| 💚 Do's                                                                 | 💔 Dont's                                                                                |
| :--------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| Make it short and actionable                                           | Make it vague                                                                           |
| Add illustrations                                                      | Make it overly wordy                                                                    |
| Relate the action to the content it sits beside                        | Treat as a button                                                                       |
|                                                                        | Use more than 24 characters                                                             |
|                                                                        | Link to outside urls                                                                    |
|                                                                        | Use for downloads. Use the [`ns-download` component](../components/ns-download) instead |
|                                                                        |                                                                                         |

### Considerations of best practice

## Usage

### Standard

<StorybookStory story="components-ns-action-link--standard"></StorybookStory>

### Stacked

<StorybookStory story="components-ns-action-link--stacked"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-action-link" parentComponents="ns-column"></ComponentPlacement>

## Specification

| Attribute | Property | Type     | Default       | Options                                                                      | Description                    |
| :-------- | :------- | :------- | :------------ | :--------------------------------------------------------------------------- | :----------------------------- |
| `type`    | `type`   | `string` | `standard`      | `standard`, `stacked`,                            | Different variants of the action link. |
| `href`    | `href`   | `string` |               |                                    | Navigating using a hyperlink.  |
| `label`   | `label`  | `string` |               |                                    | The text inside the link.      |
| `illustration`    | `illustration`   | `string` | `` |  See [`ns-illustration` component](../components/ns-illustration) | The illustration inside the link.       |

### Specification notes

### Href

The only ability to change the link is via the `href` attribute. This means that the link will by default open in the same tab.

## Label

Only strings are allowed inside the label. This means that HTML cannot be used.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%2[ns-action-link]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-action-link]).

<PageFooter></PageFooter>