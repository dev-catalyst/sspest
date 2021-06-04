import React from "react"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

const Reason = props => {
  return (
    <div className="choosePest-reason-structure">
      <img src={tick} alt="" />
      <p>{props.children}</p>
    </div>
  )
}

export default function choosePest({ data, data1 }) {
  return (
    <div className="info-choosePest">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          {RichText.asText(data.primary.title.raw)}
        </h1>
        <p className="p1">{RichText.asText(data.primary.description.raw)}</p>
        <br />
        <p className="p2">{RichText.asText(data.primary.following.raw)}</p>
        <div className="choosePest-reasons-container">
          <div className="choosePest-reasons-points">
            {data.items.map((para, index) => {
              return (
                <Reason key={index}>{RichText.asText(para.reasons.raw)}</Reason>
              )
            })}
          </div>
          <div className="choosePest-reasons-points">
            {data1.items.map((para, index) => {
              return (
                <Reason key={index}>{RichText.asText(para.reasons.raw)}</Reason>
              )
            })}
          </div>
        </div>
        <p>{RichText.asText(data.primary.conclusion.raw)}</p>
      </div>
    </div>
  )
}
