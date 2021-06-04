import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import PestControl from "../components/home/pestControl"
import WhoAreWe from "../components/home/whoAreWe"
import ServiceTeam from "../components/home/serviceTeam"
import BusinessTypes from "../components/home/businessTy"
import Prevention from "../components/home/prevention"
import Expertise from "../components/home/expertise"
import PestControl2 from "../components/home/pestControl2"
import Reasons from "../components/home/reasons"
import PestControl3 from "../components/home/pestControl3"
import Reviews from "../components/home/reviews"
import Quote from "../components/home/quote"
import Choose from "../components/home/choose"
import Order from "../components/home/order"
import Blog from "../components/home/blog"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"

import { graphql } from "gatsby"

export default function Home({ data }) {
  if (!data) return null
  const pestControl2 = data.allPrismicHomePageBodyPestControl2.edges[0].node
  const hero = data.allPrismicUniversalBlock1.edges[0].node.data
  const pestControl =
    data.allPrismicHomePageBodyPestControl1.edges[0].node.primary
  const call = data.allPrismicHomeCall.edges[0].node.data
  const whoAreWe = data.allPrismicHomePageBodyWhoarewe.edges[0].node.primary
  const serviceTeam = data.allPrismicHomePageBodyServiceTeam.edges[0].node
  const serviceType1 =
    data.allPrismicHomePageBodyServiceTypes.edges[0].node.primary
  const serviceType2 =
    data.allPrismicHomePageBodyServiceTypes.edges[1].node.primary
  const serviceType3 =
    data.allPrismicHomePageBodyServiceTypes.edges[2].node.primary
  const freeQuote = data.allPrismicHomePageBodyFreeQuote.edges[0].node.primary
  const order = data.allPrismicHomeOrder.edges[0].node.data
  const reasons = data.allPrismicHomePageBodyReasons.edges[0].node
  const pestControl3 = data.allPrismicHomePageBodyPestControl3.edges[0].node
  const prevention = data.allPrismicHomePageBodyPrevention.edges[0].node
  const reviews = data.allPrismicHomePageBodyCompanyReviews.edges[0].node
  const choose = data.allPrismicHomePageBodyChoose.edges[0].node
  const blogs = data.allPrismicBlogSection.edges
  const testimonial =
    data.allPrismicHomePageBodyTestimonial.edges[0].node.primary
  const expertise = data.allPrismicHomePageBodyExpertise.edges[0].node

  const heroSection = {
    src: hero.home_page_about_image,
  }

  return (
    <div>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <PestControl data={pestControl} />
        <WhoAreWe data={whoAreWe} />
        <ServiceTeam data={serviceTeam} />
        <BusinessTypes
          data={serviceType1}
          data2={serviceType2}
          data3={serviceType3}
        />
        <Prevention data={prevention} />
        <Expertise data={expertise} />
        <PestControl2 data={pestControl2} />
        <Reasons data={reasons} />
        <PestControl3 data={pestControl3} />
        <Reviews data={reviews} data2={testimonial} />
        <Quote data={freeQuote} />
        <Choose data={choose} />
        <Order data={order} />
        <Blog data={blogs} />
        <Call data={call} />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
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
    allPrismicHomePageBodyServiceTeam {
      edges {
        node {
          primary {
            bg_image {
              url
            }
            bg_image_small {
              url
            }
            description {
              raw
            }
            title {
              raw
            }
          }
          items {
            team_image {
              url
            }
          }
        }
      }
    }
    allPrismicHomePageBodyChoose {
      edges {
        node {
          items {
            points {
              raw
            }
          }
          primary {
            description {
              raw
            }
            quote {
              raw
            }
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicHomePageBodyPestControl3 {
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
    allPrismicHomePageBodyReasons {
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
    allPrismicHomePageBodyCompanyReviews {
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
    allPrismicHomePageBodyServiceTypes {
      edges {
        node {
          primary {
            description {
              raw
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
    allPrismicHomePageBodyPestControl2 {
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
    allPrismicHomePageBodyPestControl1 {
      edges {
        node {
          primary {
            description {
              raw
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
    allPrismicHomePageBodyFreeQuote {
      edges {
        node {
          primary {
            bg_image {
              url
            }
            description {
              raw
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
    allPrismicHomePageBodyWhoarewe {
      edges {
        node {
          primary {
            description {
              raw
            }
            subtitle {
              raw
            }
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicHomeOrder {
      edges {
        node {
          data {
            button {
              url
            }
            contact_no {
              raw
            }
            content {
              raw
            }
            email_id {
              raw
            }
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
    allPrismicHomePageBodyPrevention {
      edges {
        node {
          items {
            reasons {
              raw
            }
          }
          primary {
            keynote {
              raw
            }
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicHomePageBodyTestimonial {
      edges {
        node {
          primary {
            author_name {
              raw
            }
            author_place {
              raw
            }
            finally {
              raw
            }
            image {
              url
            }
            quote {
              raw
            }
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicHomePageBodyExpertise {
      edges {
        node {
          items {
            icons {
              url
            }
            pest_types {
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
  }
`
