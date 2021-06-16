---
title: Confirmation
description: Page type | Confirmation
---

import { StorybookPage } from '../../includes/storybook-page.js'

## Introduction

The confirmation page type is used to show a customer that their journey or task has been completed.

## Purpose

* The purpose of the confirmation page is to show a customer that their action has been completed. It is important to differentiate this from their previous steps so they know there is a clear change.
* By displaying the timeline, it also gives the user a status overview of the whole process (which itself, may not be fully completed yet) and sets their expectations for the next steps.
* For more information on how to bookend your journeys [see the Start page type](page-types/start.md).

## Principles to follow

| Creative | Tone of voice | Keywords |
| :--- | :--- | :--- |
| Clean and fresh  | Be helpful | Functional, Informative |

## Example

<StorybookPage story="examples-page-types--confirmation"></StorybookPage>

## Content guidance

The page should always begin with a clear completion message.

Any key information the customer needs to remember or save for a later date should be presented at the top of the Confirmation page. 

* Any reference numbers.
* An appointment date and/or time.
* A start or end date, or duration of a product or service.
* An address or contact information.

This page should positively affirm to the customer that they have successfully completed their current task, and set their expectations for any further steps required. You can use supporting content to playback their purchase and inform them of what will happen next. If the customer is required to complete any additional follow up tasks then they should be highlighted as close to the top of the page as possible.

## A good starting point

| Page&nbsp;composition | Description and code |
| :--- | :--- |
| ![Image of header](https://user-images.githubusercontent.com/78355810/121555708-250d1f00-ca0b-11eb-86b9-df4a65ccfb60.png) |  This page should always start with [nsx-header](https://nucleus.design/docs/components/nsx-header) which provides the primary navigation for the website, whilst also being our main brand presence with the logo.<br/><br/>`nsx-header` |
| ![Image of landmark-hillside](https://user-images.githubusercontent.com/78355810/122067713-b6093f00-cdeb-11eb-8ee8-8b07c8c71bdf.png) |  Next is a [ns-landmark](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-landmark--hillside) (hillside) showing a clear completion message. Any key information the customer needs to remember or save for a later, such as an appointment date and time, should be presented here. <br/><br/>`ns-panel>ns-landmark`|
| ![Image of Timeline](https://user-images.githubusercontent.com/78355810/122087289-74cd5b00-cdfc-11eb-9171-18647c95b75f.png) |  Below the message is [ns-timeline](#) showing a status overview of the whole process whilst setting expectations for the next steps. <br/><br/>`ns-timeline`|
| ![Image of supplementary cards](https://user-images.githubusercontent.com/78355810/122088757-f83b7c00-cdfd-11eb-82cc-7bf553156b1a.png) |  Following that there is supplementary content that consists of more [ns-cards](https://nucleus.design/docs/components/ns-card) with direct [ns-ctas](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-cta--direct-button), but with a decoration that is sympathetic to the surrounding aesthetics. <br/><br/>`ns-panel>h2+ns-card*3`|
| ![Image of Footer](https://user-images.githubusercontent.com/78355810/121567323-57704980-ca16-11eb-9951-598055b9808c.png) | Finally, there is [nsx-footer](https://nucleus.design/docs/components/nsx-footer) which holds legally required links and copyright information for the website. It is also an important SEO tool as it includes links to social channels and our mobile apps.<br/><br/>`nsx-footer` |

### This page may also include

Supplementary content relating to their completed journey can be displayed further down the page, with hierarchical importance reducing with scroll depth. If you believe there are related tasks that meet their next best action, then these can be highlighted with a primary call to action.

### Supporting email comms

In addition to this page, a confirmation email containing this information should be sent to the customer as well. This is especially important if the customer cannot bookmark or revisit this page once they navigated away from it.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-confirmation]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-confirmation]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
