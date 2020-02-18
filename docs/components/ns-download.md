---
description: Atom | Download component.
---

# ns-download

## Introduction

> Highlights an item that can be downloaded.

Currently only allows '.pdf' file types, other types can be added but it will require a new release.

## Best practice

| 💚 Do | 💔 Don't |
| :---  | :---  |
| Use for all downloads | Use the instructions in the body e.g. 'download here'|
| Include file size |  |
| Describe what the file is |  |

### Considerations of best practice

Include file size - this is particularly nice for customers that are on reduced data allowences (i.e. mobile), and also offers an indication on how long a file might take to download

Text Content - the text provided between the ns-download tags is used to create the filename for the downloaded file. This helps users identify the file that has been downloaded.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-download--standard)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-download" caption="" %}

```markup
<ns-download href="link/to/file.pdf" fileSize="123MB">Text to display</ns-download>
```

## Component Relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `href` | `string` | | '.pdf' | The url for the file to be downloaded (including file extension) |
| `fileSize` | `string` | | Units 'B','kB', 'MB', 'GB' | The size of the file to be downloaded (including unit).|

| Slots | Type |
| :--- | :--- |
| Anonymous | textNode |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-accordion]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-accordion]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
