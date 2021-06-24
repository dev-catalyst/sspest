import React from "react"
import GeneralPest from "../../home/generalPest"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import Video from "../../home/whoAreWe/video"
import "./style.scss"

export default function PricingControl({ data }) {
  console.log(data)
  return (
    <div className="pricing-pest">
      <div className="container">
        <div className="pricing-general-pest">
          <GeneralPest />
        </div>
        <div className="pricing-pest-content">
          <RichText render={data.title} />
          <img src={stone} alt="stone" className="pricing-pest-stone" />
          <RichText render={data.description} />
        </div>
        <Video
          videoSrcURL="https://www.youtube.com/embed/qh0lvkSQOLY"
          videoTitle="Official Music Video on YouTube"
        />
      </div>
    </div>
  )
}
