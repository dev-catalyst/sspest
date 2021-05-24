import React from "react"
import Video from "./video"

import { Button } from "@react-md/button"

import stone from "../../../assets/layout/stone.svg"

import "./style.scss"

export default function whoAreWe() {
  return (
    <div className="home-whoAreWe">
      <div className="home-whoAreWe-container">
        <Video
          videoSrcURL="https://www.youtube.com/embed/qh0lvkSQOLY"
          videoTitle="Official Music Video on YouTube"
        />
        <div className="home-whoAreWe-container-content">
          <h4>SSPEST CONTROL</h4>
          <h1>WHO ARE WE</h1>
          <img src={stone} alt="stone" className="whoAreWe-control-stone" />
          <p>
            Find out more about Us, Why we are different from the crowd, why we
            know our customers better than other pest companies.
          </p>
          <Button themeType="contained" className="btn">
            MORE ABOUT SSPEST
          </Button>
        </div>
      </div>
    </div>
  )
}
