---
description: Atom | Column component.
---

import { Storybook } from '../../includes/storybook.js'

## Introduction

> Brings flexibility and control to responsive layouts.

Allows the user interface to be split into multiple columns by defining the number of columns required at specific viewports.

Note: This is used for arranging components and content **not** multiple columns like you would see in a newspaper or magazine.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Pick the number of columns to complement the content | Have complicated column structures, try to simplify your content first |
| Test the full responsive range of your page's and not just the defined viewports | Use in components that are too small to support multiple components |
| Wrap in a `splish` or `splash` when used with `ns-panel` | Use to put components in columns that are designed to be standalone or stack (e.g multiple ns-highlighers or ns-accordions) |
| Try to stick to one column as much as possible | Use to create newspaper style columns and layouts |
| Try to avoid having widowed items | |
| Use multiple columns when the user needs to compare items | |
| Use the ratio options to add side panels | | 
| When using ratios put the primary page content in the largest column | |

### Considerations of best practice

Some components (e.g. `ns-cta`) have a minimum width, care should be taken so that these components don't overflow the columns.

## Usage

<Storybook story="ns-column--standard"></Storybook>

## Component relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ✅ Yes  |
| **Does it live inside other components?** | ✅ Yes |
| **What layout classes can be used?** | `splish`, `splash`, `splosh` |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `basketballcourt` | `number` | `1` |  `1, 2` | The number of columns to show at the Basketball Court viewport |
| `hockeypitch` | `number` | `inherit` |  `1, 2, 3, 1:2, 2:1` | The number of columns to show at the Hockey Pitch viewport |
| `rugbypitch` | `number` | `inherit` |  `1, 2, 3, 4, 1:2, 2:1, 1:3, 3:1` | The number of columns to show at the Rugby Pitch viewport |
| `footballpitch` | `number` | `inherit` |  `1, 2, 3, 4, 1:2, 2:1, 1:3, 3:1` | The number of columns to show at the Football Pitch viewport |
| `polofield` | `number` | `inherit` |  `1, 2, 3, 4, 1:2, 2:1, 1:3, 3:1` | The number of columns to show at the Polo Field viewport |

## Specification notes

Each value is applied at that viewpoint and each larger viewport unless the larger viewport has a column value applied.

### Examples

#### Setting 2 columns for every viewport larger than basketball court

```markup
    <ns-column basketballcourt="2" class="splash"></ns-column>
```

#### Going from 1 column to 3 columns at a larger viewport

```markup
    <ns-column hockeypitch="3" class="splish"></ns-column>
```

#### Going from 1 to 2 columns and then 4 columns

```markup
    <ns-column hockeypitch="2" rugbypitch="4" class="splash"></ns-column>
```

#### Going from 2 columns, to 4 columns, and back down to 3 columns

```markup
    <ns-column basketballcourt="2" rugbypitch="4" polofield="3" class="splash"></ns-column>
```

#### Going from 1 columns to 2:1 columns and then 3:1 columns

```markup
    <ns-column hockeypitch="2:1" polofield="3:1"></ns-column>
```

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-column]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-column]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [Viewports](foundations/viewports.md)
