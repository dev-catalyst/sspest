import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import BlackTown from "../components/landing/blacktown"
import Address from "../components/landing/address"
import Reliable from "../components/landing/reliable"
import Qualified from "../components/landing/qualified"
import Proficient from "../components/landing/proficient"
import Services from "../components/landing/services"
import Quote from "../components/landing/quote"
import BlogPost from "../components/termiteInspection/blogPosts"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default function Region(props) {
  React.useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  if (!props.data) return null
  const data = props.data.allPrismicRegion.edges[0].node.dataRaw
  console.log(data)
  // data sources
  const call = props.data.allPrismicHomeCall.edges[0].node.data
  const blogs = props.data.allPrismicBlogSection.edges

  const hero = props.data.allPrismicUniversalBlock1.edges[0].node.data
  const black = data.body[0]
  const address = data.body[1]
  const reliable = data.body[2]
  const carousel = data.body[3]
  const proficient = data.body[4]
  const services = data.body[5]
  const quote = data.body[6]
  const heroSection = {
    src: hero.home_page_about_image,
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
        <BlackTown data={black} />
        <Address data={address} />
        <Reliable data={reliable} />
        <Qualified data={carousel} />
        <Proficient data={proficient} />
        <Services data={services} />
        <Quote data={quote} />
        <BlogPost blogs={blogs} />
        <Call data={call} />
      </Layout>
    </div>
  )
}

export const query5 = graphql`
  query MyQuery5($id: String!) {
    allPrismicRegion(filter: { id: { eq: $id } }) {
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
  }
`
