---
title: Start
description: Page type | Start
---

import { StorybookPage } from '../../includes/storybook-page.js'

## Introduction

This page type should be used to clarify and set up a task for a user at the beginning of a journey.


## Purpose

* This page sets expectations and provides any contextual information that a user may need to complete their journey successfully. 
* For more information on how to bookend your journeys [see the Confirmation page type](page-types/confirmation.md).

## Principles to follow

| Creative | Tone of voice | Keywords |
| :--- | :--- | :--- |
| Modern and dynamic  | Be active, Be natural | Promotional, Informative |

## Example

<StorybookPage story="examples-page-types--start"></StorybookPage>

## Content guidance

The outline below provides an overview of the content that is likely to be required at this stage in the user's journey. This is not prescriptive guidance and the unique needs of each journey should always also be considered. 

A dedicated start page may not be needed if users are coming from a hub page where their task is already clearly clarified. This page may also vary in shorter journeys, particularly where form elements may need to be present at the first step.

Use a concise navigational subtitle or topic reference to orient your user.

This example of structure is a good starting point...

| Page&nbsp;composition | Description and code |
| :--- | :--- |
| ![Image of header](https://user-images.githubusercontent.com/78355810/121555708-250d1f00-ca0b-11eb-86b9-df4a65ccfb60.png) |  The home page should always start with [nsx-header](https://nucleus.design/docs/components/nsx-header) which provides the primary navigation for the website, whilst also being our main brand presence with the logo.<br/><br/>`nsx-header` |
| ![Image of landmark-hillside](https://user-images.githubusercontent.com/78355810/122067713-b6093f00-cdeb-11eb-8ee8-8b07c8c71bdf.png) |  Next is a [ns-landmark](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-landmark--hillside) (hillside) that clarifies the task at hand for the user. This should have a warm and welcoming tone.<br/><br/>`ns-landmark`|
| ![Image of Bullet list Content plus CTA](https://user-images.githubusercontent.com/78355810/122067871-d5a06780-cdeb-11eb-91d3-f5479778d76d.png) |  Below that is a an [ns-content](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-content--standard) with insructional heading with a short bullet point list to outline any information that the user needs to know to complete the journey. It also includes a prominent direct call to action [ns-cta](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-cta--direct-button).<br/><br/>`ns-content`|
| ![Supplementary cards](https://user-images.githubusercontent.com/78355810/122068165-1304f500-cdec-11eb-9eaf-fe873e98903f.png) |  Then there is a section with [ns-cards](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-card--support) that link to relevant help and support content. It may also include signposting to a secondary journey or action for frequently misdirected users. This supplementary content may be displayed further down the page as needed, with hierarchical importance reducing with scroll depth. Decorative background elements should be adapted to create balance with the surrounding page elements.<br/><br/>`ns-card` |
| ![Image of Footer](https://user-images.githubusercontent.com/78355810/121567323-57704980-ca16-11eb-9951-598055b9808c.png) | Finally, there is [nsx-footer](https://nucleus.design/docs/components/nsx-footer) which holds legally required links and copyright information for the website. It is also an important SEO tool as it includes links to social channels and our mobile apps.<br/><br/>`nsx-footer` |


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-start]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-start]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!