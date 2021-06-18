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
            <RichText render={data.primary.title} />
          </h1>
          <RichText render={data.primary.description} />
        </div>
      </div>
    </div>
  )
}
