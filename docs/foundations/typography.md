---
description: British Gas typeface - BG Flame
---

# Typography

## Typeface

The BG Flame font is a typeface unique to British Gas. Is has a clear, legible and elegant style.

We fallback to `sans-serif` to allow the operating system to provide the substitute.


## Weights

There are three weights of BG Flame; bold, regular and light.

Each of these weights are to be used to ensure variety through our content and messaging, in turn enabling us to create visual clarity, pace and hierarchy.

This helps us to highlight different details and make sure legibility and readability is prominent in all our communications.

## Semantics vs. styles

The definitions we cover here refer to typographic styles. It's important understand the separation of styles and semantics:

* The semantics of a page informs the hierarchy and relationships, making text logically structured for screen readers and other assistive technologies.
* Styles are used to ensure optimal readability and legibility, as well as convey our brand.

Without semantically correct HTML, our content won't be accessible. Consider for example the following guidance on headings:

* The page headings must follow an order, starting from H1 to H6.
* A page must only have one H1 element.
* Ensure heading levels are sequential: H1, H2 then H3. Not H1, H3 then H2.

It is possible to style each heading. A suitable style may be applied on each of these headings. To avoid confusion, please remember the following:

* Refer to H1, H2, etc. only when it comes to semantic choices and accessibility.
* Use Nucleus naming conventions to discuss typographic style choices.

## Modular scale

> A universal typographic system which is consistent and efficient to use for both developers and designers.

We've implemented the following modular scale to inform our typographic hierarchy.

A double stranded scale for each set of typographic sizes using two bases.

### Bases

1em (16px)  
1.375em (22px)

### Ratios

| Scale | Ratio | Viewport |
| :--- | :--- | :--- |
| Major second | 1.125 | Small |
| Minor third | 1.2 | Medium |
| Major third | 1.25 | Large |

### Sizes

| Modular scale | Heading | Paragraph |
| :--- | :--- | :--- |
| 12 | `<h1>` |  |
| 9 | `<h2>` |  |
| 6 | `<h3>` | `.p-large` |
| 5 | `<h4>` |  |
| 4 |  | `.p-feature` |
| 3 | `<h5>` |  |
| 2 | `<h6>` | `.p-normal` |
| 0 |  | `.p-small` |
| -1 |  | `.p-caption` |


To learn more visit our foundation page on [Modular scale](https://docs.britishgas.design/v/release-candidate/foundations/modular-scale)

## Lists

We have three different types of lists;  an unordered list, an ordered list and a label and data list.

There are a number of components that are designed to include these lists. To find out which, visit the Content guidance section of the component and you'll find the types of content that can be included.

Take a look at this example of the `ns-editorial` which can display these lists [ns-editorial content guidance](https://docs.britishgas.design/v/release-candidate/components/ns-editorial#content-guidance).

These lists can be nested up to four levels deep.

### Unordered list

An unordered list is the most common, often referred to as a bullet list. Use the Unordered list element `<ul>` as the parent element and a List item `<li>` for each line.

There are two types of unordered list, one with bullets and the other with ticks.

#### Bullet list

```markup
<ul class="ul-bullet">
  <li>...</li>
  <li>...</li>
</ul>
```

To see a more complex example of the Bullet list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--ul-bullet).

#### Ticked list

```markup
<ul class="ul-ticked">
  <li>...</li>
  <li>...</li>
</ul>
```

To see a more complex example of the Ticked list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--ul-ticked).

### Ordered list

There is one type of ordered list, this displays numbers for each list item. Use the Ordered list element `<ol>` as the parent element and a List item `<li>` for each line.

We refer to this list as the numbered list.

#### Numbered list

The numbered list will display an incremental number alongside each list item.

```markup
<ol class="ol-numbered">
  <li>...</li>
  <li>...</li>
</ol>
```

To see a more complex example of the Numbered list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--ol-numbered).

### Description list

Displaying data alongside it's accompanying label is accomplished using the Description List element `<dl>` and it's children `<dt>` and `<dd>` wrapped in a `<div>`.

There are two types of Label and data lists, one is displayed as rows at wide viewports and stacked on narrow viewports. The other is always stacked.

#### Label and data row

```markup
<dl class="dl-row">
  <div>
    <dt>...</dt>
    <dd>...</dd>
  </div>
  <div>
    <dt>...</dt>
    <dd>...</dd>
  </div>
</dl>
```

To see a more complex example of the Label and data row visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--dl-row).

#### Label and data stack

```markup
<dl class="dl-stack">
  <div>
    <dt>...</dt>
    <dd>...</dd>
  </div>
  <div>
    <dt>...</dt>
    <dd>...</dd>
  </div>
</dl>
```

To see a more complex example of the Label and data stack visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--dl-stack).
