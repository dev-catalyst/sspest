import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Call from "../components/home/call"
import BlogPost from "../components/termiteInspection/blogPosts"
import BlackTown from "../components/landing/blacktown"
import Address from "../components/landing/address"
import Reliable from "../components/landing/reliable"
import Qualified from "../components/landing/qualified"
import Proficient from "../components/landing/proficient"
import Services from "../components/landing/services"
import Quote from "../components/landing/quote"
import divider1 from "../assets/home/divider1.png"
import { graphql } from "gatsby"

export default function Home({ data }) {
  if (!data) return null
  const blog = data.allPrismicTermitePageBodyBlog.edges[0].node.primary
  const blogs = data.allPrismicBlogSection.edges
  const call = data.allPrismicHomeCall.edges[0].node.data
  const hero = data.allPrismicUniversalBlock1.edges[0].node.data
  const black = data.allPrismicLandingPageBodyBlackTown.edges[0].node
  const address = data.allPrismicLandingPageBodyAddress.edges[0].node.primary
  const reliable = data.allPrismicLandingPageBodyReliable.edges[0].node
  const carousel = data.allPrismicLandingPageBodyCarousel.edges[0].node
  const proficient = data.allPrismicLandingPageBodyProficient.edges[0].node
  const services = data.allPrismicLandingPageBodyServices.edges[0].node
  const quote = data.allPrismicLandingPageBodyQuote.edges[0].node.primary
  const heroSection = {
    src: hero.home_page_about_image,
  }
  return (
    <div>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <BlackTown data={black} />
        <Address data={address} />
        <Reliable data={reliable} />
        <Qualified data={carousel} />
        <Proficient data={proficient} />
        <Services data={services} />
        <Quote data={quote} />
        <BlogPost data={blog} blogs={blogs} />
        <Call data={call} />
      </Layout>
    </div>
  )
}

export const query2 = graphql`
  query landing {
    allPrismicTermitePageBodyBlog {
      edges {
        node {
          primary {
            paragraph {
              raw
            }
            title {
              raw
            }
          }
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
    allPrismicHomeCall {
      edges {
        node {
          data {
            image {
              url
            }
            bg_image {
              url
            }
            paragraph {
              raw
            }
            title {
              raw
            }
          }
        }
      }
    }
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
    allPrismicLandingPageBodyBlackTown {
      edges {
        node {
          items {
            content {
              raw
            }
          }
          primary {
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicLandingPageBodyAddress {
      edges {
        node {
          primary {
            address {
              raw
            }
            bg_image {
              url
            }
            map_icon {
              url
            }
            map_link {
              url
            }
            search_icon {
              url
            }
            services {
              raw
            }
            time_icon {
              url
            }
          }
        }
      }
    }
    allPrismicLandingPageBodyReliable {
      edges {
        node {
          items {
            content {
              raw
            }
          }
          primary {
            bg_image {
              url
            }
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicLandingPageBodyCarousel {
      edges {
        node {
          items {
            description {
              raw
            }
            subtitle {
              raw
            }
          }
          primary {
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
    allPrismicLandingPageBodyProficient {
      edges {
        node {
          items {
            content {
              raw
            }
          }
          primary {
            bg_image {
              url
            }
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicLandingPageBodyServices {
      edges {
        node {
          items {
            description {
              raw
            }
            subtitle {
              raw
            }
          }
          primary {
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
    allPrismicLandingPageBodyQuote {
      edges {
        node {
          primary {
            bg_image {
              url
            }
            paragraph {
              raw
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
