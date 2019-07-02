# ns-lockup

## Introduction

> Lockups are used to house content and inform users about a single topic.

Lockups can be used to display key information about a product, a service or tell a short story.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/playground-panels--lockup-decoration-panel)

```markup
<ns-lockup type="lockbox">
  <h2 slot="heading">
    <span class="h5">Our Home Services.</span>
    <span class="h1 enlighten"><b>Your home should just work,</b> we get that</span>
  </h2>
  <p slot="paragraph">We bring you the latest offers on boilers, repairs and more. And we're always here when you need us.</p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">View HomeCare</ns-cta>
  </a>
  <ns-image slot="image" ratio="4x3" src="/aem6/content/dam/britishgas/images/ns/image4_3.png"></ns-image>
</ns-lockup>
```

## Component Relationship

* Does it live in a panel? \(yes\)
  * What layout classes can be used? \(n/a\)
* Does it live inside other components?
  * no
* Atomic type: \(organism\)

## Specification

| **Name** | Type |
| :--- | :--- |
| **Description** | To choose which variant of the lockup is used |
| **Type** | array |
| **Default** | lockjaw |
| **Options** | lockjaw, lockbox, locknut |
| **Notes** | "" |

| **Name** | Reversed |
| :--- | :--- |
| **Description** | To change the position of the image/video and copy |
| **Type** | boolean |
| **Default** | false |
| **Options** | true, false |

| **Name** | Ratio |
| :--- | :--- |
| **Description** | The aspect ratio of the image/ video |
| **Type** | array |
| **Default** | 4:3 |
| **Options** | 4:3, 16:9, 1:1 |

| **Name** | Named slot `heading` |
| :--- | :--- |
| **Description** | A single line of text containing subheading and heading |
| **Type** | string |
| **Default** | n/a |
| **Options** | n/a |
| **Notes** | `<span class="h5">Subheading</span>`  `<span class="h1 enlighten">Heading <b>embold</b> </span>` Use `<b>` to embolden |

| **Name** | Named slot `paragraph` |
| :--- | :--- |
| **Description** | A rich text area |
| **Type** | string |
| **Default** | n/a |
| **Options** | `<p>`, `<a>`, `<ul>`, `<ol>`, `<li>` |

| **Name** | Named slot `cta` |
| :--- | :--- |
| **Description** | The `<ns-cta>` component  contained within a `<a>` |
| **Type** | string |
| **Default** | n/a |
| **Options** | href, label |

| **Name** | Decoration |
| :--- | :--- |
| **Description** | The name of illustration |
| **Type** | string |
| **Default** | n/a |
| **Options** | See ns-illustration |

| **Name** | Image |
| :--- | :--- |
| **Description** | An image/ video to be displayed |
| **Type** | component |
| **Default** | `<ns-image>` |
| **Options** | `<ns-image>`, `<ns-video>` |

## Best practises

| ✅ Do's | 💔 Don'ts |
| :--- | :--- |
| Embolden the key message in the heading | Include more than one CTA |
| Keep the heading length to 4-12 words | Exceed more than two paragraphs of 3 lines each |
| Keep subheading length between 1-5 words |  |
| Optimise the lockup image \(see image optimise LINK\) | Use images with a white background |
|  |  |

### Considerations of best practices

* Alternate the position of image/video when using more than one lockup 
* Paragraph works best as a single, short paragraph
* Use real-life photographs 

## Content guidance

![image](https://user-images.githubusercontent.com/28779/59835717-1ae74700-9342-11e9-9d89-bff17bf7dc8f.png)

| field-type | Guidelines |
| :--- | :--- |
| sub-heading | sub-headings are used to indicate the primary section or to reinforce a brand message. Short and simple words tend to work better and it is recommended to keep the length between 1 and 5 words |
| heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. Headings should contain light and bold font weight to highlight key messaging. |
| paragraph | A single, short paragraph works best. You are able to use inline text links within the paragraph if necessary. Don't add additional headings within the paragraph and the copy length should not exceed more than two paragraphs of 3 lines each |
| caveat | Should be placed at the end of the paragraph if necessary |
| cta-text | Keep them ‘short, relevant, and actionable’ It should not exceed more than 24 characters |
| cta-link | This is the URL that the user will be taken too when they tap or click the CTA. |
| image-path | This is the image that will be used inside the ns-lockup. It should have an aspect ratio of 4:3, the dimensions should be 728x547px, the file type should be jpg, and the file size should be no more than 100kb. Don't use imagery with white backgrounds. Please make sure you work with a designer when selecting any imagery for the ns-lockups. |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20ns-lockup).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+ns-lockup)

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* Blog posts
* MDN articles
* Examples of where it is used

