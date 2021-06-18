import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-dark-02.png"
import curve2 from "../../../assets/curves/curve-bottom-light-01.png"
import "./style.scss"

export default function quote({ data }) {
  return (
    <div
      className="landing-quote"
      style={{
        backgroundImage: `linear-gradient(#0A6A9C, #01639A), url(${data.primary.bg_image.url})`,
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
          marginBottom: "-6px",
        }}
        alt=""
      />
    </div>
  )
}
