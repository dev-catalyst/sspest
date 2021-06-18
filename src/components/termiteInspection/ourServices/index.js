import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-dark-02.png"
import "./style.scss"

export default function ourServices({ data }) {
  return (
    <div
      className="termite-ourServices"
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
        <RichText render={data.primary.title} />
        <RichText render={data.primary.description} />
        {/* {data.items.map((para, index) => {
          return <RichText key={index} render={para.description} />
        })} */}
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
