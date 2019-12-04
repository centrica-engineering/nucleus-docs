---
description: Skyline component.
---

# ns-skyline

## Introduction

> A global high level message component that can span across several different pages. It's position will always be directly beneath the global navigation.

Ns-Global message are used to communicate site-wide or non-page specific important messages that will be relevant to and may affect the experience of users visiting the British Gas website.

They are either:

* Informational - to show useful information that the user may want to be aware of, e.g. upcoming price changes
* Warning - to warn users of potential upcoming or current issues e.g. weather warning

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-skyline--singular).

```markup
<ns-skyline>
  <h2 slot="heading">We are experiencing issues</h2>
  This is what we're doing to fix it and what you can do to <a href="#">help us</a>
</ns-skyline>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
None

**Does it live inside other components?**  
No

**Atomic type**  
Atom

## Specification

| **Name** | open |
| :--- | :--- |
| **Description** | The state of the expander |
| **Type** | Boolean |
| **Default** | false |
| **Options** | true, false |

| **Name** | Named slot `heading` |
| :--- | :--- |
| **Description** | A single line of text containing the heading |
| **Type** | string |
| **Default** | n/a |
| **Options** | Include an optional link to `#caveat` by placing `<a href="#caveat">1</a>` at the end |

| **Name** | Anonymous slot |
| :--- | :--- |
| **Description** | The text to be shown when the skyline is open |
| **Type** | TextNode |
| **Default** | '' |
| **Options** | n/a |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Communicate the message in a clear and concise way as possible. Ideally, it should be able to be explained in the heading in one sentence, where possible | Use it for page specific messages |
| Use inline text links into supporting content if necessary | Use if for non-important messages |
| Only add additional information in the expanded copy if necessary | Make the message longer than necessary |
| Add inline links to aid the user to helpful information where possible | Use for error messaging |
| Add the icon that matches to the context of the message; warning or information | |

### Considerations of best practice

* Use sparingly for only the most important information
* Not be used as the primary entry point to information or actions users need on a regular basis.
* Do not use for marketing information or up sell

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-tab]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-tab]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
