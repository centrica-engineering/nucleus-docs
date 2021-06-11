---
title: Home
description: Page type | Home page
---

import { StorybookPage } from '../../includes/storybook-page.js'

## Introduction

Think of this page as the shop window. It is the primary display point of the brand. It needs to capture attention, and peak interest. It is also the starting point for many users to navigate into specific product journeys, or learn before they purchase. The homepage has to work hard and wear many hats without being an overwhelming barrage of information.

## Purpose

* An introduction to the British Gas brand, leaving a lasting first impression.
* Promote specific products or services offered by British Gas.
* Drive traffic to strategically important products and services.
* Provide a starting point for customers to easily find what they need.
* Promote the latest offers.
* Act as a ‘meeting point’, which a user can return to at any point during their interaction with the site.

## Principles to follow

| Creative | Tone of voice | Keywords |
| :--- | :--- | :--- |
| Warm and friendly  | Be active, Be natural | Promotional, Navigational, Informative, Memorable |

## Example

<StorybookPage story="examples-page-types--home"></StorybookPage>

## Content guidance

The home page should always begin with an [ns-landmark](https://nucleus.design/docs/components/ns-landmark) (summit) containing the most compelling and important message emphasising the key points in bold text, accompanied with a relevant 'hero' image. 

The rest of the page can be considered based on your particular requirements, however, this example of structure is a good starting point...

| Page&nbsp;composition | Description and code |
| :--- | :--- |
| ![Image of header](https://user-images.githubusercontent.com/78355810/121555708-250d1f00-ca0b-11eb-86b9-df4a65ccfb60.png) |  The home page should always start with [nsx-header](https://nucleus.design/docs/components/nsx-header) which provides the primary navigation for the website, whilst also being our main brand presence with the logo.<br/><br/>`nsx-header` |
| ![Image of skyline](https://user-images.githubusercontent.com/78355810/121555785-348c6800-ca0b-11eb-922d-c2c3b4937acd.png) | Positioned directly beneath the global navigation and above any content, [ns-skyline](https://nucleus.design/docs/components/ns-skyline) displays high level messages to the user. The purpose of ns-skyline is to notify the user of important site-wide, or non-page specific events, that may affect their experience of using the website.<br/> <br/> `ns-skyline` |
| ![Image of Panel 1](https://user-images.githubusercontent.com/78355810/121552839-af07b880-ca08-11eb-9f48-63171fa005db.png) | This summit [ns-landmark](https://nucleus.design/docs/components/ns-landmark) consists of a heading, an introductory paragraph and a CTA. Landmarks are used to introduce the page, informing users of their current location and its primary purpose. <br/><br/>`ns-landmark[type=summit]` |
| ![Image of Panel 2](https://user-images.githubusercontent.com/78355810/121559775-ce094900-ca0e-11eb-9d15-d370761a9202.png) | Next, this [ns-panel](https://nucleus.design/docs/components/ns-panel) consists of a heading, an introductory paragraph and Section Card style [ns-card](https://nucleus.design/docs/components/ns-card)s with CTAs for the most common reasons a user would be visiting the website. The heading and paragraph should be used to introduce the user to the business (it shouldn't be assumed that everyone knows this already). <br/><br/>It also serves as a visual separator from the landmark above and the lock-up below that would fight for attention if adjacent.<br/><br/>`ns-panel>div>h2+p+ns-card[type=support]*3` |
| ![Image of Panel 3](https://user-images.githubusercontent.com/78355810/121560789-c0a08e80-ca0f-11eb-9708-658a94aa90a0.png) |  Next is a [ns-lockup](https://nucleus.design/docs/components/ns-lockup) describing some information such as latest news or a promotion combined with an image and [ns-cta](https://nucleus.design/docs/components/ns-cta). <br/><br/>`ns-panel>ns-lockup>(h2[slot=heading]>span.h5+span.h1)+p[slot=paragraph]+(a[slot=cta]>ns-cta)>ns-image[slot=image]` |
| ![Image of Panel 4](https://user-images.githubusercontent.com/78355810/121561606-91d6e800-ca10-11eb-967c-824decbea4a8.png) | Following on are 3 more [ns-card](https://nucleus.design/docs/components/ns-card)s with text CTAs, combined with a heading. These offer links to other services that may also be of interest, but are of less importance than those in Panel 1. <br/> <br/>`ns-panel>h2+ns-card*3`  |
| ![Image of Panel 5](https://user-images.githubusercontent.com/78355810/121562212-23465a00-ca11-11eb-8a39-10e0885ab05d.png) | Next is a [ns-lockup](https://nucleus.design/docs/components/ns-lockup) with decoration. Used to grab attention to another product or service lower down in the order. <br/><br/> `ns-panel[decoration=circle-left-yellow]>ns-lockup` |
| ![Image of Panel 6](https://user-images.githubusercontent.com/78355810/121562898-d1520400-ca11-11eb-93e8-46dedc5bf79f.png) | Following that is a [ns-lockup](https://nucleus.design/docs/components/ns-lockup) but without decoration, so secondary to the panel above.<br/><br/>`ns-panel>ns-lockup` |
| ![Image of Panel 7](https://user-images.githubusercontent.com/78355810/121563848-b8961e00-ca12-11eb-936e-b46c5de2394d.png) | `ns-panel>ns-lockup`<br/> [ns-lockup](https://nucleus.design/docs/components/ns-lockup) with decoration |
| ![Image of Panel 8](https://user-images.githubusercontent.com/78355810/121565028-fa739400-ca13-11eb-8a68-90ff869c3cb4.png) | `ns-panel>ns-lockup`<br/> [ns-lockup](https://nucleus.design/docs/components/ns-lockup) variant |
| ![Image of Panel 9](https://user-images.githubusercontent.com/78355810/121565846-c64ca300-ca14-11eb-803c-c7e2ba88de92.png) | `ns-panel>ns-lockup`<br/> A last mop-up of any user that has scrolled this far. Ask what else might they be looking for that's not already been mentioned above? 3 more [ns-card](https://nucleus.design/docs/components/ns-card) with text CTAs but with a decoration that is sympathetic to the end of the page caveat or footer section. |
| ![Image of Caveat](https://user-images.githubusercontent.com/78355810/121566776-bed9c980-ca15-11eb-8032-8df59ac5c372.png) | `ns-caveat`<br/> [ns-caveat](https://nucleus.design/docs/components/ns-caveat) Caveats provide additional information and legal details to content. |
| ![Image of Footer](https://user-images.githubusercontent.com/78355810/121567323-57704980-ca16-11eb-9951-598055b9808c.png) | `nsx-footer`<br/> The [nsx-footer](https://nucleus.design/docs/components/nsx-footer) holds legally required links and copyright information for the website. It is also an important SEO tool as it includes links to social channels and our mobile apps. |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-home]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-home]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
