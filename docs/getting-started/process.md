---
description: Understanding our processes
---

# Process

> Explaining how we do what we do

![Process timeline for changes to Nucleus](https://user-images.githubusercontent.com/7101754/78082493-0f35b000-73ab-11ea-81ed-97970477736d.jpg)

This diagram shows the timeline of our process. When we have a change in our design system it should follow this process, but that does not mean that every change will take as long in each section as another change. Sometimes, for example, a change can be quite “simple” or “obvious” and therefore it might need a quick community validation without a workshop. Other times it might need several workshops, a whole round of communication with the community and several iterations of discovery. By following this process you will find requirements and issues earlier, allowing the design system to evolve effectively and the changes to be more future proof.

## Request for change (RFC)

This is where the problems with the design system are found.

### Creating an RFC

Anyone of our stakeholders can create an RFC in our Github repository as an [RFC issue](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=RFC%2C+draft&template=b--request-a-change.md&title=%5BRFC%5D+Title+of+the+request). It should be raised after they have extinguished all other possibilities with using what is currently in the design system.

### Community involvement

RFCs should be shared with our stakeholders and we should actively encourage everyone to comment and get involved if they believe this change will affect them. Our stakeholders include all product team, leadership, SEO, brand, copywriters, legal and more.

### Workshops

This should be done when there is a large community that is interested in this change or the change has complexities. Workshops should identify stakeholders priorities, deep dive into the problems they are facing and share business logic understanding between teams.

### Identifying the problem

Once enough community involvement has occurred, a pattern to the problem should appear. This should be noted in the RFC of the pattern the team is interested in solving.

## Discovery

This is where research into the solution is conducted.

### Creating a story ticket with the scope

A story ticket should be created once the problem has been identified, loosely outlining the scope we will tackle. If the requested change is prioritised, then this ticket will be picked up by the team. A story ticket should be based on deliverables, if multiple things are needed then there should be multiple stories.

### Testing

This is where we find out if our potential solutions are the right way to go. This can be getting teams to a/b test an idea, do gorilla testing, get involved with other teams user testing or to create our own user testing.

### Refining the ticket

A designer and engineer should team up together to do the bulk of the discovery, feeding back to the team through refinements. From this they should be able to firmly define the scope.

### Defining the outcome

Following the [vanilla first approach](https://docs.britishgas.design/how-to/vanilla-first) against the problem will help understand where a solution should start from, which will help define the outcome of the ticket.

### Delivering the dev spec and discovery design

The discovery work should be shared out in the story ticket and an initial development specification for the change should be outlined. This update to the story ticket should also be announced in the RFC.

## Design

From here a more finessed and detailed design will be built, with more decisions about branding, interactions and viewport. Time will be spent looking at how these changes interact with all parts of the design system and copy. This should follow the digital design process and code of conduct.

## Development
The creation of the changes to the design system will now begin and will be delivered through development. At all times this should follow our digital development process and code of conduct.

## Documentation

Taking all the learning from each part of the process and document where necessary. Changes that have been built will also need to be added or updated to the documentation. Documentation is a team effort and relies on everyone reviewing and giving feedback.

## Testing

What has changed should be reflected in our tests. Checking that our changes haven’t had an impact to accessibility, browser/device compatibility or user experience. Testing should be completed with functional, regression, BDD and visual regression tests.

## Releasing

When we feel confident with our changes, we should release, following [semver](https://semver.org/). We should then shout out about our changes throughout our channels to let our community know and to get feedback from usage. Don’t forget to take the time to congratulate ourselves for strengthening the design system!
