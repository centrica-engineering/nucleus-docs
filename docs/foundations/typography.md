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
| 12 | `<h1>` `.h1` |  |
| 9 | `<h2>` `.h2` |  |
| 6 | `<h3>` `.h3` | `.p-large` |
| 5 | `<h4>` `.h4` |  |
| 4 |  | `.p-feature` |
| 3 | `<h5>` `.h5` |  |
| 2 | `<h6>` `.h6` | `.p-normal` |
| 0 |  | `.p-small` |
| -1 |  | `.p-caption` |


To learn more visit our foundation page on [Modular scale](https://docs.britishgas.design/foundations/modular-scale)

## Lists

We have a number of different types of lists:
* Unordered lists
* Ordered lists
* Decorative lists
* Label and data lists

Some components are specifically designed to include these lists. To find out which, visit the Content guidance section of the component and you'll find the types of content that can be included.

Take a look at this example of the `ns-editorial` which can display these lists [ns-editorial content guidance](https://docs.britishgas.design/components/ns-editorial#content-guidance).

### Unordered list

An unordered list is the most common, often referred to as a bullet list. Use the Unordered list element `<ul>` as the parent element and a List item `<li>` for each line.

#### Bullet list

```markup
<ul class="ul-bullet">
  <li>...</li>
  <li>...</li>
</ul>
```

A Bullet list can be nested up to four levels deep.

To see a more complex example of the Bullet list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--ul-bullet).

### Ordered list

An ordered list is used when the order is important or if there's a need to identify or refer to an individial list item within a list.

Use the Ordered list element `<ol>` as the parent element and a List item `<li>` for each line.

#### Numbered list

The Numbered list will display an incremental number alongside each list item.

```markup
<ol class="ol-numbered">
  <li>...</li>
  <li>...</li>
</ol>
```

A Numbered list can be nested up to four levels deep.

To see a more complex example of the Numbered list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--ol-numbered).

### Decorative list

Decorative lists display different bullet styles, we have a ticked list and a crossed list.

When using the these Decorative lists to represent services or features that are either **available** or **not available** it's important to present this list with a heading identifying this fact.

Screenreaders and assistive technologies will see a Decorative list as either an unordered list or an ordered list, depending on if it's marked up with an `<ul>` or an `<ol>`. The style of the bullet does not convey meaning to assistive technology. This could be very misleading and confusing, which is why a heading is so important.

Ensure that the heading level is correct. For example, use an `<h3>`, not an `<h4>` if the previous heading is an `<h2>`. Heading levels should only increase by one.

#### Ticked list

```markup
<h4>What's available</h4>
<ul class="ul-ticked">
  <li>...</li>
  <li>...</li>
</ul>
```

Here is an example of how the Ticked list should be used within `ns-expander`.

```markup
<ns-expander>
  <h3 slot="heading">What's included?</h3>
  <ul class="ul-ticked">
    <li>...</li>
    <li>...</li>
  </ul>
</ns-expander>
```

To see a more complex example of the Ticked list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--ul-ticked).

#### Crossed list

```markup
<h4>What's not available</h4>
<ul class="ul-crossed">
  <li>...</li>
  <li>...</li>
</ul>
```

Here is an example of how the Crossed list should be used within `ns-expander`.

```markup
<ns-expander>
  <h3 slot="heading">What's not included?</h3>
  <ul class="ul-crossed">
    <li>...</li>
    <li>...</li>
  </ul>
</ns-expander>
```

To see a more complex example of the Crossed list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-typography--ul-crossed).

A Decorative list can be nested up to four levels deep.

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
