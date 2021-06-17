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

## Content guidance

The status of the event is controlled by the decoration used.

### Pending Event `status="pending"`

Communicates that the event has yet to commence.

### In progress Event `status="inprogress"`

Indicates that progress is currently being made on this step.

### Action Required Event `status="actionrequired"`

This is used when a customer needs to take action in order to proceed with the process.

### Warning Event `status="warning"`

Informs of a problem with low severity such as foreseeable delays or outages etc. The problem is expected to be automatically resolved as the situation changes.

### Error Event `status="error"`

This is a failure indication. Something couldn't be resolved and so has halted the whole process. It should be accompanied by a helpful message.

### Completed Event `status="completed"`

The event has been successfully completed.

### Cancelled Event `status="cancelled"`

If an error event has occurred, all subsequent events 
have been been cancelled. The process will not be completed.

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