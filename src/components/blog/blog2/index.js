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
          <p className="center-p">Posted {date}</p>
          <p>{RichText.asText(data.content.raw)}</p>
          <div className="bottom-text">
            <div className="button-container">
              {data.body[0].items.slice(0, 3).map((btn, index) => {
                const link = btn.button_link.url
                return (
                  <Link to={link} key={index}>
                    <Button themeType="outline" className="blog1-button">
                      {RichText.asText(btn.button.raw)}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
