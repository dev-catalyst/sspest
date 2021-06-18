import React from "react"
import divider5 from "../../../assets/home/divider5.png"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function Call({ data }) {
  return (
    <div
      className="home-call"
      // style={{
      //   backgroundImage: `linear-gradient(to-right, #000000, #010102,#020306,#020306,#252326), url(${data.bg_image.url})`,
      //   backgroundBlendMode: "multiply",
      // }}
      style={{
        backgroundImage: ` linear-gradient(to right,#020306,#020306,#252326,#221A1C), url(${data.bg_image.url})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <img src={divider5} alt="" style={{ width: "100%", marginTop: "-7px" }} />
      <div className="home-call-container">
        <div className="home-call-content">
          <h1>{RichText.asText(data.title.raw)}</h1>
          <p>{RichText.asText(data.paragraph.raw)}</p>
        </div>
        <div className="home-call-image">
          <img src={data.image.url} alt="" />
        </div>
      </div>
    </div>
  )
}
