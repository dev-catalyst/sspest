/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const sellings = await graphql(`
    {
      allPrismicSelling {
        nodes {
          id
          uid
          lang
          type
        }
      }
    }
  `)

  sellings.data.allPrismicSelling.nodes.forEach(selling => {
    createPage({
      path: selling.uid,
      component: path.resolve(__dirname, "src/templates/Selling.js"),
      context: { ...selling },
    })
  })

  const infos = await graphql(`
    {
      allPrismicInfo {
        nodes {
          id
          uid
          lang
          type
        }
      }
    }
  `)

  infos.data.allPrismicInfo.nodes.forEach(info => {
    createPage({
      path: info.uid,
      component: path.resolve(__dirname, "src/templates/Info.js"),
      context: { ...info },
    })
  })

  const transports = await graphql(`
    {
      allPrismicTransport {
        nodes {
          id
          uid
          lang
          type
        }
      }
    }
  `)

  transports.data.allPrismicTransport.nodes.forEach(transport => {
    createPage({
      path: transport.uid,
      component: path.resolve(__dirname, "src/templates/Transport.js"),
      context: { ...transport },
    })
  })

  const regions = await graphql(`
    {
      allPrismicRegion {
        nodes {
          id
          uid
          lang
          type
        }
      }
    }
  `)

  regions.data.allPrismicRegion.nodes.forEach(region => {
    createPage({
      path: region.uid,
      component: path.resolve(__dirname, "src/templates/Region.js"),
      context: { ...region },
    })
  })
}
