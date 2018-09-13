// BRANCH exists at build time on Netlify. See https://www.netlify.com/docs/continuous-deployment/
const branch = process.env.BRANCH

let siteUrl = 'https://www.beansprouty.com'
if(branch && branch !== 'master') {
  siteUrl = 'https://' + branch + '.beansprouty.com'
}

module.exports = {
  siteMetadata: {
    title: 'BeanSprouty',
    author: 'Christoffer N. Aa. Thondrup',
    description: 'A Vegan Travelers Blog',
    siteUrl: siteUrl,
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-121416073-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        navigateFallback: null,
        navigateFallbackWhitelist: []
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ],
}
