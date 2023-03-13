---
description: Organism | Lockup component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Lockups are a promotional component that signpost to a product or service, highlighting key messages.

We use lockups to engage customers, in particular to promote a key product or service. The more relevant and contextual the content is for intended customers, the better.

## Content guidance

![Lockup - Lockjaw](https://user-images.githubusercontent.com/45626534/75139486-a6d91c00-56e4-11ea-8e09-3695e2d232c1.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Sub-heading | Sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words. Include a full stop at the end of the sub-heading. |
| B | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings contain light and bold font weight to highlight key messaging.  |
| C | Content | `ns-lockup` can accommodate multiple paragraph slots. However, be mindful of keeping it concise. Our guidance is a maximum of 2 short paragraphs, each with no more than 3 lines each. Can contain bold copy `<b>`, inline links `<a>`,  lists `<ul>` `<ol>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| D | CTA | Keep the text ‘short, relevant, and actionable’. It should not exceed more than 24 characters. |
| E | Image | There is a choice of two image sizes depending on your choice of Lockup - the first has an aspect ratio of 4:3, the dimensions should be 720x540px, the second has an aspect ratio of 1:1, the dimensions should be 720x720px. Both versions should be jpg file types, and the file size should be no more than 100kb. To see which image you can use - please see the [Image guidance section](https://britishgas.design/docs/components/ns-lockup#image-guidance) section below. Don't use imagery with white backgrounds. Please make sure you work with a designer when selecting any imagery for the `ns-lockup`. |
| F | Decoration | Use this optional illustration to support and highlight the content. The illustration should relate to the product or service you are talking about. Only available on the Lockjaw and Locknut variants. The [specification table](#specification) has a list of options. |

### Image guidance

| Component | Variant | Ratio | Dimensions | Size | Type | Placeholder |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ns-lockup`| `lockbox` | 4:3 | 720x540px | &lt; 100kb | jpeg | [ns-lockup-lockbox-720x540px](https://user-images.githubusercontent.com/50207859/67642153-d461b480-f900-11e9-9520-11204c64a11b.jpg) |
| `ns-lockup`| `lockbox` | 1:1 | 720x720px | &lt; 100kb | jpeg | [ns-lockup-lockbox-720x720px](https://user-images.githubusercontent.com/50207859/67642154-d461b480-f900-11e9-9581-212ede25f362.jpg) |
| `ns-lockup`| `lockjaw` | 4:3 | 720x540px | &lt; 100kb | jpeg | [ns-lockup-lockjaw-720x540px](https://user-images.githubusercontent.com/50207859/67642155-d4fa4b00-f900-11e9-9ba6-a31f61ddb0ef.jpg) |
| `ns-lockup`| `locknut` | 1:1 | 720x720px | &lt; 100kb | jpeg | [ns-lockup-locknut-720x720px](https://user-images.githubusercontent.com/50207859/67642156-d4fa4b00-f900-11e9-8400-548625a1648f.jpg) |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Embolden the key message in the heading | Include more than one CTA |
| Keep the heading length to 4-12 words | Exceed more than two paragraphs of 3 lines each |
| Keep subheading length between 1-5 words | Use images with a white background |
| Optimise the lockup image (see image optimise LINK) | |

### Considerations of best practices

* Alternate the position of image/video when using more than one lockup.
* Paragraph works best as a single, short paragraph.
* Use real-life photographs.

## Usage

<StorybookStory story="components-ns-lockup--lockbox"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-lockup" parentComponents="ns-panel"></ComponentPlacement>

## Specification

| Attribute    | Type                | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | `lockbox` | `lockjaw`, `lockbox`, `locknut` | Different style variants. |
| `reverse` | `boolean` | `false` |`true`, `false`| Switches the order of the text and image. Default is text to the left. |
| `ratio` | `string` | `4x3` | `4:3`, `16:9`, `1:1` | Ratio for the image. |
| `decoration` | `string` |  | See [Illustration component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustration--standard) | Adds illustration between the text and image. |

| Slots | Type |
| :--- | :--- |
| `heading` | `h2 tag`                             |
| `paragraph` | `<p>`, `<a>`, `<ul>`, `<ol>`, `<li>` |
| `cta` | `ns-cta` |
| `image` | `ns-image` `ns-video` |

## Specification notes

### Heading

* Should be a `h2` tag.

* The sub-heading is part of the heading to allow screen readers to read the heading properly.
* Sub heading is a `<span>` tag with a `h5` class.
* Main heading is a `<span>` tag with a `h1` class.
* `enlighten` class in the main heading `<span>` to make the heading light.
  * Use `<b>` tag to embolden specific text.

<Tokens component="lockup"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-lockup]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+ns-lockup).

<PageFooter></PageFooter>
