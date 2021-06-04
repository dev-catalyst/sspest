import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

const Need = props => {
  return (
    <div className="transport-need-structure">
      <img src={tick} alt="" />
      <p>{props.children}</p>
    </div>
  )
}

export default function transportNeed({ data }) {
  return (
    <div className="transport-need">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          {RichText.asText(data.primary.title.raw)}
        </h1>
        <p className="p1">{RichText.asText(data.primary.description.raw)}</p>
        <p className="p2">{RichText.asText(data.primary.following.raw)}</p>
        <div className="transport-need-points-container">
          <div className="transport-need-points">
            {data.items.map((para, index) => {
              return <Need key={index}>{RichText.asText(para.points.raw)}</Need>
            })}
          </div>
        </div>
        <p>{RichText.asText(data.primary.conclusion.raw)}</p>
        <div className="transport-need-btn-container">
          <Button themeType="contained" className="transport-need-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
