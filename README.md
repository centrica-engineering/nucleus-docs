# Nucleus Docs

Documentation to support the Nucleus Design System.

It is built using [Astro](https://astro.build/) with the [Starlight](https://starlight.astro.build/) theme and [Lit](https://lit.dev/).

## Installation

```sh
npm install
```

## Local development

```sh
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Building the Docs

To build the Docs, run the `build` script in the `package.json` file:

```sh
npm run build
```

The output will be in the `./build` directory.

## Docs structure

### Directories

- `src/assets`: Contains the assets used in the project, including HTML snippets used in the Examples and Configurator.
- `src/components`: Contains Astro and Lit components.
- `src/content/docs`: Contains the `mdx` documentation files, including components, guidelines, page-types and patterns.

### Files

- `astro.config.mjs`: The Astro configuration file.
- `src/content/docs/index.mdx`: The Homepage of https://nucleus.design/

## Writing and formatting

### Adding an informative aside to a page

You can add a styled aside to a page with the following syntax:

```md
 :::tip[Did you know?]
 Astro helps you build faster websites with “Islands Architecture”.
 :::
```

The above code will render the following:

put image in here

The available aside types are currently as follows:

- Note
- Tip
- Caution
- Danger
- Do
- Don't
- Updated

### Adding a badge

Badges are managed by a JSON file (src > data > badges.json) for simple badge management.
Badges can be added to `components`, `assets` or `tokens`.

```json
{
  "components": [
    {
      "name": "ns-control",
      "badge": "new"
    },
  ],
  "guidelines": [
    {
      "name": "assets",
      "badge": "updated"
    },
  {
      "name": "tokens",
      "badge": "floogle"
    }
  ]
}
```
