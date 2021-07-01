import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-02.png"
import curve2 from "../../../assets/curves/curve-bottom-dark-01.png"
import "./style.scss"

export default function proficient({ data }) {
  return (
    <div
      className="landing-proficient"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18),url(${
          data.primary.bg_image ? data.primary.bg_image.url : null
        })`,
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
        <div className="landing-proficient-content">
          <RichText render={data.primary.title} />
          <RichText render={data.primary.description} />
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
