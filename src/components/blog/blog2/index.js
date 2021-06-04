import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function Blog2({ data }) {
  const date = RichText.asText(data.date.raw)
  const count = data.comments
  return (
    <div className="blog-blog2">
      <div className="container">
        <div className="blog-blog2-content">
          <div className="blog-blog2-content-image">
            <img src={data.image.url} alt="" />
          </div>
          <h3>{RichText.asText(data.title.raw)}</h3>
          <p className="center-p">Posted {date}</p>
          <p>{RichText.asText(data.content.raw)}</p>
          <div className="bottom-text">
            <div className="button-container">
              <Button themeType="outline" className="blog2-button">
                Termites
              </Button>
              <Button themeType="outline" className="blog2-button">
                Pest Control
              </Button>
              <Button themeType="outline" className="blog2-button">
                Inspection
              </Button>
            </div>
            <p className="comments">{count} Comments</p>
          </div>
        </div>
      </div>
    </div>
  )
}
