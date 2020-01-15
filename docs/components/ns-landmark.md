---
description: Organism | Landmark component.
---

# ns-landmark

## Introduction

> Landmarks are used to introduce the page, informing users of their current location and its primary purpose.

Landmarks are used to set the scene for what the page is for, what offers might be available and give helpful best next actions for users. This is where the main heading for the page will sit and give the overarching context to the rest of the page.

## Content guidance

### Summit Landmark

![image](https://user-images.githubusercontent.com/28779/59835657-fd19e200-9341-11e9-8731-0985fd5de8c0.png)

| Field type | Guidelines |
| :--- | :--- |
| sub-heading | Sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words. |
| heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| paragraph | A single, short paragraph works best. |
| caveat | Should be placed at the end of the paragraph if necessary. |
| cta-text | Keep them ‘short, relevant, and actionable’ It should not exceed more than 24 characters. |
| cta-link | This is the URL that the user will be taken too when they tap or click the CTA. |
| image-path | This is the image that will be used inside `ns-landmark`. Ensure the important focus area of your image remains within the safe-area. It should have an aspect ratio of 16:9, the dimensions should be 1440x810 px, the file type should be jpg, and the file size should be no more than 150kb. Please make sure you work with a designer when selecting this image as finding the right one with the correct focus area can be challenging. |

### Hillside Landmark

| Field type | Guidelines |
| :--- | :--- |
| sub-heading | Sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words. |
|  | **Note:** Guide pages (non-product pages produced with strong SEO focus in mind) a sub-heading is not required. |
| heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| paragraph | A single, short paragraph works best. |
| caveat | Should be placed at the end of the paragraph if necessary. |

### Lakeside Landmark

| Field type | Guidelines |
| :--- | :--- |
| sub-heading | Sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words. |
| heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| paragraph | Lakeside can accommodate multiple paragraph slots. However, be mindful of keeping it concise. Our guidance is a minimum of 1 and a maximum of 3. |
| caveat | Should be placed at the end of the paragraph if necessary. |
| cta-text | Keep it ‘short, relevant, and actionable’ It should not exceed more than 24 characters. |
| cta-link | This is the URL that the user will be taken too when they tap or click the CTA. |

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-landmark`| `summit` | 16:9 | 1440x810px | &lt; 200kb | jpeg | [ns-landmark_summit_1440x810px](https://user-images.githubusercontent.com/50207859/67642478-12140c80-f904-11e9-849d-5ffe39818c5b.jpg) |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use it at the top of the page. | Use it in the middle or end of a page. |
| Communicate the primary purpose in a clear and concise way. | Always add a cta (It'll drive traffic away). |
| Content must be relevant to the page. | Use it to hold random content - `ns-editorial` may be better use for this. |

### Best practice for `summit`

| 💚 Do | 💔 Don'ts |
| :--- | :--- |
| Capture the moment. | Allow the card to cover important content. |
| ![do-father-child](https://user-images.githubusercontent.com/28779/59792082-5430a000-92cb-11e9-942b-7e457c34859c.jpg) | ![dont-child-lady-eng](https://user-images.githubusercontent.com/28779/59792183-82ae7b00-92cb-11e9-8a6f-b5322a5f6eb4.jpg) |
| Set focus of the photo correctly. | Obstruct people's faces with the card. |
| ![do-warehouse-eng](https://user-images.githubusercontent.com/28779/59792156-74f8f580-92cb-11e9-8b97-cf7d62766804.jpg) | ![dont-ice-cream](https://user-images.githubusercontent.com/28779/59792179-7d513080-92cb-11e9-918e-c8c02c956502.jpg) |
| Convey activity related to topic. | Use images with a white background. |
| ![do-couple-mobile](https://user-images.githubusercontent.com/28779/59792122-63afe900-92cb-11e9-9553-638cd20f53f2.jpg) | ![dont-wilbur](https://user-images.githubusercontent.com/28779/59792199-87732f00-92cb-11e9-9c9d-51676e6c2aba.jpg) |

### Best practice for `hillside`

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use the same colour for a set of pages on the same topic, e.g. Guide pages related to boilers. | Don't use the 'invert-bridge' decoration. |
| ![do-use-same-colour-for-themed-pages](https://user-images.githubusercontent.com/50207859/61695880-345a2500-ad2c-11e9-886a-e510781e2fc2.jpg) | ![dont-use-arc-decoration](https://user-images.githubusercontent.com/50207859/61697584-73d64080-ad2f-11e9-89a2-c2bbc18f7db7.jpg) |
| Keep the content concise. | Don't add a CTA. The aim is to encourage the user to discover more on the page. |
| ![do-keep-content-concise](https://user-images.githubusercontent.com/50207859/61779546-c7f92780-adf8-11e9-973c-541c7d46d46d.jpg) | ![dont-use-direct-cta](https://user-images.githubusercontent.com/50207859/61779195-2540a900-adf8-11e9-8c5c-1dced44d53f6.jpg) |
|  | Don't use only the light font weight. If there's one weight, use bold. |
|  | ![dont-use-only-light-font](https://user-images.githubusercontent.com/28779/70074651-0696be00-15f3-11ea-8f4b-a7d2f90ea87c.png) |

### Best practice for `lakeside`

| 💚 Do | 💔 Don'ts |
| :--- | :--- |
| Use more than one paragraph. | Use more than three paragraphs. |
| ![do-use-more-than-one-paragraph](https://user-images.githubusercontent.com/28779/70374602-3512e280-18ec-11ea-9222-0a67806898bc.png) | ![dont-use-more-than-three-paragraphs](https://user-images.githubusercontent.com/28779/70374611-465bef00-18ec-11ea-8ac6-0aa2cecab292.png) |
| Display 400 and 500 error pages. | Even think about building a page with it. |
| ![display-400-and-500-error-pages](https://user-images.githubusercontent.com/28779/70374582-f9781880-18eb-11ea-9fde-b45f70e5c28b.png) | ![dont-even-this-about-building-a-page-with-it](https://user-images.githubusercontent.com/28779/70374723-d3ec0e80-18ed-11ea-8d71-9328de25089a.png) |
| Get to the point, in this scenario the sub-heading and CTA have been omitted. |  |
| ![do-get-to-the-point](https://user-images.githubusercontent.com/28779/70374643-88853080-18ec-11ea-8c03-94ef23815720.png) |  |


### Considerations of best practice

* Shorter and simpler words tend to work better in the heading.
* The recommended copy length is between 1 and 5 words for the sub-heading.
* The message must be in plain English, and help the user out of the situation by providing an actionable link if possible.
* If the purpose of the page is to understand more about a product or service, then it is considered bad practice to include a CTA within the landmark, as users are likely to drop out. This is because users believe the next step is to click the CTA, rather than reading the page to get a better understanding of how they should proceed.
* Let the page type define the type of landmark you use.
  * If the page purpose is to be informative / educational then we recommend using `hillside`.
  * If the page purpose is promotional we recommend using `summit`.
  * If the page purpose is a 400 or 500 error page, use `lakeside`.
* If you are designing a series of informative / educational pages that all follow a similar theme, it would be considered best practice to use the same coloured decoration within the `hillside`.

## Usage

To see examples of the Summit Landmark visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-landmark--summit).

To see examples of the Hillside Landmark visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-landmark--hillside).

To see examples of the Lakeside Landmark visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-landmark--lakeside).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-landmark" caption="" %}

### Summit

```markup
<ns-landmark type="summit" image="/my-images/my-image.png">
  <h1 slot="heading">
    <span class="h5">Our product and services.</span>
    <span class="h1 enlighten">When things break down, <b>we've got you covered</b></span>
  </h1>
  <p slot="paragraph">Protect your boiler, heating, drains and more. And call on our friendly engineers whenever you need them. </p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">View our products</ns-cta>
  </a>
</ns-landmark>
```

### Hillside

```markup
<ns-landmark type="hillside">
  <h1 slot="heading">
    <span class="h5">Boiler replacement.</span>
    <span class="h1 enlighten">What's the <b> right boiler for me? </b></span>
  </h1>
  <p slot="paragraph"> With so many types of boiler, <b>finding the right one</b> for you can feel like a daunting task. Here's the difference between the three main boiler types </p>
</ns-landmark>
```

### Lakeside

```markup
<ns-landmark type="lakeside">
  <h1 slot="heading">
    <span class="h1">Sorry, we’re having technical problems at the moment</span>
  </h1>
  <p slot="paragraph">We’re unable to process your request right now. Please try again later.</p>
  <p slot="paragraph">Alternatively you can get in touch directly. <a href="#caveat">1</a></p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">Contact customer services</ns-cta>
  </a>
</ns-landmark>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ❌ No |
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | `summit` | `summit`, `hillside`, `lakeside` | The variant of the landmark. |
| `image` | `string` |  |  | Background image used summit variant. |
| `gradient` | `string` | `invert-ramp-cyan` | `invert-ramp-cyan`, `invert-ramp-grey-light`, `invert-ramp-green-light`, `invert-ramp-yellow`, `invert-ramp-blue` | Background gradient and colour used for hillside variant. |

| Slots | Type |
| :--- | :--- |
| `heading` | `h1 tag` |
| `paragraph` | `p tag` `div tag` |
| `cta` | `ns-cta` `a tag`  |

## Specification notes

### Heading

* This needs to be a `h1` heading
* The sub-heading is part of the heading to allow screen readers to read the heading properly.
* The sub-heading is part of the heading to allow screen readers to read the heading properly.
* Sub heading is a `<span>` tag with a `h5` class.
* Main heading is a `<span>` tag with a `h1` class.
* `enlighten` class in the main heading `<span>` to make the heading light.
  * Use `<b>` tag to embolden specific text.

### Paragraph

* Include an optional link to `#caveat` by placing `<a href="#caveat">1</a>` at the end

### Image

* 16x9
* 1440 x 810px

## Image template

This provides the safe-area to the position of the focal point of the image.

[Download the 1440x810px Landmark testcard image](https://user-images.githubusercontent.com/28779/59753927-0ee58180-927d-11e9-84fa-d72b48aa1fcf.png) and place over your Landmark photos in your image editing software.

![landmark-16x9-testcard-1440](https://user-images.githubusercontent.com/28779/59753927-0ee58180-927d-11e9-84fa-d72b48aa1fcf.png)

### Using Photoshop

Using Photoshop to overlay the Landmark focus template to check alignment.

![image](https://user-images.githubusercontent.com/28779/59829941-7c091d80-9336-11e9-829b-9d1ab69d49a3.png)

### Using Sketch

Using Sketch to overlay the Landmark focus template to check alignment.

![Screenshot 2019-06-20 at 12 30 08](https://user-images.githubusercontent.com/43471890/59846281-54767d00-9357-11e9-805a-96487c8ecc7f.png)

Find it under 'Guides' in the Nucleus Sketch Library.

![Landmark focal area guide - insert menu](https://user-images.githubusercontent.com/43471890/59842158-d82b6c00-934d-11e9-861a-e7ee6c6f358c.jpg)

| 💚 Do | 💔 Don't |
| :--- | :--- |
| Here, the focus of the photo is located within the safe-area | The subject fills the entire photo, and the lady on the left will be obscured |
| ![landmark-16x9-testcard-1440-01](https://user-images.githubusercontent.com/28779/59754143-6be13780-927d-11e9-8175-75b6a46cf2d4.jpg) | ![landmark-16x9-testcard-1440-00](https://user-images.githubusercontent.com/28779/59792749-cb1a6880-92cc-11e9-8f19-9d4caab0d169.jpg) |
| Capture the story within. This photo is about the lady and her phone | Unfortunately, this photo is completely unsuitable for a Landmark |
| ![landmark-16x9-testcard-1440-02](https://user-images.githubusercontent.com/28779/59754184-83b8bb80-927d-11e9-9e81-2a64704e1a92.jpg) | ![landmark-16x9-testcard-1440-04](https://user-images.githubusercontent.com/28779/59754330-c7abc080-927d-11e9-8960-4726cf73f651.jpg) |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-landmark]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-landmark]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
