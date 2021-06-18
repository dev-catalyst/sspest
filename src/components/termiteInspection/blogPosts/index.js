import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function BlogPosts({ blogs }) {
  return (
    <div className="termite-blog">
      <div className="container">
        <h1>
          <img src={stone} slt="" className="termite-stone" alt="" />
          OUR BLOG POSTS
        </h1>
        <p>
          Our website has been professionally crafted in order to englobe
          essential information on the practice so that you can have an in-depth
          look at the issues that might be surrounding their concerns and how we
          face any given scenario. Have a look around, there is plenty to read
          and learn!
        </p>
        <div className="termite-posts">
          {blogs.slice(0, 3).map((blog, index) => {
            return (
              <div className="termite-post" key={index}>
                <img
                  src={blog.node.data.image.url}
                  alt=""
                  className="termite-post-image"
                />
                <div className="termite-post-card">
                  <h4> {RichText.asText(blog.node.data.title.raw)}</h4>
                  <p>{blog.node.data.content.text.slice(0, 100) + "..."}</p>
                  <Button themeType="contained" className="read">
                    READ MORE
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
