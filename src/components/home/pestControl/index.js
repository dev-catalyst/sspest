import React from "react"
import GeneralPest from "../generalPest"
import Image from "./image"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function pestControl({ data }) {
  return (
    <div className="home-pest-control">
      <div className="home-pest-control-container">
        <div className="general-pest">
          <GeneralPest />
        </div>
        <div className="home-pest-control-container-content">
          <h1>{RichText.asText(data.title.raw)}</h1>
          <img src={stone} alt="stone" className="pest-control-stone" />
          <p>{RichText.asText(data.description.raw)}</p>
        </div>
        <div className="image-holder">
          <Image data={data} />
        </div>
      </div>
    </div>
  )
}
