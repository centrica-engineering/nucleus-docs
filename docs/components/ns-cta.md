---
description: Molecule | CTA component.
---

# ns-cta

## Introduction

> A call-to-action allows users to take action once they are ready for it.

We allow users to perform certain actions through the use of our call to actions (CTAs). It should always be clear to the user what the CTA's action is through text.

## Content guidance

| Field type | Guidelines |
| :--- | :--- |
| Text    	   |  |
| Icon		     |  |

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

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-cta--direct-link).

`ns-cta` should always live inside another component.

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-cta" caption="" %}

```markup
<ns-cta>Learn more about Hive</ns-cta>
```

## Component Relationship

| **Relationship** |  |
| :--- | :--- |
| **Does it live in a panel?**              | ❌ No |
| **Does it live inside other components?** | ✅ Yes - `ns-lockup`, `ns-landmark`, `ns-card` |
| **What layout classes can be used?**      | None |


## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type`    | `string` | `direct` | `direct`, `text` | Different variants of the CTA. |
| `href` | `string` |           || Linking to another location. |
| `icon`  | `string` | `arrow-right` | `arrow-left`, `arrow-right`, `download` See [`ns-icon` component](https://britishgas.design/components/ns-icon) | The icon inside the CTA |
| `loading` | `string` | `false` | `true`, `false` | Change the state of the CTA for loading. |
| `loadingMessage` | `string` | `Loading...` |  | Overwrites the CTA anonymous slot for the loading state. |

| Slots | Type |
| :--- | :--- |
| Anonymous | textNode |

## Specification notes

### Icons

* Icons are not descriptive, they are supplementary to the text.

### Href

* Can be used instead of having a wrapper anchor
* This shouldn't be used if `onClick` event is added.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20ns-cta).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+ns-cta).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [CTA examples in the homepage](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-homepage--2019-01).
