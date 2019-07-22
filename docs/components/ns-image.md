# ns-image

## Introduction

> An image allows British Gas to share visual content.

British Gas has a variety of images to enhance content on the website annd helps sell a story. This component allows having images on the website, while making sure that the page loads quickly \(lazy loading\) and follows the right ratios.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/playground-images--lazy-loading-img)

```markup
<ns-image ratio="16x9" src="https://www.britishgas.co.uk/aem6/content/dam/britishgas/images/jumbotron/home-services/20-Home-Services-wilbur.jpg"></ns-image>
```

## Component Relationship

* Does it live in a panel? \(no\)
* Does it live inside other components?
  * ns-lockup
  * ns-card
* Atomic type: \(atom\)

## Specification

| **Name** | src |
| :--- | :--- |
| **Description** | The URL to the image |
| **Type** | string |
| **Default** | '' |
| **Options** | n/a |
| **Note** | The URL should be to the CMS |

| **Name** | alt |
| :--- | :--- |
| **Description** | The text that describes the image |
| **Type** | string |
| **Default** | '' |
| **Options** | n/a |
| **Note** | Have this empty if the image is decoration |

| **Name** | Ratio |
| :--- | :--- |
| **Description** | Ratio of the image |
| **Type** | string |
| **Default** | 16x9 |
| **Options** | 16x9, 4x3, 1x1 |

| **Name** | Background |
| :--- | :--- |
| **Description** | The image is added as a CSS background |
| **Type** | boolean |
| **Default** | false |
| **Options** | true, false |
| **Note** | This is only for decorative images |

| **Name** | Backgroundsize |
| :--- | :--- |
| **Description** | To add CSS size for background images |
| **Type** | string |
| **Default** | cover |
| **Options** | cover, contain |

## Best practises

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Resize your image \(\[see optimise your image \(LINK\)\] | Use images as the primary content |
| Use the correct image format png/jpg | Put text inside the image |
| Use brand approved images | Use a white background in images |
| Think about the image responsive behaviour |  |
|  |  |

### Considerations of best practices

* Reduce images to the smallest size that does not degrade the image too much where it becomes distracting to the customer.
* The components that hold images will take care of the rounded corners and any masking or overlaying of illustrations. Read about the component you wish to use with the image.
* Always use this component to add images to the website.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-image]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-image])

💩 🎉 🦄 You can also contact the team on Slack on the `product-nucleus` channel!

## Related links

* How to optimise images [guide](https://centrica.frontify.com/d/nZrm1Ao1wccK/foundations#/photography/how-to-optimise-your-images)
* Brand image [library](https://centrica.frontify.com/d/pDUbkrcf54Nh/our-assets)
* Examples of where it is used
