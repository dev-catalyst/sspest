import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import TransportPest from "../components/transport/transportControl"
import TransportServices from "../components/transport/transportServices"
import TransportNeed from "../components/transport/transportNeed"
import ChoosePest from "../components/info/choosePest"
import Order from "../components/home/order"
import BlogPost from "../components/termiteInspection/blogPosts"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"
import separator2 from "../assets/info/separator2.png"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Transport = props => {
  React.useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  if (!props.data) return null
  const data = props.data.allPrismicTransport.edges[0].node.dataRaw
  // data sources
  const call = props.data.allPrismicHomeCall.edges[0].node.data
  const blogs = props.data.allPrismicBlogSection.edges
  const hero = props.data.allPrismicUniversalBlock1.edges[0].node.data
  const control = data.body[0]
  const services = data.body[1]
  const need = data.body[2]
  const choose = data.body[3]
  const order = props.data.allPrismicHomeOrder.edges[0].node.data
  const heroSection = {
    src: hero.home_page_about_image,
  }
  const title = data.title[0].text
  const description = data.metdescription[0].text
  return (
    <div>
      <Helmet>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
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

        <ChoosePest data={choose} />
        <Order data={order} />
        <BlogPost blogs={blogs} />
        <Call data={call} />
      </Layout>
    </div>
  )
}

export const query3 = graphql`
  query MyQuery4($id: String!) {
    allPrismicTransport(filter: { id: { eq: $id } }) {
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
export default Transport
