---
title: ns-tab implementation
---

## Specification

| Attribute | Type | Default | Options | Description |
| :--- | :--- | :--- | :--- | :--- |
| `icon`    | `string` |  | Please see the [documentation for ns-icon](../components/ns-icon) | Optional icon to add to the tab. |
| `selected` | `boolean` | `false` |`true`, `false`| Pre-selected tab |

| Event | Description |
| :--- | :--- |
| `tabselected` | Sends a event when tab is selected. |

| Slots | Type |
| :--- | :--- |
| `anonymous` | `textNode` |

## Best practice

| 💚 Do's | 💔 Don'ts |
| :--- | :--- |
| Always add heading text | Add an icon to one tab and not to the other tabs |
|  | Add more than 2 words to the heading |
|  | Add different types of icons (solid, outline, functional) |

### Considerations

* Only use inside `ns-tabs` as a slot of `tab`.
