import React from "react"
import Carousel from "./Carousel"
import "./style.scss"

export default function Experience({ data }) {
  return (
    <div className="termite-experience">
      <div className="container">
        <Carousel data={data} />
      </div>
    </div>
  )
}
