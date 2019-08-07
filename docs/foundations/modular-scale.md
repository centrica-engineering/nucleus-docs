---
description: Introduction to modular scale and how it is implemented in Nucleus.
---

# Modular scale

> The implementation of modular scale simplifies and beautifies our designs.

{% embed url="https://soapbox.wistia.com/videos/v2LAAl5UnT" %}

Scales are everywhere. Most notably in nature where the presence of the golden ratio can be found from the microscopic DNA's double helix to vast spiral galaxies.

[Tim Brown](https://tbrown.org/) describes how we may use modular scale in web design in his 2011 [A List Apart](https://alistapart.com/) article [More meaningful typography](https://alistapart.com/article/more-meaningful-typography/).

Taking this approach and applying it to our Structure, Typography, Spacing and extending into Iconography, Illustrations and further, we are able to define a hierarchy which is beautiful, calculable and concise.

## Viewports

### Scale
**1.5**

We have six [viewports](https://docs.britishgas.design/foundation/viewports), the smallest width being 320px. This is our initial value that all the other viewports are based from.

**320px is 1em**

Then we scale from here in increments of 1.5x as follows:

**320** x 1.5 = **480**  
**480** x 1.5 = **720**  
**720** x 1.5 = **1080**  
**1080** x 1.5 = **1620**  
**1620** x 1.5 = **2430**  

Read more about our [Viewports](https://docs.britishgas.design/foundation/viewports) and see our table of [Nucleus viewport sizes](https://docs.britishgas.design/foundation/viewports).

### Typography

For Typography, we have three multipliers to generate our scales.

**Major Second** = **1.125**  
**Minor Third** = **1.2**  
**Major Third** = **1.25**  

These are applied to our Viewport sizes in the following way:

⚪️ Polo & 🏉 Rugby uses `Major Third`.  
🏑 Hockey & 🏀 Basketball uses `Minor Third`.  
🎾 Tennis & 🔵 Squash uses `Major Second`.

Read more about our [Typography](https://docs.britishgas.design/foundation/typography) and how Modular Scale applies.
