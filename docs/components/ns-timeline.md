---
description: Organism | Timeline component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> A component that gives a wide overview of the overall process and progress for a customer journey, that looks at the wider picture (digital steps, back end steps, customer side steps, etc.).

## Specification for Individual Timeline Event

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `status` | `string` | `pending`| `pending`, `inprogress`, `actionrequired`, `warning`, `error`, `completed`, `cancelled` | |
| `icon`| `string` | | Please see the [documentation for ns-icon](../components/ns-icon)  | Optional icon to add to the event decoration |
| `index` | `number` | |  | Optional numbered index to add to the event decoration |
| `updatedAt` | `date` | |  | Optional date in ISO date format only used along with `completed` status to record the event completed date & time. |

| Slots | Type |
| :--- | :--- |
| `heading` | `<h3>` |
| `anonymous` | `<ns-card>` |


## Specification for Timeline

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `showstepcount` | `boolean` | `false` | `true`, `false` | Set true to show completed vs total event progress count below the timeline heading |

| Slots | Type |
| :--- | :--- |
| `heading` | `<h2>` |
| `summary` | `<p>` |
| `event` | `<ns-timeline-event>` |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-card](../components/ns-card)
* [ns-icon](../components/ns-icon)