---
title: ns-accordion
---

## Introduction

> Accordion enables users to expand and collapse multiple sections of content.

We use accordions to break down content into meaningful sections, helping to reduce information overload. Accordions are useful for things like frequently asked questions or displaying multiple blocks of related content inside an [ns-expander](./ns-expander).

## Content guidance

![Accordion](../../../assets/ns-accordion/contentguidance-ns-accordion.webp)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Heading | The recommended length is between 4 and 12 words, not exceeding 50 characters in total.  |
| B | Content | Use between 1 and 8 [ns-expander](./ns-expander) components. All expanders need to be related to the accordion's heading.|

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use for FAQs | Use a background with an accordion as the expanded state is white |
| Use to split up related content | Use more than 8 expanders |
| Make sure the heading relates to content | Use for critical or to hide information (such as caveats) |
| Use as a supporting component to the rest of the page's content | Use as a solution to excessive copy on a page |
|  | Use as the only component on a page |

### Considerations of best practises

If you need more than 8 [ns-expander](./ns-expander) components, you can use more than one accordion on the page.

If there isn't a inherent logical order to the expanders, use alphabetical order for ease of scanning.

## Usage

<StorybookStory story="components-ns-accordion--singular"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-accordion" parentComponents="ns-panel,ns-content,ns-editorial"></ComponentPlacement>

## Specification

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag` |
| Anonymous | `<ns-expander>` |

## Specification notes

### Heading

* The heading is for the entire accordion.
* Heading level should be h2 or h3 depending on its place in the semantics of the page.

### Anonymous

* Place ns-expanders into this slot.
* Check the [ns-expander documentation](./ns-expander) for more information.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-accordion]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-accordion]).

<PageFooter></PageFooter>
