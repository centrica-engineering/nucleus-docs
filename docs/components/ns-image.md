---
description: Atom | Image component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> An image allows British Gas to share visual content.

British Gas has a variety of images to enhance content on the website and helps sell a story. This component allows having images on the website, while making sure that the page loads quickly (lazy loading) and follows the right ratios.

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [`ns-card`](components/ns-card.md)| `support` | 16:9 | 640x360px | &lt;50kb | .jpg | [ns-card-support-640x360px](images/ns-image/ns-card-support-640x360px.jpg) |
| [`ns-editorial`](components/ns-editorial.md)| n/a | 4:3 | 480x360px | &lt;50kb | .jpg | [ns-editorial-480x360px](images/ns-image/ns-editorial-480x360px.jpg) |
| [`ns-landmark`](components/ns-landmark.md)| `summit` | 16:9 | 1440x810px | &lt;200kb | .jpg | [ns-landmark-summit-1440x810px](images/ns-image/ns-landmark-summit-1440x810px.jpg) |
| [`ns-landmark`](components/ns-landmark.md)| `valley` | 16:9 | 800x450px | &lt;100kb | .jpg | [ns-landmark-valley-800x450px](images/ns-image/ns-landmark-valley-800x450px.jpg) |
| [`ns-landmark`](components/ns-landmark.md)| `valley` | 4:3 | 800x600px | &lt;100kb | .jpg | [ns-landmark-valley-800x600px](images/ns-image/ns-landmark-valley-800x600px.jpg) |
| [`ns-lockup`](components/ns-lockup.md)| n/a | 16:9 | 800x450px | &lt;100kb | .jpg | [ns-lockup-800x450px](images/ns-image/ns-lockup-800x450px.jpg) |
| [`ns-lockup`](components/ns-lockup.md)| n/a | 4:3 | 800x600px | &lt;100kb | .jpg | [ns-lockup-800x600px](images/ns-image/ns-lockup-800x600px.jpg) |
| [`ns-lockup`](components/ns-lockup.md)| n/a | 1:1 | 800x800px | &lt;100kb | .jpg | [ns-lockup-800x800px](images/ns-image/ns-lockup-800x800px.jpg) |
| [`ns-selector`](components/ns-selector.md)| n/a | 16:9 | 640x360px | &lt;50kb | .jpg | [ns-selector-640x360px](images/ns-image/ns-selector-640x360px.jpg) |

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Resize your image [see optimise your image](/foundations/photography.md#optimise-your-images) | Use images as the primary content |
| Use the correct image format png/jpg | Put text inside the image |
| Use brand approved images | Use a white background in images |
| Think about the image responsive behaviour |  |

### Considerations of best practices

* Reduce images to the smallest size that does not degrade the image too much where it becomes distracting to the customer.
* The components that hold images will take care of the rounded corners and any masking or overlaying of illustrations. Read about the component you wish to use with the image.
* Always use this component to add images to the website.

## Usage

<StorybookStory story="components-ns-image--ratio-4-x-3"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-image" parentComponents="ns-content,ns-product-card,ns-lockup"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `src` | `string`|  |  | URL to the image. |
| `alt` | `string`|  |  | Give a text alternative for screen readers. |
| `ratio` | `string` | `16x9` | `16x9`, `4x3`, `1x1` | Ratio of the image. |
| `background` | `boolean` | `false` | `true`, `false` | To make it CSS background image instead of an inline image tag. |
| `backgroundSize` | `string` | `cover` | `cover`, `contain` | To change the CSS size for a background image. |

## Specification notes

### Src

- The URL should be from the CMS.

### Alt

- If the image is just for decoration then set the alt to an empty string.
- If the image is required to understand what is going on, use the alt to add a description of wha tthe image shows.
- Don't add text about the media type, such as "an image".

### Background

- This is only for decorative images

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-image]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-image]).

<PageFooter></PageFooter>

## Related links

* How to optimise images [guide](/foundations/photography.md#optimise-your-images).
* Brand image [library](https://centrica.frontify.com/d/pDUbkrcf54Nh/our-assets).
* [ns-card](components/ns-card.md)
