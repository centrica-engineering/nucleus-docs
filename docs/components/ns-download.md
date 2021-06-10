---
description: Atom | Download component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> Highlights an item that can be downloaded.

Currently only allows '.pdf' and '.xls' file types, other types can be added but it will require a new release.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for all downloads | Use the instructions in the body e.g. 'download here'|
| Include file size | Don't describe the file as a file |
| Describe what the file is | Embed in text |
| Place in a list element with class `download-list` when you have more than 1 download link in row|  |
| Place on its own line |

### Considerations of best practice

Include file size - this is particularly nice for customers that are on reduced data allowences (i.e. mobile), and also offers an indication on how long a file might take to download.

Text Content - the text provided between the ns-download tags is used to create the filename for the downloaded file. This helps users identify the file that has been downloaded.

Placing it on its own line - The download component incorporates an icon to help users recognise that the browser download action will happen when clicked. If we were to include this component in a paragraph the icon would interrupt the flow of the text, making it less readable. There is also the risk that users could miss the icon and the subsequent download action would be an unexpected behaviour. Further confusion could occur if there is more than one link in a piece of text. Placing the download link on its own line clearly indicates what the link is and the actions that will occur when it is interacted with.

The download-list class can only be used on `<ul>` and `<ol>` html tags. Each ns-download must be a direct child of a `<li>`.

### Accessibility

In order to comply with accessibility standards you should not force a file to open in a new tab. It must be left up to the user to decide whether to download a file, or open in a new tab.

The one exception to this rule is in forms as there are often challenges around caching user data. When ns-download is used within ns-form; if the browser can display the file type it will open in a new tab.

## Usage

### Standalone

<StorybookStory story="components-ns-download--standalone"></StorybookStory>

### List

<StorybookStory story="components-ns-download--list"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-download" parentComponents="ns-card,ns-form,ns-content,ns-table"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `href` | `string` | | '.pdf','.xls' | The url for the file to be downloaded (including file extension) |
| `fileSize` | `string` | | Units 'B','kB', 'MB', 'GB' | The size of the file to be downloaded (including unit).|

| Slots | Type |
| :--- | :--- |
| Anonymous | textNode |

<Tokens component="download"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-download]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-download]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
