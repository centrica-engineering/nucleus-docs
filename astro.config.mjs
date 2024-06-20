import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightDocSearch from '@astrojs/starlight-docsearch';
import lit from "@astrojs/lit";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import customElements from "@connectedhomes/nucleus/ce-doc.json";
import cem from "@connectedhomes/nucleus/custom-elements.json";
import badges from "./src/data/badge.json";
import { nucleusRemarkAside } from "./src/plugins/nucleus-remark-aside";

const isDeprecated = (componentName) =>  cem.tags.find((tag) => tag.name === componentName)?.deprecated;
const badge = (componentName) => {
  const componentBadge = badges.components?.find((component) => component.name === componentName)?.badge;
  return {
    badge: componentBadge
  }
};

const componentSidebar = () => {
  return {
    label: "Components",
    collapsed: true,
    items: [
      ...customElements.filter((customElement) => !customElement.category && !isDeprecated(customElement.name))
      .sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1)
      .map((customElement) => {
        return {
          label: customElement['display-name'],
          link: `/components/${customElement.name}`,
          ...badge(customElement.name)
        }
      }),
      {
        label: "Form",
        items: 
          customElements.filter((customElement) => customElement.category === 'Form' && !isDeprecated(customElement.name))
          .sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1)
          .map((customElement) => {
            return {
              label: customElement['display-name'],
              link: `/components/${customElement.name}`,
              ...badge(customElement.name)
            }
          }),
      },
      {
        label: "Experience",
        items: 
          customElements.filter((customElement) => customElement.category === 'Experience' && !isDeprecated(customElement.name))
          .sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1)
          .map((customElement) => {
            return {
              label: customElement['display-name'],
              link: `/components/${customElement.name}`,
              ...badge(customElement.name)
            }
          }),
      },
      {
        label: "Deprecated",
        items: 
          cem.tags.filter((tag) => tag.deprecated)
          .sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1)
          .map((tag) => {
            const customElement = customElements.find((customElement) => customElement.name === tag.name);
            return {
              label: customElement['display-name'],
              link: `/components/${customElement.name}`
            }
          }),
      },
    ]
  };
}

const rehypeAutoLinkConfig = {
  behavior: 'append'
};

export default defineConfig({
  markdown: {
    remarkPlugins: [nucleusRemarkAside()],
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        rehypeAutoLinkConfig
      ],
    ]
  },
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
        "./src/styles/aside.css",
        // Fontsource files for to regular and medium font weights.
        "@fontsource/roboto/400.css",
        "@fontsource/roboto/500.css",
        "@fontsource/roboto/700.css",
      ],
      pagination: false,
      lastUpdated: true,
      social: {
        github: "https://github.com/centrica-engineering/nucleus-docs",
      },
      components: {
        ContentPanel: "./src/components/starlight/ContentPanel.astro",
        Footer: "./src/components/starlight/Footer.astro",
        Header: "/src/components/starlight/Header.astro",
        Hero: "/src/components/starlight/Hero.astro",
        MarkdownContent: "/src/components/starlight/MarkdownContent.astro",
        PageTitle: "./src/components/starlight/PageTitle.astro",
        PageSidebar: "./src/components/starlight/PageSidebar.astro",
        TableOfContents: "./src/components/starlight/TableOfContents.astro",
        // ThemeSelect: './src/components/starlight/ThemeSelect.astro',
        TwoColumnContent: "./src/components/starlight/TwoColumnContent.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro"
      },
      expressiveCode: {
        themes: ["github-dark", "github-light"],
      },
      sidebar: [
        {
          label: "Introduction",
          link: '/introduction'
        },
        {
          label: "Guidelines",
          collapsed: true,
          items: [
            {
              label: "Principles",
              link: "/guidelines/principles"
            },
            {
              label: "Accessibility",
              link: "/guidelines/accessibility"
            },
            {
              label: "Typography",
              link: "/guidelines/typography"
            },
            {
              label: "Lists",
              link: "/guidelines/lists"
            },
            {
              label: "Assets",
              link: "/guidelines/assets"
            },
            {
              label: "Tokens",
              link: "/guidelines/tokens"
            },
            {
              label: "Working with Nucleus",
              link: "/guidelines/working"
            },
            {
              label: "Our process",
              link: "/guidelines/process"
            },
            {
              label: "Contributing",
              link: "/guidelines/contributing"
            },
            {
              label: "Vanilla first",
              link: "/guidelines/vanilla-first"
            },
            {
              label: "Devices",
              link: "/guidelines/devices"
            }
          ]
        },
        componentSidebar(),
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
      ]
    }),
    lit(),
  ],
  outDir: "./build",
});
