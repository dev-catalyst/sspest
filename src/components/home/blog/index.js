import React from "react"
import { Button } from "@react-md/button"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function Blog({ data }) {
  return (
    <div className="home-blog">
      <div className="home-blog-container">
        <h1>
          <img src={stone} slt="" className="h1-stone" alt="" />
          BLOG POSTS
        </h1>
        <div className="posts">
          {data.slice(0, 3).map((blog, index) => {
            return (
              <div key={index} className="post-conatiner">
                {blog.node.data.image ? (
                  <img
                    src={blog.node.data.image.url}
                    alt=""
                    className="post-image"
                  />
                ) : null}

                <div className="post-card">
                  <h4>{RichText.asText(blog.node.data.title.raw)}</h4>
                  <p>{blog.node.data.content.text.slice(0, 130) + "..."}</p>
                  <Link to="/blog">
                    <Button themeType="contained" className="learn">
                      LEARN MORE
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
