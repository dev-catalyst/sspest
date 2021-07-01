import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import CommercialPest from "../components/info/commercialPest"
import CommercialPestServices from "../components/info/commercialPestServices"
import TreatmentServices from "../components/info/treatmentServices"
import ControlPlan from "../components/info/controlPlan"
import Extermination from "../components/info/extermination"
import PestPrevention from "../components/info/pestPrevention"
import ChoosePest from "../components/info/choosePest"
import Order from "../components/home/order"
import BlogPost from "../components/termiteInspection/blogPosts"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"
import { Helmet } from "react-helmet"

const Info = props => {
  React.useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  if (!props.data) return null
  const data = props.data.allPrismicInfo.edges[0].node.dataRaw
  const id = props.data.allPrismicInfo.edges[0].node.uid
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
    src: hero.home_page_hero_banner,
  }
  const title = data.title[0].text
  const description = data.metadescription[0].text

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <CommercialPest data={commercialPest} />
        <CommercialPestServices data={commercialServices} id={id} />
        <TreatmentServices data={treatmentServices} />
        <ControlPlan data={pestInspection} data1={pestPlan} />
        <Extermination data={extermination} id={id} />
        <PestPrevention data={prevention} />
        <ChoosePest data={choose} id={id} />
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
            home_page_hero_banner {
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
            content {
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
