import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { astroExpressiveCode } from "astro-expressive-code";
import lit from "@astrojs/lit";

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
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://www.britishgas.co.uk/nucleus/nucleus.min.js",
          },
        },
      ],
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
