import React from "react"

import Carousel from "./Carousel"
import carousel2 from "../../../assets/landing/carousel2.png"
import "./style.scss"

export default function qualified() {
  return (
    <div className="landing-qualified">
      <div className="container">
        <h1>Why choose Sydney Side for pest control services?</h1>
        <div className="landing-qualified-content">
          <Carousel />
          <div className="landing-qualified-image">
            <img src={carousel2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
