---
description: Atom | Download component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Create a downloadable link for an asset.

`ns-download` creates the visual and semantics of the action of downloading an asset, as opposed to navigation.
It can be used on its own or as a list of downloads for multiple files.

## Content Guidance
![ns-download](https://user-images.githubusercontent.com/7914977/201078425-37a4133f-b064-40a1-9261-e4d67346992f.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | File description | Provide a description of what the file is and or contains. |
| B | File type | The component will pick the file type from the file (if it isn't a format supported by the component, you need to provide a file type attribute). |
| C | File size | Accurate file size in whichever unit that makes the most sense: B, kB, MB, GB. |


## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for all downloads | Use the instructions in the body e.g. 'download here'|
| Include file size | Don't describe the file as a file |
| Describe what the file is | Use as an inline element |
| Place in a list element with class `download-list` when you have more than 1 download link in row| Mix them amongst text types of `ns-cta`. |
| Use it as a block element | |
| Consider limiting the amount of downloads in a list to a manageable amount to ease choice | |


### Considerations of best practice

- Include file size - this helps customers to make a decision on if they want to download it (available space, time to download).
- File description - the text provided between the ns-download tags is used to create the filename for the downloaded file. This helps users identify the file that has been downloaded. Avoid adding any words you don't want to end up in the downloaded file's name.
- Using it as a block element -  if we were to include this component in a paragraph the icon would interrupt the flow of the text, making it less readable.
- Lists - the `download-list` class can only be used on `<ul>` and `<ol>` html tags. Each `ns-download` must be a direct child of a `<li>`.
- File type - if you are hitting an API to download the file, specifying the file type will be required even for supported formats.
- File size - try and keep the file size to under maximum 3 digits. Example: instead of using "1498kB", use "1.5MB".

### Accessibility

In order to comply with accessibility standards you should not force a file to open in a new tab. It must be left up to the user to decide whether to download a file, or open in a new tab.

The one exception to this rule is in forms as there are often challenges around losing the session of the journey when `ns-download` is used within `ns-form`; if the browser can display the file type it will open in a new tab.

## Usage

### Standalone

<StorybookStory story="components-ns-download--standalone"></StorybookStory>

### List

<StorybookStory story="components-ns-download--list"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-download" parentComponents="ns-card,ns-form,ns-content,ns-table,ns-product-card,ns-lockup"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `href` | `string` | | Suffixed by `.pdf`,`.xls` | The url for the file to be downloaded (including file extension) |
| fileType | string | | `pdf`, `xls` | If `href` doesn't have an extension, provide file type in this attribute. |
| `fileSize` | `string` | | Units 'B','kB', 'MB', 'GB' | The size of the file to be downloaded (including unit).|

| Slots | Type |
| :--- | :--- |
| Anonymous | textNode |

### Specification notes

- File type - if the file's `href` attribute contains one of the following file extensions: `.pdf`, `.xls`, then the fileType attribute will have no effect.


<Tokens component="download"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-download]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-download]).

<PageFooter></PageFooter>
