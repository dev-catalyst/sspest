import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function transportPestServices({ data }) {
  return (
    <div
      className="transport-PestServices"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url})`,
      }}
    >
      <div className="container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((para, index) => {
          return (
            <p key={index}>
              {RichText.asText(para.content.raw)}
              <br />
            </p>
          )
        })}
        <div className="transport-PestServices-btn-container">
          <Button themeType="contained" className="transport-PestServices-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
