import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-dark-02.png"
import "./style.scss"

export default function quote({ data }) {
  return (
    <div
      className="home-quote"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18), url(${data.bg_image.url})`,
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
      <div className="home-quote-container">
        <h2>{RichText.asText(data.title.raw)}</h2>
        <p>{RichText.asText(data.description.raw)}</p>
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
