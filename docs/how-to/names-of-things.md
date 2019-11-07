---
description: How and why we name all the things
---

# Names of things

## Introduction

> This is a living document describing the names we have given to things. Why they're called what they're called.

## Metaphor

In some cases where we have a robust metaphor we are able to take a unique approach to naming, a name of this type would be the only instance of it’s use. An example of this is in the names we have for our Viewports.

## Components

Each of our components has a `name`. There maybe `variants` of a component which is reflected as a suffix to the component name, and any variant may have a set of `options`. The options are detailed in the documentation.

## Namespacing

Producing names for our custom elements we prefix with `ns-` the result of which is the following convention `<ns-element-name>`

An example of one of our custom elements is `<ns-landmark>`

[https://www.webcomponents.org/introduction](https://www.webcomponents.org/introduction)

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Place the name as a prefix followed by a modifier using a hyphen to separate the two. `name-thing` `name-stuff` | Place the name as a suffix, it confuses the convention. `thing-name` `stuff-name` |
| Adding a third part to describe in more detail different things. `name-thing-bob` `name-thing-dod` `name-thing-qoq` `name-thing-pop` | Name a thing by what it could represent ✏️ `icon-edit` |
| Use a descriptive name for the content of the icon. This is clearly a pencil ✏️ `icon-pencil` |  |

## Given names

### Viewports

Using a metaphor of popular sports games and the physical dimensions of the area of play to infer the width of the browser window.

```markup
⚫️ squash-court
🎾 tennis-court
🏀 basketball-court
🏑 hockey-pitch
🏉 rugby-pitch
👕 polo-field
```

## Headings

Using the hierarchy of chess pieces

```markup
♔ king
♕ queen
♗ bishop
♘ knight
♖ rook
♙ pawn
```

## Paragraphs

Our paragraph styles lack a nice naming convention.

```markup
p-large
p-feature
p-normal
p-small
p-caption
```

We experimented with a 'pet' analogy:

```markup
🐶 dog
🐱 cat
🐰 rabbit
🐹 hamster
🐭 mouse
```

Alternative animal 'naming' convention suggestions:

```markup
🐯 tiger
🐼 panda
🐶 dog
🐰 rabbit
🐭 mouse
```

```markup
🦁 lion
🐯 tiger
🐺 wolf
🦊 fox
🐱 cat
```

### Call to actions

These names we inherited from the original brand concept and don't follow a metaphor.

```markup
direct
text
```

### Icons

```markup
appliance
appliance-outline
appliance-solid
arrow
arrow-left
arrow-right
bill
bill-outline
bill-solid
boiler
boiler-outline
boiler-solid
chevron
chevron-down
chevron-left
chevron-right
chevron-up
cross
download
electricity
electricity-outline
electricity-solid
gas
gas-outline
gas-solid
hive
home
home-outline
home-solid
loading
meter
meter-outline
meter-solid
minus
plus
protect
protect-outline
protect-solid
settings
tick
warning
```

### Illustrations

```markup
appliance
boiler
bulb
clock
gas
home
oven
protect
```

### Colours

Our colours are named with common colour names and have a suffix for the intensity.

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Call this colour 🔷 blue-light | Call this colour 🔷 sky-blue |

**Brand palette**

```css
@slate: #333F48;
@white: #FFFFFF;
@cyan: #0099FF;

@red: #D50032;
@red-dark: #862633;
@orange: #FF7A00;
@yellow: #FFC72C;
@green-light: #B4E100;
@green: #009639;
@green-dark: #006F44;
@blue: #005EB8;
@blue-dark: #003C71;

@grey-light: #F7F7F7;
@grey: #C8C9C7;
@grey-dark: #888B8D;
```

**System palette**

```css
@info: #209CEE;
@success: #23D160;
@warning: #FFDD57;
@danger: #FF3860;
```

### Spacing

Spacing is directly related to our typography and infers its sizing using modular scale. We have not yet implemented a naming convention for spacing, in our LESS we use our modular scale mixin which currently looks like:

```css
padding-top: .ms(6, @ratio: @minor-third)[@result];
```

In this example we have a `medium` space across three viewports:

```css
.responsive-min(@squash-court, {
  padding: .ms(6, @ratio: @major-second)[@result];
});

.responsive-min(@basketball-court, {
  padding: .ms(6, @ratio: @minor-third)[@result];
});

.responsive-min(@hockey-pitch, {
  padding: .ms(6, @ratio: @major-third)[@result];
});
```

Each viewport will automatically adjust the dimensions of each of these sizes.

* A `large` space on `hockey-pitch` will measure `2.68555em`
* A `large` space on `squash-court` will measure `1.74023em`

An example of a collection of names given to space (if we were to need 7!)

```markup
space-vast
space-huge
space-large
space-medium
space-small
space-tiny
space-nano
```

### Shadows

Our shadows currently have a strange naming convention

```markup
shadow-shallow
shadow-deep
shadow-far
```

Changing the names of our shadows is open to suggestions.

**Suggestion**

```markup
shadow-midday
shadow-afternoon
shadow-evening
```

### Lozenges

The names of these are very much incomplete. This technique is inconsistent with our other naming styles.

This is based on `straight:rounded`

```markup
1:3
3:1
```

Alongside the concept of 'which corner(s)' are rounded, there are associated corner sizes to consider depending on how much of the percentage of the viewport the lozenge width consumes.

### Cards

We currently have the following name given to the variants of our cards.

There has been a metaphor of `signs` and `signposts` discussed in the past where a `sign` is a set of cards containing information and a `signpost` is a set of cards that contain at least one a call to action.

```markup
section
support
flat
```

### Structure

We refer to `structure` instead of `grid`.

Structure is built with CSS Grid and utilises fraction `fr` units.

### Layout

Our `layout`'s are contained within a `panel`, we can include more than one layout in a panel.

```markup
splish
splash
```

The `splish` layout is exclusively to contain three 'section cards'

For the Rewards section on the Homepage we included a class of `malcolm` to hide the confetti at narrow viewports. This approach is unique and has proven to be problematic.

### Page types

Currently we use `Hub` and `Sub-hub` to refer to two types of brochure type pages.

These are also referred to across the business as their position in the information architecture: `Level 0`, `Level 1`, `Level 2` (where `Level 0` and `Level 1` currently use the same page template)

Oli produced a metaphor of a shop to describe the different page types, it would be worth revisiting this to see if it's suitable.

At this point we're not using a 'templating' approach to constructing pages. We have any number of `panels` that are placed together to build a page.

Additional page types will include those that are part of a journey. Some maybe repeatable across many different journeys e.g. 'Confirmation page' there maybe unique page types for specific journeys e.g. 'My Account page'

### Lists

We use three different types of lists

```markup
ul-bullet
ul-ticked
ol-numbered
```

### Gradients

We haven't produced names for our gradients. However, we have included them in our decorations.

**Suggestion**

Use the convention of the first colour (top) of the gradient as part of the name.

`decoration-firstcolour`

```markup
decoration-yellow
decoration-cyan
decoration-green-light
decoration-grey-light
decoration-blue
```

### Decoration

Decorations can be applied to our Panels We have two types of decoration, Mask and Circle

**Mask**

A mask can be applied to the top or the bottom of a panel.

```markup
invert-bridge
invert-concave
invert-convex
invert-ramp
```

These masks are combined in pairs to produce a shape. The names we have given them have been inherited by one of the masks, and therefore confuse matters.

If we place a 'mask' decoration on the panel at the top or bottom of our page the top or bottom mask will be removed.

```markup
invert-concave-cyan
invert-concave-grey-light
invert-concave-green-light
invert-concave-yellow
invert-concave-blue
invert-bridge-cyan
invert-bridge-grey-light
invert-bridge-green-light
invert-bridge-yellow
invert-bridge-blue
```

**Circle**

A circle can be applied to the left or the right of a panel These are currently named `circle-firstcolor`

```markup
circle-yellow
circle-cyan
circle-green-light
circle-grey-light
circle-blue
```

### Name our Releases

We could name our releases. Take a look at how Ionic name theirs.

[https://ionicframework.com/docs/release-notes](https://ionicframework.com/docs/release-notes)

Refer to Apple's MacOS, Andriod and others for examples...

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github](https://github.com/ConnectedHomes/nucleus-docs/issues/new?assignees=&labels=Bug&title=[names-of-things]). [†]

[†] This can only be accessed from approved Github accounts, please make sure you are logged in to access.

