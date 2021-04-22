---
description: Molecule | CTA component.
---

import { Storybook } from '../../includes/storybook.js'
import { Tokens } from '../../includes/tokens.js'

## Introduction

> A call-to-action allows users to take action once they are ready for it.

We allow users to perform certain actions through the use of our call to actions (CTAs). It should always be clear to the user what the CTA's action is through text.

## Content guidance

### CTA Direct

![CTA - Direct](https://user-images.githubusercontent.com/45626534/74147664-9d878400-4bfb-11ea-9c30-1ede80931c69.png)
### CTA Text

![CTA - Text](https://user-images.githubusercontent.com/45626534/74147667-9eb8b100-4bfb-11ea-9425-b7dbf2908a5d.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Text | Keep the text ‘short, relevant, and actionable’. It should not exceed more than 24 characters. |
| B | Icon | This is the icon inside the CTA. The [specification table](#specification) has a list of options. |

## Loading state

The `ns-cta` is capable of handling a loading interaction using the `loading` and `loadingMessage` attributes, these can be found in the [specification table](#specification) below.

This loading state can be used to provide the user with visual feedback that their action is being handled. It also provides a user with reassurance when that action takes a number of seconds to be completed. 

Your loading message should be contextual to the action of the text of the CTA. E.g. "Get a quote" becomes "Getting your quote...". 

![CTA - Loading state](https://user-images.githubusercontent.com/45626534/81697144-bc94ec80-945c-11ea-854a-39e0ecb86aa4.gif)

You can see the live example of the loading state on [storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-cta--direct-button-loading).


## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Make it short and actionable | Make it vague |
| Only use 'loading' on an action | Make it overly wordy |
| Relate the action to the content it sits beside | Use icons for icons' sake |
| Use 'direct' for the primary action on the page | Use more than 24 characters |
|  | Have multiple lines or sentences within a CTA |
|  | Repeat CTA copy within the same page |
|  | Use for downloads. Use the [`ns-download` component](components/ns-download.md) instead |

### Considerations of best practice

* To be aware of the distinct roles of the CTA's types `direct` and `text` and that they don't always act as a `primary` and `secondary` button.
* Try not to have multiple CTA's next to each other.
* Don't overload the page with the same type of CTA or too many CTA's.
* Loading message should be the action of the text of the CTA. E.g. "Get a quote" becomes "Getting your quote...".

## Usage

<Storybook story="components-ns-cta--direct-link"></Storybook>

## Component relationship

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
| `icon`  | `string` | `arrow-right` | `arrow-left`, `arrow-right` See [`ns-icon` component](https://britishgas.design/components/ns-icon) | The icon inside the CTA |
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

<Tokens component="cta"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%2[ns-cta]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-cta]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [CTA examples in the homepage](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-homepage--2019-01).
