---
title: Typography
description: British Gas typeface - BG Flame
---

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

We've implemented our typographic scale using the modular scale formula: _base * ratio<sup>x</sup>_.


### Base

We use a 1em (16px) base

### Ratios

| Scale | Ratio | Viewport |
| :--- | :--- | :--- |
| Major second | 1.125 | Squash Court |
| Minor third | 1.2 | Basketball Court |
| Major third | 1.25 | Rugby Pitch |

### Sizes

| x | Heading | Paragraph |
| :--- | :--- | :--- |
| 6 | `<h1>` `.h1` |  |
| 4.5 | `<h2>` `.h2` |  |
| 3 | `<h3>` `.h3` | `.p-large` |
| 2.5 | `<h4>` `.h4` |  |
| 2 |  | `.p-feature` |
| 1.5 | `<h5>` `.h5` |  |
| 1 | `<h6>` `.h6` | `.p-normal` |
| 0 |  | `.p-small` |
| -1 |  | `.p-caption` |

To learn more visit our foundation page on [Modular scale](foundations/modular-scale.md)
