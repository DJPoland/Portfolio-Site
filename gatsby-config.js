module.exports = {
  siteMetadata: {
    title: "Donald Poland | Portfolio",
    author: "Donald Poland",
    description: "Donald Poland's Portfolio constructed by using a Gatsby.js V2 Starter"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui', // This path is relative to the root of the site.
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
