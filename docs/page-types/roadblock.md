---
description: Page Type | Roadblock
---

# Roadblock

## Introduction

The Roadblock is a page type used to inform a user that they have met a dead end and cannot continue with their original journey.

## Purpose

The Roadblock page type is there to present key information to a user when they reach an unexpected end to the task they were trying to complete. This can be related to a problem with a service that their task requires - these are 400 client side errors or 500 internal server error pages.

The page should describe to the user what has happened and tell them how to fix it if possible.

## Content Guidance

Use the `ns-landmark` - `lakeside` variant to display clear messaging.

The copy must be in plain English, and if possible help the user out of the situation by providing an actionable.

You should not use:

- Technical jargon like ‘form post error’, ‘unspecified error’ and ‘error 0x0000000643’
- Humourous, informal language like ‘oops’
- Negative language

If supporting information is needed, consider using `ns-lockup` or `ns-editorial`. This should not detract from the original purpose of the page.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Communicate the message in a clear and concise way as possible | Use the subheading |
| Suggest a next step the customer could take e.g. direct them to webchat or a phone number | Use as errors that are specific to ui elements (such as form fields) or parts of a page ([See `ns-highlighter`](https://docs.britishgas.design/components/ns-highlighter) ) |
|  | Use for global messaging ([See `ns-skyline`](https://docs.britishgas.design/components/ns-skyline) ) |

## Visual example

<img width="1160" alt="Screen Shot 2020-06-02 at 09 54 47" src="https://user-images.githubusercontent.com/45626534/83500827-31d16b80-a4b7-11ea-9e53-315c9108950a.png">

[View the `<ns-landmark type=lakeside>` on storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-landmark--lakeside)

## Code example

```markup
<ns-landmark type="lakeside">
  <h1 slot="heading">
    <span class="h1">We're sad to see you go</span>
  </h1>
  <p slot="paragraph">Thanks for being with us <b>we hope you'll join us</b> again. We are working on making Rewards even better.</p>
  <p slot="paragraph">If you'd like to join us again, click on Rewards in your Account Overview.</p>
  <a slot="cta" href="#!">
    <ns-cta type="direct">Your account</ns-cta>
  </a>
</ns-landmark>
```
[View the `<ns-landmark type=lakeside>` on storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-landmark--lakeside)

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-roadblock]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-roadblock]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
