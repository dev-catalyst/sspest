import React from "react"
import Carousel from "./Carousel"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function qualified({ data }) {
  return (
    <div className="landing-qualified">
      <div className="container">
        <RichText render={data.primary.title} />
        <div className="landing-qualified-content">
          <Carousel data={data} />
          <div className="landing-qualified-image">
            {data.primary.image ? (
              <img src={data.primary.image.url} alt="" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
