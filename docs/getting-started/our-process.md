---
description: Understanding our processes
---

# Our process

> Explaining how we do what we do.

![Process timeline for changes to Nucleus](https://user-images.githubusercontent.com/7101754/78082493-0f35b000-73ab-11ea-81ed-97970477736d.jpg)

This diagram shows the timeline of our process. When we introduce a change to our design system it should follow these steps. It does not mean that every change will take as long in each step as another change. Sometimes, for example, a change can be quite _simple_ or _obvious_ and therefore it might need a quick community validation without a workshop. Other times it might need several workshops, a whole round of communication with the community and several iterations of discovery.

By following this process we will find requirements and issues earlier, allowing the design system to evolve effectively and the changes to be robust and future proof.

## Request for change (RFC)

This is where the gaps in the design system are identified.

### Creating an RFC

Any one of our stakeholders can create an RFC in our Github repository as an [RFC issue](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=RFC%2C+draft&template=b--request-a-change.md&title=%5BRFC%5D+Title+of+the+request).

An RFC should only be raised after all other possibilities have been extinguished with what is currently available in the design system.

### Community involvement

RFCs are to be shared with our stakeholders and we actively encourage everyone to comment and get involved if they believe this change will affect them. Our stakeholders include all product team members, leadership, search engine optimisation, brand, copywriters, legal and more.

### Workshops

Collaborating through workshops is best done when there is a large community interested in the proposed change or the change has complexities. Workshops identify stakeholder priorities and provide the opportunity to deep dive into related problems and share any relevant experience, research and business logic.

### Identifying the problem

Once enough community involvement has occurred, a pattern to the problem will hopefully appear. This is to be added to the RFC articulating the problem the team is interested in solving.

## Discovery

This is where research into the solution is conducted.

### Creating a story ticket with scope

A story ticket is created once the problem has been identified, loosely outlining the scope we will tackle. If the requested change is prioritised, then this ticket will be picked up by the team. A story ticket is to be based on deliverables, if multiple things are needed then multiple story tickets are to be created.

### Testing

This is where we find out if our potential solutions are the right way to go. This can be done in a variety of ways. Asking  teams to A/B test the idea, perform some guerrilla testing, introduce the solution into other teams user testing sessions or to create our own user testing.

### Refining the ticket

A designer and engineer can now team up together to do the bulk of the discovery, feeding back to the team through open communication and official refinement sessions. This part of the process will produce a firmly defined scope.

### Defining the outcome

Following the [vanilla first approach](https://docs.britishgas.design/how-to/vanilla-first) to the problem identified in the story will help understand where the starting point of the solution is. Which, in turn will help define the outcome of the ticket.

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
