---
description: A reusable table that can hold data with multiple rows and multiple columns.
---

# ns-table

## Introduction

> `ns-table` displays information in a grid-like format of rows and columns. They organize information in a way that’s easy to scan, so that users can look for patterns and insights.

The table component consumes basic HTML table markup and makes it accessible and responsive as well as styling it.


## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-table).

```html
<ns-table>
  <table>
    <caption> ... </caption>
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

`ns-table` doesn't expect any attributes to be added to it, you simply need to insert HTML table markup and it will render the table in an accessible and responsive way.

### `<caption>`
Be sure to add a <caption> tag inside the <table>.  The caption should explain what the table is representing.
  
  ```
  <table>
    <caption>European countries in order of population</caption>
  </table>
  ```
  
### `<thead>`
If your table data has column headings across the first row then place header cells (`<th>`) within the `<thead>` tag.

```
  <table>
    <thead>
      <th>Country</th>
      <th>Population</th>
    </thead>
  </table>
```
  

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Add a `<caption>` to the `ns-table` | Use ns-table just for layout or, to be more clear, don't use tables for anything but tabular data |
| Use for displaying data in tables | Use for laying out components |
| Use basic text, numbers | |
| Include at least one column header or row header | |
| Keep column and row headers short and concise | |
| Structure them in a logical and expected way | |


### Considerations of best practice
  
* Not all tables necessarily need captions, but it's recommended you provide one.
* Column header names should describe the type of content displayed in each column. Each row should contain data related to a single entity.
* Think about the experience on a smaller screen size. 
* The `ns-table` component adds all the necessary Aria tags to the table to make it accessible for screen readers.
* Keyboard controls are automatically added to the table to make it perform as a data grid.  You can select cells and use the arrow keys to navigate.
* If your table has table headers <th> in the first column, the component will make these “sticky” so that the table data can be scrolled horizontally whilst the first column headers stay in place.


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20ns-table).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+ns-table).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
