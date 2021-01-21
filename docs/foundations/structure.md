---
title: Structure
description: The glue that holds our components together.
---

The word 'structure' in this context is used as the term to encapsulate how a document and pieces of a document are put together.

There are five pieces of the design system that work together to make our structure.

**1. HTML** - The fundamental building blocks of the Web. In order to get the most from Nucleus it is important that the structure of the HyperText Markup Language is correct.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    ...
  </head>
  <body class="ndsn">
    ...
  </body>
</html>
```

**2. Panel** - `<ns-panel>` is always a child of the `<main>` element or it's encapsulated within a component that is a child of the `<main>` element.

```html
<main>
  <ns-landmark> ... </ns-landmark>
  <ns-panel> ... </ns-panel>
  <ns-panel> ... </ns-panel>
  <ns-editorial> ... </ns-editorial>
  <ns-caveat> ... </ns-caveat>
</main>
```

**3. Layout** - This is the area within `<ns-panel>` that either adopts the natural behaviour defined by itself, or having a class applied to either a `<div>` or `<ns-column>`.

```html
<ns-panel>
  <div class="splash"> ... </div>
  <ns-column> ... </ns-column>
</ns-panel>
```

**4. Columns** - To introduce a column structure use either a class `<div class="triple">` or include attributes on the `<ns-column>` component.

```html
<ns-panel>
  <div class="splash triple"> ... </div>
  <ns-column hockeypitch="3"> ... </ns-column>
</ns-panel>
```

**5. Component** - Within our components we include responsive columns and layout decisions.

```html
<ns-card type="section"> ... </ns-card>
```

## 1. HTML

In it's basic form, the markup for the most performant and accessible page starts with the following:

Here is the [Nucleus HTML Structure](https://github.com/ConnectedHomes/nucleus/issues/1055#issue-555478278) in Github.

## 2. Panel

This piece of our structure provides a container for a single topic or task. Think of `<ns-panel>` as a part of a document which may contain multiple sections.

## 3. Layout

Here I refer to the layout of our components into three widths, Wide, Norm and Slim.

The adding of a class to render different types of layout allows us to implement a modern and dynamic aspect of our creative principles.

One way this is achieved is by occasionally breaking out of the Norm, which helps to draw attention and to provide some relief from the uniformity of the majority of the content. The Slim layout pulls the content narrower than the Norm to imply a similar effect.

![wide-norm-slim](https://user-images.githubusercontent.com/28779/96426858-b9fda680-11f5-11eb-88f0-4e2039ca5376.png)

## 4. Columns

When we discuss columns, we often refer to the `triple` layout and the `ns-column` component. Some of our components have column behaviour baked into them.

An example of a component that adapts it's appearance responsively within a column layout is the section variant of `ns-card`.

### `<ns-card>`

In this screenshot we can observe the responsive behaviour of the `section` card.

In `squash-court` and `tennis-court` the cards 'stick' to the edge of the browser. This is another dynamic aspect to layout, which has been used sparingly.

In `basketball-court` the cards shift into a Slim width which aligns with the behaviour of the lockups and produces a comfortable reading experience.

In `hockey-pitch` the cards switch into a triple layout and sit within the same width as the Norm.

Finally in `rugby-pitch` and above, the cards break out passed the Norm and enter into the Wide width.

![section-card](https://user-images.githubusercontent.com/28779/95886913-1a649200-0d77-11eb-8c75-c9f9686607cc.png)

### `<ns-lockup>`

The lockjaw and locknut variants of `ns-lockup` contain a two column layout at `hockey-pitch` and above, with a 50%/50% layout. The lockbox variant has a 60%/40% or 40%/60%.

### `<ns-landmark>`

The landmark, notably the summit variant changes in many ways. Starting at 100% in `squash-court` and `tennis-court` then adopting a 66%/33% in `basketball-court`, then a 50%/50% in `hockey-pitch` and above.

## 5. Component

Each of our components can adopt a relevant layout at any of our viewports in order to take advantage of the best responsive solution.

This can be seen in the responsive behaviour of the section card where the illustration moves from left to right depending on the best use of space.


### `<ns-appointment-picker>`

Displays stacked at `squash-court` -> `basketball-court` and then a side-by-side consuming 100% width in `basketball-court` and then, 66% width in `hockey-pitch` and above.

### `<ns-card>`

The cards that adapt the most are `section` and `support with image`

### `<ns-editorial>`

An image can be left or right, in `basketball-court` they will display on the right and in `tennis-court` and smaller they are stacked.

### `<ns-highlighter>`

The highlighter behaves in a similar way to `ns-card section` as the icon swaps from right to left from `squash-court` to `tennis-court` and then reduces it's width to two thirds when in `basketball-court` and reduces width again to half when in `hockey-pitch` and above.

### `<ns-landmark>`

Lots of responsive decisions are contained within each `ns-landmark` for example, the `summit` variant there is no `card` at `squash-court` and `tennis-court` and at `basketball-court` the card overlaps the image and sticks to 
the left. At `hockey-pitch` and above the card floats over the image.

### `<ns-lockup>`

All three of our lockups behave uniquely responsive.

### `<ns-selector>`

The image within `ns-selector` adapts to different positions and sizes.

### Here is a list of components that contain `ns-panel`

- `<ns-landmark>`
- `<ns-editorial>`
- `<ns-caveat>`
- `<ns-footer>`
- `<ns-header>`
- `<ns-skyline>`

#### These components also contain a layout class

- `<ns-caveat>` - `splish`
- `<ns-footer>` - `splash`
- `<ns-header>` - `splash`
- `<ns-skyline>` - `splash`
- `<ns-editorial>` - `splosh`

## Functional vs promotional

When building the structure of the **functional** areas of the site we purposefully remain in the Norm width for all components. `<ns-landmark type="lakeside">` conforms to the Norm width and is less dynamic in it's responsive behaviour and suits the needs for the majority of functional experiences. We take a 'mobile first' approach where the majority of the layouts are vertically stacked. The experience principle that stands out here is 'Make life simple'.

The **promotional** areas of the site include a lot of dynamic responsive behaviour which reinforce and promote the strength of the creative principles.
