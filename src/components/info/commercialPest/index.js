import React from "react"
import Video from "../../home/whoAreWe/video"
import GeneralPest from "../../home/generalPest"
import stone from "../../../assets/layout/stone.svg"

import "./style.scss"

export default function commercialPest() {
  return (
    <div className="info-commercialPest">
      <div className="info-commercialPest-container">
        <div className="info-general-pest">
          <GeneralPest />
        </div>
        <div className="info-commercialPest-container-content">
          <h1>COMMERCIAL PEST CONTROL SYDNEY</h1>
          <img src={stone} alt="stone" className="info-commercialPest-stone" />
          <p>
            Do you have unwanted pests at your business? We can help your
            business become pest-free and keep it that way.
          </p>
        </div>
        <Video
          videoSrcURL="https://www.youtube.com/embed/qh0lvkSQOLY"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </div>
  )
}
