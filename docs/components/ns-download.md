---
description: Atom | Download component.
---

# ns-download

## Introduction

> Highlights an item that can be downloaded.

Currently only allows '.pdf' and '.xls' file types, other types can be added but it will require a new release.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for all downloads | Use the instructions in the body e.g. 'download here'|
| Include file size | Don't describe the file as a file |
| Describe what the file is |  |
| Place in a list element with class `download-list` when you have more than 1 download link in row|  |

### Considerations of best practice

Include file size - this is particularly nice for customers that are on reduced data allowences (i.e. mobile), and also offers an indication on how long a file might take to download.

Text Content - the text provided between the ns-download tags is used to create the filename for the downloaded file. This helps users identify the file that has been downloaded.

The download-list class can only be used on `<ul>` and `<ol>` html tags. Each ns-download must be a direct child of a `<li>`.

### Accessibility

In order to comply with accessibility standards you should not force a file to open in a new tab. It must be left up to the user to decide whether to download a file, or open in a new tab.

The one exception to this rule is in forms as there are often challenges around caching user data. When ns-download is used within ns-form; if the browser can display the file type it will open in a new tab.

## Usage

### Standalone

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-download--standard)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-download" caption="" %}

```markup
<ns-download href="link/to/file.pdf" fileSize="123MB">Text to display</ns-download>
```
### List

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-download--list)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-download--list" caption="" %}

```markup

<ul class="download-list">
  <li><ns-download href="link/to/file.pdf" fileSize="123MB">Text to display</ns-download></li>
  <li><ns-download href="link/to/file.pdf" fileSize="123MB">Text to display</ns-download></li>
  <li><ns-download href="link/to/file.pdf" fileSize="123MB">Text to display</ns-download></li>
</ul>

<ol class="download-list">
  <li><ns-download href="link/to/file.pdf" fileSize="123MB">Bill for January</ns-download></li>
  <li><ns-download href="link/to/file.pdf" fileSize="123MB">Bill for February</ns-download></li>
  <li><ns-download href="link/to/file.pdf" fileSize="123MB">Bill for March</ns-download></li>
</ol>
```

## Component relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `href` | `string` | | '.pdf','.xls' | The url for the file to be downloaded (including file extension) |
| `fileSize` | `string` | | Units 'B','kB', 'MB', 'GB' | The size of the file to be downloaded (including unit).|

| Slots | Type |
| :--- | :--- |
| Anonymous | textNode |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-download]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-download]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
