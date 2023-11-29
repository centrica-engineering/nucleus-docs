---
title: Stopgap
description: Page type | Stopgap
---

## Introduction

The Stopgap is a page type used to provide customers with an interstitial loading or processing page.

## Purpose

* The purpose of the Stopgap is to inform the customer that there is a temporary pause in their experience, whilst we action or process the information they have provided. It should be clear that this is the expected behaviour of the journey they are using.
* This page type should provide a clear message to reassure the customer.
* If possible, we should set their expectations by providing them with a realistic time frame of how long they are likely to have to wait. 
* If closing or refreshing their browser window will result in failure, we must convey this message clearly.

## Example

<div class="storybook-embed page">
  <p><a href="https://www.britishgas.co.uk/nucleus/demo/iframe.html?id=examples-page-types--stopgap&amp;viewMode=story">View full page example</a></p>
  <iframe src="https://www.britishgas.co.uk/nucleus/demo/iframe.html?id=examples-page-types--stopgap&amp;viewMode=story&amp;nav=0" title="Nucleus: examples-page-types--stopgap" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
</div>

## Content guidance

Use the `ns-landmark` - `lakeside` variant to display clear messaging.

Include the `ns-icon` - `loading` within a `<p slot="paragraph">` to provide visual feedback that their action is being processed.

The copy must be in plain English, and help the user understand what is happening.

You should not use:

* Generic messaging such as ‘Loading’ or ‘Processing’
* An unrealistic or dishonest time frame length  
* Include additional content that could encourage them to abandon this page and potentially result in failure

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for wait times in excess of 10 seconds | Use as a placeholder when loading in individual components |
| Use for end of journey processing and purchases | Rely on this page type instead of optimising your journey |
| Communicate the message in a clear and concise way as possible | Encourage the user to abandon if it would result in failure |
| Provide a transparent expectation of their wait time |  |

## Principles to follow

| Creative | Tone of voice | Keywords |
| :--- | :--- | :--- |
| Modern and dynamic  | Be active, Be natural | Promotional, Informative |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[page-type-stopgap]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[page-type-stopgap]).
