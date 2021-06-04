import React from "react"
import Layout from "../components/layout"
import Order from "../components/home/order"
import Call from "../components/home/call"
import ChooseUs from "../components/termiteInspection/chooseUs"
import Hero from "../components/termiteInspection/hero"
import WhyTermite from "../components/termiteInspection/whyTermite"
import OurServices from "../components/termiteInspection/ourServices"
import InspectionTypes from "../components/termiteInspection/inspectionTypes"
import Experinece from "../components/termiteInspection/experience"
import BlogPost from "../components/termiteInspection/blogPosts"
import envelope1 from "../assets/termite/envelope1.png"
import { graphql } from "gatsby"

export default function termiteInspection({ data }) {
  if (!data) return null
  const order = data.allPrismicHomeOrder.edges[0].node.data
  const call = data.allPrismicHomeCall.edges[0].node.data
  const hero = data.allPrismicTermitePage.edges[0].node.data
  const whyTermite1 = data.allPrismicTermitePageBodyTermite.edges[0].node
  const whyTermite2 = data.allPrismicTermitePageBodyTermite.edges[1].node
  const services = data.allPrismicTermitePageBodyOurServices.edges[0].node
  const inspection1 =
    data.allPrismicTermitePageBodyInspectionTypes.edges[0].node
  const inspection2 =
    data.allPrismicTermitePageBodyInspectionTypes.edges[1].node
  const inspection3 =
    data.allPrismicTermitePageBodyInspectionTypes.edges[2].node
  const chooseUs = data.allPrismicTermitePageBodyChooseUs.edges[0].node
  const carousel = data.allPrismicTermitePageBodyCarousel.edges[0].node.items
  const blog = data.allPrismicTermitePageBodyBlog.edges[0].node.primary
  const blogs = data.allPrismicBlogSection.edges

  return (
    <div>
      <Layout>
        <Hero data={hero} />
        <img src={envelope1} style={{ width: "100%" }} alt="" />
        <WhyTermite data={whyTermite1} data2={whyTermite2} />
        <OurServices data={services} />
        <InspectionTypes
          data={inspection1}
          data2={inspection2}
          data3={inspection3}
        />
        <ChooseUs data={chooseUs} />
        <Experinece data={carousel} />
        <Order data={order} />
        <BlogPost data={blog} blogs={blogs} />
        <Call data={call} />
      </Layout>
    </div>
  )
}

export const query2 = graphql`
  query fetch {
    allPrismicTermitePageBodyCarousel {
      edges {
        node {
          items {
            content {
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
    allPrismicTermitePage {
      edges {
        node {
          data {
            banner_image {
              url
            }
          }
        }
      }
    }
    allPrismicTermitePageBodyTermite {
      edges {
        node {
          primary {
            image {
              url
            }
            subtitle {
              raw
            }
            title {
              raw
            }
          }
          items {
            content {
              raw
            }
          }
        }
      }
    }
    allPrismicTermitePageBodyOurServices {
      edges {
        node {
          items {
            paragraph {
              raw
            }
          }
          primary {
            title {
              raw
            }
            bg_image {
              url
            }
          }
        }
      }
    }
    allPrismicTermitePageBodyChooseUs {
      edges {
        node {
          items {
            paragraph {
              raw
            }
          }
          primary {
            title {
              raw
            }
            bg_image {
              url
            }
          }
        }
      }
    }
    allPrismicTermitePageBodyInspectionTypes {
      edges {
        node {
          items {
            content {
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
  }
`
