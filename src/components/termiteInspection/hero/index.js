import React from "react"
import GeneralPest from "../../home/generalPest"
import ratings from "../../../assets/home/rating.png"

import "./style.scss"

export default function Hero() {
  return (
    <div className="termite-hero">
      <div className="termite-hero-container">
        <div className="termite-general">
          <GeneralPest />
        </div>
        <div className="termite-google-ratings">
          <img src={ratings} alt="google-ratings" />
        </div>
        <div></div>
      </div>
    </div>
  )
}
