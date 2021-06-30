---
title: Guide
description: Page type | Guide page
---

import { StorybookPage } from '../../includes/storybook-page.js'

## Introduction

Guide pages unsurprisingly, give guidance to the reader. This guidance is often on a wide range of topics related in some way to the products and services the organisation offers. Guide pages are also an essential SEO tool, designed to drive traffic to the site by proving the organisation to be an expert on a range of (well considered and relevant) topics.

## Purpose

* Some guide pages are intended to provide specific detail relating to the products and services the organisation offers. Others answer important customer questions relating to our product and services.
* To give the customer the ability to scan through the details and find what the information they need quickly and easily.
* To give customers the confidence they need to make a purchase.
* To educate customers on a particular topic.
* This might take the form of instructions on how to do something, breaking down a complex topic or deeper reading to help make a decision.

## Principles to follow

| Creative | Tone of voice | Keywords |
| :--- | :--- | :--- |
| Clean and fresh | Be helpful | Functional, Informative |

## Example

<StorybookPage story="examples-page-types--guide"></StorybookPage>

## Content guidance

Images should only be used on a guide page if they are demonstrating a relative point. This way the layout can be kept clean and simple to help the customer easily scan to the information they need without distraction. 

Keep content clear and to the point. Use bullet points or numbered lists to help convey instructions. Use descriptive h2 or h3 etc. to break content into relevant sections, allowing the user to identify the content by just reading those alone. And use the 2nd column and card to show things like contact details, a summary, or relative links.

| Page&nbsp;composition | Description and code |
| :--- | :--- |
| ![Image of header](https://user-images.githubusercontent.com/78355810/121555708-250d1f00-ca0b-11eb-86b9-df4a65ccfb60.png) | This page will always start with [nsx-header](/components/nsx-header.md) providing the primary navigation for the website, whilst also being our main brand presence. |
| ![Image of landmark-hillside](https://user-images.githubusercontent.com/78355810/122067713-b6093f00-cdeb-11eb-8ee8-8b07c8c71bdf.png) | Next is [ns-landmark](/components/ns-landmark.md) (hillside) showing a clear, concise and descriptive headline, paired with a line of text that elaborates on the title. |
| ![LF Content - 2col](https://user-images.githubusercontent.com/78355810/123948174-12965d80-d999-11eb-9638-5841184801f0.png) | Following that there is the main body of content, which can be made up from h2-h6 and paragraph text, lists, tables, accordions and CTAs. It is contained within [ns-content](/components/ns-content.md) and has 2 columns in larger viewports. The column to the right can contain a support type [ns-card](/components/ns-card.md) useful for summarised information or relative links. |
| ![Supplementary cards](https://user-images.githubusercontent.com/78355810/123975760-80508280-d9b5-11eb-896e-fa0cb1f87de0.png) | Then there is an section which is common to help and support pages and asks if the page was useful (answered with radio buttons). The feedback helps us improve the user experience of these pages.  |
| ![Image of Footer](https://user-images.githubusercontent.com/78355810/121567323-57704980-ca16-11eb-9951-598055b9808c.png) | Finally, there is [nsx-footer](/components/nsx-footer.md) which holds all required links and copyright information for the website. It is also an important SEO tool as it includes links to social channels and our mobile apps. |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-guide]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-guide]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
