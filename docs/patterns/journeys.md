---
title: Journeys
description: Journey patterns documentation.
---

import { PageFooter } from '../../includes/page-footer.js'

## Introduction

Creating engaging and inclusive journeys is one of the highest priorities for any product team.

If at any time we overwhelm the user with content or forget to treat them as an individual, this could lead to frustration and an increased likelihood of them abandoning their journey.

There is no one size fits all. Here, we introduce Journey patterns, an approach to consistent experiences across all journeys.

**Be consistent** - but this doesn't mean we have to be the same.

## Purpose

Here we focus on how to approach functional customer journey design, principles, and reusable design solutions.

These are made up of page types, experience patterns and components.

Using these tools helps designers and engineers focus on solving complex user problems.

## Step-by-step

When building a new experience for our customers, we advise that you employ a step-by-step journey pattern.

By understanding the customers mental model and breaking the journey into logical steps will help them to complete their tasks easily.

![Step-by-step](images/journeys/step-by-step.webp)

### Guiding principles

Here are a set of principles to help the customer succeed using this step-by-step process:

- Display the most important information first
- Present the simplest solution to progress the user
- Reveal further content based on their choices
- Group content and questions into relevant and relatable sections
- Provide a clear context to the user
- Focus the user on core actions and functions
- Provide clear routes to progress or complete
- Be consistent in your approach and rhythm

### Benefits 

Adopting these principles will help you to create a great user experience for our customers.

Key benefits include:

- Reducing the user’s cognitive load, allowing them to focus on the task at hand
- Breeding familiarity so that users recognise rather than have to recall
- Setting expectations and providing context to help reduce errors and confusion
- Improving efficiency, therefore increasing completion, conversion, and customer satisfaction
- Cleaner user interface to help customers focus

### One thing per page

Helping customers to focus and understand the task by displaying one thing on each page of your journey.

Such as:

- a question or group of questions
- a choice they need to make
- or a piece of information

Displaying too many questions on a single page can cause validation problems, especially when using a mobile device. Reducing this content can help customers identify and fix any problems they encounter.

### Group your questions

Grouping related form elements is a purposeful way of helping the customer to complete their journey.

Use a single page to group questions or tasks together, such as asking the customer for personal details or to provide their address.

Provide context and a description for groups of form controls by using the fieldset and legend attributes. Using these will help customers understand the objective of the task, and will naturally interact with the form better.

- You can [read more information about the Fieldset component here](components/ns-fieldset.md).

### Playing back information

Providing the customer with a summary of their answers can help reduce errors and confusion, and provide reassurance of what they have completed.

Further research is required for when to playback information to users:

- After each individual question or section
- Grouped summary at the end of a journey

There are currently two distinct methods for playing back and summarising a customer’s answers.

One using flat cards, the other a description list. Both can be used to play back a representative structure of the sections a customer has completed.

![Description list used for personal information summary](images/journeys/playback.webp)

#### ns-card

The `<ns-card>` has a variant type “flat”, this variant contains a heading, content, and a call to action.

The heading can represent each section. The paragraph to show the information provided, and the call to action can provide the option to navigate back to that section and amend their responses.

#### Description list

The description list is a typographic style that uses the description list, or `<dl>` tag.

This element is used for presenting pairs of information - a label and a piece of data.

It is ideal for summarising a series of customer responses. In addition to the label and data, a link can be used to allow navigation back to the relevant section.

## Navigational items

Functional journey pages should come with a header that includes navigational items to ensure we keep a coherent experience across the website. It has also been proven that it helps customs that may have entered the wrong journey to easily recover and select the correct one.

## Supporting pages for journeys

We have a growing number of page types that have been researched and developed across multiple teams.

These help to provide a consistent experience for the customer, and also to make your delivery more efficient. We advise you to use these pages when they are required.

They include:

- [Start - for introducing a journey](page-types/start.md)
- [Confirmation - for closing a journey](page-types/confirmation.md)
- [Stopgap - to help during long processing times](page-types/stopgap.md)
- [Roadblock - to help when a journey is unavailable](page-types/roadblock.md)

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Create a logically structured step-by-step experience | Place all of your questions on one page |
| Help the customer to understand the context of the information you are asking | Ask for irrelevant information |
| Group relevant questions together | |
| Use existing patterns |  |

## Checklist

Below is a list of questions that might help you to create an intuitive and successful journey for our customers:

- What is the user's need for your journey?
- What is the context of a customer using this journey?
- Do you have a mental model?
- Have you mapped the experience?
- Is there a pattern available to support your journey?
- Is another team researching the same thing?
- Is the information you're asking relevant?
- Is the formatting familiar?
- Are you setting expectations correctly?

## Further research

At the moment, Nucleus is focusing on this step-by-step journey pattern. And supporting any customer experiences using this journey pattern.

Further research is required to document intricate details and other types of journey patterns.

These areas include:

- Motion choreography, transitions, and loading
- Screen readers and other assistive technology
- Navigating between sections

If you would like to help research and define a journey pattern, please engage with Nucleus on Slack **#product-nucleus**

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[patterns-journeys]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[patterns-journeys]).

<PageFooter></PageFooter>
