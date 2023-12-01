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
      badge: "Deprecated",
      collapsed: true,
      items: [
        {
          label: "Overview",
          attrs: {
            class: `ns-sidebar sidebar-${component.name}`,
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
        componentSidebar,
        {
          label: "Guidelines",
          items: [
            {
              label: "Colours",
              link: `/guidelines/colours`,
            },
          ],
        },
        {
          label: "Patterns",
          items: [
            {
              label: "Journeys",
              link: `/patterns/journeys`,
            },
            {
              label: "Asking for information",
              link: `/patterns/asking-for-information`,
            },
            {
              label: "Experiences",
              link: `/patterns/experiences`,
            },
            {
              label: "Loading",
              link: `/patterns/loading`,
            },
            {
              label: "Messaging",
              link: `/patterns/messaging`,
            },
            {
              label: "Telephone numbers",
              link: `/patterns/telephone-numbers`,
            },
          ],
        },
        {
          label: "Pages",
          items: [
            {
              label: "Article",
              link: `/pages/article`,
            },
            {
              label: "Confirmation",
              link: `/pages/confirmation`,
            },
            {
              label: "Editorial",
              link: `/pages/editorial`,
            },
            {
              label: "Guide",
              link: `/pages/guide`,
            },
            {
              label: "Home",
              link: `/pages/home`,
            },
            {
              label: "Hub",
              link: `/pages/hub`,
            },
            {
              label: "Product",
              link: `/pages/product`,
            },
            {
              label: "Roadblock",
              link: `/pages/roadblock`,
            },
            {
              label: "Start",
              link: `/pages/start`,
            },
            {
              label: "Stopgap",
              link: `/pages/stopgap`,
            },
          ],
        },
        {
          label: "Resources",
          items: [
            {
              label: "a",
              link: `/resources/example`,
            },
          ],
        },
      ],
    }),
    astroExpressiveCode(astroExpressiveCodeOptions),
    lit(),
  ],
  outDir: "./build",
});
