import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function Services({ data }) {
  return (
    <div className="landing-services">
      <div className="container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        <div className="landing-services-image">
          <img src={data.primary.image.url} alt="" />
        </div>
        {data.items.map((para, index) => {
          return (
            <div key={index} className="landing-services-content">
              <h3>{RichText.asText(para.subtitle.raw)}</h3>
              <p>{RichText.asText(para.description.raw)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
