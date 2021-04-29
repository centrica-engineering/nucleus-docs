---
description: Atom | Pill component.
---

import { Storybook } from '../../includes/storybook.js'
import { Tokens } from '../../includes/tokens.js'
import { ComponentPlacement } from '../../includes/component-placement.js'

## Introduction

> A pill is a small coloured highlight which can be used to draw a customer's attention to a piece of information.

Pills can be used to highlight a small item of key information to a customer. Within the British Gas experience, they should be used to attract attention to a promotional message or a notification. They should only be used to display a small detail of content and are not intended to contain lengthy or complex information.  

Pills can help to create a subtle sense of urgency or to draw a customer’s attention to the value of a product or service. For example, they can be used to highlight the date that a promotional offer expires, or to feature a gift offer. 


## Content guidance

![Pill](https://user-images.githubusercontent.com/3082819/99961064-aeb61180-2d85-11eb-9444-033a869bfab6.jpg)

| Key | Field type | Guidelines |
| :--- | :--- | :--- |
| A | Icon | Use an icon to support your description. |
| B | Content | Content should be very concise and catchy, ideally between 1 and 4 words. Your content should not run over one line on a `squash-court` viewport. |

**Tip:** Short and snappy content that can be quickly absorbed at a glance has been shown to perform better than longer promotional content.  

## Best practice

| 💚 Do's | 💔 Don'ts |
| :---  | :---  |
| Use solid versions of icons | Use as validation messages |
| Use pills very sparingly, ideally one or two per journey maximum. Less is more. | Create a shouty experience by using pills in multiple places.   |
| Use a `yellow` pill to draw attention to an offer or promotional message. | Create distraction or put undue pressure on customers to purchase unwanted or irrelevant products by overusing urgency elements. |
| Use `red` and `green-light` pills for dashboard notifications.  | Don’t use pills near a text CTA. Pills should not detract attention from your users’ next action. |
| Keep your copy short and simple for maximum impact. | Use in the middle of a sentence |
| Use pills in a component with a direct CTA |  |



### Considerations of best practice

#### Multiple pills

Multiple pills within a journey will create a distracting and overwhelming experience for users. Please read our guidelines below carefully and use this component sparingly. 

#### Colour usage

Colour should be used consistently with pills throughout the customer journey.  

A `yellow` pill is used to draw attention to an offer of promotional message.  

A `red` or `green-light` pill can be used to drawing attention to important customer information or notification. For example, within a dashboard context, red can be used to indicate an ‘expired’ item and green to indicate a ‘new’ item or ‘success’.

## Usage

<Storybook story="components-ns-pill--standard"></Storybook>

## Component placement

<ComponentPlacement component="ns-pill" parentComponents="ns-card,ns-selector,ns-landmark"></ComponentPlacement>

> Note: Work is in progress to add the ns-pill to other components

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `colour` | `string` | `slate` |  `slate`, `yellow`, `red`, `green-light` | The colour of the pill |
| `icon` | `string` |  |  See [`ns-icon` component icon types](https://britishgas.design/components/ns-icon) | The icon to show inside the pill |

## Specification notes

When an icon is supplied the pill will use the media object pattern.

<Tokens component="pill"></Tokens>

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-pill]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-pill]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-card](components/ns-card.md)
* [ns-selector](components/ns-selector.md)
* [ns-landmark](components/ns-landmark.md)
