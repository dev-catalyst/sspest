import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"

import PricingControl from "../components/pricing/pest Control"
import GetQuote from "../components/pricing/getQuote"
import PricingChoose from "../components/pricing/choose"
import BlogPost from "../components/termiteInspection/blogPosts"
import divider1 from "../assets/home/divider1.png"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Blog({ data }) {
  if (!data) return null
  const pricingData = data.allPrismicPricing.edges[0].node.dataRaw
  const getQuote = pricingData.body[0]
  const choose = pricingData.body[1]
  const hero = data.allPrismicUniversalBlock1.edges[0].node.data
  const blogs = data.allPrismicBlogSection.edges
  const heroSection = {
    src: hero.home_page_about_image,
  }
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Out of the hundreds of pest control companies across Sydney, we offer the best service at a cheap price."
        />
        <title>Pest Control Pricing</title>
      </Helmet>
      <Layout>
        <Hero data={heroSection} />{" "}
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <PricingControl data={pricingData} />
        <GetQuote data={getQuote} />
        <PricingChoose data={choose} />
        <BlogPost blogs={blogs} />
      </Layout>
    </div>
  )
}

export const queryPricing = graphql`
  query queryPricing {
    allPrismicUniversalBlock1 {
      edges {
        node {
          data {
            home_page_about_image {
              url
            }
          }
        }
      }
    }
    allPrismicPricing {
      edges {
        node {
          dataRaw
          id
        }
      }
    }
    allPrismicBlogSection {
      edges {
        node {
          data {
            content {
              raw
              text
            }
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
