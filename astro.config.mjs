import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import cem from "@connectedhomes/nucleus/custom-elements.json";
import lit from "@astrojs/lit";

const componentSidebar = {
  label: "Components",
  collapsed: true,
  items: cem.tags
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((component) => ({
      label: component.name,
      badge: component.deprecated ? "Deprecated" : undefined,
      collapsed: true,
      link: `/components/${component.name}`
    })),
};

export default defineConfig({
  integrations: [
    starlight({
      title: "Nucleus Docs",
      logo: {
        light: "./public/logo-light.svg",
        dark: "./public/logo-dark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl:
          "https://github.com/centrica-engineering/nucleus-docs/edit/main/",
      },
      customCss: [
        "./src/styles/custom.css",
        // Fontsource files for to regular and medium font weights.
        "@fontsource/roboto/300.css",
        "@fontsource/roboto/400.css",
      ],
      pagination: false,
      lastUpdated: true,
      social: {
        github: "https://github.com/centrica-engineering/nucleus-docs",
      },
      components: {
        TableOfContents: "./src/components/toc.astro",
        ThemeSelect: './src/components/starlight/ThemeSelect.astro',
        PageTitle: './src/components/starlight/ComponentTitle.astro'
      },
      expressiveCode: {
        themes: ["github-dark", "github-light"],
      },
      sidebar: [
        componentSidebar,
        {
          label: "Guidelines",
          collapsed: true,
          autogenerate: { directory: "guidelines" },
        },
        {
          label: "Patterns",
          collapsed: true,
          autogenerate: { directory: "patterns" },
        },
        {
          label: "Page types",
          collapsed: true,
          autogenerate: { directory: "page-types" },
        },
      ],
    }),
    lit(),
  ],
  outDir: "./build",
});
