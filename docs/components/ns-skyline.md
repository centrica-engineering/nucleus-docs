---
description: Organism | Skyline component.
---

import { Storybook } from '../../includes/storybook.js'
import { Tokens } from '../../includes/tokens.js'

## Introduction

> Notifying visitors of current, ongoing or upcoming events that they may be relevant to them.

Positioned directly beneath the global navigation and above any content, `ns-skyline` displays high level messages to the user.  The purpose of `ns-skyline` is to notify the user of important site-wide or non-page specific events that may affect their experience of using the British Gas website.

<b>They are either:</b>

* Informational - to show useful information that the user may want to be aware of, e.g. upcoming price changes.
* Warning - to warn users of potential upcoming or current issues e.g. weather warning.

## Content guidance

![Skyline](https://user-images.githubusercontent.com/45626534/75039520-c556d180-54b0-11ea-9c34-a3bdd6f35751.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Icon | This is the icon inside the `ns-skyline`, it can be either an information or warning icon depending on the type of message you wish to display. |
| B | Heading | This is the heading to the anonymous content. When the heading is clicked the component opens to reveal the content. The recommended length is between 4 and 12 words, not exceeding 50 characters in total. |
| C | Content | `ns-skyline` can accommodate multiple paragraph slots, these should be concise, using sub-headings to split large paragraphs. Can contain bold copy `<b>`, inline links `<a>`, lists `<ul>` `<ol>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`.|

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Position `ns-skyline` directly underneath the main navigation. | Include a link in the heading. |
| Communicate the message in a clear and concise way as possible. Ideally, it should be able to be explained in the heading in one sentence. | Use for error messaging. |
| Use inline links to support content and aid the user find helpful information. | Use it for page specific messages. |
| Add the icon that matches the context of the message; `warning` or `info`. | Use if for non-important messages. |
|  | Make the message longer than necessary. |

### Considerations of best practice

* Do not include a link in the heading. It's used to open and close the content of `ns-expander` and won't be clickable.
* Use sparingly for only the most important information.
* Not be used as the primary entry point to information or actions users need on a regular basis.
* Do not use for marketing information or up-sell.

## Usage

<Storybook story="components-ns-skyline--singular"></Storybook>

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ❌ No |
| **What layout classes can be used?**  | None |

## Specification

| Slots | Type |
| :--- | :--- |
| Anonymous | `ns-expander tag` |

<Tokens component="skyline"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-skyline]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-skyline]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
