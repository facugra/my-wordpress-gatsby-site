const plugins = [
  {
    resolve: `gatsby-source-wordpress`,
    options: {
      url: "https://cms.eqm-int.com/graphql",
      // removing the following block shows images, but removes their linking capabilities
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
]

module.exports = {
  graphqlTypegen: true,
  plugins,
  trailingSlash: "never",
  flags: { FAST_DEV: true },
}
