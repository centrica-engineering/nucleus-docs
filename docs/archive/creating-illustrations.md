---
description: Creating illustrations guidelines.
---

# Create illustrations

## Principles

1. Make sure that a similar illustration is not already in use.
2. Use the illustration grid to ensure consistency with current icons.
3. Make sure illustration works across different sizes.
4. Design clean and simple forms using our shapes.
5. Use flat shapes over 3d forms, depth can be added through the use of gradients.
6. Use consistent gradients and colours. Do not use multiply when using opacity.
7. Rounded corners should make icon feel friendly, not childish.

## The illustration grid

We use a grid for icon creation to give consistency across our illustrations. Here are examples of the grid and basic shapes to show it's usage:

| Grid | Grid - Vertical | Grid - Horizontal | Grid - Circle |
| :--- | :--- | :--- | :--- |
| ![Grid for creating illustrations](https://user-images.githubusercontent.com/43471890/62045505-66bcc400-b1fd-11e9-949e-572e2dc40bf8.jpg) | ![Grid with vertical highlight for creating illustrations](https://user-images.githubusercontent.com/43471890/62050044-6b3aaa00-b208-11e9-8adb-3df5d4c240dd.jpg) | ![Grid with horizontal highlight for creating illustrations](https://user-images.githubusercontent.com/43471890/62050140-a5a44700-b208-11e9-8bf8-555ec87242a8.jpg) | ![Grid with circle highlight for creating illustrations](https://user-images.githubusercontent.com/43471890/62050739-c91bc180-b209-11e9-8561-134bd845fb4b.jpg) |

## Colour

Illustrations use a set of three different gradients:

### Gradient - Blue

![Gradient usage - Blue](https://user-images.githubusercontent.com/43471890/62051024-624ad800-b20a-11e9-846e-7bb4902e5e82.jpg)

### Gradient - Green

![Gradient usage - Green](https://user-images.githubusercontent.com/43471890/62051025-624ad800-b20a-11e9-99f3-4044fd8d3e8f.jpg)

### Gradient - Yellow

![Gradient usage - Yellow](https://user-images.githubusercontent.com/43471890/62051026-624ad800-b20a-11e9-9ee4-b3d9ca9da6bd.jpg)

### Highlights

Our illustrations use `@white` (#FFFFFF) to pull out details within the object.

### Depth

Illustrations use `@slate` (#333f48) over half of the object in order to add depth.

## Exporting illustrations

Once your illustrations are completed (and signed off!) they need to be made ready for development. Follow these steps to a happy developer:

1. Check your gradients are not multiplied opacity.
2. Select the icon and choose Object &gt; Expand appearance.
3. Check shapes have been turned to paths. Go to Object &gt; Compound path &gt; Make (you will need to do this for each individual shape separately).
4. When you have completed this use the top menu select File &gt; Export &gt; Export for Screens &gt; press the small cog (see below).

![Exporting illustrations](https://user-images.githubusercontent.com/43471890/62051136-a2aa5600-b20a-11e9-814b-a1a8f418dfd0.jpg)

Select SVG in the left hand panel &gt; choose Inline Style in the Styling dropdown (see below).

![Exporting illustrations](https://user-images.githubusercontent.com/43471890/62051134-a211bf80-b20a-11e9-8787-f72f2d4579c3.jpg)

## Cross browser compatibility issues

### Unique id's

ie11 has issues displaying svgs if two or more svgs on a single page share the same id. Each id used on all svgs will need to be unique at a global level.

### LinearGradient and  `xlink:href` / `href`

Older versions of Safari and Chrome on iOS do not render gradients when `xlink:href` and `href` attributes are used on linearGradients. These will need to be refactored so that they duplicate the gradients rather than link to them.

**For example:**

```html
<defs>
  <linearGradient id="svg-a" x1="31.44" x2="94.95" y1="-95" y2="15" gradientTransform="translate(0 120)" gradientUnits="userSpaceOnUse">
    <stop offset=".37" stop-color="#005eb8"/>
    <stop offset="1" stop-color="#003c71"/>
  </linearGradient>
  <linearGradient id="svg-b" x1="164.41" x2="62.4" y1="-173.62" y2="3.08" xlink:href="#svg-a"/>
</defs>
```

**Will become:**

Note: every attribute that does not exist on `#svg-b` will need to be copied over.

```html
<defs>
  <linearGradient id="svg-a" x1="31.44" x2="94.95" y1="-95" y2="15" gradientTransform="translate(0 120)" gradientUnits="userSpaceOnUse">
    <stop offset=".37" stop-color="#005eb8"/>
    <stop offset="1" stop-color="#003c71"/>
  </linearGradient>
  <linearGradient id="svg-b" x1="164.41" x2="62.4" y1="-173.62" y2="3.08" gradientTransform="translate(0 120)" gradientUnits="userSpaceOnUse">
    <stop offset=".37" stop-color="#005eb8"/>
    <stop offset="1" stop-color="#003c71"/>
  </linearGradient>
</defs>
```

### Super Saiyan level

The rendering of illustrations differs among different browsers (I'm looking at you Safari and IE).

![View Page Source on Illustration](https://user-images.githubusercontent.com/43471890/62051137-a2aa5600-b20a-11e9-988f-a6787298f7ef.jpg) ![SVG in browser inspector](https://user-images.githubusercontent.com/43471890/62051139-a342ec80-b20a-11e9-87c1-c0acaa24ce09.jpg) ![Exporting illustrations](https://user-images.githubusercontent.com/43471890/62051138-a2aa5600-b20a-11e9-8d10-1dddeb451164.jpg)
