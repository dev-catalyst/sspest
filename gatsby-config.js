/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "pestcontrol",
        accessToken:
          "MC5ZQ1NucXhJQUFDSUFTZ2hZ.77-977-977-977-9K--_ve-_ve-_vW1d77-977-977-9dUZZ77-9eTNv77-9e--_vXweR--_vUxwYRzvv70",
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          universal_block_1: require("./src/schemas/universal_block_1.json"),
          hero_banner: require("./src/schemas/hero-banner.json"),
          home_order: require("./src/schemas/home_order.json"),
          termite_page: require("./src/schemas/termite_page.json"),
          info_page: require("./src/schemas/info_page.json"),
          transport_page: require("./src/schemas/transport_page.json"),
          school_page: require("./src/schemas/school_page.json"),
          blog_page: require("./src/schemas/blog_page.json"),
          landing_page: require("./src/schemas/landing_page.json"),
          home_page: require("./src/schemas/home_page.json"),
          home_call: require("./src/schemas/home_call.json"),
          blog_section: require("./src/schemas/blog_section.json"),
        },
      },
    },
  ],
}
