# Typography

## Typeface

### BG Flame Light

Weight: **normal**  
Style: **normal**

### BG Flame Regular

Weight: **normal**  
Style: **normal**

### BG Flame Bold

Weight: **normal**  
Style: **normal**

### Usage

CSS
```css
font-family: "BG Flame Regular", sans-serif;
font-family: "BG Flame Bold", sans-serif;
font-family: "BG Flame Light", sans-serif;
```


## Sizes

> A universal typographic system which is consistent and efficient to use for both developers and designers.

We've implemented the following modular scale to inform our typographic hierarchy.

A double stranded scale for each set of typographic sizes using two bases.


1em (16px)  
1.375em (22px)

The result of which is:

### Heading

|    | Style     | Small - 1.125 | Medium - 1.2 | Large - 1.25 |
| -- | --------- | ------------- | ------------ | ------------ |
| 12 | ♚ King    | 2.02729em     | 2.98598em    | 3.8147em     |
| 9  | ♛ Queen   | 1.74023em     | 2.376em      | 2.68555em    |
| 6  | ♝ Bishop  | 1.42383em     | 1.728em      | 1.95312em    |
| 5  | ♞ Knight  | 1.375em       | 1.65em       | 1.71875em    |
| 3  | ♜ Rook    | 1.22222em     | 1.375em      | 1.375em      |
| 2  | ♟ Pawn    | 1.125em       | 1.2em        | 1.25em       |

### Paragraph

|    | Style       | Small - 1.125 | Medium - 1.2 | Large - 1.25 |
| -- | ----------- | ------------- | ------------ | ------------ |
| 6  | 🐶 Dog      | 1.42383em     | 1.728em      | 1.95312em    |
| 4  | 🐱 Cat      | 1.26562em     | 1.44em       | 1.5625em     |
| 2  | 🐰 Rabbit   | 1.125em       | 1.2em        | 1.25em       |
| 0  | 🐹 Hamster  | 1.0em         | 1.0em        | 1.0em        |
| -1 | 🐭 Mouse    | 0.875em       | 0.875em      | 0.875em      |

## Semantics vs. styles

The definitions we have covered here refer to typographic styles. It's important understand the separation of visual directions and encoded semantics:

- Encoded semantics are used to define hierarchy and relationships, making text programmatically legible for screen readers and other assistive technologies
- Visual directions like the ones outlined here are used to ensure optimal readability and legibility, as well as convey a specific brand

Without semantically correct HTML, our content won't be accessible  Consider for example the following guidance on headings:

- The page headings must follow an order, starting from H1 to H6
- A page must only have one H1 element

... and a suitable style may be applied on each of these headings. To avoid confusion, please remember the following:

- Refer to H1, H2, etc. only when it comes to semantic choices and accessibility
- Use Nucleus naming conventions to discuss typographic style choices
