import React from "react"
import GeneralPest from "../../home/generalPest"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function latest({ data }) {
  return (
    <div className="blog-latest">
      <div className="container">
        <div className="blog-general-pest">
          <GeneralPest />
        </div>
        <h4> {RichText.asText(data.subtitle.raw)}</h4>
        <h1>
          <img src={stone} alt="" />
          {RichText.asText(data.title.raw)}
        </h1>
        <p>{RichText.asText(data.description.raw)}</p>
      </div>
    </div>
  )
}
