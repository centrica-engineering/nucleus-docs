---
description: Atom | Column component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> Brings flexibility and control to responsive layouts.

Allows the user interface to be split into multiple columns by defining the number of columns required at specific viewports.

Note: This is used for arranging components and content **not** multiple columns like you would see in a newspaper or magazine.

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Pick the number of columns to complement the content | Have complicated column structures, try to simplify your content first |
| Test the full responsive range of your page's and not just the defined viewports | Use in components that are too small to support multiple components |
| Try to stick to one column as much as possible  | Use to put components in columns that are designed to be standalone or stack (e.g multiple ns-highlighers or ns-accordions) |
| Try to avoid having widowed items | Use to create newspaper style columns and layouts |
| Use multiple columns when the user needs to compare items | |
| Use the ratio options to add side panels | | 
| When using ratios put the primary page content in the largest column | |

### Considerations of best practice

Some components (e.g. `ns-cta`) have a minimum width, care should be taken so that these components don't overflow the columns.

## Usage

<StorybookStory story="components-ns-column--standard"></StorybookStory>

## Component placement

<ComponentPlacement component="ns-column" parentComponents="ns-panel,ns-tabs,ns-expander,ns-inputter"></ComponentPlacement>

> Note: only used in ns-inputter to control the layout of ns-selector

## Specification

| Attribute | Property | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |-------------|
| `basketball-court` | `basketballcourt` | `number` | `1` |  `1, 2` | The number of columns to show at the Basketball Court viewport |
| `hockey-pitch` | `hockeypitch` | `number` | `inherit` |  `1, 2, 3, 1:2, 2:1` | The number of columns to show at the Hockey Pitch viewport |
| `football-pitch` | `footballpitch` | `number` | `inherit` |  `1, 2, 3, 4, 1:2, 2:1, 1:3, 3:1` | The number of columns to show at the Football Pitch viewport |
| `rugby-pitch` | `rugbypitch` | `number` | `inherit` |  `1, 2, 3, 4, 1:2, 2:1, 1:3, 3:1` | The number of columns to show at the Rugby Pitch viewport |
| `polo-field` | `polofield` | `number` | `inherit` |  `1, 2, 3, 4, 1:2, 2:1, 1:3, 3:1` | The number of columns to show at the Polo Field viewport |

## Specification notes

### How do viewports inherit values?
Each value is applied at that viewpoint and each larger viewport unless the larger viewport has a column value applied.

#### Examples

##### Setting 2 columns for every viewport larger than basketball court

```markup
<ns-column basketball-court="2"></ns-column>
```

##### Going from 1 column to 3 columns at a larger viewport

```markup
<ns-column hockey-pitch="3"></ns-column>
```

##### Going from 1 to 2 columns and then 4 columns

```markup
<ns-column hockey-pitch="2" rugby-pitch="4"></ns-column>
```


##### Going from 2 columns, to 4 columns, and back down to 3 columns
```markup
<ns-column basketball-court="2" rugby-pitch="4" polo-field="3"></ns-column>
```

##### Going from 1 columns to 2:1 columns and then 3:1 columns

```markup
<ns-column hockey-pitch="2:1" polo-field="3:1"></ns-column>
```

### How do the 2:1, 3:1 columns work?
If you want to have width ratios that make for a different width for your columns, you can set the value to 1:2, 2:1, 1:3, and 3:1. The first value will apply to the width of all odd child elements, and the second to all child even elements. 

#### Example
If we take the example of a 2:1 column, it essentially means that all odd child elements have a width of 2 and all even child elements have a width of 1.

This is how your markup would look like:
```
<ns-column hockey-pitch="2:1">
  <div>
     this will have width of 2
  </div>
  <div>
     this will have width of 1
  </div>
</ns-column>
```

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-column]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-column]).

<PageFooter></PageFooter>

## Related links

* [Viewports](foundations/viewports.md)
