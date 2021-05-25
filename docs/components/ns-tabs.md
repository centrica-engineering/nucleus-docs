---
description: Organism | Tabs component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> Tabs provide organisation of content separated within the same context.

Related content can be separated into clearly labelled sections.

## Content guidance

![Tabs](https://user-images.githubusercontent.com/45626534/74163002-9a9b8c00-4c19-11ea-9a93-b2c841d1c458.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Icon | This is the icon inside the tab. This should relate to the label text. The [specification table](#specification-for-individual-tab) has a list of options. |
| B | Heading | Use 1 or 2 words to inform the user of information found within each panel below. |
| C | Selected Tab | This is the visual state of a selected tab. Used to show the user which content is visible below. |
| D | Panel | This is the area in which the content for each `ns-tab` will be displayed. |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always add heading text | Add an icon to one tab and not to the other tabs |
|  | Add more than 2 words to the heading |
|  | Add different types of icons (solid, outline, functional) |
| Use at least two tabs | Use an excessive amount of tabs |
| Be mindful of the extra page weight | Use more than two words for your tab label |

### Considerations of best practice

* It is advisable to use tabs alongside other components to avoid building a page that consists only of tabs.
* If you see that the tabs are bleeding over the edge of the page in Polo or Rugby, and you have followed the guidance on not using more than two words on the tab label, then you probably have too many tabs.
* Consider breaking out some of your content and make sure the content is all relevant to that page.
* Related tab and panel slots should be put together in order when adding the content.

## Usage

<StorybookStory story="components-ns-tabs--tabs"></StorybookStory>

## Component placement

A close relationship exists between `ns-tab` and `ns-panel`. Within `ns-tabs` a number of `ns-tab` and `ns-panel` pairs exist. Each of these pairs provide a tab to select and a panel to place a layout and related content.

## Specification for Individual Tab

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `icon`    | `string` |  | Please see the [documentation for ns-icon](https://britishgas.design/components/ns-icon) | Optional icon to add to the tab. |
| `selected` | `boolean` | `false` |`true`, `false`| Pre-selected tab |

| Event | Description |
| :--- | :--- |
| `tabselected` | Sends a event when tab is selected. |

| Slots | Type |
| :--- | :--- |
| `anonymous` | `textNode` |

## Specification for Tabs

| Attribute | Type | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- |
| `open` | `number`    | `0` |  | Number relates to the order of the tabs |

| Slots | Type |
| :--- | :--- |
| `tab`   | `ns-tab tag`   |
| `panel` | `ns-panel tag` |

| Event | Description |
| :--- | :--- |
| `tabchange` | Fires an event when the tab has been changed. |

## Specification notes

### Tab

* Multiple tab slots should be added to add multiple tabs. There should be the same amount of tab slots as panel slots.

### Panel

* Multiple panel slots should be added to add multiple panels. There should be the same amount of panel slots as tab slots.

<Tokens component="tabs"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-tabs]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-tabs]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
