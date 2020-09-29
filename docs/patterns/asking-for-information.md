---
description: Asking for information documentation.
---

# Introduction

Asking for information plays a key part in our customers’ experience with British Gas. All functional journeys include elements of data capture and asking a customer to make a choice. Grouping questions, information, and choices together in logical and relatable sections can make our experiences as intuitive as possible.

## Landmark - Lakeside

The Landmark supports a sub-heading and heading, along with a single paragraph. You can use this to signpost the journey, and frame the context of the information you are asking the customer for.  

**Further research:** We are currently researching the use of `legends` and `labels` as headings, with the view that you would not need to use an `ns-landmark` to start each page.

## Grouping your questions

As expressed in the journey patterns documentation we advise that you approach each functional journey in the same way - breaking down the journey into smaller sections, asking the customer a single question or group of questions at a time. The idea is to reduce the cognitive load and help a customer complete what they need to do as efficiently as possible.

### Group by theme

Grouping questions together thematically can help a customer understand the context and objective of what you are asking. 

### Group by type of control

Radio buttons and checkboxes should be grouped in their own respective fieldsets. The legend should be used to provide context to the choice(s) a customer is being asked to make. Each form control should use their own label as the answer. 


## `ns-form`

The `ns-form` component is a wrapper used to contain all your form controls. It’s primary purpose within the design system is to manage the validations of your form controls. Semantically it sits at the top of the hierarchy.

You can [read more information about how to use `<ns-form>` here](https://docs.britishgas.design/components/ns-form)

## `ns-fieldset`

The `ns-fieldset` component is an element that sits directly in an `ns-form`. We use the fieldset to help group form controls such as inputs, radios, and checkboxes. Within the `fieldset` there is a `legend` element - this can help describe the form controls and provide context to the customer. 

It is unnecessary to use the `fieldset` and `legend` when presenting the customer with a single input field relating to one piece of information.

You can [read more information about how to use `<ns-fieldset>` here](https://docs.britishgas.design/components/ns-fieldset)

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[patterns-asking-for-information]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[patterns-asking-for-information]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
