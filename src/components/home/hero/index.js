import React from "react"
import GeneralPest from "../generalPest"
import ratings from "../../../assets/home/rating.png"

import "./style.scss"

export default function Hero() {
  return (
    <div className="home-hero">
      <div className="home-hero-container">
        <div className="general">
          <GeneralPest />
        </div>
        <div className="google-ratings">
          <img src={ratings} alt="google-ratings" />
        </div>
      </div>
    </div>
  )
}
