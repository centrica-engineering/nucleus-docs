---
title: Accordion
---
## Implementation

### Best practices
If you need more than 8 ns-expander components, you can use more than one accordion on the page.

If there isn't a inherent logical order to the expanders, use alphabetical order for ease of scanning.

#### Dos and don'ts

| 💚 Dos | 💔 Don'ts |
| :---  | :---  |
| Use for FAQs | Use a background with an accordion as the expanded state is white |
| Use to split up related content | Use more than 8 expanders |
| Make sure the heading relates to content | Use for critical or to hide information (such as caveats) |
| Use as a supporting component to the rest of the page's content | Use as a solution to excessive copy on a page |
|  | Use as the only component on a page |

### Accessibility

### Specification

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag` |
| Anonymous | `<ns-expander>` |

#### Specification notes

##### Heading

* The heading is for the entire accordion.
* Heading level should be h2 or h3 depending on its place in the semantics of the page.

##### Anonymous

* Place ns-expanders into this slot.
* Check the [ns-expander documentation](components/ns-expander.md) for more information.