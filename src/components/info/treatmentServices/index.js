import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

const Point = props => {
  return (
    <div className="treatment-point-structure">
      <img src={tick} alt="" />
      <p>{props.children}</p>
    </div>
  )
}

export default function treatmentServices({ data, data1, data2 }) {
  return (
    <div className="info-treatment">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          {RichText.asText(data.primary.title.raw)}
        </h1>
        <p className="p1">{RichText.asText(data.primary.offer.raw)}</p>
        <p className="p2">{RichText.asText(data.primary.following.raw)}</p>
        <div className="treatment-points-container">
          <div className="treatment-points">
            {data.items.map((para, index) => {
              return (
                <Point key={index}>{RichText.asText(para.services.raw)}</Point>
              )
            })}
          </div>
          <div className="treatment-points">
            {data1.items.map((para, index) => {
              return (
                <Point key={index}>{RichText.asText(para.services.raw)}</Point>
              )
            })}
          </div>
          <div className="treatment-points">
            {data2.items.map((para, index) => {
              return (
                <Point key={index}>{RichText.asText(para.services.raw)}</Point>
              )
            })}
          </div>
        </div>
        <p>{RichText.asText(data.primary.conclusion.raw)}</p>
        <div className="info-treatment-btn-container">
          <Button themeType="contained" className="info-treatment-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
