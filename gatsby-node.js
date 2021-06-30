/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

const generatePathname = input => {
  console.log(input)
  const output = input.replace(/ +/g, "-").toLowerCase()
  console.log(output)
  return output
}

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
          data {
            parent_name
          }
        }
      }
    }
  `)

  sellings.data.allPrismicSelling.nodes.forEach(selling => {
    createPage({
      path:
        selling.data.parent_name !== null
          ? `${generatePathname(selling.data.parent_name)}/${selling.uid}`
          : selling.uid,
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
          data {
            parent_name
          }
        }
      }
    }
  `)

  infos.data.allPrismicInfo.nodes.forEach(info => {
    createPage({
      path:
        info.data.parent_name !== null
          ? `${generatePathname(info.data.parent_name)}/${info.uid}`
          : info.uid,
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
          data {
            parent_name
          }
        }
      }
    }
  `)

  transports.data.allPrismicTransport.nodes.forEach(transport => {
    createPage({
      path:
        transport.data.parent_name !== null
          ? `${generatePathname(transport.data.parent_name)}/${transport.uid}`
          : transport.uid,
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
          data {
            parent_name
          }
        }
      }
    }
  `)

  regions.data.allPrismicRegion.nodes.forEach(region => {
    createPage({
      path:
        region.data.parent_name !== null
          ? `${generatePathname(region.data.parent_name)}/${region.uid}`
          : region.uid,
      // gernratePathname will return hyphenated lowercase string. For example, 'Next Page' will return as 'next-page'
      component: path.resolve(__dirname, "src/templates/Region.js"),
      context: { ...region },
    })
  })
}
