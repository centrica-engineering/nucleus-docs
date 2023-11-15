import { defineConfig } from 'astro/config';
import deepmerge from 'deepmerge';
import starlight from '@astrojs/starlight';
import cem from '@connectedhomes/nucleus/custom-elements.json';

import lit from "@astrojs/lit";


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

// const componentLists = {
//   label: 'Lists',
//   items: [
//     {
//       label: 'ns-alert',
//       link: '/lists/ns-alert'
//     },
//     {
//       label: 'ns-content',
//       link: '/lists/ns-content'
//     },
//     {
//       label: 'ns-card',
//       link: '/lists/ns-card'
//     }
//   ]
// };

const componentLists = {
  label: 'Lists',
  items: cem.tags.sort((a, b) => a.name.localeCompare(b.name)).map(component => ({
    label: component.name,
    link: `/lists/${component.name}`
  })),
  collapsed: true
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

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
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
      componentLists,
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
  }), lit()]
});