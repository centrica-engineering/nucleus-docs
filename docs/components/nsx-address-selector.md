---
description: Experience | Address Selector.
---

# Address Selector

## Introduction

> This experience pattern should be used in any journey where the user needs to select a premise or enter an address.

The Address Selector allows a user to select a single address from a list of premises.
It can be used to search for premesis by postcode or it can be used to display a list of premises, for example Multi Premise landlords.
It can also be used to add a new address or edit an existing address.

## Usage Examples

```markup
<nsx-address-selector postcode="AA12 3BB" addresses="arrayOfAddresses" allowmanualaddress></nsx-address-selector>
```
If the address selector hasn’t been provided with any addresses, it will start by asking for the user to enter their postcode.

![Anonymous - Customer finding their address from a postcode](https://user-images.githubusercontent.com/4298413/83441688-d95e8780-a43e-11ea-9041-af8bdd2f1ed7.png)

You can [see the anonymous state of `<nsx-address-selector>` here](https://www.britishgas.co.uk/nucleus-experiences/demo/index.html?path=/story/nsx-address-selector--anonymous).

When the user enters a postcode, the component will dispatch a ‘postcode-selected’ event.  At this point the component shows a “Loading” state until it is provided with a list of addresses.

When you set the addresses property of the component it will change state to display the addresses and ask the user to select one.

![Multiple addresses - Customer selects using radio buttons](https://user-images.githubusercontent.com/4298413/83444208-f432fb00-a442-11ea-97a2-838d8ceb23d4.png)

You can [see the multi address state of `<nsx-address-selector>` here](https://www.britishgas.co.uk/nucleus-experiences/demo/index.html?path=/story/nsx-address-selector--multi-addresses).

If there are 6 or more addresses then the component will display the addresses in a drop-down.

![Many addresses - Customer selects using select drop-down](https://user-images.githubusercontent.com/4298413/83441686-d82d5a80-a43e-11ea-8ae0-b72421cc1ad0.png)

You can [see the many address state of `<nsx-address-selector>` here](https://www.britishgas.co.uk/nucleus-experiences/demo/index.html?path=/story/nsx-address-selector--many-addresses).

![Postcode and selected address summary](https://user-images.githubusercontent.com/4298413/83441678-d6fc2d80-a43e-11ea-932e-d0ef537e9ed1.png)

### Manual address

If the user presses "Ammend your address" or if the "manualformenabled" property is set to true the component will display a manual address form:

![Manual entry address form](https://user-images.githubusercontent.com/4298413/83441689-d95e8780-a43e-11ea-8320-7ad5e77b4333.png)

You can [see the manual entry state of `<nsx-address-selector>` here](https://www.britishgas.co.uk/nucleus-experiences/demo/index.html?path=/story/nsx-address-selector--manual-addresses).


## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `addresses`   | `array` | `[]` |  | The list of addresses that will be displayed to the user |
| `allowManualAddress` | `boolean` | false | true, false | When set to true the component will allow you to edit an address manually |

### Addresses
Each address in the addresses array should be an object consisting of the following propeties: addressLine1, addressLine2, postalTown, county, postcode, label.  "label" is what will be displayed in the address list UI.

`{ addressLine1: '123 Kings Road', addressLine2: 'Little Village', postalTown: 'Townsville', county: 'Surrey', postcode: 'AA12 3BB', label: '123 Kings Road, AA12 3BB'}`

## Events

| Event | Description | Details |
| :--- | :--- | :--- |
| "postcode-selected"   | dispatched when the user selects a postcode to search with. | "postcode" - the value of the postcode entered by the user |
| "address-selected" | dispatched when the user selects an address from the list of addresses. | "address" - the selected address object |

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[nsx-marketing-consent]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[nsx-marketing-consent]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
