import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function BlogPosts({ data, blogs }) {
  return (
    <div className="termite-blog">
      <div className="container">
        <h1>
          <img src={stone} slt="" className="termite-stone" alt="" />
          {RichText.asText(data.title.raw)}
        </h1>
        <p>{RichText.asText(data.paragraph.raw)}</p>
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
                  <p>{blog.node.data.content.text.slice(0, 250) + "..."}</p>
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
