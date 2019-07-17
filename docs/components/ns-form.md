# Ns-form

## Introduction

> Quick quote about what it is for

The ns-form component can be wrapped around one or more ns-inputter components to manage the data and validation of the inputs.

## Usage

To see examples visit [Storybook](https://nucleus.bgdigital.xyz/demo/index.html?path=/story/ns-form [EDIT LINK])

```html
<ns-form>
  <ns-inputter name="firstname" validation='["isRequired"]'>
        <label slot="label" for="input-first-name">First name</label>
        <input type="text"/>
    </ns-inputter>
    <ns-inputter name="surname" validation='["isRequired"]'>
        <label slot="label" for="input-surname">Surname</label>
        <input type="text"/>
    </ns-inputter>
</ns-form>
```



### validate()

Calling the validate() method on the form will run each input's validation and return a validation object:

| Property         | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| isValid: Boolean | Returns **true** if all the inputs inside the form are valid, **false** if any are invalid. |
| fields: Array    | An array of objects representing the form inputs and their data/validations.<br /><br /><br />{<br />name: String - Name of the input e.g. "first-name"<br />value: String - The value of the input e.g. "John"<br />isValid: Boolean - Is the field valid.<br />input: WebComponent - A reference to the actual web component<br />error: String - The error message (when invalid)<br />} |
|                  |                                                              |



## Component Relationship

- Contains ns-inputter components as children
- Does it live in a panel? (yes/no)
  - What layout classes can be used? (Splash/Splish/Triple)
- Does it live inside other components?
  - xyz
  - xyz
  - xyz
- Atomic type: (atom/molecule/organism)

## Specification

| **Name**        |      |
| --------------- | ---- |
| **Description** |      |
| **Type**        |      |
| **Default**     |      |
| **Options**     |      |

[copy and paste the table for each property and slot]

## Best practises

| ✅ Do's                                                      | 💔 Don'ts |
| ----------------------------------------------------------- | -------- |
| Ensure that each ns-inputter component has a name attribute |          |
|                                                             |          |
|                                                             |          |
|                                                             |          |
|                                                             |          |

### Considerations of best practises

- xyz
- xyz
- Xyz

## Feedback

- Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[NAME OF COMPONENT]).
- See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[NAME OF COMPONENT])

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!

## Related links

- Blog posts
- MDN articles
- Examples of where it is used
