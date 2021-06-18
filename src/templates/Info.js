import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Order from "../components/home/order"
import Call from "../components/home/call"
import Hero from "../components/home/hero"
import BlogPost from "../components/termiteInspection/blogPosts"
import CommercialPest from "../components/info/commercialPest"
import CommercialPestServices from "../components/info/commercialPestServices"
import TreatmentServices from "../components/info/treatmentServices"
import ControlPlan from "../components/info/controlPlan"
import Extermination from "../components/info/extermination"
import PestPrevention from "../components/info/pestPrevention"
import ChoosePest from "../components/info/choosePest"
import divider1 from "../assets/home/divider1.png"
import { Helmet } from "react-helmet"

const Info = props => {
  React.useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  if (!props.data) return null
  const data = props.data.allPrismicInfo.edges[0].node.dataRaw
  // data sources
  const call = props.data.allPrismicHomeCall.edges[0].node.data
  const blogs = props.data.allPrismicBlogSection.edges
  const hero = props.data.allPrismicUniversalBlock1.edges[0].node.data
  const commercialPest = data.body[0]
  const commercialServices = data.body[1]
  const treatmentServices = data.body[2]
  const pestInspection = data.body[3]
  const pestPlan = data.body[4]
  const extermination = data.body[5]
  const prevention = data.body[6]
  const choose = data.body[7]
  const order = props.data.allPrismicHomeOrder.edges[0].node.data
  const heroSection = {
    src: hero.home_page_about_image,
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="" />
        <title>SSPest - expertise.service.trust</title>
      </Helmet>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <CommercialPest data={commercialPest} />
        <CommercialPestServices data={commercialServices} />
        <TreatmentServices data={treatmentServices} />
        <ControlPlan data={pestInspection} data1={pestPlan} />
        <Extermination data={extermination} />
        <PestPrevention data={prevention} />
        <ChoosePest data={choose} />
        <Order data={order} />
        <BlogPost blogs={blogs} />
        <Call data={call} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query MyQuery3($id: String!) {
    allPrismicInfo(filter: { id: { eq: $id } }) {
      edges {
        node {
          uid
          id
          dataRaw
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
  }
`
export default Info
