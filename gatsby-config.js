require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Karol Waliszewski`,
    description: `Portfolio Karola Waliszewskiego zawierające informacje takie jak: poznane technologie, wykonane projekty oraz doświadczenie zawodowe.`,
    author: `Karol Waliszewski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.karolwaliszewski.pl/`,
        stripQueryString: true,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#FECE47`,
        showSpinner: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 95,
          breakpoints: [500, 750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karol Waliszewski Portfolio`,
        short_name: `Waliszewski Portfolio`,
        start_url: `/`,
        background_color: `#FECE47`,
        theme_color: `#FECE47`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              margin: 20,
              background: '#222222',
              scrollOffset: 80,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla\:400,500,600,700`, `rubik\:400,500,600,700`],
        display: 'swap',
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
        stages: ['develop'],
      },
    },
    `gatsby-plugin-smoothscroll`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
