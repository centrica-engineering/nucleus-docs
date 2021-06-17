---
description: Atom | Timeline Event component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> The Timeline Event component represents a sequence of events that happen within a process, and shows the status.

It gives an overview of the whole process and progress of a customer journey. Its main purpose is to create situational awareness for the user and define expectations.

* Provides the customer with visibility on the status of a process or system in their journey

* Gives a top-level overview of the process

* It's clear to understand and mangages expectations by showing the current situation to the user

## Example
(...ani gif here?)

## Content guidance

### Status

Each event has a status. The status of the event is controlled by the decoration used.

| Style | Status | Description |
| :--- | :--- | :--- |
| ![pending](https://user-images.githubusercontent.com/78355810/122376864-7150e580-cf5c-11eb-8501-fae0f7f8aa4b.png)| Pending </br> `status="pending"` |Communicates that the event has yet to commence. |
| ![in progress](https://user-images.githubusercontent.com/78355810/122377002-96ddef00-cf5c-11eb-8b9a-a837a28e51b8.png) | In progress</br> `status="inprogress"` | Indicates that progress is currently being made on this step. |
| ![success](https://user-images.githubusercontent.com/78355810/122378216-add11100-cf5d-11eb-998b-f00f6f5deff8.png) | Completed </br>`status="completed"` | The event has been successfully completed. |
| ![action required](https://user-images.githubusercontent.com/78355810/122377269-d73d6d00-cf5c-11eb-8183-07a35bf559d9.png) | Action required </br>`status="actionrequired"` | This is used when a customer needs to take action in order to proceed with the process. |
| ![warning](https://user-images.githubusercontent.com/78355810/122377627-25527080-cf5d-11eb-9b59-c3711568e30b.png) | Warning </br>`status="warning"` | Informs of a problem with low severity such as foreseeable delays or outages etc. The problem is expected to be automatically resolved as the situation changes. |
| ![error](https://user-images.githubusercontent.com/78355810/122377917-68144880-cf5d-11eb-8f92-8bafc8778a6f.png) | Error </br>`status="error"` | This is a failure indication. Something couldn't be resolved and so has halted the whole process. It should be accompanied by a helpful message. |

### Icons

Icons are used to...

### Numerals

Numerals can also be used when...

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always add heading text |  |
| |  |


### Considerations of best practice

* Only use inside `ns-timeline` as a slot of `event`.

## Component placement

<ComponentPlacement component="ns-timeline-event" parentComponents="ns-timeline"></ComponentPlacement>

## Specification for Timeline Event

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `status` | `string` | `pending`| `pending`, `inprogress`, `actionrequired`, `warning`, `error`, `completed`, `cancelled` | |
| `icon`| `string` | | Please see the [documentation for ns-icon](https://britishgas.design/components/ns-icon)  | Optional icon to add to the event decoration |
| `index` | `number` | |  | Optional numbered index to add to the event decoration |
| `updatedAt` | `date` | |  | Optional ISO date only used along with `completed` status to record the event completed date & time. |

| Slots | Type |
| :--- | :--- |
| `heading` | `<h3>` |
| `anonymous` | `<ns-card>` |