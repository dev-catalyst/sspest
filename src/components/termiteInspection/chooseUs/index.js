import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-dark-01.png"
import curve2 from "../../../assets/curves/curve-bottom-light-02.png"
import "./style.scss"

export default function chooseUs({ data }) {
  return (
    <div
      className="termite-chooseUs"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18), url(${data.primary.background_image.url})`,
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
        <div className="termite-chooseUs-content">
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
