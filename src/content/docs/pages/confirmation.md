---
title: Confirmation
description: Page type | Confirmation
---

## Introduction

The confirmation page type is used to show a customer that their journey or task has been completed. 

It is important to differentiate from previous stages.

## Purpose

* To reassure the customer that a task was completed.
* To play back relevant information.
* To set expectations of any further steps required.

For more information on how to bookend your journeys [see the Start page type](page-types/start).

## Principles to follow

| Creative | Tone of voice | Keywords |
| :--- | :--- | :--- |
| Clean and fresh | Be helpful | Functional, Informative |

## Example

<div class="storybook-embed page">
  <p><a href="https://www.britishgas.co.uk/nucleus/demo/iframe.html?id=examples-page-types--confirmation&amp;viewMode=story">View full page example</a></p>
  <iframe src="https://www.britishgas.co.uk/nucleus/demo/iframe.html?id=examples-page-types--confirmation&amp;viewMode=story&amp;nav=0" title="Nucleus: examples-page-types--confirmation" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
</div>

## Content guidance

The page should always begin with a clear completion message.

Any key information the customer needs to remember or save for a later date should be presented at the top of the page. This might include:

* Any reference numbers.
* An appointment date and/or time.
* A start or end date.
* The duration of a product or service.
* An address or contact information.

This page will inform the customer that they have successfully completed their current task, and set their expectations for any further steps required. 

You can use supporting content to play back their purchase and inform them of what will happen next. If the customer is required to complete any additional follow up tasks, then those should be positioned as close to the top of the page as possible.

| Page&nbsp;composition | Description |
| :--- | :--- |
| ![Image of header](https://user-images.githubusercontent.com/78355810/121555708-250d1f00-ca0b-11eb-86b9-df4a65ccfb60.png) | This page will always start with [nsx-header](/components/nsx-header) providing the primary navigation for the website, whilst also being our main brand presence. |
| ![Image of landmark-hillside](https://user-images.githubusercontent.com/78355810/122067713-b6093f00-cdeb-11eb-8ee8-8b07c8c71bdf.png) | Next is [ns-landmark](/components/ns-landmark) showing a clear completion message. Any key information the customer needs to remember or save for a later, such as appointment details should be presented here. |
| ![Image of Timeline](https://user-images.githubusercontent.com/78355810/122087289-74cd5b00-cdfc-11eb-9171-18647c95b75f.png) | Below the message can be [ns-timeline](/components/ns-timeline) that shows a status overview of the whole process whilst setting expectations for the further steps. |
| ![Image of supplementary cards](https://user-images.githubusercontent.com/78355810/122088757-f83b7c00-cdfd-11eb-82cc-7bf553156b1a.png) | Following that, there can be supplementary content that consists of more [ns-card](/components/ns-card) components, consider introducing a decoration that is sympathetic to the surrounding aesthetics. |
| ![Image of Footer](https://user-images.githubusercontent.com/78355810/121567323-57704980-ca16-11eb-9951-598055b9808c.png) | Finally, there is [nsx-footer](/components/nsx-footer) which holds all required links and copyright information for the website. It is also an important SEO tool as it includes links to social channels and our mobile apps. |

### Supporting confirmation email

In addition to this page, a confirmation email containing this information should be sent to the customer. This is especially important if the customer cannot bookmark or revisit this page once they have navigated away from it.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-confirmation]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-confirmation]).
