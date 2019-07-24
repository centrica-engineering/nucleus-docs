# Creating illustrations

## Principles

1. Make sure that a similar illustration is not already in use
2. Use the illustration grid to ensure consistency with current icons
3. Make sure illustration works across different sizes
4. Design clean and simple forms using our shapes
5. Use flat shapes over 3d forms, depth can be added through the use of gradients
6. Use consistent gradients and colours. Do not use multiply when using opacity
7. Rounded corners should make icon feel friendly, not childish

## The illustration grid

We use a grid for icon creation to give consistency across our illustrations. Here are examples of the grid and basic shapes to show it's usage:

<img src="/assets/grid.jpg" width="25%" align="left" border="4" alt="Grid for creating illustrations" />
<img src="/assets/grid-vertical.jpg" width="25%" align="left" border="4" alt="Grid with vertical highlight for creating illustrations" />
<img src="/assets/grid-horizontal.jpg" width="25%" align="left" border="4" alt="Grid with horizontal highlight for creating illustrations" />
<img src="/assets/grid-circle.jpg" width="25%" align="left" border="4" alt="Grid with circle highlight for creating illustrations" />

## Colour

Illustrations use a set of three different gradients:

### Gradient - Blue

<img src="/assets/gradient-mix-blue.jpg" alt="Gradient usage - Blue" />
<br>
<br>

### Gradient - Green

<img src="/assets/gradient-mix-green.jpg" alt="Gradient usage - Green" />
<br>
<br>

### Gradient - Yellow

<img src="/assets/gradient-mix-yellow.jpg" alt="Gradient usage - Yellow" />
<br>
<br>

### Highlights

Our illustrations use `@white` (#FFFFFF) to pull out details within the object.

### Depth

Illustrations use `@slate` (#333f48) over half of the object in order to add depth.

## Technical bit

### Exporting illustrations for developers

Once you’re illustrations are completed (and signed off!) they need to be made ready for development. Follow these steps to a happy developer:

1. Check your gradients are not multiplied opacity
2. Select the icon and choose Object > Expand appearance
3. Check shapes have been turned to paths. Go to Object > Compound path > Make (you will need to do this for each individual shape separately)
4. When you have completed this use the top menu select File > Export > Export for Screens > press the small cog (see below)

<img src="/assets/illustrations-export.jpg" alt="Exporting illustrations" />
<br>
<br>

Select SVG in the left hand panel > choose Inline Style in the Styling dropdown (see below)

<img src="/assets/illustrations-export-svg.jpg" alt="Exporting illustrations" />
<br>
<br>

## Super Saiyan level

The rendering of illustrations differs among different browsers (I'm looking at you Safari and IE).

<img src="/assets/illustrations-page-source.jpg" alt="View Page Source on Illustration" />
<br>
<br>

<img src="/assets/illustrations-svg-code-hightlight.jpg" alt="SVG in browser inspector" />
<br>
<br>

<img src="/assets/illustrations-svg-block.jpg" alt="Exporting illustrations" />
<br>
<br>

## Importing illustrations into Nucleus
```
Todo: Needs some input from Jon Holt
```
