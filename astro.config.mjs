import { defineConfig } from "astro/config";
import deepmerge from "deepmerge";
import starlight from "@astrojs/starlight";
import { astroExpressiveCode } from "astro-expressive-code";
import cem from "@connectedhomes/nucleus/custom-elements.json";
import lit from "@astrojs/lit";

const componentSidebar = {
  label: "Components",
  items: cem.tags
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((component) => ({
      label: component.name,
      collapsed: true,
      items: [
        {
          label: "Overview",
          attrs: {
            class: `sidebar-${component.name}`,
          },
          link: `/components/${component.name}`,
        },
        {
          label: "Guidance",
          link: `/components/${component.name}/guidance`,
        },
        {
          label: "Implementation",
          link: `/components/${component.name}/implementation`,
        },
      ],
    })),
};

const astroExpressiveCodeOptions = {
  theme: "github-dark",
  getBlockLocale: ({ file }) => {
    return "en";
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nucleus",
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
      components: {
        TableOfContents: "./src/components/toc.astro",
      },
      sidebar: [
        {
          label: "Auto components",
          autogenerate: { directory: "components", collapsed: true },
        },
        {
          label: "Guidelines",
          autogenerate: { directory: "guidelines" },
        },
        {
          label: "Patterns",
          autogenerate: { directory: "patterns" },
        },
        {
          label: "Page types",
          autogenerate: { directory: "page-types" },
        },
      ],
    }),
    astroExpressiveCode(astroExpressiveCodeOptions),
    lit(),
  ],
  outDir: "./build",
});
