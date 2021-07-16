---
description: Organism | Live component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> Through the use of a loading icon, a helpful message and subtle animation; `ns-live` draws attention to areas of the page that are dynamically updating.

## Accessibility

This component adds the `aria-live` attribute to itself. Screen readers will announce all changes that occur within this component

## Content guidance

![Image of ns-ive component in busy state](https://user-images.githubusercontent.com/78355810/125434081-e6c0667b-ba05-4083-a80e-bd57e32178c6.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Icon | This is the loading icon inside `ns-live` |
| B | Message | Keep this under 10 words and describe to the user what is happening e.g. Updating your quote |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use to wrap small pieces of dynamic content | Wrap large parts of the UI  |
| Wrap html elements | Place inside text elements (`<p>, <h1-6>`) |
| Use as a slot | Use for media |
| Keep the contents of `ns-live` simple |  |
| Leave the old content in place whilst busy |  |
| Remove the busy attribute and update content at the same time |  |

### Considerations of best practice

#### Smooth transitions to new content

For the best user experience follow these guidelines to avoid excessive page movement when content is updating. This is particularly important when the content being updated is larger than the busy message

* **Keep the busy message short or the same size as the content that is being updated** - this prevents `ns-live` pushing down the page when the busy state is applied
* **Leave the old content in place whilst busy** -  this makes sure that `ns-live` still occupies the same space on the page and prevents any resizing
* **Update the content and remove the busy state at the same time** - this will apply a subtle fade in animation to the body of `ns-live` which helps the transition to the new size of the content

## Usage

<StorybookStory story="components-ns-live--standard"></StorybookStory>

## Component placement

The `ns-live` component can be used to wrap any html elements but be aware that it will effect the flow if used in components that rely on clean markup for layouts (e.g. in ns-form or ns-content);

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `busy` | `boolean` | `false` | | Add to component to show the loading icon and busy message |
| `busymessage` | `string` | `Updating` | | The message to show when the area of the page is updating |

| Slots | Type |
| :--- | :--- |
| Anonymous | Any html flow content |

## Specification notes

### Anonymous

* Place the html being updated into this slot.

<Tokens component="live"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-live]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-live]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
