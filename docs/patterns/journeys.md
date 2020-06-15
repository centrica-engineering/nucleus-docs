---
description: Journey patterns documentation.
---

# Introduction

Creating engaging and usable journeys should be one of the highest priorities of a product team. Overwhelming the user with content, or not focusing on them as an individual can lead to frustration and an increased likelihood of abandoning their journey.

There is no one size fits all solution, but the design system should be here to increase consistency between customer experiences across all product journeys. Be consistent - but this doesn't mean we have to be the same.

## Purpose

Here we focus on how to approach functional customer journey design, principles, and reusable design solutions. These can be made up of [page types](https://docs.britishgas.design/page-types), [experience patterns](https://docs.britishgas.design/patterns/experiences) and [components](https://docs.britishgas.design/components). For our designers and engineers, they are another useful tool to allow them to focus on solving the complex user problems.

## Step-by-step
When building a new experience for our customers, we advise that you employ a step-by-step method to create that journey. By understanding our customers mental model, and breaking your experience down to logical steps you can help them to complete their tasks more easily. 

![Step-by-step](https://user-images.githubusercontent.com/45626534/84635485-2fc1d080-aeeb-11ea-970b-df59140d234a.png)

### Guiding principles

Here are a set of principles we have created to help the customer succeed using the step-by-step process:

- Display the most important information first
- Present the simplest solution to progress the user
- Reveal further content based on their choices
- Group content and questions into relevant and relatable sections
- Provide a clear context to the user
- Focus the user on core actions and functions
- Provide clear routes to progress or complete
- Be consistent in your approach and rhythm

### Benefits 

British Gas customers engage with a variety of complex tasks in our digital real estate. Adopting these principles should help you to create a great user experience for the customer. Key benefits include:

- Reducing the user’s cognitive load, allowing them to focus on the task at hand
- Breeding familiarity so that users recognise rather than have to recall
- Setting expectations and providing context to help reduce error rates
- Improving efficiency, therefore increasing completion, conversion, and customer satisfaction
- Cleaner UI with less clutter to help customers focus

### Pages rather than sections

At this stage, our documentation focuses on creating new experiences using a page by page structure. Further research is required to understand the accessibility of creating progressively disclosed sections of a journey. These areas include:

- Motion choreography, transitions, and loading
- Screen readers and other assistive technology
- Navigation back and forth between sections

If you would like to help research and define a sectional journey pattern, please engage with the team on Slack **#product-nucleus**

### One thing per page

Help customers to focus and understand the task better by displaying one thing on each page of your journey. Such as: 

- a question or group of questions
- a choice they need to make
- or a piece of information 

Displaying too many questions on a single page can cause validation problems, especially if a customer is using a mobile device. Reducing this content can help customers identify and fix any errors they may have.

### Group your questions

Grouping form controls is a purposeful way of helping the customer to complete their journey. Use a single page to group questions or tasks together, such as asking the customer for personal details or to provide their address. 

You can provide context and a description for groups of form controls using either the landmark component or the fieldset and legend elements. The latter elements sit within the form component. Both of these methods are there to help customers understand the objective of what you are asking, and therefore interact with the form better.

- You can read more information about grouping questions here.(TBC)
- You can [read more information about the Fieldset component here](https://docs.britishgas.design/components/ns-fieldset).

## Existing pages and patterns

We have a growing number of page types and patterns that have been researched and developed across multiple teams. These can help to provide a consistent experience for the customer, and also to make your delivery more efficient, we advise you to use these patterns. They include:

- [Start](https://docs.britishgas.design/page-types/start)
- [Confirmation](https://docs.britishgas.design/page-types/confirmation)
- Addresses (In development)
- Appointment selection (In development)
- Date selection (In development)
- Direct Debit information (TBC)
- [Marketing consent](https://docs.britishgas.design/components/nsx-marketing-consent)
- Meter readings (In development)
- Payment Card information (TBC)


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

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[patterns-journeys]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[patterns-journeys]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

