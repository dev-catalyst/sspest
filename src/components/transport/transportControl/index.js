import React from "react"
import Video from "../../home/whoAreWe/video"
import GeneralPest from "../../home/generalPest"
import stone from "../../../assets/layout/stone.svg"

import "./style.scss"

export default function transportControl() {
  return (
    <div className="transport-pest">
      <div className="container">
        <div className="transport-general-pest">
          <GeneralPest />
        </div>
        <div className="transport-pest-content">
          <h1>TRANSPORT PEST CONTROL</h1>
          <img src={stone} alt="stone" className="transport-pest-stone" />
          <p>
            Unhygienic transport vehicles and facilities can lead to unwanted
            pests. We’re experts in providing transport pest control services in
            Sydney.
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
