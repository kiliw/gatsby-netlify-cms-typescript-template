const { setBranchEnvironment } = require('./envHelper')

setBranchEnvironment()

module.exports = {
  siteMetadata: {
    title: `Gatsby ts and netlify cms starter`,
    description: `Get it going with the TS starter and netlify cms.`,
    author: `@kiliw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-netlify-cms',
    `gatsby-transformer-json`,
    'gatsby-plugin-i18n',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/content/`,
      },
    },
  ],
}
