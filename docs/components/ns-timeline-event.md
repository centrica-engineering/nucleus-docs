---
description: Atom | Timeline Event component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> The Timeline Event component represents a sequence of events that happen within a process and shows the status.

It gives an overview of the whole process and progress of a customer journey. Its main purpose is to create situational awareness for the user and define expectations.

* Provides the customer with visibility on the status of a process or system in their journey

* Gives a top-level overview of the process

* It's clear to understand and manages expectations by showing the current situation to the user



## Content guidance

The decoration for the event is dependent on the status of the event.

### Pending Event `status="pending"`

For communicating that the event is waiting for previous event(s) to be completed.

### In progress Event `status="inprogress"`

For communicating that the event is currently making progress.

### Action Required Event `status="actionrequired"`

For communicating that the event expects customer to carry out an action to make progress.

### Warning Event `status="warning"`

For communicating problems of less severity like foreseeable delay, failure, outage, etc..

### Error Event `status="error"`

For communicating failure with urgence.

### Completed Event `status="completed"`

For communicating that the event has been successful.

### Cancelled Event `status="cancelled"`
For communicating that the progress of the event has been halted due to error in other event(s) in the timeline sequence.

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