import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nucleus",
      customCss: [
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Getting started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Foundations",
          autogenerate: { directory: "foundations" },
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
        {
          label: "Community",
          autogenerate: { directory: "community" },
        },
        {
          label: "Archive",
          autogenerate: { directory: "archive" },
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
