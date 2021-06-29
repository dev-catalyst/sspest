import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

const Point = props => {
  return (
    <div className="pricing-point-structure">
      <img src={tick} alt="" />
      {props.children}
    </div>
  )
}

export default function PricingChoose({ data }) {
  return (
    <div className="pricing-treatment">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          <RichText render={data.primary.title1} />
        </h1>
        <RichText render={data.primary.description1} />
        <br />
        <RichText render={data.primary.following} />
        <div className="pricing-points-container">
          {data.items.map((para, index) => {
            return (
              <Point key={index}>
                <RichText render={para.points} />
              </Point>
            )
          })}
        </div>
        <RichText render={data.primary.conclusion} />
        <div className="pricing-treatment-btn-container">
          <a href="tel:1300 007 772 ">
            <Button themeType="contained" className="pricing-treatment-btn">
              CONTACT US NOW
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
