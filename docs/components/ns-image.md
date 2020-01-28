---
description: Atom | Image component.
---

# ns-image

## Introduction

> An image allows British Gas to share visual content.

British Gas has a variety of images to enhance content on the website and helps sell a story. This component allows having images on the website, while making sure that the page loads quickly (lazy loading) and follows the right ratios.

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [`ns-card`](https://docs.britishgas.design/components/ns-card)| `support` | 16:9 | 640x360px | &lt; 50kb | jpeg | [ns-card-support-640x360px](https://user-images.githubusercontent.com/50207859/67642149-d3c91e00-f900-11e9-983c-9b812217b801.jpg) |
| [`ns-editorial`](https://docs.britishgas.design/components/ns-editorial)| n/a | 4:3 | 480x360px | &lt; 50kb | jpeg | [ns-editorial-480x360px](https://user-images.githubusercontent.com/50207859/67642150-d461b480-f900-11e9-9803-5ff4df7ad9a7.jpg) |
| [`ns-landmark`](https://docs.britishgas.design/components/ns-landmark)| `summit` | 16:9 | 1440x810px | &lt; 200kb | jpeg | [ns-landmark_summit_1440x810px](https://user-images.githubusercontent.com/50207859/67642478-12140c80-f904-11e9-849d-5ffe39818c5b.jpg) |
| [`ns-lockup`](https://docs.britishgas.design/components/ns-lockup)| `lockbox` | 4:3 | 720x540px | &lt; 100kb | jpeg | [ns-lockup-lockbox-720x540px](https://user-images.githubusercontent.com/50207859/67642153-d461b480-f900-11e9-9520-11204c64a11b.jpg) |
| [`ns-lockup`](https://docs.britishgas.design/components/ns-lockup)| `lockbox` | 1:1 | 720x720px | &lt; 100kb | jpeg | [ns-lockup-lockbox-720x720px](https://user-images.githubusercontent.com/50207859/67642154-d461b480-f900-11e9-9581-212ede25f362.jpg) |
| [`ns-lockup`](https://docs.britishgas.design/components/ns-lockup)| `lockjaw` | 4:3 | 720x540px | &lt; 100kb | jpeg | [ns-lockup-lockjaw-720x540px](https://user-images.githubusercontent.com/50207859/67642155-d4fa4b00-f900-11e9-9ba6-a31f61ddb0ef.jpg) |
| [`ns-lockup`](https://docs.britishgas.design/components/ns-lockup)| `locknut` | 1:1 | 720x720px | &lt; 100kb | jpeg | [ns-lockup-locknut-720x720px](https://user-images.githubusercontent.com/50207859/67642156-d4fa4b00-f900-11e9-8400-548625a1648f.jpg) |
| [`ns-selector`](https://docs.britishgas.design/components/ns-selector)| n/a | 16:9 | 640x360px | &lt; 50kb | jpeg | [ns-selector-640x360px](https://user-images.githubusercontent.com/50207859/68392177-1ee4fb80-0161-11ea-8826-14326d2c976a.jpg) |

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Resize your image [see optimise your image](https://github.com/ConnectedHomes/nucleus-docs/tree/95a2be6f2144582507005e4179765f23924879dc/docs/components/LINK/README.md) | Use images as the primary content |
| Use the correct image format png/jpg | Put text inside the image |
| Use brand approved images | Use a white background in images |
| Think about the image responsive behaviour |  |

### Considerations of best practices

* Reduce images to the smallest size that does not degrade the image too much where it becomes distracting to the customer.
* The components that hold images will take care of the rounded corners and any masking or overlaying of illustrations. Read about the component you wish to use with the image.
* Always use this component to add images to the website.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-images--lazy-loading-img).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-image" caption="" %}

```markup
<ns-image ratio="16x9" src="https://www.britishgas.co.uk/aem6/content/dam/britishgas/images/jumbotron/home-services/20-Home-Services-wilbur.jpg"></ns-image>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes - `ns-card` `ns-landmark` `ns-lockup` |
| **What layout classes can be used?**  | None |

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

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* How to optimise images [guide](https://docs.britishgas.design/how-to/optimise-images).
* Brand image [library](https://centrica.frontify.com/d/pDUbkrcf54Nh/our-assets).
* [ns-card](https://docs.britishgas.design/components/ns-card)
