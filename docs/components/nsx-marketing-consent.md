---
description: Experience | Marketing consent.
---

# Marketing consent

## Introduction

> Marketing consent is the capture of a customer's contact preferences for marketing purposes.

This experience pattern should be used in any journey where customer marketing preferences are captured.

This component is only used to capture and submit customer preferences, not view or change existing preferences.

## Content guidance

![Experience pattern - Marketing consent](https://user-images.githubusercontent.com/28779/77073146-b6e3d300-69e6-11ea-99a1-fc5a131fcef6.png)

It is possible to change the heading and the first paragraph to suit specific context. However, we recommend using the default content as these have been signed off by the legal team.

If there is an official update to the default content, please inform Nucleus so that the the component can be updated.

## Best practice

This component is legally required when capturing contact preferences that will be used for marketing purposes.

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always keep the same options | Reorder the options |
| Use at the end of a journey that captures contact information used for marketing purposes | Use when collecting contact information that will be used solely for a service offering e.g. Booking an engineer |
| Always use inside of an `ns-form` component | Have any of the options pre-checked |
| Use only once per journey |  |

## Usage

```markup
<nsx-marketing-consent></nsx-marketing-consent>
```

## Specification

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag` |
| `paragraph` | `p tag` |


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[nsx-marketing-consent]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[nsx-marketing-consent]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
