const plugins = [
  {
    /**
     * First up is the WordPress source plugin that connects Gatsby
     * to your WordPress site.
     *
     * visit the plugin docs to learn more
     * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
     *
     */
    resolve: `gatsby-source-wordpress`,
    options: {
      // the only required plugin option for WordPress is the GraphQL url.
      url: "https://cms.eqm-int.com/graphql",
      html: {
        placeholderType: "blurred",
      },
      type: {
        MediaItem: {
          createFileNodes: false,
        },
      },
      schema: {
        timeout: 140000,
        requestConcurrency: 5,
        previewRequestConcurrency: 2,
        perPage: 20,
      },
    },
  },

  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-image`,

  "gatsby-plugin-react-helmet",

  /**
   * this (optional) plugin enables Progressive Web App + Offline functionality
   * To learn more, visit: https://gatsby.dev/offline
   */
  // `gatsby-plugin-offline`,
]

module.exports = {
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */
  graphqlTypegen: true,
  plugins,
  trailingSlash: "never",
  flags: { FAST_DEV: true },
}
