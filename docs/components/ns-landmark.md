# ns-landmark

## Introduction

> Landmarks are used to introduce the page, informing users of their current location and its primary purpose.

Landmarks can be used to set the scene for what the page is for, what offers might be available and give helpful best next actions for users. This is where the main heading for the page will sit and give the overarching context to the rest of the page.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-landmark--hub)

```markup
<ns-landmark image="this-is-my-image.jpg">
  <h1 slot="heading">
    <span class="h5">Ennui umami locavore.</span>
    <span class="h1 enlighten">Typewriter enamel pin post-ironic. <b>Chambray mixtape</b></span>
  </h1>
  <p slot="paragraph">Cred sartorial shaman pitchfork mumblecore braid cronut shaman gastropub taiyaki godard roof party. <a href="#caveat">1</a></p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">Single-origin coffee</ns-cta>
  </a>
</ns-landmark>
```

## Component Relationship

* Does it live in a panel? \(no\)
  * What layout classes can be used? \(n/a\)
* Does it live inside other components?
  * no
* Atomic type: \(organism\)

## Specification

| **Name** | Named slot `heading` |
| :--- | :--- |
| **Description** | A single line of text containing subheading and heading |
| **Type** | string |
| **Default** | n/a |
| **Options** | n/a |
| **Notes** | `<span class="h5">Subheading</span>`  `<span class="h1 enlighten">Heading <b>embold</b> </span>` Use `<b>` to embolden |

| **Name** | Named slot `paragraph` |
| :--- | :--- |
| **Description** | A single line of paragraph text |
| **Type** | string |
| **Default** | n/a |
| **Options** | Include an optional link to `#caveat` by placing [1](ns-landmark.md#caveat) at the end |

| **Name** | Named slot `cta` |
| :--- | :--- |
| **Description** | The `<ns-cta>` component  contained within a `<a>` |
| **Type** | string |
| **Default** | n/a |
| **Options** | href, label |

| **Name** | Background image |
| :--- | :--- |
| **Description** | A 16:9 image following our Landmark focus template |
| **Type** | JPEG |
| **Default** | n/a |
| **Options** | 1440 x 810px |

## Best practises

| ✅ Do's | 💔 Don'ts |
| :--- | :--- |
| Keep content in Landmarks very concise |  |
| Content must be relevant to the page |  |
|  |  |
|  |  |
|  |  |

### Considerations of best practises

* Shorter and simpler words tend to work better in the heading
* The recommended copy length is between 1 and 5 words for the Subheading
* Xyz

## Image

| ✅ Do | 💔 Don't |
| :--- | :--- |
| Capture the moment | Allow the card to cover important content |
| ![do-father-child](https://user-images.githubusercontent.com/28779/59792082-5430a000-92cb-11e9-942b-7e457c34859c.jpg) | ![dont-child-lady-eng](https://user-images.githubusercontent.com/28779/59792183-82ae7b00-92cb-11e9-8a6f-b5322a5f6eb4.jpg) |
| Set focus of the photo correctly | Obstruct people's faces with the card |
| ![do-warehouse-eng](https://user-images.githubusercontent.com/28779/59792156-74f8f580-92cb-11e9-8b97-cf7d62766804.jpg) | ![dont-ice-cream](https://user-images.githubusercontent.com/28779/59792179-7d513080-92cb-11e9-918e-c8c02c956502.jpg) |
| Convey activity related to topic | Use images with a white background |
| ![do-couple-mobile](https://user-images.githubusercontent.com/28779/59792122-63afe900-92cb-11e9-9553-638cd20f53f2.jpg) | ![dont-wilbur](https://user-images.githubusercontent.com/28779/59792199-87732f00-92cb-11e9-9c9d-51676e6c2aba.jpg) |

## Landmark focus template

This provides the safe-area to the position of the focal point of the image.

[Download the 1440x810px Landmark testcard image](https://user-images.githubusercontent.com/28779/59753927-0ee58180-927d-11e9-84fa-d72b48aa1fcf.png) and place over your Landmark photos in your image editing software.

--- Or ---

Find it under `Guides` in the Nucleus Sketch Library.

![Landmark focal area guide - insert menu](https://user-images.githubusercontent.com/43471890/59842158-d82b6c00-934d-11e9-861a-e7ee6c6f358c.jpg)

### The template

![landmark-16x9-testcard-1440](https://user-images.githubusercontent.com/28779/59753927-0ee58180-927d-11e9-84fa-d72b48aa1fcf.png)

### Photoshop

Using Photoshop to overlay the Landmark focus template to check alignment.

![image](https://user-images.githubusercontent.com/28779/59829941-7c091d80-9336-11e9-829b-9d1ab69d49a3.png)

### Sketch

Using Sketch to overlay the Landmark focus template to check alignment.

![Screenshot 2019-06-20 at 12 30 08](https://user-images.githubusercontent.com/43471890/59846281-54767d00-9357-11e9-805a-96487c8ecc7f.png)

| ✅ Do | 💔 Don't |
| :--- | :--- |
| Here, the focus of the photo is located within the safe-area | The subject fills the entire photo, and the lady on the left will be obscured |
| ![landmark-16x9-testcard-1440-01](https://user-images.githubusercontent.com/28779/59754143-6be13780-927d-11e9-8175-75b6a46cf2d4.jpg) | ![landmark-16x9-testcard-1440-00](https://user-images.githubusercontent.com/28779/59792749-cb1a6880-92cc-11e9-8f19-9d4caab0d169.jpg) |
| Capture the story within. This photo is about the lady and her phone | Unfortunately, this photo is completely unsuitable for a Landmark |
| ![landmark-16x9-testcard-1440-02](https://user-images.githubusercontent.com/28779/59754184-83b8bb80-927d-11e9-9e81-2a64704e1a92.jpg) | ![landmark-16x9-testcard-1440-04](https://user-images.githubusercontent.com/28779/59754330-c7abc080-927d-11e9-8960-4726cf73f651.jpg) |

## Content guidance

![image](https://user-images.githubusercontent.com/28779/59835657-fd19e200-9341-11e9-8731-0985fd5de8c0.png)

| field-type | Guidelines |
| :--- | :--- |
| sub-heading | sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words |
| heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| paragraph | A single, short paragraph works best |
| caveat | Should be placed at the end of the paragraph if necessary |
| cta-text | Keep them ‘short, relevant, and actionable’ It should not exceed more than 24 characters |
| cta-link | This is the URL that the user will be taken too when they tap or click the CTA. |
| image-path | This is the image that will be used inside the ns-landmark. Ensure the important focus area of your image remains within the safe-area. It should have an aspect ratio of 16:9, the dimensions should be 1440x810 px, the file type should be jpg, and the file size should be no more than 150kb. Please make sure you work with a designer when selecting this image as finding the right one with the correct focus area can be challenging. |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-landmark]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-landmark])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* Blog posts
* MDN articles
* Examples of where it is used

