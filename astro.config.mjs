import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import lit from "@astrojs/lit";
import customElements from "@connectedhomes/nucleus/ce-doc.json";
import cem from "@connectedhomes/nucleus/custom-elements.json";


const isDeprecated = (componentName) =>  cem.tags.find((tag) => tag.name === componentName)?.deprecated;

const componentSidebar = () => {
  return {
    label: "Components",
    collapsed: true,
    items: [
      ...customElements.filter((customElement) => !customElement.internal && !customElement.category && !isDeprecated(customElement.name))
      .map((customElement) => {
        return {
          label: customElement['display-name'].replaceAll(' ', ''),
          link: `/components/${customElement.name}`
        }
      }).sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1),
      {
        label: "Form",
        collapsed: true,
        items: 
          customElements.filter((customElement) => !customElement.internal && customElement.category === 'Form' && !isDeprecated(customElement.name))
            .map((customElement) => {
            return {
              label: customElement['display-name'].replaceAll(' ', ''),
              link: `/components/${customElement.name}`
            }
          }).sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1),
      },
      {
        label: "Experience",
        collapsed: true,
        items: 
          customElements.filter((customElement) => !customElement.internal && customElement.category === 'Experience' && !isDeprecated(customElement.name))
            .map((customElement) => {
            return {
              label: customElement['display-name'].replaceAll(' ', ''),
              link: `/components/${customElement.name}`
            }
          }).sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1),
      },
      {
        label: "Deprecated",
        collapsed: true,
        items: 
          cem.tags.filter((tag) => tag.deprecated)
            .map((tag) => {
              const customElement = customElements.find((customElement) => customElement.name === tag.name);
            return {
              label: customElement['display-name'].replaceAll(' ', ''),
              link: `/components/${customElement.name}`
            }
          }).sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1),
      },
    ]
  };
}

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
        componentSidebar(),
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
