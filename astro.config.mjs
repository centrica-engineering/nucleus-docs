import { defineConfig } from 'astro/config';
import deepmerge from 'deepmerge';
import path from 'path';
import starlight from '@astrojs/starlight';
import { astroExpressiveCode, ExpressiveCodeTheme } from 'astro-expressive-code';
import cem from '@connectedhomes/nucleus/custom-elements.json';
import lit from "@astrojs/lit";

import mdx from '@astrojs/mdx';
import AutoImport from 'astro-auto-import';
import MDXCodeBlocks, { mdxCodeBlockAutoImport } from 'astro-mdx-code-blocks';

const componentSidebar = {
  label: 'Components',
  items: cem.tags.sort((a, b) => a.name.localeCompare(b.name)).map(component => ({
    label: component.name,
    badge: 'Deprecated',
    collapsed: true,
    items: [
      {
        label: 'Overview',
        attrs: { 'class': `ns-sidebar sidebar-${component.name}` },
        link: `/components/${component.name}`
      },
      {
        label: 'Guidance',
        link: `/components/${component.name}/guidance`
      },
      {
        label: 'Placement',
        link: `/components/${component.name}/placement`
      },
      {
        label: 'Implementation',
        link: `/components/${component.name}/implementation`
      }
    ]
  }))
};


const componentOverrides = [
    // {
    //   label: 'ns-accordion',
    //   items: [
    //     {
    //       label: 'Testing',
    //       link: '/components/accordion/testing'
    //     }
    //   ]
    // }
];

componentOverrides?.forEach(componentOverride => {
  const component = componentSidebar.items.find(component => component.label === componentOverride.label);

  if (component) {
    component.items = deepmerge(component.items, componentOverride.items);
  }
});

const astroExpressiveCodeOptions = {
  theme: 'github-dark',
  getBlockLocale: ({ file }) => {
    // Path format: `src/content/docs/en/getting-started.mdx`
    // Part indices:  0     1      2   3         4
    const pathParts = path.relative(file.cwd, file.path).split(/[\\/]/);
    return pathParts[3];
  },

};
// https://astro.build/config
export default defineConfig({
  integrations: [
    AutoImport({
      imports: [mdxCodeBlockAutoImport('./src/components/code-block.astro')],
    }),
    MDXCodeBlocks(),
    astroExpressiveCode({theme: 'github-dark'}),
    mdx(),
    starlight({
    title: 'Nucleus',
    logo: {
      src: './public/logo.svg',
      replacesTitle: true
    },
    editLink: {
      baseUrl: 'https://github.com/centrica-engineering/nucleus-docs/edit/main/',
    },
    customCss: ['./src/styles/global.css'],
    components: {
      TableOfContents: './src/components/toc.astro',
    },
    sidebar: [
    componentSidebar,
    {
      label: 'Guidelines',
      items: [
        {
          label: 'a',
          link: `/guidelines/example`
        }
      ]
    },
    {
      label: 'Patterns',
      items: [
        {
          label: 'a',
          link: `/patterns/example`
        }
      ]
    },
    {
      label: 'Pages',
      items: [
        {
          label: 'a',
          link: `/pages/a`
        }
      ]
    },
    {
      label: 'Resources',
      items: [
        {
          label: 'a',
          link: `/resources/example`
        }
      ]
    }
  ]
  }),
  lit()
]
});