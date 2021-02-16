---
title: Modular scale
description: Introduction to modular scale and how it is implemented in Nucleus.
---

> The implementation of modular scale simplifies and beautifies our designs.

<figure style={{ padding:'56.25% 0 0 0', position:'relative' }}>
  <div style={{ height:'100%',left:'0',position:'absolute',top:'0',width:'100%' }}>
    <iframe src="https://fast.wistia.net/embed/iframe/y0qt3chnlj?seo=false&videoFoam=true" title="Nucleus Design System - Modular Scale Video" allow="autoplay; fullscreen" allowtransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen width="100%" height="100%"></iframe>
  </div>
</figure>

Scales are everywhere. Most notably in nature where the presence of the golden ratio can be found from the microscopic DNA's double helix to vast spiral galaxies.

[Tim Brown](https://tbrown.org/) describes how we may use modular scale in web design in his 2011 [A List Apart](https://alistapart.com/) article [More meaningful typography](https://alistapart.com/article/more-meaningful-typography/).

Taking this approach and applying it to our Structure, Typography, Spacing and extending into Iconography, Illustrations and further, we are able to define a hierarchy which is beautiful, calculable and concise.

## Viewports

### Scale

**1.5**

We have six [viewports](foundations/viewports.md), the smallest width being 320px. This is our initial value that all the other viewports are based from.

We use the formula _320 * 1.5<sup>x</sup>_  to calculate the sizes

Then we scale from here in increments of 1.5x as follows:

_320 * 1.5<sup>1</sup>_  = **480**  
_320 * 1.5<sup>2</sup>_  = **720**  
_320 * 1.5<sup>3</sup>_ = **1080**  
_320 * 1.5<sup>3.4</sup>_ = **1270**  
_320 * 1.5<sup>4</sup>_  = **1620**  
_320 * 1.5<sup>5</sup>_  = **2430**

Read more about our [Viewports](foundations/viewports.md) and see our table of [Nucleus viewport sizes](foundations/viewports.md).

### Typography

For Typography, we have three multipliers to generate our scales.

**Major Second** = **1.125**  
**Minor Third** = **1.2**  
**Major Third** = **1.25**

These are applied to our Viewport sizes in the following way:

🔵 Squash & 🎾 Tennis uses `Major Second`.
🏀 Basketball, 🏑 Hockey & ⚽ Football & uses `Minor Third`.  
🏉 Rugby & ⚪️ Polo uses `Major Third`.  

Read more about our [Typography](foundations/typography.md) and how Modular Scale applies.

