/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Shishir Srivastava",
    description: "Shishir Srivastava's personal blog",
    author: {
      name: "Shishir Srivastava",
    },
    social: {
      twitter: "_shishir01",
      polywork: "shishir",
      github: "shishir-srivastava",
      linkedin: "shishir4",
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
