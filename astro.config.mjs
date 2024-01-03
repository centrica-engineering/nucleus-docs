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
      pagination: false,
      lastUpdated: true,
      social: {
        github: "https://github.com/centrica-engineering/nucleus-docs",
      },
      components: {
        PageTitle: "./src/components/starlight/PageTitle.astro",
        TableOfContents: "./src/components/starlight/TableOfContents.astro",
        TwoColumnContent: "./src/components/starlight/TwoColumnContent.astro"
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
