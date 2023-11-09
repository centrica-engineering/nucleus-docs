import { defineConfig } from 'astro/config';
import deepmerge from 'deepmerge';
import starlight from '@astrojs/starlight';
import cem from '@connectedhomes/nucleus/custom-elements.json';

import lit from "@astrojs/lit";


const componetSidebar = {
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
  const component = componetSidebar.items.find(component => component.label === componentOverride.label);

  if (component) {
    component.items = deepmerge(component.items, componentOverride.items);
  }
});

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Nucleus',
    logo: {
      light: './public/logo.svg',
      dark: './public/logo-dark.svg',
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
    componetSidebar,
      {
        label: 'Guidelines',
        items: [
          {
            label: 'a',
            link: `/guidelines/a`
          }
        ]
      },
      {
        label: 'Patterns',
        items: [
          {
            label: 'a',
            link: `/patterns/a`
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
            link: `/resources/a`
          }
        ]
      }
  ]
  }), lit()]
});