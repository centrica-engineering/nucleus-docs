---
description: atom | Skeleton component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

The `ns-skeleton` component is a placeholder to show that content is loading.

![Example showing a paragraph type ns-skeleton](images/ns-skeleton/intro-paragraph-example.webp)

The example above shows the visual representation for a paragraph. There are also options for text, headings, and subheadings.

## Accessibility

This component is hidden to screen readers. It will add a message, visible only to screen readers, within the parent element stating "Loading". When the skeleton component is removed from the DOM it will find the loading message and delete it.

To prevent users with cognitive disabilities from being overwhelmed; the shimmer animation loops for 6 seconds then stops.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Use to show a block of content is loading | Use for partial content |
| Use within a component slot | Use for actionable elements like tabs or cta's |
| Use if content will load under 5 seconds | Use for media |
| Use if part of the page is updating or loading |  |

### Considerations of best practice

- It should not have any siblings that are not itself, i.e. it is the only child of its parent element.
- The use of a skeleton should be considered as a last resort for page loading.
- Partial content cannot be used as it will conflict with the messaging that this is loading.
- If loading times are longer than a few seconds, consider using a [Stopgap](page-types/stopgap.md) instead.

## Usage

<Storybook story="components-ns-skeleton--standard"></Storybook>

## Component placement

<ComponentPlacement component="ns-skeleton" parentComponents="ns-lockup,ns-landmark,ns-card,ns-form,ns-fieldset,ns-content,ns-article,ns-accordion,ns-caveat,ns-tabs,ns-testimonial,ns-skyline,ns-product-card"></ComponentPlacement>

## Specification

| Attribute | Property |  Type | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `type` | `type` | `string` | `text` | `text`, `paragraph`, `heading`, `subheading` | Visual element it is representing |

## Specification notes

### Type

Type can be manually picked, however it will automatically decide the best `type` based on the `slot` it is in.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-skeleton]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-skeleton]).

<PageFooter></PageFooter>
