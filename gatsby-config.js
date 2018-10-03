module.exports = {
  siteMetadata: {
    title: 'Capoeira Espirito Livre',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Capoeira Espirito Livre',
        short_name: 'CEL',
        start_url: '/',
        background_color: '#67CC00',
        theme_color: '#67CC00',
        display: 'minimal-ui',
        icon: 'src/images/manifest_logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-layout',
  ],
}
