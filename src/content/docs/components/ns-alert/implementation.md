---
title: ns-alert implementation
---

## Specification

| Attribute | Property | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `type` | `type` | `string` | `standard` | `standard`, `highlighter` | Type of alert to use |
| `state` | `state` | `string` | `error` | `error`, `success`, `warning`, `info` | Defines the role of the highlighter and changes the styles |

| Slots | Type |
| :--- | :--- |
| `heading` | `h tag` |
| Anonymous | `p tag` |

## Component placement

- [ns-form](#!)
- [ns-panel](#!)

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Keep the messages concise |  Use for generic message that is not in context to the page it is displayed in |
| Use an icon to alert the user what type of message it is |  Use it for Roadblock error messaging |

### Considerations

- Be clear and concise

The message must be in plain English, and help the user out of the situation by providing an actionable link if possible.

## Accessibility

The information contained in the alert should always be the most important information on the page. To ensure that screen reader users are informed about the importance of these messages the content is read aloud as soon as the alert type is used. This could be when the page loads or when it is dynamically added to a page.

If there are multiple alerts on a page they are read:

- from top to bottom on page load
- in the order they have been added to the page when dynamically added
