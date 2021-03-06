module.exports = {
  siteMetadata: {
    title: 'Capoeira Espirito Livre',
    siteUrl: `https://cel-capoeira.com`,
    description:
      'Csoportunk, a Capoeira Espírito Livre (Capoeira Szabad Szellem) 2016-ban azzal a céllal alakult, hogy magas színvonalú, minőségi oktatást biztosítson a capoeira iránt érdeklődők számára.',
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
    'gatsby-plugin-offline',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-130507998-1',
        head: true,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-layout',
  ],
}
