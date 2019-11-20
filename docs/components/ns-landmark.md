---
description: Landmark component.
---

# ns-landmark

## Introduction

> Landmarks are used to introduce the page, informing users of their current location and its primary purpose.

Landmarks can be used to set the scene for what the page is for, what offers might be available and give helpful best next actions for users. This is where the main heading for the page will sit and give the overarching context to the rest of the page.

## Usage

To see examples of the Summit Landmark visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-landmark--summit).

To see examples of the Hillside Landmark visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-landmark--hillside).

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

Lakeside is a variant component of ns-landmark.
It has no card or illustration and subtitle is optional. Like all other landmark variants, it is used to set the scene for what the page is for, what offers might be available and give helpful best next actions for users.
2 uses of this variant have identified:

- To start the beginning of a page
- To be used for the page status pattern - where It communicates an error at page level when the user meets a dead end and cannot continue with their original journey. It can alert users that there is a problem with the service (400 client side errors or 500 internal server error pages)

```markup
<ns-landmark type="lakeside">
  <h1 slot="heading">
    <span class="h1 enlighten">Sorry, we’re having technical problems at the moment</span>
  </h1>
  <p slot="paragraph">We’re unable to process your request right now. Please try again later.</p>
  <p slot="paragraph">Alternatively you can get in touch directly. <a href="#caveat">1</a></p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">Contact customer services</ns-cta>
  </a>
</ns-landmark>
```


## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
None

**Does it live inside other components?**  
No

**Atomic type**  
Organism

## Specification

| **Name** | Type |
| :--- | :--- |
| **Description** | The variant of the landmark |
| **Type** | string |
| **Default** | summit |
| **Options** | summit, hillside, lakeside |

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
| **Options** | Include an optional link to `#caveat` by placing `<a href="#caveat">1</a>` at the end |

| **Name** | Named slot `cta` (summit only) |
| :--- | :--- |
| **Description** | The `<ns-cta>` component contained within a `<a>` |
| **Type** | string |
| **Default** | n/a |
| **Options** | `<ns-cta>`, `<a>` |

| **Name** | Background image (summit only) |
| :--- | :--- |
| **Description** | A 16:9 image following our Landmark focus template |
| **Type** | JPEG |
| **Default** | n/a |
| **Options** | 1440 x 810px |

| **Name** | Gradient (hillside only) |
| :--- | :--- |
| **Description** | The colour of the background gradient on hillside |
| **Type** | string |
| **Default** | invert-ramp-cyan |
| **Options** | invert-ramp-cyan, invert-ramp-grey-light, invert-ramp-green-light, invert-ramp-yellow, invert-ramp-blue |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep content in Landmarks very concise | Always add a cta |
| Content must be relevant to the page |  |

### Best practice for `summit`

| 💚 Do | 💔 Don't |
| :--- | :--- |
| Capture the moment | Allow the card to cover important content |
| ![do-father-child](https://user-images.githubusercontent.com/28779/59792082-5430a000-92cb-11e9-942b-7e457c34859c.jpg) | ![dont-child-lady-eng](https://user-images.githubusercontent.com/28779/59792183-82ae7b00-92cb-11e9-8a6f-b5322a5f6eb4.jpg) |
| Set focus of the photo correctly | Obstruct people's faces with the card |
| ![do-warehouse-eng](https://user-images.githubusercontent.com/28779/59792156-74f8f580-92cb-11e9-8b97-cf7d62766804.jpg) | ![dont-ice-cream](https://user-images.githubusercontent.com/28779/59792179-7d513080-92cb-11e9-918e-c8c02c956502.jpg) |
| Convey activity related to topic | Use images with a white background |
| ![do-couple-mobile](https://user-images.githubusercontent.com/28779/59792122-63afe900-92cb-11e9-9553-638cd20f53f2.jpg) | ![dont-wilbur](https://user-images.githubusercontent.com/28779/59792199-87732f00-92cb-11e9-9c9d-51676e6c2aba.jpg) |

### Best practice for `hillside`

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use the same colour for a theme of pages, eg. boiler guides | Don't use the 'arc' decoration |
| ![ns-landmark-type-ridge-orange](https://user-images.githubusercontent.com/50207859/61695880-345a2500-ad2c-11e9-886a-e510781e2fc2.jpg) | ![Landmark-ridge-donts](https://user-images.githubusercontent.com/50207859/61697584-73d64080-ad2f-11e9-89a2-c2bbc18f7db7.jpg) |
| Keep the content consise | Don't add a CTA to hillside landmark. The aim is to encourage the user to discover more on the page |
| ![Do-keep-content-conise](https://user-images.githubusercontent.com/50207859/61779546-c7f92780-adf8-11e9-973c-541c7d46d46d.jpg) | ![Donts---direct-cta](https://user-images.githubusercontent.com/50207859/61779195-2540a900-adf8-11e9-8c5c-1dced44d53f6.jpg) |

### Best practice for `lakeside`

| 💚 Do | 💔 Don't |
| :--- | :--- |
| Use it at the top of the page | use it in the middle or end of a page |
| Communicate the message in a clear and concise way as possible. | use it to hold random content - ns-editorial may be better use for this |
| Be relevant to the purpose of the page | |
| Be clear and concise | | 


### Considerations of best practice

* Shorter and simpler words tend to work better in the heading.
* The recommended copy length is between 1 and 5 words for the Subheading.
* The message must be in plain English, and help the user out of the situation by providing an actionable link if possible.
* If the purpose of the page is to understand more about a product or service, then it is considered bad practice to include a CTA within the landmark, as users are likely to drop out. This is because users believe the next step is to click the CTA, rather than reading the page to get a better understanding of how they should proceed.
* Let the page type define the type of landmark you use. For example if the page purpose is to be informative / educational then we recommend using `<ns-landmark type="hillside”>`. If the page purpose is promotional we recommend using `<ns-landmark type="summit">`.
* If you are designing a series of informative / educational pages that all follow a similar theme, it would be considered best practice to use the same coloured decoration within the `<ns-landmark type="hillside">`.

## Content guidance

### Summit Landmark

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

### Hillside Landmark

TODO: include supporting image for these content guidelines.

| field-type | Guidelines |
| :--- | :--- |
| sub-heading | sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words |
| heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| paragraph | A single, short paragraph works best |
| caveat | Should be placed at the end of the paragraph if necessary |

### Lakeside Landmark

| field-type | Guidelines |
| :--- | :--- |
| sub-heading | sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words |
| heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging. |
| paragraph | Lakeside can have multiple paragraph slots, the first will be displayed as 'p-large', all subsequent paragraphs will be styled as 'p-normal'  |
| caveat | Should be placed at the end of the paragraph if necessary |
| cta-text | Keep them ‘short, relevant, and actionable’ It should not exceed more than 24 characters |
| cta-link | This is the URL that the user will be taken too when they tap or click the CTA. |

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-landmark`| `summit` | 16:9 | 1440x810px | &lt; 200kb | jpeg | [ns-landmark_summit_1440x810px](https://user-images.githubusercontent.com/50207859/67642478-12140c80-f904-11e9-849d-5ffe39818c5b.jpg)

### The template

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


