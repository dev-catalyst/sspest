import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"
import { Link } from "gatsby"
import "./style.scss"

const Point = props => {
  return (
    <div className="treatment-point-structure">
      <img src={tick} alt="" />
      {props.children}
    </div>
  )
}

export default function treatmentServices({ data }) {
  return (
    <div className="info-treatment">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          <RichText render={data.primary.title} />
        </h1>
        <RichText render={data.primary.offer} />
        <br />
        <RichText render={data.primary.following} />
        <div className="treatment-points-container">
          {data.items.map((para, index) => {
            return (
              <Point key={index}>
                {para.link[0] ? (
                  <Link to={para.link[0].text}>
                    <RichText render={para.points} />
                  </Link>
                ) : (
                  <RichText render={para.points} />
                )}
              </Point>
            )
          })}
        </div>
        <RichText render={data.primary.conclusion} />

        <div className="info-treatment-btn-container">
          <a href="tel:1300 007 772 ">
            <Button themeType="contained" className="info-treatment-btn">
              CONTACT US NOW
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
