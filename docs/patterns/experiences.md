---
description: Experience patterns.
---

# Introduction

## What is the difference between a component and an experience pattern?

| Components | Experience patterns |
| :---- | :----|
| Can be an atom, molecule or organism. | Built using Nucleus components and foundations. |
| Can have it's own custom styles. | Can't have any custom styles. |
| Does not hold any content. | Can hold content. |
| Does not perform any logic or UX. | Can perform some logic or UX. |
| Built to serve lots of variations. | Built for a very specific purpose. |
|  | Handle complex data that is passed down to it. |

## How can we tell?

Taking marketing consent as an example. This is built up of typography such as paragraphs, headings, links, and components such as checkboxes and `ns-inputter`.

If it was just this then we would raise an RFC and see if there are other uses for this pattern to create a component. However, marketing consent requires legal copy to be compliant with GDPR, only specific options to be contacted and most journey's require it. Therefore, this is an experience pattern.

Now an RFC can still be raised to see if this pattern is used elsewhere. Journeys might be having a similar pattern, such as for how to contact your engineer.

From the RFC we find that each journey want different variations of how to contact your engineer, such as with radio buttons, checkboxes. Also different engineers would require different copy for, therefore this can't be an experience pattern, but it can be a component. Then we can create the component through our normal process.

The marketing preference experience can then be updated to use the new component.

## What if there is an overlap?

There can potentially feel like there is an overlap and can be difficult to see a difference.

Sometimes we might be looking at an experience pattern, but it requires new components to be built.

The best question to ask is:

> Are you creating something new that is not seen in Nucleus?

If so, then it will have to start off at creating those components.
