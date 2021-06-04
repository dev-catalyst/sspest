import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function commercialPestServices({ data }) {
  return (
    <div
      className="info-commercialPestServices"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url})`,
      }}
    >
      <div className="container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((para, index) => {
          return (
            <p key={index}>
              {RichText.asText(para.description.raw)}
              <br />
            </p>
          )
        })}
      </div>
    </div>
  )
}
