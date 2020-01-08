---
description: CTA component.
---

# ns-cta

## Introduction

> A call-to-action allows users to take action once they are ready for it.

We allow users to perform certain actions through the use of our call to actions (CTAs). It should always be clear to the user what the CTA's action is through text.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-cta--direct-link).

`ns-cta` should always live inside another component.

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-cta" caption="" %}

```markup
<ns-cta>Learn more about Hive</ns-cta>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
None

**Does it live inside other components?**  
`ns-lockup`  
`ns-landmark`  
`ns-card`

**Atomic type**  
Molecule

## Specification

| **Name** | type |
| :--- | :--- |
| **Description** | The different variants of the CTA. |
| **Type** | String |
| **Default** | "direct" |
| **Options** | direct, text |

| **Name** | loading |
| :--- | :--- |
| **Description** | Changes the CTA to a loading state. |
| **Type** | Boolean |
| **Default** | false |
| **Options** | n/a |
| **Notes** | This relates to the `loadingMessage`, which replaces the copy of the CTA. |

| **Name** | loadingMessage |
| :--- | :--- |
| **Description** | This is the message that gets shown when the CTA is in the loading state. |
| **Type** | String |
| **Default** | "Loading..." |
| **Options** | n/a |
| **Notes** | Requires `loading` to be true |

| **Name** | icon |
| :--- | :--- |
| **Description** | This is a icon inside the CTA |
| **Type** | String |
| **Default** | "arrow-right" |
| **Options** | arrow-left, arrow-right, download |
| **Notes** | Icons are not descriptive, they are supplementary to the text. |

| **Name** | href |
| :--- | :--- |
| **Description** | linking to another location |
| **Type** | String |
| **Default** | "" |
| **Options** | n/a |
| **Notes** | Can be used instead of a wrapper anchor |

| **Name** | Anonymous slot |
| :--- | :--- |
| **Description** | The text inside the CTA |
| **Type** | textNode |
| **Default** | "" |
| **Options** | n/a |

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Make it short and actionable | Make it vague |
| Only use 'loading' on an action | Make it overly wordy |
| Relate the action to the content it sits beside | Use icons for icons' sake |
| Use 'direct' for the primary action on the page | Use more than 24 characters |
|  | Have multiple lines or sentences within a CTA |
|  | Repeat CTA copy within the same page |

### Considerations of best practice

* To be aware of the distinct roles of the CTA's types `direct` and `text` and that they don't always act as a `primary` and `secondary` button.
* Try not to have multiple CTA's next to each other.
* Don't overload the page with the same type of CTA or too many CTA's.
* Loading message should be the action of the text of the CTA. E.g. "Get a quote" becomes "Getting your quote...".

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20ns-cta).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+ns-cta).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [CTA examples in the homepage](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-homepage--2019-01).

