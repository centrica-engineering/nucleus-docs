---
title: Roadblock
description: Page type | Roadblock
---

## Introduction

The Roadblock is a page type used to inform a user that they have met a dead end and cannot continue with their original journey.

## Purpose

The Roadblock page type is there to present key information to a user when they reach an unexpected end to the task they were trying to complete. This can be related to a problem with a service that their task requires - these are 400 client side errors or 500 internal server error pages.

The page should describe to the user what has happened and tell them how to fix it if possible.

## Visual example

![Example of the Roadblock message](https://user-images.githubusercontent.com/7914977/105870458-33c0df80-5ff0-11eb-94bc-6a2eabd067a3.png)

[View the `<ns-landmark type=lakeside>` on storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-landmark--lakeside)

## Code example

```markup
<ns-landmark type="lakeside">
  <h1 slot="heading">
    <span class="h5">Something went wrong.</span>
    <span class="h1">We couldn't bake your cake</span>
  </h1>
  <p slot="paragraph">Our chef baker couldn'd find the ingredients to bake your cake. This may be because our Cupboard Manager didn't do the grocery shopping yesterday.</p>
  <p slot="paragraph">We recommend you order a new cake and we'll throw cherry a on top, on us.</p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">Order a new cake</ns-cta>
  </a>
</ns-landmark>
```
[View the `<ns-landmark type=lakeside>` on storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-landmark--lakeside)

## Content guidance

Use the `ns-landmark` - `lakeside` variant to display clear messaging.

The copy must be in plain English, and if possible help the user out of the situation by providing an actionable option.

You should not use:

- Technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’
- Humourous, informal language like ‘oops’
- Negative language

If supporting information is needed, consider using `ns-lockup` or `ns-editorial`. This should not detract from the original purpose of the page.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Communicate the message in a clear and concise way as possible | Use the subheading |
| Suggest a next step the customer could take e.g. direct them to webchat or a phone number | Use as errors that are specific to ui elements (such as form fields) or parts of a page ([See `ns-highlighter`](components/ns-highlighter.md) ) |
|  | Use for global messaging ([See `ns-skyline`](components/ns-skyline.md) ) |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-roadblock]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-roadblock]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
