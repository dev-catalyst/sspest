import React from "react"
import Video from "../../home/whoAreWe/video"
import GeneralPest from "../../home/generalPest"
import stone from "../../../assets/layout/stone.svg"

import "./style.scss"

export default function schoolControl() {
  return (
    <div className="school-pest">
      <div className="container">
        <div className="school-general-pest">
          <GeneralPest />
        </div>
        <div className="school-pest-content">
          <h1>School Pest Control</h1>
          <img src={stone} alt="stone" className="school-pest-stone" />
          <p>
            Have unwanted pest found their way into your school? We’re experts
            in providing school pest control services in Sydney.
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
