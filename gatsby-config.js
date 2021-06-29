/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "SSPest - expertise.service.trust",
    description: "Pest Control Services",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: "pestcontrol",
        // pages: [
        //   {
        //     type: "Selling",
        //     match: "/:uid",
        //     path: "/",
        //     component: require.resolve("./src/templates/selling.js"),
        //   },
        // ],
        accessToken:
          "MC5ZQ1NucXhJQUFDSUFTZ2hZ.77-977-977-977-9K--_ve-_ve-_vW1d77-977-977-9dUZZ77-9eTNv77-9e--_vXweR--_vUxwYRzvv70",
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,

        schemas: {
          universal_block_1: require("./src/schemas/universal_block_1.json"),
          hero_banner: require("./src/schemas/hero-banner.json"),
          home_order: require("./src/schemas/home_order.json"),
          blog_page: require("./src/schemas/blog_page.json"),
          home_page: require("./src/schemas/home_page.json"),
          home_call: require("./src/schemas/home_call.json"),
          blog_section: require("./src/schemas/blog_section.json"),
          selling: require("./src/schemas/selling.json"),
          info: require("./src/schemas/info.json"),
          transport: require("./src/schemas/transport.json"),
          region: require("./src/schemas/region.json"),
          pricing: require("./src/schemas/pricing.json"),
        },
        fetchLinks: ["page.parent"],
      },
    },
  ],
}
