---
description: Molecule | Content component.
---

import { StorybookStory } from '../../includes/storybook-story.js'
import { ComponentPlacement } from '../../includes/component-placement.js'
import { PageFooter } from '../../includes/page-footer.js'

## Introduction

> ns-content is used to display typography and media.

`ns-content` is used inside other components and has been created to help add consistency to typography styling, and to improve how typography interacts with other components.

## Content guidance

We do not currently have content guidance as this will change depending on the context in which it's being used.

## Best practice

| 💚 Do's | 💔 Dont's |
| :--- | :--- |
| Use clean html | Use additional `<div>` tags to wrap content as this will break the styling |
| Set the spacing attribute to compliment the content it contains | Use expanders outside of ns-accordion |

## Usage

<StorybookStory story="deprecated-ns-content--standard"></StorybookStory>

### Using ns-image and ns-video

Both `ns-image` and `ns-video` need to be wrapped in a `<figure>` element

```html
<ns-content>
  <figure>
    <ns-image src="image/url.png" ratio="16:9" alt="Description about the image"></ns-image>
    <figcaption>Further information about the image e.g. source</figcaption>
  </figure>
</ns-content>
```

## Component placement

<ComponentPlacement component="ns-content" parentComponents="ns-article,ns-column,ns-expander,ns-form,ns-panel"></ComponentPlacement>

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `spacing` | `string` | 'normal' | 'compact','cosy','normal','loose' | The space between the elements |

| Slots | Type |
| :--- | :--- |
| anonymous | `h1 - h6`, `p`, `ul`, `ol`, `figure`, `ns-accordion`, `ns-cta`, `ns-table`, `ns-standout` |

### Specification notes

#### Anonymous children

To display correctly, `ns-content` relies on clean HTML in the anonymous slot. Using additional components or html elements not listed in the specification will break the styling and will be susceptible to breaking when the component is updated in future releases.

#### Spacing options

| Spacing value | Space between elements | 
| :--- | :--- |
| compact | 0.25em|
| cozy | 0.5em|
| normal | 1em|
| compact | 1.5em|

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-content]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-content]).

<PageFooter></PageFooter>

## Related links

* [ns-article](components/ns-article.md)
