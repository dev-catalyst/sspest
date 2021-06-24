import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/termiteInspection/hero"
import WhyTermite from "../components/termiteInspection/whyTermite"
import OurServices from "../components/termiteInspection/ourServices"
import InspectionTypes from "../components/termiteInspection/inspectionTypes"
import ChooseUs from "../components/termiteInspection/chooseUs"
import Experinece from "../components/termiteInspection/experience"
import Order from "../components/termiteInspection/order"
import BlogPost from "../components/termiteInspection/blogPosts"
import Call from "../components/home/call"
import envelope1 from "../assets/termite/envelope1.png"
import { Helmet } from "react-helmet"

const Selling = props => {
  React.useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  if (!props.data) return null
  const data = props.data.allPrismicSelling.edges[0].node.dataRaw
  const title = data.title[0].text
  const description = data.metadescription[0].text
  // data sources
  const pestcontrol = data.body[0]
  const whyTermite = data.body[1]
  const services = data.body[2]
  const preInspection = data.body[3]
  const theInspection = data.body[4]
  const postInspection = data.body[5]
  const chooseUs = data.body[6]
  const carousel = data.body[7]
  const order = data.body[8]
  const call = props.data.allPrismicHomeCall.edges[0].node.data
  const blogs = props.data.allPrismicBlogSection.edges
  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      <Layout>
        <Hero data={data} />
        <img src={envelope1} style={{ width: "100%" }} alt="" />
        <WhyTermite data={pestcontrol} data2={whyTermite} />
        <OurServices data={services} />
        <InspectionTypes
          data={preInspection}
          data2={theInspection}
          data3={postInspection}
        />
        <ChooseUs data={chooseUs} />
        <Experinece data={carousel} />
        <Order data={order} />
        <BlogPost blogs={blogs} />
        <Call data={call} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query MyQuery2($id: String!) {
    allPrismicSelling(filter: { id: { eq: $id } }) {
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
  }
`
export default Selling
