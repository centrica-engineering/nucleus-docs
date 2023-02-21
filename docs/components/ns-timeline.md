---
description: Atom | Timeline component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> The Timeline component represents a sequence of events that happen within a process.

It gives an overview of the whole process and progress of a customer journey. Its main purpose is to create situational awareness for the user and manage expectations.


## Content guidance

### Variants and purpose

There are two variants of the timeline component.

- standard version: to show steps of a process that has started, allowing to show the status of each step
- step version: to set the expectation of a process that hasn't started or doesn't have a specific status

### Usage

<StorybookStory story="components-ns-timeline--time-line"></StorybookStory>

### Component placement

<ComponentPlacement component="ns-timeline" parentComponents="ns-panel"></ComponentPlacement>

<ComponentPlacement component="ns-timeline-event" parentComponents="ns-timeline"></ComponentPlacement>

### Standard

* Provides the customer with visibility on the status of a process or system in their journey.
* Gives a top-level overview of the process.
* It's clear to understand and manages expectations by showing the current situation to the user.

(Sequence shortened.)

<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="https://user-images.githubusercontent.com/78355810/123394163-bdbca680-d596-11eb-95d1-10a13968cc8f.png" width="359" height="100%">
    <source src="https://user-images.githubusercontent.com/78355810/123393414-fc059600-d595-11eb-87d5-7e38954254af.mp4" type="video/mp4" />
  </video>
</figure>

#### Status

Each event has a status. The status of the event is controlled by the decoration used.

| Style | Status | Description |
| :--- | :--- | :--- |
| ![pending](https://user-images.githubusercontent.com/78355810/122376864-7150e580-cf5c-11eb-8501-fae0f7f8aa4b.png)| `pending` |Communicates that the event has yet to commence. |
| ![in progress](https://user-images.githubusercontent.com/78355810/122773523-5655dc80-d2a0-11eb-889e-fadbca455c36.png) | `inprogress` | Indicates that progress is currently being made on this step. |
| ![success](https://user-images.githubusercontent.com/78355810/122773619-68377f80-d2a0-11eb-8d1a-7a79da14cd3d.png) | `completed` | The event has been successfully completed. |
| ![action required](https://user-images.githubusercontent.com/78355810/122377269-d73d6d00-cf5c-11eb-8183-07a35bf559d9.png) | `actionrequired` | This is used when a customer needs to take action in order to proceed with the process. |
| ![warning](https://user-images.githubusercontent.com/78355810/122377627-25527080-cf5d-11eb-9b59-c3711568e30b.png) | `warning` | Informs of a problem with low severity such as foreseeable delays or outages etc. The problem is expected to be automatically resolved as the situation changes. |
| ![error](https://user-images.githubusercontent.com/78355810/122377917-68144880-cf5d-11eb-8f92-8bafc8778a6f.png) | `error` | This is a failure indication. Something couldn't be resolved and so has halted the whole process marking other `inprogress`\ `pending` event(s) `cancelled`. It should be accompanied by a helpful message. |


#### Icons & numerals

There are 3 styles of timeline to choose from in the 'overview decorations' - default, icon, or number.

##### Default 
Uses a circle and implies nothing other than it is an event.

##### Icons 
These can be selected from a list to help convey meaning for each event and make it easier to identify a step. If selected, all events will need an icon chosen from the list.

##### Numbers 
For use when an order should be shown.

Some icons are special and automatically reserved for use only with a particular status, such as Complete tick, Action required arrow, Warning triangle, and Error diamond. These show on all the variants of 'overview decoration'. 


#### Heading, summary and step count

There is provision for a heading to describe what process the timeline is showing. This can be left blank if it has already been made clear in an ns-landmark above it to avoid duplication.

You can also add a summary to manage expectations
>eg. 2 days until your appointment

In addition to this, you can also display information on the number of events using step count. You can have up to 10 steps in a process and show how many have been completed so far. 
>eg. 1 of 6 steps completed


#### Showing additional information

On events that are in progress, it is possible to add further information relevant to this step to aid customer understanding, or if an action is required, provide a link to another area such as a form to complete. Warnings and Error status should have helpful messaging added this way, and with links if useful.

On events that have been successfully completed, there is the option to display a time-stamp alongside the status.

### Step

The step variant is a simpler version of the timeline component that excludes summary and status.

#### Icons & numerals

There are 2 styles of timeline to choose from in the 'overview decorations' - number or fallback. The default decoration is to use numbers.

##### Numbers 
For use when an order should be shown.

##### Fallback 
Uses a circle and implies nothing other than it is an event.

#### Heading

There is provision for a heading to describe what process the timeline is showing. This can be left blank if it has already been made clear in an ns-landmark above it to avoid duplication.

#### Showing additional information

In the step variant, additional information can always be added to an event if more explanation is needed. 

## Best practice for the timeline component

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use a maximum of 10 steps | Add too much detailed content |
| Consider if the title duplicates page title | Use illustrations or icons in additional content |
| Provide helpful messaging | Use overly long event names |
| Use summary to set expectations for the `standard` variant | Use timestamp if it causes confusion with a date elsewhere on the page for the `standard` variant |

## Best practice for the individual timeline events

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use text or `ns-card` within `additional content` to provide additional information | Add status to an event for the `step` variant |
| Use either default, icon or number decoration for all events in the timeline sequence for the `standard` variant |  Mix two different decoration types in events |
| Use either number or fallback decoration for all events in the timeline sequence for the `Step` variant | Use any icon type with names ending `solid` or `outline` |

## Specification for the timeline component

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | `standard` | `standard`, `step` | Set to standard to use the more dynamic version of the timeline |
| `showstepcount` | `boolean` | `false` | `true`, `false` | Set true to show completed vs total event progress count below the timeline heading |

| Slots | Type |
| :--- | :--- |
| `heading` | `<h2>` |
| `summary` | `<p>` |
| `event` | `<ns-timeline-event>` |

## Specification for the individual timeline events

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `status` | `string` | `pending`| `pending`, `inprogress`, `actionrequired`, `warning`, `error`, `completed`, `cancelled` | |
| `icon`| `string` | | `appliance`, `bill`, `boiler`, `calendar`, `clock`, `download`, `electricity`, `energy`, `gas`, `home`, `meter`, `protect`, `rewards`, `search`, `tag`. Please see the [documentation for ns-icon](../components/ns-icon)  | Optional icon to add to the event decoration |
| `index` | `number` | |  | Optional numbered index to add to the event decoration |
| `updatedAt` | `date` | |  | Optional ISO date only used along with `completed` status to record the event completed date & time. |

| Slots | Type |
| :--- | :--- |
| `heading` | `<h3>` |
| `anonymous` | `<ns-card>` |

## Feedback
* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-form]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-form]).

<PageFooter></PageFooter>

## Related links
* [ns-card](../components/ns-card)
* [ns-icon](../components/ns-icon)
