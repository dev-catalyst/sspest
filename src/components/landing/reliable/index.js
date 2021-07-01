import React from "react"
import { RichText } from "prismic-reactjs"
import curve from "../../../assets/curves/curve-bottom-light-01.png"
import "./style.scss"

export default function reliable({ data }) {
  return (
    <div
      className="landing-reliable"
      style={{
        backgroundImage: `linear-gradient(#EEE3DB, #F3E8E2), url(${
          data.primary.bg_image ? data.primary.bg_image.url : null
        })`,
        backgroundBlendMode: "hard-light",
      }}
    >
      <div className="container">
        <div className="landing-reliable-content">
          <RichText render={data.primary.title} />
          <RichText render={data.primary.description} />
        </div>
      </div>
      <img
        src={curve}
        style={{
          width: "100%",
          marginBottom: "-6px",
        }}
        alt=""
      />
    </div>
  )
}
