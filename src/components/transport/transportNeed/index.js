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
      {props.children}
    </div>
  )
}

export default function transportNeed({ data }) {
  return (
    <div className="transport-need">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          <RichText render={data.primary.title} />
        </h1>
        <RichText render={data.primary.description} />
        <br />
        <RichText render={data.primary.following} />
        <div className="transport-need-points-container">
          <div className="transport-need-points">
            {data.items.map((para, index) => {
              return (
                <Need key={index}>
                  <RichText render={para.needs} />
                </Need>
              )
            })}
          </div>
        </div>
        <RichText render={data.primary.conclusion} />
        <div className="transport-need-btn-container">
          <Button themeType="contained" className="transport-need-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
