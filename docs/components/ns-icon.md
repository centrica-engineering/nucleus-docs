---
description: Atom | Icon component.
---

# ns-icon

## Introduction

> Icons are visual symbols used to represent functions, products and services.

Icons provide clarity to users reducing the cognitive load. Icons always supplement a single line of text and are not treated as a description. They are solid or outline a single colour.

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Use icons within the component | Create your own icons |
| Use this when building new Nucleus components | Add them as content |
| Use them in colours | Use a mix of outline and solid icons |
| Keep them small |  |

### Considerations of best practices

* Icons can be used as navigational elements as solid or outline single colour.
* If you want to use larger iconography have a look at ns-illustration.
* Solid icons are the default and are the preferred choice as they are quicker to recognise.
* If you want to have perceived more detail then outline icons can be used.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-icon--gas).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-icon" caption="" %}

```markup
<ns-icon type="gas"></ns-icon>
```

## Component relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ✅ Yes -  `ns-cta` `ns-expander` `ns-inputter` `ns-tab` `ns-expander` |
| **What layout classes can be used?**  | None |

## Specification

| Attribute    | Type                | Default   | Options   | Description |
| :--- | :--- | :--- | :--- | :--- |
| `size`    | `number`   | `''` | `''`, `1`, `2`, `3`, `4`, `5` | Changes the size of the icon, with 1 being the smallest. |
| `type` | `string`            | `arrow` |`appliance`, `appliance-outline`, `appliance-solid`, `arrow`, `arrow-left`, `arrow-right`, `bill`, `bill-outline`, `bill-solid`, `boiler` , `boiler-outline`, `boiler-solid`, `chevron`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `cross`, `download`, `electricity`, `electricity-outline`, `electricity-solid`, `gas`, `gas-outline`, `gas-solid`, `hive`, `home`, `home-outline`,`home-solid`, `loading,meter`, `meter-outline`, `meter-solid`, `minus`, `plus`, `protect`, `protect-outline`, `protect-solid`, `rewards`, `rewards-outline`, `rewards-solid`, `settings`, `tick`, `warning ` See [Icon component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--appliance) | Picks the icon that is wanted to be shown. |

## Specification notes

### Type

* Functional icons like 'arrow' only have one version while products and services like 'gas' have an outline and solid versions where solid is the default

### Size

* If you pass an empty size the icon will fill the parent element


## Creating new icons

If you are looking to create a new icon then please check there is not something similar already in use. If there is no suitable icon then you should let us know and we can look at creating it for the design system.

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

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-icon]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-icon]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-cta](https://docs.britishgas.design/components/ns-cta).
* [How to create icons guide](https://docs.britishgas.design/how-to/creating-icons).
* Guiding Customers with our icons and the difference between icons and illustrations in Brand Guidelines.
* If you wish to have us consider adding a new icon to the library please consult Brand Visual Identity managers.
