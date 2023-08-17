const prodScripts = () => {
  if (process.env.NODE_ENV === 'production') {
    return {
      algolia: {
        apiKey: process.env.ALGOLIA_KEY,
        indexName: 'nucleus',
      }
    }
  }

  return {};
};

module.exports = {
  title: 'Nucleus Design System',
  tagline: 'The tagline of my site',
  url: 'https://britishgas.design',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon/favicon.ico',
  organizationName: 'British Gas', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    ...prodScripts(),
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      logo: {
        alt: 'Nucleus',
        src: '/img/logo.svg',
      },
      items: [
        {
          href: 'https://www.britishgas.co.uk/nucleus/demo/index.html',
          label: 'Storybook',
          position: 'right',
        },
        {
          href: 'https://github.com/connectedHomes/nucleus/',
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
              to: 'https://www.britishgas.co.uk/nucleus/demo/index.html',
            },
            {
              label: 'Nucleus experiences',
              href: 'https://www.britishgas.co.uk/nucleus-experiences/demo/index.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} British Gas. Built with Docusaurus.`,
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
            'https://github.com/centrica-engineering/nucleus-docs/edit/main/',
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
        'https://www.britishgas.co.uk/nucleus/nucleus.min.js'
    },
  ],
};
