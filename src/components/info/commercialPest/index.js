import React from "react"
import GeneralPest from "../../home/generalPest"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import Video from "../../home/whoAreWe/video"
import "./style.scss"

export default function commercialPest({ data }) {
  return (
    <div className="info-commercialPest">
      <div className="container">
        <div className="info-general-pest">
          <GeneralPest />
        </div>
        <div className="info-commercialPest-content">
          <h1>{RichText.asText(data.title.raw)}</h1>
          <img src={stone} alt="stone" className="info-commercialPest-stone" />
          <p>{RichText.asText(data.paragraph.raw)}</p>
        </div>
        <Video
          videoSrcURL="https://www.youtube.com/embed/qh0lvkSQOLY"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </div>
  )
}
