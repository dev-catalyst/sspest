import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import curve2 from "../../../assets/curves/curve-bottom-dark-02.png"
import curve1 from "../../../assets/curves/curve-top-dark-01.png"
import "./style.scss"

export default function pestPrevention({ data }) {
  return (
    <div
      className="info-pestPrevention"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18),url(${data.primary.bg_image.url})`,
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
        <RichText render={data.primary.title} />
        <RichText render={data.primary.description} />

        <div className="info-pestPrevention-btn-container">
          <a href="tel:1300 007 772 ">
            <Button themeType="contained" className="info-pestPrevention-btn">
              CONTACT US NOW
            </Button>
          </a>
        </div>
      </div>
      <img
        src={curve2}
        style={{
          width: "100%",
          marginBottom: "-8px",
        }}
        alt=""
      />
    </div>
  )
}
