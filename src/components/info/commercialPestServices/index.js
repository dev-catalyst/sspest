import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-light-02.png"
import "./style.scss"

export default function commercialPestServices({ data }) {
  return (
    <div
      className="info-commercialPestServices"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18),url(${data.primary.bg_image.url})`,
        // backgroundImage: ` linear-gradient(#0A6A9C, #01639A), url(${data.primary.bg_image.url})`,
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
