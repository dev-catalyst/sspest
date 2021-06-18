import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import Video from "./video"
import "./style.scss"

export default function whoAreWe({ data }) {
  return (
    <div className="home-whoAreWe">
      <div className="home-whoAreWe-container">
        <Video
          videoSrcURL="https://www.youtube.com/embed/qh0lvkSQOLY"
          videoTitle="Official Music Video on YouTube"
        />
        <div className="home-whoAreWe-container-content">
          <h4>{RichText.asText(data.subtitle.raw)}</h4>
          <h1>
            <img src={stone} alt="stone" className="whoAreWe-control-stone" />
            {RichText.asText(data.title.raw)}
          </h1>

          <p>{RichText.asText(data.description.raw)}</p>
          <div className="btn-container">
            <Button themeType="contained" className="btn">
              MORE ABOUT SSPEST
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
