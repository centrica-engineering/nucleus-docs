---
description: Atom | Price component.
---

# ns-price

## Introduction

> Standardises the way prices are displayed.

Takes an input in pence and outputs it into the correct price format, prepends a pound symbol and adds an optional minus sign for negative prices.

Only works for pound sterling.

## Best practice

| 💚 Do | 💔 Don't |
| :---  | :---  |
| Use for all price values | Use negative letter spacing as this reduces legibility |
| Avoid using the showDecimal option | Use for currencies other than pound sterling |
|  | Use decimal pence values |

### Considerations of best practice

Try to avoid using the showDecimal option - adding extra zeros can make values appear larger than they actually are.

Why pence? Passing values in pence gives the component complete control of the output format. If a new best practice should arise then consumers of the component will not need to make modifications.

If `negative="true"` and  `pence="0"` then the outputted price will not have the minus symbol. i.e. "£0"

Prices of £10000 and higher will include commas. i.e. "£10000" becomes "£10,000" and "£1000000" becomes "£1,000,000". Values of less than £10,000 will not have commas as it can make numbers appear larger than they actually are.

Prices of less than £1 include zero pounds. eg. `pence="1"` becomes "£0.01"

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-price--standard)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-price" caption="" %}

```markup
<ns-price pence"123456"></ns-price>
```

## Component Relationship

| **Relationship**|  |
| :---  | :--- |
| **Does it live in a panel?** | ❌ No |
| **Does it live inside other components?** | ✅ Yes |
| **What layout classes can be used?** | None |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- |-------------|
| `pence` | `string` | `0` | | The value in pence that is to be displayed |
| `showDecimal` | `boolean` | `false` | | Set true to show ".00" when there are whole pound values |
| `negative` | `boolean` | `false` | | Set true to show a minus symbol at the start of the number |

## Specification notes

### pence

Price is passed in as an attribute to prevent the unformatted price being crawled by Google and subsequently displaying the wrong price in search results.

### negative

There are a number of characters (i.e. hyphen, em dash, en dash) that can be confused with the minus symbol. Setting the negative attribute to true allows the component to output output the correct symbol. This ensures that screen readers will read the value as a minus price.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-accordion]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-accordion]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
