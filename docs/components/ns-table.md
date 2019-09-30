---
description: A reusable table that can hold data with multiple rows and multiple columns.
---

# ns-table

## Introduction

> A reusable table that can hold data with multiple rows and multiple columns.

The table component consumes basic HTML table markup and makes it accessible and responsive as well as styling it.

## Accessibility

### Aria
The ns-table component adds all the necessary Aria tags to the table to make it accessible for screen readers.

### Keyboard
Keyboard controls are automatically added to the table to make it perform as a data grid.  You can select cells and use the arrow keys to navigate.

### Responsive
If your table has table headers <th> in the first column, the component will make these “sticky” so that the table data can be scrolled horizontally whilst the first column headers stay in place.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-table).

```html
<ns-table>
  <table>
    <thead> ... </thead>
    <tbody> ... </tbody>
    <tfoot> ... </tfoot>
  </table>
</ns-table>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout class can be used?**  
N/A

**Does it live inside other components?**  
N/A

**Atomic type**  
Atom

## Specification

| **Name** |  |
| :--- | :--- |
| **Description** |  |
| **Type** |  |
| **Default** |  |
| **Options** |  |
| **Notes** |  |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Add a `<caption>` to the `ns-table` | Use for laying out components |
| Use for displaying data in tables |  |
| Use basic text, numbers. | |
| Add lists? Bold, italic, what are the rules??? | |

### Considerations of best practice

* `td` cells will be styled as `normal` paragraph font
* `th` cells will be styled as `h5` heading font
* Fill cells with:
  * Paragraph
  * Bullet list
  * Action

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20ns-table).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+ns-table).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
