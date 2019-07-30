# Viewports

It's important to understand the foundational responsive behaviour of the layouts required, for all device types and sizes.

The narrowest width of a smartphone tends to be 320px and the widest desktop can be in excess of 2560px. A difference which equates to a 700% increase in width!

## Sizes

Using a modular scale of 2:3 (1.5) we set the base of 16px to equal 1em, then calculate the em value of the viewport widths and introducing the metaphor of sports courts.

Taking a device independent approach to deciding on the widths to design to in order to illustrate how a design could adapt at different sizes, we start small and use a modular scale of 1.5 resulting:

| Size | Viewport | Column | Offset |
| :--- | :--- | :--- | :--- |
| 🔵 Squash court | 320px (20em) | 288px | 16px |
| 🎾 Tennis court | 480px (30em) | 432px | 24px |
| 🏀 Basketball court | 720px (45em) | 648px | 36px |
| 🏑 Hockey pitch | 1080px (67.5em) | 972px | 54px |
| 🏉 Rugby pitch | 1620px (101.25em) | 1458px | 81px |
| 👕 Polo field | 2430px (151.875em) | 1600px * | 415px |

## Viewport

Using a modular scale of 1:5, starting at the narrowest (popular) smartphone viewport of 320px width and maintaining a fluid approach using one single percentage value across all viewports (90%) to provide us with the Column and Offset.

### Column

Our Column width is determined by setting the left and right Offset to be 5%.
* The maximum width of our Column is 1600px.

### Offset

The offset refers to the space to the left and right of the Column taking up 5% of the width of the viewport each side. At 320px the Offset is 16px.

### Our Sketch library

Getting the library  
[Sketch Library - GitHub Wiki](https://github.com/ConnectedHomes/centrica-ux/wiki)
