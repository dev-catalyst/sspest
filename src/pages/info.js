import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Order from "../components/home/order"
import Call from "../components/home/call"
import BlogPost from "../components/termiteInspection/blogPosts"
import CommercialPest from "../components/info/commercialPest"
import CommercialPestServices from "../components/info/commercialPestServices"
import TreatmentServices from "../components/info/treatmentServices"
import ControlPlan from "../components/info/controlPlan"
import Extermination from "../components/info/extermination"
import PestPrevention from "../components/info/pestPrevention"
import ChoosePest from "../components/info/choosePest"
import divider1 from "../assets/home/divider1.png"
import { graphql } from "gatsby"

export default function Home({ data }) {
  if (!data) return null
  const commercialPest =
    data.allPrismicInfoPageBodyCommercialPestControl.edges[0].node.primary
  const commercialServices =
    data.allPrismicInfoPageBodyCommercialServices.edges[0].node
  const treatmentServices =
    data.allPrismicInfoPageBodyTreatmentServices.edges[0].node
  const treatmentServices1 =
    data.allPrismicInfoPageBodyTreatmentServices.edges[1].node
  const treatmentServices2 =
    data.allPrismicInfoPageBodyTreatmentServices.edges[2].node
  const extermination = data.allPrismicInfoPageBodyExtermination.edges[0].node
  const prevention = data.allPrismicInfoPageBodyPestPrevention.edges[0].node
  const choose = data.allPrismicInfoPageBodyChoose.edges[1].node
  const choose1 = data.allPrismicInfoPageBodyChoose.edges[0].node
  const plan1 = data.allPrismicInfoPageBodyPlan.edges[0].node.primary
  const plan2 = data.allPrismicInfoPageBodyPlan.edges[1].node.primary
  const blog = data.allPrismicTermitePageBodyBlog.edges[0].node.primary
  const blogs = data.allPrismicBlogSection.edges
  const call = data.allPrismicHomeCall.edges[0].node.data
  const order = data.allPrismicHomeOrder.edges[0].node.data
  const hero = data.allPrismicUniversalBlock1.edges[0].node.data
  const heroSection = {
    src: hero.home_page_about_image,
  }
  return (
    <div>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <CommercialPest data={commercialPest} />
        <CommercialPestServices data={commercialServices} />
        <TreatmentServices
          data={treatmentServices}
          data1={treatmentServices1}
          data2={treatmentServices2}
        />
        <ControlPlan data={plan1} data1={plan2} />
        <Extermination data={extermination} />
        <PestPrevention data={prevention} />
        <ChoosePest data={choose} data1={choose1} />
        <Order data={order} />
        <BlogPost data={blog} blogs={blogs} />
        <Call data={call} />
      </Layout>
    </div>
  )
}

export const query2 = graphql`
  query info {
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
    allPrismicInfoPageBodyCommercialPestControl {
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
    allPrismicInfoPageBodyCommercialServices {
      edges {
        node {
          items {
            description {
              raw
            }
          }
          primary {
            bg_image {
              url
            }
            bg_small_image {
              url
            }
            title {
              raw
            }
          }
        }
      }
    }
    allPrismicInfoPageBodyTreatmentServices {
      edges {
        node {
          primary {
            conclusion {
              raw
            }
            following {
              raw
            }
            offer {
              raw
            }
            title {
              raw
            }
          }
          items {
            services {
              raw
            }
          }
        }
      }
    }
    allPrismicInfoPageBodyPlan {
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
    allPrismicInfoPageBodyExtermination {
      edges {
        node {
          primary {
            bg_image {
              url
            }
            bg_small_image {
              url
            }
            title {
              raw
            }
          }
          items {
            description {
              raw
            }
          }
        }
      }
    }
    allPrismicInfoPageBodyPestPrevention {
      edges {
        node {
          primary {
            bg_image {
              url
            }
            bg_small_image {
              url
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
            list {
              raw
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
  }
`
