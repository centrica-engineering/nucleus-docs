---
title: Design tokens
description: Small and mighty
---


## What are design tokens?

Design tokens are a technology agnostic way to create and share reusable variables. They open up a number of possibilities for Nucleus including supporting technologies beyond the web, enabling multiple brand identities and creating a shared design language across the business.

## Why use design tokens in your product?

Every brand has design details that are core to the brand’s identity. These details need to persist across multiple channels and technologies to ensure the brand is easily recognisable and create a consistent brand experience.

Design details are not limited to design foundations such as colours and fonts, component design also plays a part in brand recognition. A common example is the brands primary button style that gets reproduced on websites, apps, emails, social posts, tv adverts and the sides of busses!

Without design tokens each technology has to maintain it's own set of variables and keep pace with the latest brand identity guidelines. Design debt often creeps in and variations in the brand occur.

Utilising design tokens in your product allows Nucleus to accurately share design decisions with you through a common set of technology specific variables. Furthermore, consistent naming conventions allows Nucleus to send you the latest brand changes and reduce the effort needed to implement brand updates. For example if the brand team wants to change the font used for all headings we can update the tokens centrally and you would only need to pull the latest version.

## How they work

The tokens are stored in JSON format and then passed through a tool that converts them into language specific variables that can be used in a variety of technologies. We've chosen [Style Dictionary](https://amzn.github.io/style-dictionary/) to help us manage design tokens.

![Design token creation diagram](https://user-images.githubusercontent.com/10724413/107638686-d2437680-6c67-11eb-9630-b82add6ee716.png)

### Component specifications

To provide a clear guide on how to create a component we have created a named subset of tokens for each component. This means that when developers consume tokens they will not need to be concerned with the values of the tokens, they will only need to ensure that they are using tokens in the right place. Taking this approach leverages one of the more powerful aspects of design tokens as it allows us to update components centrally and enables multibranding functionality.

In the following example we can alter specification without needing to edit the css or javascript files:

#### Design token specification

```json
"my-component" {
  "background-color": { "value": "#FAFAFA" },
  "color": { "value": "#333" },
  "border": {
    "color": { "value": "#333" },
    "width": { "value": "2px" },
    "style": { "value": "dashed" }
  }
}
```

#### Consuming tokens in less

```css
@import 'tokens/less/ns-tokens.less';

.my-component {
  background-color: @ns-my-component-background-color;
  color: @ns-my-component-background-color;
  border-color: @ns-my-component-border-color;
  border-width: @ns-my-component-border-width;
  border-style: @ns-my-component-border-style;
}
```

#### Consuming tokens in javascript

```js
import { MY_COMPONENT_BACKGROUND_COLOR, MY_COMPONENT_COLOR, MY_COMPONENT_BORDER_COLOR, MY_COMPONENT_BORDER_WIDTH, MY_COMPONENT_BORDER_STYLE } from 'tokens/es6/ns-tokens';

const component = document.querySelector('.my-component');

const styles = {
  background-color: MY_COMPONENT_BACKGROUND_COLOR,
  color: MY_COMPONENT_COLOR,
  border-color: MY_COMPONENT_BORDER_COLOR,
  border-width: MY_COMPONENT_BORDER_WIDTH,
  border-style: MY_COMPONENT_BORDER_STYLE
};

Object.assign(component.style, styles);
```

### Multibranding

As the consuming products are not worried about the token values and are only concerned about the component specification, we can switch the specification values using another brands' visual identity.

#### Brand colour pallette

```json
"brand" {
  "colour": {
    "primary": { "value": "#AAA" },
    "secondary": { "value": "#333" }
  },
  "border": {
    "style": { "value": "solid" },
    "width": { "value": "1px" }
  }
}
```

#### Brand agnostic token specification

Brand tokens can be shared between specification attributes - in this example `colour.secondary.value` is used for both the text and border colours.

```json
"my-component" {
  "background-color": { brand.colour.primary.value },
  "color": { brand.colour.secondary.value },
  "border": {
    "color": { brand.colour.secondary.value },
    "width": { brand.border.width.value },
    "style": { brand.border.style.value }
  }
}
```

## Supported technologies

We supply design tokens for the following technologies:


* JSON
* Javascript (es6 and modules)
* Less

Other technologies can be added if required.

## Naming conventions

* Namespaced with "ns" to differentiate from other variables within consuming applications
* Tokens named after the attribute to style not their purpose

## How to consume

Design tokens are available as an alpha release. Please get in touch if you would like to use design tokens in your product.
