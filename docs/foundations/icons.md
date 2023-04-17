---
title: Icons
description: Nucleus icon suite.
---

## Why we use icons

Icons are used within our design system to represent an object or action visually to our users. Helping customers visually navigate our world. Done well, icons should help provide clarity to users reducing the cognitive load required to complete a task.

They are functional, rather than decorative and should be used sparingly, only within the parameters they were created for.

A list of all the icons that are available in Nucleus can be found on [storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/components-ns-icon--all-icons)

## How we use icons

We use icons in number of different ways to convey meaning:

* Signposting and navigation.
* Navigational or informational signposts for content.
* Illustrates content with a simple and clear visual.
* Used by themselves at large size or smaller within a roundel.

If you are using the icon at a very large size to engage and visual impact, consider if an illustration might be better.

## Categories

### Clarifying

Used as a visual aid for some functions, categories or actions. These are not used as a direct element of interaction themselves but can help to signify and support an action. It is recommended that these aren't used in isolation and should be accompanied by copy to add context.

![Nucleus icons](images/icons/clarifying.webp)

### Functional

Used to show where an action needs to be taken. This includes components like buttons, controls. For instance a button might include an arrow to give the user an indication of what will happen next or a download icon to show that the user will receive something by pressing it. Functional icons can also be further split into interactive and non-interactive icons.

![Nucleus functional icons](images/icons/functional.webp)

### Logos/marks

We can make use of brand logos and marks when we discuss products and companies. Examples of these may include: British Gas, Hive or Dyno.

![Nucleus logo icons](images/icons/logos-marks.webp)

## Colour

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Start with using BG Cyan or BG Slate | Mix two secondary colours together |
| Use colours that meet WCAG colour contrast ratio requirements on specific coloured backgrounds (mainly achieved automatically by the system) | Use non-conforming contrasts |
| Colour interactive functional icons in Secondary Blue |  |

## Creating new icons

If you are looking to create a new icon then please check there is not something similar already in use. If there is no suitable icon then you should let us know and we can look at creating it for the design system. All new icons and illustrations need to be approved by the brand team.

### Icon creation guidelines

- We make sure that a similar icon is not already in use.
- Use the icon grid to ensure consistency with existing icons.
- We make sure icon works across different sizes.
- We create both solid and outline versions (Solid over outline, unless icon is interactive).
- Consistent stroke thickness based on sizes (At least 2px for stroke to avoid odd resizing issues or using fills with strokes).
- Clean and simple forms using our shapes.
- Flat shapes over 3d forms.
- Rounded corners should make an icon feel friendly, not childish.
- Icon should be one topic, we don't overlay or intersect an icon with another icon.
- Text shouldn't be added to an icon as this will break accessibility.
- Icons are only one colour, but they can be any of our colours.

### Icon grid

We use a grid for icon creation to give consistency across our icons. You should also be considering where your paths sit, to be as close to pixel perfect as possible. Here are examples of the grid and basic shapes to show it's usage:

| Grid | Grid - Vertical | Grid - Horizontal | Grid - Circle |
| :--- | :--- | :--- | :--- |
| ![Grid for creating icons](https://user-images.githubusercontent.com/43471890/62045505-66bcc400-b1fd-11e9-949e-572e2dc40bf8.jpg) | ![Grid with vertical highlight for creating icons](https://user-images.githubusercontent.com/43471890/62050044-6b3aaa00-b208-11e9-8adb-3df5d4c240dd.jpg) | ![Grid with horizontal highlight for creating icons](https://user-images.githubusercontent.com/43471890/62050140-a5a44700-b208-11e9-8bf8-555ec87242a8.jpg) | ![Grid with circle highlight for creating icons](https://user-images.githubusercontent.com/43471890/62050739-c91bc180-b209-11e9-8561-134bd845fb4b.jpg) |

### Sizing

Icons are created using illustrator with a 32px x 32px art-board. This allows scaling both up and down of the icon’s size. The Nucleus Design System scales across different screen sizes meaning elements, including the icon’s scale to retain their visual proportions. We ensure icon works between 16px and 72px.

### SVG best practices

- We use only paths not shapes.
- Paths align to the pixel grid.
- Corners have only 2 points to minimise file size.
- Icon colour is set to black.
- All unnecessary attributes in the SVG document are removed including:
   * `<title>` element.
   * Any `id=””` attributes.
   * All `data-name=””` attributes if they exist.
   * All colour information e.g. `fill="#000000"`.
   * `<style>` and any `classes`.
   * Nested and empty `<g>` (groups).
   
## Related links

* [ns-icon](https://components/ns-icon.md)
