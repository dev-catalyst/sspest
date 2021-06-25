import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-light-02.png"
import { Link } from "gatsby"
import "./style.scss"

export default function GetQuote({ data }) {
  return (
    <div
      className="pricing-PestServices"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18), url(${data.primary.bg_image.url})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <img
        src={curve1}
        style={{
          width: "100%",
          marginTop: "-6px",
        }}
        alt=""
      />
      <div className="container">
        <RichText render={data.primary.title1} />
        <RichText render={data.primary.description1} />
        <div className="pricing-PestServices-btn-container">
          <Link to="/about-us">
            <Button themeType="contained" className="pricing-PestServices-btn">
              CONTACT US NOW
            </Button>
          </Link>
        </div>
      </div>
      <img
        src={curve2}
        style={{
          width: "100%",
          marginBottom: "-6px",
        }}
        alt=""
      />
    </div>
  )
}
