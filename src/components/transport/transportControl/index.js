import React from "react"
import GeneralPest from "../../home/generalPest"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import Video from "../../home/whoAreWe/video"
import "./style.scss"

export default function transportControl({ data }) {
  return (
    <div className="transport-pest">
      <div className="container">
        <div className="transport-general-pest">
          <GeneralPest />
        </div>
        <div className="transport-pest-content">
          <h1>{RichText.asText(data.title.raw)}</h1>
          <img src={stone} alt="stone" className="transport-pest-stone" />
          <p>{RichText.asText(data.description.raw)}</p>
        </div>
        <Video
          videoSrcURL="https://www.youtube.com/embed/qh0lvkSQOLY"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </div>
  )
}
