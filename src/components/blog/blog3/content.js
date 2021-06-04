import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import img3 from "../../../assets/blog/blog3-img.png"
import "./style.scss"

export default function content({ data }) {
  const info = data.node.primary
  const date = RichText.asText(info.date.raw)
  const count = info.comments
  return (
    <div className="blog-blog3-content">
      <div className="blog-blog3-content-image">
        <img src={img3} alt="" />
      </div>
      <h3>{RichText.asText(info.title.raw)}</h3>
      <p className="center-p">Posted {date}</p>
      <p>{RichText.asText(info.content.raw)}</p>
      <div className="bottom-text">
        <div className="button-container">
          <Button themeType="outline" className="blog3-button">
            Termites
          </Button>
          <Button themeType="outline" className="blog3-button">
            Pest Control
          </Button>
          <Button themeType="outline" className="blog3-button">
            Inspection
          </Button>
        </div>
        <p className="comments">{count} Comments</p>
      </div>
    </div>
  )
}
