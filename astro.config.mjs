import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cem from '@connectedhomes/nucleus/custom-elements.json';
import lit from "@astrojs/lit";

const componentSidebar = {
  label: 'Components',
  items: cem.tags.sort((a, b) => a.name.localeCompare(b.name)).map(component => ({
    label: component.name,
    badge: 'Deprecated',
    collapsed: true,
    items: [{
      label: 'Overview',
      attrs: {
        'class': `ns-sidebar sidebar-${component.name}`
      },
      link: `/components/${component.name}`
    }, {
      label: 'Guidance',
      link: `/components/${component.name}/guidance`
    }, {
      label: 'Placement',
      link: `/components/${component.name}/placement`
    }, {
      label: 'Implementation',
      link: `/components/${component.name}/implementation`
    }]
  }))
};

export default defineConfig({
  integrations: [
  starlight({
    title: 'Nucleus',
    logo: {
      light: './public/logo-light.svg',
      dark: './public/logo-dark.svg',
      replacesTitle: true
    },
    editLink: {
      baseUrl: 'https://github.com/centrica-engineering/nucleus-docs/edit/main/'
    },
    customCss: [
      './src/styles/custom.css',
      // Fontsource files for to regular and medium font weights.
      '@fontsource/roboto/300.css',
      '@fontsource/roboto/400.css',
  ],
    components: {
      TableOfContents: './src/components/toc.astro'
    },
    expressiveCode: {
      themes: ['github-dark', 'github-light']
    },
    sidebar: [componentSidebar, {
      label: 'Guidelines',
      items: [{
        label: 'a',
        link: `/guidelines/example`
      }]
    }, {
      label: 'Patterns',
      items: [{
        label: 'Overview',
        link: `/patterns`
      }]
    }, {
      label: 'Pages',
      items: [{
        label: 'a',
        link: `/pages/a`
      }]
    }, {
      label: 'Resources',
      items: [{
        label: 'a',
        link: `/resources/example`
      }]
    }]
  }), 
  lit()],
  outDir: './build'
});