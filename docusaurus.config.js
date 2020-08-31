module.exports = {
    title: 'Orb',
    tagline: 'Android network monitoring made easy 🎉️',
    url: 'https://github.com/ezralazuardy/orb',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'ezralazuardy',
    projectName: 'orb',
    themeConfig: {
        navbar: {
            title: 'Orb',
            logo: {
                alt: 'Orb Logo',
                src: 'img/orb-logo.png',
            },
            items: [
                {
                    to: 'documentation',
                    activeBasePath: 'documentation',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                {
                    href: 'https://github.com/ezralazuardy/orb',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/orb',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ezralazuardy/orb',
                        },
                    ],
                },
            ],
            copyright: `Built with ❤ by Ezra Lazuardy`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: 'documentation',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/ezralazuardy/orb-documentation/edit/master/website/',
                },
                blog: {
                    showReadingTime: false,
                    blogDescription: "Orb's Blog 📖",
                    editUrl:
                        'https://github.com/ezralazuardy/orb-documentation/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
