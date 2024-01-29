---
description: Organism | Highlighter component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Highlighters can be used to communicate information or error, warning and success messages.
>
> **Note:** This component is deprecated and please refer to [ns-alert](../components/ns-alert) component.

A component that communicates the message that a service is not available to them or that there are technical issues on specific pages only. These messages are different to global messages as they only apply to some pages not site wide.

e.g. a message that says the top up service is not available would only apply to pages that customers will look at in order to top up.

## Accessibility 


The information contained in the highlighter should always be the most important information on the page. To ensure that screen reader users are informed about the importance of these messages the content is read aloud as soon as the highlighter is used. This could be when the page loads or when it is dynamically added to a page.

If there are multiple highlighters on a page they are read:

* from top to bottom on page load
* in the order they have been added to the page when dynamically added

We recommend you use highlighters for their role, not for their looks.

## Content guidance

![Highlighter - Error](images/ns-highlighter/content-guidance.webp)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Icon | This is the icon inside the Highlighter. This is dictated by the `type` of Highlighter. The [specification table](#specification) has a list of options. |
| B | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. |
| C | Content | A single, short paragraph works best. You are able to use inline text links within the paragraph if necessary. Don't add additional headings within the paragraph and the copy length should not exceed more than two paragraphs of 3 lines each. Can contain bold copy `<b>`, inline links `<a>`, and a caveat at the end of the relevant paragraph if required `<a href="#caveat">1</a>`. |
| D | Accent | This is to support the context of the messaging. This colour matches that of the icon. |

The content for highlighters is dependent on the type that is used:

### Error messages

![Highlighter - Error](images/ns-highlighter/error.webp)

For communicating failure with urgence. A task cannot be completed without the user remedying something.

### Informational messages

![Highlighter - Informational](images/ns-highlighter/info.webp)

For communicating a useful piece of information that the user might find helpful to carry out their action.

### Success messages

![Highlighter - Success](images/ns-highlighter/success.webp)

For communicating that an action has been successful.

### Warning messages

![Highlighter - Warning](images/ns-highlighter/warning.webp)

Use for communicating a piece of information with less severity. These include foreseeable problematic events, failures, outages and how to avoid errors.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep the messages concise |  Use for generic message that is not in context to the page it is displayed in |
| Use an icon to alert the user what type of message it is |  Use it for Roadblock error messaging |

### Considerations of best practice

* Be clear and concise

The message must be in plain English, and help the user out of the situation by providing an actionable link if possible.

## Usage

<StorybookStory story="deprecated-ns-highlighter--standard"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-highlighter" parentComponents="ns-form,ns-panel"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | `error` | `error`, `success`, `warning`, `info` | Defines the role of the highlighter and changes the styles |

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag` |
| Anonymous | `p tag` |

## Specification notes

### Type

* Required for all four types of highlighter

### Heading

* This should be a heading level 2

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-highlighter]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-highlighter])

<PageFooter></PageFooter>
