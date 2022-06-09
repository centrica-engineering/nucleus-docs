---
title: Viewports
description: Breakpoints of viewports.
---

It's important to understand the foundational responsive behaviour of the layouts required, for all device types and sizes.

The narrowest width of a smartphone tends to be 320px and the widest desktop can be in excess of 2560px. A difference which equates to a 700% increase in width!

## Sizes

Using a modular scale of 2:3 (1.5) and setting our minimum viewport size to be 320px; we use the formula _320 * 1.5<sup>x</sup>_ to calculate our viewports.

Taking a device independent approach to deciding on the widths to design to in order to illustrate how a design could adapt at different sizes, we start small and use a modular scale of 1.5 resulting:


| Size | Viewport | Column | Offset |
| :--- | :--- | :--- | :--- |
| 🔵 Squash court | 320px (_x=0_) | 288px | 16px |
| 🎾 Tennis court | 480px (_x=1_) | 432px | 24px |
| 🏀 Basketball court | 720px (_x=2_) | 648px | 36px |
| 🏑 Hockey pitch | 1080px (_x=3_) | 972px | 54px |
| ⚽ Football pitch | 1270px (_x=3.4_) | 1143px | 63.5px |
| 🏉 Rugby pitch | 1620px (_x=4_) | 1458px | 81px |
| 👕 Polo field | 2430px (_x=5_) | 1600px | 415px |

## Viewport

Using a modular scale of 1:5, starting at the narrowest (popular) smartphone viewport of 320px width and maintaining a fluid approach using one single percentage value across all viewports (90%) to provide us with the Column and Offset.

## Football pitch

As much as possible we like to keep the value of _x_ to whole numbers; this makes the viewport changes predictable and easy to work with.

However, we discovered that the range of hockey pitch was too broad, this meant there were a variety of layout issues, which included squashed and overflowing content at the narrower end (1080px), and stretched components at the wider end (1619px).

Football pitch was introduced to reduce these layout issues.
### Column

Our Column width is determined by setting the left and right Offset to be 5%.

* The maximum width of our Column is 1600px.

### Offset

The offset refers to the space to the left and right of the Column taking up 5% of the width of the viewport each side. At 320px the Offset is 16px.

### Our Sketch library

Our latest Sketch library uses just the two most commonly used viewports (based on our analytics). A set of components have been designed for each, labelled as 'Narrow' and 'Wide' – these equate to 'Squash court' and 'Hockey pitch' sizes. They align with our coded components (as found in Storybook) and as they appear in those viewports.

It means there is a version for mobile and a version for laptop-sized viewports. Limiting the number of viewports in the Sketch library has vastly reduced file size, maintenance effort and the chances of using an incorrectly sized variant of a component for your chosen viewport.

Ultimately, we recommend using our prototyping tool when designing journeys because it uses fully responsive coded components and is better for user testing. The Sketch library is a supplementary tool for trying out new ideas.

Instructions on how to obtain the library –  
[Sketch Library - GitHub Wiki](https://github.com/ConnectedHomes/centrica-ux/wiki)


### Our Figma library

Our current Figma library is based on our Sketch library. Note that there are a few differences that make use of Figma's Autolayout functionality etc. This may evolve and change over the next release to further take advantage of things such as Component Variants properties etc. that will make the process of altering states and the like much slicker.
Unlike the Sketch library, the Figma library is published through Figma instead of it being released on GitHub. Access to this first version is currently by invitation only. Please get in touch on our [Teams channel](https://teams.microsoft.com/l/channel/19%3ac806c8b36aec4218ae469b1d0ff6a4c3%40thread.tacv2/General?groupId=1f9c2411-216b-42a8-9bb0-c51f28ff5071&tenantId=a603898f-7de2-45ba-b67d-d35fb519b2cf) should you want to use it so we can help you get set up.