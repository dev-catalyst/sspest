import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Order from "../components/home/order"
import Call from "../components/home/call"
import BlogPost from "../components/termiteInspection/blogPosts"
import ChoosePest from "../components/info/choosePest"
import TransportServices from "../components/transport/transportServices"
import TransportPest from "../components/transport/transportControl"
import TransportNeed from "../components/transport/transportNeed"
import divider1 from "../assets/home/divider1.png"
import separator2 from "../assets/info/separator2.png"
import { graphql } from "gatsby"

export default function Home({ data }) {
  if (!data) return null
  const call = data.allPrismicHomeCall.edges[0].node.data
  const order = data.allPrismicHomeOrder.edges[0].node.data
  const hero = data.allPrismicUniversalBlock1.edges[0].node.data
  const choose = data.allPrismicInfoPageBodyChoose.edges[1].node
  const choose1 = data.allPrismicInfoPageBodyChoose.edges[0].node
  const control =
    data.allPrismicTransportPageBodyPestControl.edges[0].node.primary
  const services = data.allPrismicTransportPageBodyServices.edges[0].node
  const need = data.allPrismicTransportPageBodyNeed.edges[0].node
  const blog = data.allPrismicTermitePageBodyBlog.edges[0].node.primary
  const blogs = data.allPrismicBlogSection.edges
  const heroSection = {
    src: hero.home_page_about_image,
  }
  return (
    <div>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <TransportPest data={control} />
        <TransportServices data={services} />
        <TransportNeed data={need} />
        <img
          src={separator2}
          style={{ width: "100%", backgroundColor: "#dde4ec" }}
          alt=""
        />
        <ChoosePest data={choose} data1={choose1} />
        <Order data={order} />
        <BlogPost data={blog} blogs={blogs} />
        <Call data={call} />
      </Layout>
    </div>
  )
}

export const query2 = graphql`
  query transport {
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
    allPrismicInfoPageBodyChoose {
      edges {
        node {
          primary {
            title {
              raw
            }
            following {
              raw
            }
            description {
              raw
            }
            conclusion {
              raw
            }
          }
          items {
            reasons {
              raw
            }
          }
        }
      }
    }
    allPrismicTransportPageBodyPestControl {
      edges {
        node {
          primary {
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
    allPrismicTransportPageBodyServices {
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
    allPrismicTransportPageBodyNeed {
      edges {
        node {
          primary {
            conclusion {
              raw
            }
            description {
              raw
            }
            following {
              raw
            }
            title {
              raw
            }
          }
          items {
            points {
              raw
            }
          }
        }
      }
    }
  }
`
