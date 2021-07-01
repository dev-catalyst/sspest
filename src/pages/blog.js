import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Latest from "../components/blog/latest"
import Blog1 from "../components/blog/blog1"
import Blog2 from "../components/blog/blog2"
import Blog3 from "../components/blog/blog3"
import divider1 from "../assets/home/divider1.png"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Blog({ data }) {
  if (!data) return null
  const len = data.allPrismicBlogSection.edges.length

  const hero = data.allPrismicUniversalBlock1.edges[0].node.data
  const blog1 = data.allPrismicBlogSection.edges[0].node.data
  const blog2 = data.allPrismicBlogSection.edges[1].node.data
  const blog3 = data.allPrismicBlogSection.edges.slice(2, len)
  const latest = data.allPrismicBlogPageBodyLatest.edges[0].node.primary
  const blog1_bg = data.allPrismicBlogPageBodyBlog1.edges[0].node.primary
  const blog3_bg = data.allPrismicBlogPageBodyBlog3.edges[0].node.primary

  const heroSection = {
    src: hero.home_page_hero_banner,
  }
  return (
    <div>
      <Helmet>
        <meta name="description" content="" />
        <title>SSPest - expertise.service.trust</title>
      </Helmet>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <Latest data={latest} />
        <Blog1 data={blog1} bg={blog1_bg} />
        <Blog2 data={blog2} />
        <Blog3 bg={blog3_bg} data={blog3} />
      </Layout>
    </div>
  )
}

export const query2 = graphql`
  query blog {
    allPrismicUniversalBlock1 {
      edges {
        node {
          data {
            home_page_hero_banner {
              url
            }
          }
        }
      }
    }
    allPrismicBlogPageBodyLatest {
      edges {
        node {
          primary {
            description {
              raw
            }
            title {
              raw
            }
            subtitle {
              raw
            }
          }
        }
      }
    }
    allPrismicBlogPageBodyBlog1 {
      edges {
        node {
          primary {
            bg_image {
              url
            }
          }
        }
      }
    }
    allPrismicBlogPageBodyBlog3 {
      edges {
        node {
          primary {
            bg_image {
              url
            }
          }
        }
      }
    }
    allPrismicBlogSection(
      filter: {}
      sort: { fields: data___date, order: DESC }
    ) {
      edges {
        node {
          data {
            content {
              raw
            }
            date(formatString: "MMMM DD, YYYY")
            image {
              url
            }
            title {
              raw
            }
          }
        }
      }
    }
  }
`
