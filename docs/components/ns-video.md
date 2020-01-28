---
description: Atom | Video component.
---

# ns-video

## Introduction

> A video allows British Gas to share more visual and engaging content.

British Gas creates many videos to engage customers. This component allows having these videos on the website and gives better context to the customer about what, how or why they should do something.

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Use videos from Centrica YouTube channels | Use over 3 videos on a page |
| Use inside another component (see relationship) | Use video as the primary content |
| Use as supplementary content |  |

### Considerations of best practices

* The ratio is not related to (or affect) the ratio of the video. Changing the ratio should be used to allow the video player to fit better inside its parent component.
* Make sure that the video has closed caption, a good title and useful thumbnail.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-video--youtube).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-video" caption="" %}

```markup
<ns-video id="dQw4w9WgXcQ" ratio="16x9" title="Rick Astley, Never going to give you up music video"></ns-video>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes - `ns-lockup` |
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `id`  | `string` |  |  | Can be found in the YouTube video URL under `v`parameter |
| `ratio` | `string` | `16x9` | `16x9`, `4x3`, `1x1` | Ratio of the video player |
| `title` | `string` | `YouTube video` |  | The YouTube iframe title |

## Specification notes

### Title

* This is required for accessibility. The title should be unique. If there are multiple videos on the page, they should all have different titles (even if they are the same video).

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-video]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-video]).

💩 🎉 🦄 You can also contact the team on Slack on the `product-nucleus` channel!

## Related links

* [https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-panels--lockup-video-panel](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-panels--lockup-video-panel).
