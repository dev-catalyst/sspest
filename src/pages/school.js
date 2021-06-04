import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Order from "../components/home/order"
import Call from "../components/home/call"
import BlogPost from "../components/termiteInspection/blogPosts"
import ChoosePest from "../components/info/choosePest"
import SchoolControl from "../components/school/schoolControl"
import SchoolServices from "../components/school/schoolServices"
import SchoolNeed from "../components/school/schoolNeed"
import divider1 from "../assets/home/divider1.png"
import { graphql } from "gatsby"
import separator2 from "../assets/info/separator2.png"
export default function Home({ data }) {
  if (!data) return null
  const blog = data.allPrismicTermitePageBodyBlog.edges[0].node.primary
  const blogs = data.allPrismicBlogSection.edges
  const call = data.allPrismicHomeCall.edges[0].node.data
  const order = data.allPrismicHomeOrder.edges[0].node.data
  const hero = data.allPrismicUniversalBlock1.edges[0].node.data
  const choose = data.allPrismicInfoPageBodyChoose.edges[1].node
  const choose1 = data.allPrismicInfoPageBodyChoose.edges[0].node
  const pest = data.allPrismicSchoolPageBodySchoolPest.edges[0].node.primary
  const control = data.allPrismicSchoolPageBodySchoolServices.edges[0].node
  const need = data.allPrismicSchoolPageBodySchoolNeed.edges[0].node
  const heroSection = {
    src: hero.home_page_about_image,
  }
  return (
    <div>
      <Layout>
        <Hero data={heroSection} />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <SchoolControl data={pest} />
        <SchoolServices data={control} />
        <SchoolNeed data={need} />
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
  query school {
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
    allPrismicSchoolPageBodySchoolPest {
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
    allPrismicSchoolPageBodySchoolServices {
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
    allPrismicSchoolPageBodySchoolNeed {
      edges {
        node {
          items {
            points {
              raw
            }
          }
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
        }
      }
    }
  }
`
