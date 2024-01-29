import { h } from 'hastscript';
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightDocSearch from '@astrojs/starlight-docsearch';
import lit from "@astrojs/lit";
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import customElements from "@connectedhomes/nucleus/ce-doc.json";
import cem from "@connectedhomes/nucleus/custom-elements.json";
import { nucleusRemarkAside } from "./src/plugins/nucleus-remark-aside";

const isDeprecated = (componentName) =>  cem.tags.find((tag) => tag.name === componentName)?.deprecated;

const componentSidebar = () => {
  return {
    label: "Components",
    collapsed: true,
    items: [
      ...customElements.filter((customElement) => !customElement.internal && !customElement.category && !isDeprecated(customElement.name))
      .sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1)
      .map((customElement) => {
        return {
          label: customElement['display-name'],
          link: `/components/${customElement.name}`
        }
      }),
      {
        label: "Form",
        items: 
          customElements.filter((customElement) => !customElement.internal && customElement.category === 'Form' && !isDeprecated(customElement.name))
          .sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1)
          .map((customElement) => {
            return {
              label: customElement['display-name'],
              link: `/components/${customElement.name}`
            }
          }),
      },
      {
        label: "Experience",
        items: 
          customElements.filter((customElement) => !customElement.internal && customElement.category === 'Experience' && !isDeprecated(customElement.name))
          .sort((ce1, ce2) => ce1.name > ce2.name ? 1 : -1)
          .map((customElement) => {
            return {
              label: customElement['display-name'],
              link: `/components/${customElement.name}`
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

const plugins = () => {
  const starlightPlugins = [];
  if (process.env.NODE_ENV === 'production') {
    starlightPlugins.push(
      starlightDocSearch({
        appId: 'algolia',
        apiKey: process.env.ALGOLIA_KEY,
        indexName: 'nucleus',
      })
    );
  }
  return starlightPlugins;
}

const rehypeAutoLinkConfig = {
  behavior: 'after',
  content: (heading) => h(
    'span',
    { ariaHidden: 'true', class: 'anchor-icon' },
    h(
      'svg',
      { width: 20, height: 20, viewBox: '0 0 24 24' },
      h('path', {
        fill: 'currentColor',
        d: 'm12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z',
      })
    )
  ),
  group: ({tagName}) => h('div', { tabIndex: -1, class: `heading-wrapper level-${tagName}` })
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
        // ThemeSelect: './src/components/starlight/ThemeSelect.astro',
        TwoColumnContent: "./src/components/starlight/TwoColumnContent.astro",
        Sidebar: "./src/components/starlight/Sidebar.astro"
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
      plugins: [
        ...plugins()
      ],
    }),
    lit(),
  ],
  outDir: "./build",
});
