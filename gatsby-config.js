const { setBranchEnvironment } = require('./envHelper')

setBranchEnvironment()

module.exports = {
  siteMetadata: {
    title: `Gatsby ts and netlify cms starter`,
    description: `Get it going with the TS starter and netlify cms.`,
    author: `@kiliw`,
  },
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    'gatsby-plugin-netlify-cms',
  ],
}
