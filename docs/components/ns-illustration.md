---
description: Atom | Illustration component.
---

# ns-illustration

## Introduction

> Illustrations are visual symbols used to bring the warmth of British Gas brand and personality to the website.

Illustrations simplify products and services to users in a friendly manner. Illustrations always accompany content.

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Use them to convey depth | Make the illustrations small |
|  | Use on their own as the primary visual element |

### Considerations of best practices

* List of when to use which illustration (need to talk to Will about it).

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--gas).

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-illustration" caption="" %}

```markup
<ns-illustration type="gas"></ns-illustration>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** |  ✅ Yes -  `ns-lockup` `ns-card` |
| **What layout classes can be used?**  | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type`| `string`  | `gas` | `gas`, `bulb`, `boiler`, `protect`, `home`, `clock`, `oven`, `tap`, `appliance`[Illustration component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-illustrations--appliance) | Picks the illustration that is wanted to be shown. |
| `size` | `number` | `''` | `''`, `1`, `2`, `3`, `4`, `5` | Changes the size of the illustration, with 1 being the smallest. |
| `inactive` | `string` | `false` | `true`, `false` | Will grey out the illustration. |

## Specification notes

### Size

* If you pass an empty size the icon will fill the parent element

### Inactive

* This is for decorative purporses only (does not work in IE11).

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-illustration]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-illustration]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* Creating illustrations [guide](https://docs.britishgas.design/how-to/creating-illustrations).
* Exporting illustrations SVG in Sketch [https://github.com/ConnectedHomes/nucleus/issues/670](https://github.com/ConnectedHomes/nucleus/issues/670).
* Creating an engaging experience through illustrations and the difference between icons and illustrations in [Brand Guidlines](https://centrica.frontify.com/d/6307mViOlfHB/visual-identity#/illustrations/creating-an-engaging-experience-through-illustration).
* If you wish to have us consider adding a new illustrations to the library please consult Brand Visual Identity managers.
