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
          <RichText render={data.primary.title} />
          <img src={stone} alt="" className="info-commercialPest-stone" />
          <RichText render={data.primary.description} />
        </div>
        <Video
          videoSrcURL="https://www.youtube.com/embed/qh0lvkSQOLY"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </div>
  )
}
