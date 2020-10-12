---
description: Asking for information documentation.
---

# Introduction

Asking for information plays a key part in our customers’ experience with British Gas. All functional journeys include elements of data capture and asking a customer to make a choice. Grouping questions, information, and choices together in logical and relatable sections can make our experiences as intuitive as possible.

## Framing your content

The `lakeside` variant of the `ns-landmark`, is ideal for introducing and framing your pages. It is non-decorative, therefore reducing the distraction. It supports a sub-heading and heading, along with a single paragraph. You can use this to signpost the journey, and frame the context of the information you are asking the customer for.  

**Further research:** We are currently researching the use of `legends` and `labels` as headings, with the view that you would not need to use an `ns-landmark` to start each page.

## `ns-form`

The `ns-form` component is a wrapper used to contain all your form controls. It’s primary purpose within the design system is to manage the validations of your form controls. Semantically it sits at the top of the hierarchy.

You can [read more information about how to use `<ns-form>` here](https://docs.britishgas.design/components/ns-form)

## `ns-fieldset`

The `ns-fieldset` component is an element that sits directly in an `ns-form`. We use the fieldset to help group form controls such as inputs, radios, and checkboxes. Within the `fieldset` there is a `legend` element - this can help describe the form controls and provide context to the customer. 

It is unnecessary to use the `fieldset` and `legend` when presenting the customer with a single input field relating to one piece of information.

You can [read more information about how to use `<ns-fieldset>` here](https://docs.britishgas.design/components/ns-fieldset)

## Grouping your questions

As expressed in the journey patterns documentation we advise that you approach each functional journey in the same way - breaking down the journey into smaller sections, asking the customer a single question or group of questions at a time. The idea is to reduce the cognitive load and help a customer complete what they need to do as efficiently as possible.

### Group by theme

Grouping questions together thematically can help a customer understand the context and objective of what you are asking. 

### Group by type of control

Radio buttons and checkboxes should be grouped in their own respective fieldsets. The legend should be used to provide context to the choice(s) a customer is being asked to make. Each form control should use their own label as the answer. 

## Text inputs

The `ns-inputter` component is a multi-purpose wrapper component for displaying form controls such as text inputs, radio buttons, and checkboxes. The component has a number of features that allow for things such as validation, masking, and formatting. 

![Text input](https://user-images.githubusercontent.com/45626534/95720272-ec912780-0c68-11eb-815c-c0e57f311374.jpg)

### Common types of information

The `ns-inputter` component is capable of supporting the following common types of information you might ask a customer for:

- Names
- Telephone numbers
- Email addresses

### Complex types of information

Along with these, you can use a combination of validation, mask, and separator to ask the customer for more complex information such as:

- Meter reads
- Sort codes
- Reference numbers

![Mask - used for meter readings](https://user-images.githubusercontent.com/45626534/95720262-eac76400-0c68-11eb-9378-0009e25087cc.jpg)

**Further research:** We are currently developing pattern documention for the use of these patterns, by doing this we look to ensure that there is a consistent approach to asking customers for this information across customer journeys.

## Radio buttons and checkboxes

These are extremely common form control elements used to ask customers to make choices from a small list of options, or to answer simple yes/no questions, or to toggle a single option on or off. 

Radio buttons and checkboxes are automatically grouped together in a `<fieldset>`. For accessibility, the `heading` attribute found on the `ns-inputter` must be used to provide a `<legend>` to describe the options. These are usually in the form of a question - such as "Are you a British Gas customer?" or "Which British Gas services would you like to choose?".

![Checkboxes](https://user-images.githubusercontent.com/45626534/95720257-e9963700-0c68-11eb-8980-26d511829195.jpg)
![Radio buttons](https://user-images.githubusercontent.com/45626534/95720264-eac76400-0c68-11eb-9619-4453cb5171d1.jpg)

You can [read more information about how to use `<ns-inputter>` here](https://docs.britishgas.design/components/ns-inputter)
See [`<ns-inputter>` on Storybook](https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/form-ns-inputter--text-input)

## Feedback

* Do you have insights or concerns to share? You can raise an issue via [Github bugs](https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=[bug]%20[patterns-asking-for-information]).
* See all the issues already raised via [Github issues](https://github.com/connectedHomes/nucleus/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3ABug+[patterns-asking-for-information]).

💩 🎉 🦄 You can also contact the team on Slack on the `#product-nucleus` channel!
