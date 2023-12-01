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
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      experimentalThemes: {
        light: 'github-dark',
        dark: 'github-dark',
      },
      langs: [],
      wrap: true,
    },
  },
  integrations: [
  starlight({
    title: 'Nucleus',
    logo: {
      src: './public/logo.svg',
      replacesTitle: true
    },
    editLink: {
      baseUrl: 'https://github.com/centrica-engineering/nucleus-docs/edit/main/'
    },
    customCss: ['./src/styles/custom.css'],
    components: {
      TableOfContents: './src/components/toc.astro'
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