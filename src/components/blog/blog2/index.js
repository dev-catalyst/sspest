import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import "./style.scss"

export default function Blog2({ data }) {
  const date = RichText.asText(data.date.raw)
  return (
    <div className="blog-blog2">
      <div className="container">
        <div className="blog-blog2-content">
          <div className="blog-blog2-content-image">
            <img src={data.image.url} alt="" />
          </div>
          <h3>{RichText.asText(data.title.raw)}</h3>
          <p className="center-p">Posted {data.date}</p>
          <p>{RichText.asText(data.content.raw)}</p>
          <div className="bottom-text">
            <div className="button-container">
              <Link to="/the-termite">
                <Button themeType="outline" className="blog2-button">
                  Termite
                </Button>
              </Link>
              <Link to="/commercial-pest-control">
                <Button themeType="outline" className="blog2-button">
                  Pest Control
                </Button>
              </Link>
              <Link to="/pest-inspection">
                <Button themeType="outline" className="blog2-button">
                  Inspection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
