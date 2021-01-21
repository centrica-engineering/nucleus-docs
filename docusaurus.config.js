module.exports = {
  title: 'Nucleus Design System',
  tagline: 'The tagline of my site',
  url: 'https://britishgas.design',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'British Gas', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nucleus Design System',
      logo: {
        alt: 'British Gas Flame Mark',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://www.britishgas.co.uk/nucleus/demo/index.html',
          label: 'Storybook',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'GitHub',
          items: [
            {
              label: 'Nucleus',
              to: 'https://github.com/ConnectedHomes/nucleus',
            },
            {
              label: 'Nucleus Docs',
              to: 'https://github.com/centrica-engineering/nucleus-docs',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              to: 'https://centricadigital.slack.com/messages/CCQDEPKBJ'
            },
            {
              label: 'Change request (RFC)',
              to: 'https://github.com/ConnectedHomes/nucleus/projects/6',
            },
            {
              label: 'Report a bug',
              href: 'https://github.com/ConnectedHomes/nucleus/issues/new?assignees=&labels=Bug&template=a--bug-report.md&title=%5Bbug%5D%20%5Bns-COMPONENT%5D',
            },
          ],
        },
        {
          title: 'Storybook',
          items: [
            {
              label: 'Nucleus',
              to: 'https://www.britishgas.co.uk/nucleus/demo/index.html?path=/story/playground-cards--all-of-the-cards',
            },
            {
              label: 'Nucleus experiences',
              href: 'https://www.britishgas.co.uk/nucleus-experiences/demo/index.html?path=/story/nsx-address-selector--anonymous',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} British Gas, Inc. Built with Docusaurus.`,
    },
  },
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/',
            to: '/docs/getting-started/introduction',
          },
        ]
      }
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/centrica-engineering/nucleus-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src:
        'https://www.britishgas.co.uk/nucleus/nucleus.min.js',
      async: true,
    },
  ],
};
