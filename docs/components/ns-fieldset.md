---
description: Molecule | Form component.
---

# ns-fieldset

## Introduction

> The ns-fieldset component is used to group related ns-inputters.

Use where you would normally use a vanilla html fieldset element. This element extends the layout for `ns-form`.

## Best practises

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Try to add a legend. | Don't group unrelated ns-inputters |
| Only use inside the ns-form component | Nest `ns-fieldset`s unnecessarily, as this can lead to confusion |

## Usage

To see examples visit [Storybook](https://britishgas.co.uk/nucleus/demo/index.html?path=/story/ns-fieldset--standard)

{% embed url="https://codesandbox.io/s/github/britishgas-engineering/nucleus-examples/tree/master/demos/ns-fieldset" caption="" %}

```markup
<ns-form>
  <ns-fieldset legend="legend text">
    <ns-inputter>
      ...
    </ns-inputter>
    <ns-inputter>
      ...
    </ns-inputter>
  </ns-fieldset>
</ns-form>
```

## Component Relationship

|  **Relationship**  |  |
| :--- | :--- |
| **Does it live in a panel?** | ❌ No  |
| **Does it live inside other components?** | ✅ Yes -  `ns-form` |
| **What layout classes can be used?**  | ❌ No |

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `legend` | `text`  |  |  | Add a legend to describe the contents of the fieldset |

| Slots | Type |
| :--- | :--- |
| Anonymous | ns-inputters |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[ns-fieldset]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[ns-fieldset]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

* [ns-form](https://docs.britishgas.design/components/ns-form)
* [ns-inputter](https://docs.britishgas.design/components/ns-inputter)
