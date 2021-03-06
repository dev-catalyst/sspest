import React from "react"
import divider5 from "../../../assets/home/divider5.png"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function Call({ data }) {
  return (
    <div
      className="home-call"
      style={{
        backgroundImage: ` linear-gradient(to right,#020306,#020306,#252326,#221A1C), url(${
          data.bg_image ? data.bg_image.url : null
        })`,
        backgroundBlendMode: "multiply",
      }}
    >
      <img src={divider5} alt="" style={{ width: "100%", marginTop: "-7px" }} />
      <div className="home-call-container">
        <div className="home-call-content">
          <h2>{RichText.asText(data.title.raw)}</h2>
          <p>{RichText.asText(data.paragraph.raw)}</p>
        </div>
        <div className="home-call-image">
          {data.image ? <img src={data.image.url} alt="" /> : null}
        </div>
      </div>
    </div>
  )
}
