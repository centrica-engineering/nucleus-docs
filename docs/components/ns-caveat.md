---
description: Molecule | Caveat component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Caveats provide additional information and legal details to content.

Caveats link to content in the page, providing more information about legality and eligibility, by separating it to the bottom of the page.

## Content guidance

![Caveat - Link](https://user-images.githubusercontent.com/45626534/74146740-ad9e6400-4bf9-11ea-8c26-091b21b7aaf4.png)

![Caveat](https://user-images.githubusercontent.com/45626534/74146791-c9096f00-4bf9-11ea-936b-75b2f6dc13de.png)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Link | The link used to highlight there is further relevant information the user should read. This might  provide specific stipulations, conditions, or limitations. Clicking on this should take the user to the content at the bottom of the page. |
| B | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total. |
| C | Content | A single, short paragraph works best. You can link to additional information if needed, such as terms. These should always be accompanied with a related description.|

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Try to make the caveats positive | Use the caveat to hide information |
| Be transparent, if the legal details are short, add it to the content | Add images, iconography, etc. |
| Always have the legal caveats at the bottom of the page, before the footer | Try to change the font size of the caveats |
| Use an ordered list for the caveats that are linked in the page |  |
| Use a `<p>` tag for the caveats that relate to the page or journey in general |  |
| Only use text in the caveats |  |
| Embolden text that is important |  |
| Prepend the link with `&nbsp;` so that it doesn't become widowed |  |

### Considerations of best practice

* We highly recommend that there are no more than three caveats in a single piece of communication.
* Link to additional information, if needed such as terms, but should always be accompanied with a related description.

## Usage

<StorybookStory story="components-ns-caveat--caveat"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-caveat"></ComponentPlacement>

## Specification

| Attribute    | Type | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type`    | `string` | `standard` | `alert`, `standard` | Currently alert is in alpha |

| Slots     | Type          |
| :--- | :--- |
| `heading` | `h tag`       |
| Anonymous | `ol list tag` , `p tag` |

<Tokens component="caveat"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-caveat]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-caveat]).

<PageFooter></PageFooter>

## Related links

* [ns-caveat component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-caveat--caveat).
* [Homepage example in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/examples-homepage--2019-01).
