---
description: Atom | Table component.
---

# ns-table

## Introduction

> `ns-table` displays information in a grid-like format of rows and columns. It organizes information in a way that’s easy to scan, so that users can look for patterns and insights.

The table component consumes basic HTML table markup, which makes it accessible and responsive as well as styling it.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Add a `<caption>` to the `ns-table` | Use ns-table just for layout |
| Use for displaying data in tables | Use for laying out components |
| Use basic text, numbers | Use tables for anything but tabular data |
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

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-table).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-table" caption="" %}

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

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ✅ Yes |
| **Does it live inside other components?** |  ✅ Yes |
| **What layout classes can be used?**  | `splash` |

## Specification

`ns-table` doesn't expect any attributes to be added to it, you simply need to insert HTML table markup and it will render the table in an accessible and responsive way.

### Caption

Be sure to add a `<caption>` tag inside the `<table>`.  The caption should explain what the table is representing.

```html
<table>
  <caption>European countries in order of population</caption>
</table>
```

### Column headers
If your table data has column headings across the first row then place header cells (`<th>`) within the `<thead>` tag.

```html
<table>
  <thead>
    <tr>
      <th>Country</th>
      <th>Population</th>
    </tr>
  </thead>
</table>
```

### Row headers
If your table has row headers in the left-most column then place these headers in `<th>` within the `<tbody>`.  The component will automatically make these headings 'sticky' so that on smaller screens you can scroll the table horizontally while the row headers stay in place.

```html
<table>
  <thead>
    <tr>
      <th>&nbsp;</th>
      <th>Month 1</th>
      <th>Month 2</th>
      ...
      <th>Month 11</th>
      <th>Month 12</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Company A<th>
      <td>100</td>
      <td>200</td>
      ...
      <td>1100</td>
      <td>1200</td>
    </tr>
    <tr>
      <th>Company B<th>
      <td>100</td>
      <td>200</td>
      ...
      <td>1100</td>
      <td>1200</td>
    </tr>
  </tbody>
</table>
```


## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20ns-table).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+ns-table).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
