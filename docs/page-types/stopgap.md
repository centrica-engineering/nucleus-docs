---
description: Page Type | Stopgap
---

# Stopgap

## Introduction

The Stopgap is a page type used to provide customers with an interstitial loading or processing page.

## Purpose

The purpose of the Stopgap is to inform the customer that there is a temporary pause in their experience, whilst we action or process the information they have provided. It should be clear that this is the expected behaviour of the journey they are using.

This page type should provide a clear message to reassure the customer. If possible, we should set their expectations by providing them with a realistic time frame, for how long they are likely to have to wait for. 

If closing or refreshing their browser window will result in failure, we must convey this message clearly.

## Content Guidance

Use the `ns-landmark` - `lakeside` variant to display clear messaging.

Include the `ns-icon` - `loading` within a `<p slot="paragraph">` to provide visual feedback that their action is being processed.

The copy must be in plain English, and help the user understand what is happening.

You should not use:

- Generic messaging such as ‘Loading’ or ‘Processing’
- An unrealistic or dishonest time frame length  
- Include additional content that could encourage them to abandon this page and potentially result in failure

## Best practice

| 💚 Do | 💔 Don't |
| :---  | :---  |
| Use for wait times in excess of 10 seconds | Use as a placeholder when loading in individual components |
| Use for end of journey processing and purchases | Rely on this page type instead of optimising your journey |
| Communicate the message in a clear and concise way as possible | Encourage the user to abandon if it would result in failure |
| Provide a transparent expectation of their wait time |  |

## Code example

```
<ns-landmark type="lakeside">
  <h1 slot="heading">
    <span class="h5">Nearly there.</span>
    <span class="h1 enlighten">We're <b>processing</b> your order</span>
  </h1>
  <p slot="paragraph">
    <ns-icon type="loading" size="5"></ns-icon>
  </p>
  <p slot="paragraph">We are processing your payment and confirming your engineer appointment.</p>
  <p slot="paragraph"> This may take up to <b>2 minutes</b>.</p>
  <p slot="paragraph"><b>Please do not close your browser.</b></p>
</ns-landmark>
```

## Principles to follow

Clean and fresh

## Tone of voice

Be helpful

## Keywords

Functional / Informative

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-guide]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-guide]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
