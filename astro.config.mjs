import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lit from "@astrojs/lit";

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
      lastUpdated: true,
      social: {
        github: "https://github.com/centrica-engineering/nucleus-docs",
      },
      components: {
        TableOfContents: "./src/components/table-of-contents.astro",
        PageTitle: './src/components/PageTitle.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      expressiveCode: {
        themes: ["github-dark", "github-light"],
      },
      sidebar: [
        {
          label: "Guidelines",
          autogenerate: { directory: "guidelines" },
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
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
    lit(),
  ],
  outDir: "./build",
});
