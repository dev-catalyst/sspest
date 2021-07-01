import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-dark-02.png"
import "./style.scss"

export default function pestControl2({ data }) {
  return (
    <div
      className="home-pestControl2"
      style={{
        backgroundImage: `linear-gradient(#F0F1F2, #FBFBFC,#F6F6F8,#FBFBFC,#F4F6F9), url(${
          data.primary.bg_image ? data.primary.bg_image.url : null
        })`,
        backgroundBlendMode: "hard-light",
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
      <div className="home-pestControl2-container">
        <h1> {RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((info, index) => {
          return <p key={index}>{RichText.asText(info.content.raw)}</p>
        })}
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
