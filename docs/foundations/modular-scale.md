---
title: Modular scale
description: Introduction to modular scale and how it is implemented in Nucleus.
---

> The implementation of modular scale simplifies and beautifies our designs.

{% embed url="https://soapbox.wistia.com/videos/v2LAAl5UnT" caption="" %}

Scales are everywhere. Most notably in nature where the presence of the golden ratio can be found from the microscopic DNA's double helix to vast spiral galaxies.

[Tim Brown](https://tbrown.org/) describes how we may use modular scale in web design in his 2011 [A List Apart](https://alistapart.com/) article [More meaningful typography](https://alistapart.com/article/more-meaningful-typography/).

Taking this approach and applying it to our Structure, Typography, Spacing and extending into Iconography, Illustrations and further, we are able to define a hierarchy which is beautiful, calculable and concise.

## Viewports

### Scale

**1.5**

We have six [viewports](https://docs.britishgas.design/foundation/viewports), the smallest width being 320px. This is our initial value that all the other viewports are based from.

We use the formula _320 * 1.5<sup>x</sup>_  to calculate the sizes

Then we scale from here in increments of 1.5x as follows:

_320 * 1.5<sup>1</sup>_  = **480**  
_320 * 1.5<sup>2</sup>_  = **720**  
_320 * 1.5<sup>3</sup>_ = **1080**  
_320 * 1.5<sup>3.4</sup>_ = **1270**  
_320 * 1.5<sup>4</sup>_  = **1620**  
_320 * 1.5<sup>5</sup>_  = **2430**

Read more about our [Viewports](https://docs.britishgas.design/foundation/viewports) and see our table of [Nucleus viewport sizes](https://docs.britishgas.design/foundation/viewports).

### Typography

For Typography, we have three multipliers to generate our scales.

**Major Second** = **1.125**  
**Minor Third** = **1.2**  
**Major Third** = **1.25**

These are applied to our Viewport sizes in the following way:

⚪️ Polo & 🏉 Rugby uses `Major Third`.  
🏑 Hockey, ⚽ Football & 🏀 Basketball uses `Minor Third`.  
🎾 Tennis & 🔵 Squash uses `Major Second`.

Read more about our [Typography](https://docs.britishgas.design/foundation/typography) and how Modular Scale applies.

