---
description: Loading patterns.
---

# Introduction

Loading states can provide reassurance that a task is being processed, this can help reduce the frustration when a task might take longer than a user might expect. We have a number of methods that handle loading events. These depend on the task a user is interacting with.

Below we highlight two main formats of loading - **interim** and **interstitial**.  

## Interim loading

### Using `<ns-cta>`

The `<ns-cta>` is capable of handling an interim loading experience. When used as the primary action to complete a task or progress to the next step of an experience, the `<ns-cta>` can display a loading icon and message that supports the task the user is looking to complete.

You can [read more information about the loading state of `<ns-cta>` here](https://docs.britishgas.design/components/ns-cta#loading-state).

## Interstitial loading

The interstitial loading methods are there to be used when a user has attempted to complete a task that requires a wait of longer than 10 seconds, or is arriving from an external site, such as a price comparison website (PCW).
 
### End of journey processing

For some experiences, there can be a long delay in processing an action. Whether this is to complete a quote, make a payment or book an appointment, in these cases a loading state should provide a user with feedback and reassure them that something is happening. 

Unlike the `<ns-cta>`, which can help provide context for short term pauses, when a user is expected to wait for a longer period of time, we should provide a clearer explanation and visual cue that their submission is being handled. 

We handle these transitions using the Stopgap page type. This consists of using an `<ns-landmark type="lakeside">` and an `<ns-icon type="loading">`. It is recommended that we play back what their expected time to completion is. This should help reduce users feeling anxious and impatient.

You can [read more information about the Stopgap here](https://docs.britishgas.design/page-types/stopgap).

### Arriving from an external site

In the same vein as the end of journey processing, transferring from an external site may require a prolonged amount of time for processing information. In order to reassure the user that their transfer is being handled, we would also recommend using the Stopgap page type. This allows us to explain to the user what is happening, and help reduce anxiety and impatience.

You can [read more information about the Stopgap here](https://docs.britishgas.design/page-types/stopgap).

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[patterns-loading]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[patterns-loading]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
