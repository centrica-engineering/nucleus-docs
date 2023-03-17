---
title: Lists
description: Group related information within lists
---

We have 6 styles of lists using the 3 different HTML markup techniques. Unordered lists, ordered lists and description lists.

Some components are specifically designed to include these lists. To find out which, visit the Content guidance section of the component and you'll find the types of content that can be included.

Take a look at this example of the `ns-editorial` which can display these lists [ns-editorial content guidance](components/ns-editorial.md#content-guidance).

Further examples of [components which are designed to contain lists](#usage).

## Unordered lists

There are three list styles that can be with an unordered list. The familiar bullet list and the two decorative list styles.

Use the Unordered list element `<ul>` as the parent element and a List item `<li>` for each line.

## Bullet list

```markup
<ul class="ul-bullet">
  <li>...</li>
  <li>...</li>
</ul>
```

A Bullet list can be nested up to four levels deep.

To see a more complex example of the Bullet list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-lists--ul-bullet).

## Decorative lists

Decorative lists display different bullet styles, we have a ticked list and a crossed list.

### Accessibility considerations

When using the these Decorative lists to represent services or features that are either **available** or **not available** it's important to present this list with a heading identifying this fact.

Screenreaders and assistive technologies will see a Decorative list as either an unordered list or an ordered list, depending on if it's marked up with an `<ul>` or an `<ol>`. The style of the bullet does not convey meaning to assistive technology. This could be very misleading and confusing, which is why a heading is so important.

Ensure that the heading level is correct. For example, use an `<h3>`, not an `<h4>` if the previous heading is an `<h2>`. Heading levels should only increase by one.

### Ticked list

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

To see a more complex example of the Ticked list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-lists--ul-ticked).

### Crossed list

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

To see a more complex example of the Crossed list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-lists--ul-crossed).

A Decorative list can be nested up to four levels deep.

## Ordered lists

An ordered list is used when the order is important or if there's a need to identify or refer to an individual list item within a list.

Use the Ordered list element `<ol>` as the parent element and a List item `<li>` for each line.

## Numbered list

The Numbered list will display an incremental number alongside each list item.

```markup
<ol class="ol-numbered">
  <li>...</li>
  <li>...</li>
</ol>
```

A Numbered list can be nested up to four levels deep.

To see a more complex example of the Numbered list visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-lists--ol-numbered).

## Description list

Displaying data alongside it's accompanying label is accomplished using the Description List element `<dl>` and it's children `<dt>` and `<dd>` wrapped in a `<div>`.

There are two types of description lists which we have called `dl-row` and `dl-stack`.

### Description list row

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

To see a more complex example of the description list row visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-lists--dl-row).

### Description list stack

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

To see a more complex example of the description list stack visit [Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/foundations-lists--dl-stack).

## Usage

The following components have been designed to use lists:

|  |  |
| :--- | :--- |
| [ns-card](components/ns-card.md) | [ns-accordion](components/ns-accordion.md) |
| ![image](https://user-images.githubusercontent.com/78355810/225370157-e3df4e83-dde2-41ab-be50-78990d6c5e70.png) ![image](https://user-images.githubusercontent.com/78355810/225371334-d0c729e9-9073-4d3a-b704-d8fc6f1d44a3.png) | ![image](https://user-images.githubusercontent.com/78355810/225386389-ad5cdeec-a276-43af-9a30-400d50dcd940.png) |
| [ns-lockup](components/ns-lockup.md) | [ns-landmark](components/ns-landmark.md) |
| ![image](https://user-images.githubusercontent.com/78355810/225638350-4a44ab8f-3aeb-45ee-86e0-ab616c1f1ee8.jpg) | ![image](https://user-images.githubusercontent.com/78355810/225667509-0db7af74-bc8e-4e1c-8fe1-8630aa578ce8.jpg) |
| [ns-product-card](components/ns-product-card.md) | [ns-selector](components/ns-selector.md) |
| ![image](https://user-images.githubusercontent.com/78355810/225697980-83df1d0d-be45-4465-a142-5e20b2135754.jpg) | ![image](https://user-images.githubusercontent.com/78355810/225895066-2b8e3684-95c9-48c7-a128-76452b570ae7.jpg) ![image](https://user-images.githubusercontent.com/78355810/225897253-8ea2e0e6-dd7c-4213-a1a7-24220f39b474.jpg) |
| [ns-editorial](components/ns-editorial.md) |  |
| ![image](https://user-images.githubusercontent.com/78355810/225899190-0abd77aa-1840-4f94-83bc-c0c8c5d5bf0d.jpg) |  |

A popular use of the `dl-row` list is to playback data captured during a journey.

Here an example:

![image](https://user-images.githubusercontent.com/78355810/225903353-9cc10010-4f4c-442e-872c-778f0b78bc50.jpg)
