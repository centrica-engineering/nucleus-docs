---
title: Vanilla first
description: Vanilla first thinking
---

# Be vanilla first

> It's a mindset, an undercurrent supporting our process.

## What is vanilla first?

When it comes to ice cream; vanilla is a stand out success. It may not have the complexity of mint choc chip, or the extravagance of Ferrero Rocher, but its simplicity is what makes it so extraordinary.

Its modest nature makes vanilla so popular; it can complement other flavours and satisfy multiple needs. Customise vanilla and you begin to gratify fewer needs.

Applying this analogy to creating solutions - a vanilla component should solve a problem with the simplest solution. Every iteration of a feature or component should use this approach first.

## Why we do it

When we build upon our design system we want to make sure that it's as future-proof as possible.

If we were to change our brand, adjust our styles or even introduce additional brands we still must have a design system that contains solutions that fulfil the needs they are intended to solve.

We want to make sure that our components solve common problems that can be reused and grow to tackle variations of that problem.

## How to think vanilla first?

Peel back the layers to reveal the heart of the solution.

### Feedback

First and foremost, it's vital to engage in continuous open conversation. It's the essence of engaging in all the expertise and experience we have amongst our community.

### Research

First identify the problem! This is done though the RFC process, everyone is encouraged to comment and get involved.

Once we have the big picture of the problem we can begin finding the common themes. Is there a pattern emerging? We should define the scope in the simplest most generic form explaining this problem.

It's natural to look at what other design systems have done, and this is great. We want to build upon other peoples learnings and research. However we must take this with a grain of salt. Design's main ingredient is the context, what works well for one, may not and most likely not for us. For us to build upon others we need to do our own research.

### Design

Think of the minimum viable solution to solve the problem. Distil it a bit further and use that as a starting point. Refer to the [Nucleus principles](getting-started/principles.md) to inform your thinking.

It's important to decipher the requests from our colleagues. Consider the input from every source and perform our own research.

We may receive a request for change that starts out it's life as. "I need the moon on a stick". Someone else may say that they too "Need the moon on a stick". The similarities are obvious at first glance, but we're unsure what phase of the moon each request is referring to. How long is the stick? Does the stick have a handle?

Spread the net as wide as possible to understand the core problem. Shake off all of the influence from designers promoting their solution and ask for relevant research and undertake our own too.

Step away from any bespoke design influences from our brand by removing typography, colour spacing etc. and understand the foundations of the solution.

Grab a piece of paper and a pen or pencil and list the essential requirements acquired by the research.

### Development

As for designers, the same applies for engineers. Step away from our design system and the brand influence. Try things outside our system in a sandbox and work out what can be done with nothing more than the semantics.

In order to produce a robust solution a good starting place is to identify if a native element or a combination of elements will satisfy the requirements. To find documentation and examples of native HTML elements and APIs read the [MDN docs](https://developer.mozilla.org/en-US/).

Understand which of these are fundamental to the solution, which are supporting and which are optional.

Ensure to continue the discussion with everyone who has contributed as it's important to not overlook anything.

Accessibility is of course essential to get right, take some time to understand what is the correct way to present this to a screen reader, in a high contrast environment.

Follow these key points:

* Context
  * Understand all contexts in which this solution will belong.
* Elements and APIs
  * Pick the right native elements and javascript APIs.
* Semantics
  * Ensure it'll fit semantically within all contexts.
* Accessible
  * Accessibility trumps everything.
* Familiar
  * If it's a duck, make sure it looks like a duck and quacks like a duck. 🦆
* Browser compatible
  * Gracefully degrade or make a note of any expected behaviour.
* High contrast
  * When it's displayed in high contrast ensure it performs well.
* Brand
  * Apply the branding and detailed design once the foundation is understood.
* Test
  * Test within every environment which emulates all the contexts discovered earlier.
* Polish
  * Take this opportunity to refine and perfect every aspect of this solution.

## Checklist

If you are feeling stuck and want to know if it is vanilla first see if you can answer these:

* Are you solving one problem at a time?
* Is it accessible?
* Does it build upon native elements or APIs?
* Is it the simplest solution to the problem?
* Can it be built upon in the future with no breaking changes?
* Is it adaptable?
* Can this be reused for other problems, and if so can this be built out to be more general?

## References

* https://softwareengineering.stackexchange.com/questions/301167/what-is-a-vanilla-version-and-what-should-software-have-to-distinguish-it-from
* https://en.wikipedia.org/wiki/Vanilla_software
