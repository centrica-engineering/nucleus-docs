---
title: Our process
description: Understanding our processes
---

![How the Nucleus team works](https://user-images.githubusercontent.com/45626534/95470033-37185880-0978-11eb-83cb-79bea6fe1e9a.png)

When we introduce a change to our design system it should go through a number of defined steps. Every change takes a different length of time to complete. Not each step takes the same length of time.

If a change is quite _simple_ or _obvious_ it might need a quick community validation without a workshop. Other times it might need several workshops, a whole round of communication with the community and several iterations of discovery.

By following this process we will find requirements and issues earlier, allowing the design system to evolve effectively and the changes to be robust and future proof.

![Process timeline for changes to Nucleus](https://user-images.githubusercontent.com/7101754/78082493-0f35b000-73ab-11ea-81ed-97970477736d.jpg)


## Request for change (RFC)

This is where the gaps in the design system are identified. We encourage everyone to comment and contribute to an RFC, with enough community involvement a pattern will hopefully appear, we can then identify and articule the problem the team is interested in solving. 

If there is large community interest in the proposed change, or the change has complexities, workshops are an ideal way to bring stakeholders together. They can help identify priorities, provide the opportunity to deep dive into related problems, and share any relevant experience, research and business logic. 

### Creating an RFC

Any one of our stakeholders can create an RFC in our Github repository as an [RFC issue](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=RFC%2C+draft&template=b--request-a-change.md&title=%5BRFC%5D+Title+of+the+request).

An RFC should be raised after all other possibilities have been explored using what is currently available in the design system.


## Discovery

Once the problem has been identified, we begin research into a solution. We loosely outline the scope we will tackle. If the requested change is prioritised, then  it will be picked up by the team. We base our story tickets on deliverables, if multiple things are needed then multiple story tickets are to be created.

### Testing

As this stage testing plays a key part in discovery. Testing potential solutions can be done in a variety of ways:

- A/B or multi-variant tests 
- Remote or lab based usability testing
- Guerrilla testing

### Refining and defining

Design and engineering team up together to do the bulk of the discovery, feeding back to the team. This will produce a firmly defined scope. 

Our [vanilla first approach](community/vanilla-first.md) will help understand where the starting point of the solution is. Which, in turn will help define the outcome of the work.

### Delivering the development spec and discovery

The conclusion of the discovery is added to the story ticket and an initial development specification for the change is outlined. This update to the story ticket is to be announced in the RFC by the team to keep the open conversation going with the community.

## Design

From here a more finessed and detailed design will be created. With more decisions about branding, interactions and responsive behaviour.

Time will be spent looking at how these changes interact with all parts of the design system and the context in which it belongs. This should follow the digital design process and code of conduct.

## Development

The creation of the changes to the design system will now begin and will be delivered through development. At all times we will follow our digital development process and [code of conduct](https://github.com/ConnectedHomes/ember-commons/blob/master/CODE_OF_CONDUCT.md).

## Documentation

Taking all the learning from each part of the process and produce documentation where relevant. Changes that have been introduced during development will need to be added or updated in the documentation. Our documentation is a team effort and it relies on everyone reviewing, contributing and providing feedback.

## Testing

The change that has been made is to be reflected in our tests. We check that our changes haven't had an impact to accessibility, browser and device compatibility or the users experience.

Testing should be completed with functional, regression, behaviour-driven development and visual regression tests.

## Releasing

When we are all confident with our changes, we can release, following [semver](https://semver.org/).

We can now shout out about our changes throughout our channels to inform community and to get feedback from usage.

And we shouldn't forget to take the time to congratulate ourselves for strengthening Nucleus!

## Contributing to Nucleus

If you would like to contribute to the design system, either with a change, or if you're looking for something new, then please read [Contribute to Nucleus](community/contribute-to-nucleus.md).
