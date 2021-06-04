import React from "react"
import "./style.scss"
import { RichText } from "prismic-reactjs"

export default function content({ data }) {
  return (
    <div className="termite-exp-carousel-content">
      <div className="termite-exp-carousel-content-para">
        <h1>{RichText.asText(data.title.raw)}</h1>
        <p>{RichText.asText(data.content.raw)}</p>
      </div>
      <div className="carousel-image">
        <img src={data.image.url} alt="" />
      </div>
    </div>
  )
}
