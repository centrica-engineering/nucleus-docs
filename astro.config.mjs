import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cem from '@connectedhomes/nucleus/custom-elements.json';

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Nucleus',
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }, {
      label: 'Components',
      items: cem.tags.sort((a, b) => a.name.localeCompare(b.name)).map(component => ({
        label: component.name,
        link: `/components/${component.name}`
      }))
    }]
  }), lit()]
});