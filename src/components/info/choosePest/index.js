import React from "react"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

const Reason = props => {
  return (
    <div className="choosePest-reason-structure">
      <img src={tick} alt="" />
      {props.children}
    </div>
  )
}

export default function choosePest({ data }) {
  return (
    <div className="info-choosePest">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          <RichText render={data.primary.title} />
        </h1>
        <RichText render={data.primary.description} />
        <br />
        <RichText render={data.primary.following} />
        <div className="choosePest-reasons-container">
          {data.items.map((para, index) => {
            return (
              <Reason key={index}>
                <RichText render={para.reasons} />
              </Reason>
            )
          })}
        </div>
        <RichText render={data.primary.conclusion} />
      </div>
    </div>
  )
}
