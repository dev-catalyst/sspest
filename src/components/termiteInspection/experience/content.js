import React from "react"
import "./style.scss"
import { RichText } from "prismic-reactjs"

export default function content({ data }) {
  return (
    <div className="termite-exp-carousel-content">
      <div className="termite-exp-carousel-content-para">
        <h1>EXPERIENCE</h1>
        <RichText render={data.description} />
      </div>
      <div className="carousel-image">
        <img src={data.image.url} alt="" />
      </div>
    </div>
  )
}
