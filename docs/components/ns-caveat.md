---
description: Caveat component.
---

# ns-caveat

## Introduction

> Caveats provide additional information and legal details to content.

Caveats link to content in the page, providing more information about legality and eligibility, by seperating it to the bottom of the page.

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-caveat--caveat)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-caveat" caption="" %}

```markup
<ns-caveat>
  <h2 slot="heading">Legal information</h2>
  <div slot="caveat">
    <ol>
      <li>
        ...
      </li>
    </ol>
  </div>
</ns-caveat>
```

## Component Relationship

**Does it live in a panel?**  
No

**What layout classes can be used?**  
None

**Does it live inside other components?**  
No

**Atomic type**  
Molecule

## Specification

| **Name** | type |
| :--- | :--- |
| **Description** | Change the style of the caveat |
| **Type** | String |
| **Default** | standard |
| **Options** | alert, standard |
| **Notes** | Currently alert is in alpha |

| **Name** | Named slot: heading |
| :--- | :--- |
| **Description** | Change the heading title |
| **Type** | HTMLElement |
| **Default** | Information |
| **Options** | n/a |
| **Notes** | Always add a heading |

| **Name** | Anonymous slot |
| :--- | :--- |
| **Description** | Ordered list of caveats |
| **Type** | HTMLElement |
| **Default** | "" |
| **Options** | n/a |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Try to make the caveats positive | Use the caveat to hide information |
| Be transparent, if the legal details are short, add it to the content | Add images, iconography, etc. |
| Always have the legal caveats at the bottom of the page, before the footer | Try to change the font size of the caveats |
| Use an ordered list for the caveats |  |
| Only use text in the caveats |  |
| Embolden text that is important |  |

### Considerations of best practice

* We highly recommend that there are no more than three caveats in a single piece of communication.
* Link to additional information, if needed such as terms, but should always be accompanied with a related description.

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-caveat]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-caveat]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-caveat component in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-caveat--caveat).
* [Homepage example in Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-homepage--2019-01).

