---
title: Product
description: Page type | Product page
---

import { StorybookPage } from '../../includes/storybook-page.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

Product pages introduce more granular detail than hub pages. They often display pricing, product terms and promotion details. Primary actions on the page drive customers into the sales journey, and conversion rate should be measured into these journeys to deduce how to optimise page performance.

## Purpose

* Immediately convey the value of the featured product (or service).
* Explain the key features of the the product or service, this could be visually or verbally.
* Make customers believe this is the product or service they need.
* Convince the customer of the product offering to drive them into the top of the sales funnel.
* Carry all relevant legal or regulatory information (this could be a link to or caveat etc) required for the product & service offerings on the page.
* Direct users to more information if they’re not at the sales part of their buying journey.

## Principles to follow

| Creative | Tone of voice | Keywords |
| :--- | :--- | :--- |
| Modern and dynamic  | Be active, Be natural | Promotional, Informative |

## Example

<StorybookPage story="examples-page-types--product"></StorybookPage>

## Content guidance

Use images of the product itself, or if that isn't tangible, the items it affects. Show clarity in pricing and create a persuasive call-to-action (CTA). Write informative product descriptions for the uninitiated. Leverage social proof where possible. Provide accurate product recommendations and remain consistent. 

There are different types of products, so you will need to assess your individual product's requirements, but you may find the following composition guidelines of use. 

| Page&nbsp;composition | Description |
| :--- | :--- |
| ![Image of header](https://user-images.githubusercontent.com/78355810/121555708-250d1f00-ca0b-11eb-86b9-df4a65ccfb60.png) | This page will always start with [nsx-header](/components/nsx-header.md) providing the primary navigation for the website, whilst also being our main brand presence. |
| ![Image of landmark-lakeside](https://user-images.githubusercontent.com/78355810/131121916-b8dc224f-c978-483d-bf2e-0365b98e95d6.png) | Use the [ns-landmark](/components/ns-landmark.md) component (lakeside) with a prominent, compelling, value proposition. Clearly and concisely describe the product and any offer, to confirm to the user the page they have opened. It effectively brings CTAs further up the page and into view, which in theory should increase conversions (the use of a single CTA here could also work in the absence of multiple choices). Optionally, you could include an [ns-pill](/components/ns-pill.md) component to highlight the offer.|
| ![Image of Product cards](https://user-images.githubusercontent.com/78355810/131130369-1b5a8516-e240-4a27-993c-059852ab43ce.png) | Conversions may be increased if the [ns-product-card](/components/ns-pill.md) or [ns-card](/components/ns-card.md) (support with image type) CTAs are high up in the order of a product page – situating them in the most visually scanned areas. Use images that conform to [ns-image](/components/ns-image.md) 16:9 aspect ratio, and help communicate the product. It can also make comparisons easier. |
| ![Image of benefits bullet point list](https://user-images.githubusercontent.com/78355810/131134066-0a731188-1311-4730-82a9-7cdbf67975c1.png) | Explain the main benefits of the product. Perhaps tell a story or link to one. This could be in the form of a list within the [ns-content](/components/ns-content.md) or [ns-lockup](/components/ns-lockup.md) components.  |
| ![Image of Trustpilot testimonials](https://user-images.githubusercontent.com/78355810/131661864-af82f913-94bd-4d44-93ee-8bbf3f95a77b.png) | Leverage social proof by including things like TrustPilot reviews or the [ns-testimonial](/components/ns-testimonial.md) component. TrustPilot can be of more value to the user as the content is honest and not curated by our business. However, in some cases, using the ns-testimonial component may be more appropriate and utilises the company's brand aesthetic in the section. |
| ![Image of lockup](https://user-images.githubusercontent.com/78355810/131138961-8f6b88a4-78bc-4774-96a9-96de6238585d.png) | Highlight related products, services or links to guides etc. using [ns-lockup](components/ns-lockup.md) component, but keep this lower down the page than the main product information. |
| ![Image of accordion](https://user-images.githubusercontent.com/78355810/131140408-01727e6c-e724-458c-bf15-0427f53149e0.png) | Use the [ns-accordion](/components/ns-accordion.md) component to display any FAQs. If a user has scrolled this far they are likely to have unanswered questions. You may also want to consider including live chat support like 'Cosmo' (British Gas). |
| ![Image of caveat](https://user-images.githubusercontent.com/78355810/131139370-e7d72fef-b3a6-4a49-ad64-c7b7d4b63e70.png) | Following that we should display any caveats or legal information using the [ns-caveat](/components/ns-caveat.md) component.  |
| ![Image of Footer](https://user-images.githubusercontent.com/78355810/121567323-57704980-ca16-11eb-9951-598055b9808c.png) | Finally, there is [nsx-footer](/components/nsx-footer.md) which holds all required links and copyright information for the website. It is also an important SEO tool as it includes links to social channels and our mobile apps. |


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-product]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-product]).

<PageFooter></PageFooter>
