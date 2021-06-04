import React from "react"
import GeneralPest from "../../home/generalPest"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function blackTown({ data }) {
  return (
    <div className="landing-blackTown">
      <div className="container">
        <div className="landing-general-pest">
          <GeneralPest />
        </div>
        <div className="landing-blackTown-content">
          <h1>
            <img src={stone} alt="" />
            {RichText.asText(data.primary.title.raw)}
          </h1>
          {data.items.map((para, index) => {
            return <p key={index}>{RichText.asText(para.content.raw)}</p>
          })}
        </div>
      </div>
    </div>
  )
}
