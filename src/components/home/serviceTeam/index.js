import React from "react"
import divider2 from "../../../assets/home/divider2.png"
import curve from "../../../assets/curves/curve-bottom-light-02.png"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function serviceTeam({ data }) {
  return (
    <div
      className="home-service-team"
      style={{
        backgroundImage: ` linear-gradient(#333333, #1E1D18), url(${data.primary.bg_image.url})`,
        // backgroundImage: ` linear-gradient(#0A6A9C, #01639A), url(${data.primary.bg_image.url})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <img
        src={divider2}
        style={{
          width: "100%",
          marginTop: "-6px",
        }}
        alt=""
      />
      <div className="home-service-team-container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        <div className="home-service-team-images">
          {data.items.slice(0, 5).map((info, index) => {
            return <img key={index} src={info.team_image.url} alt="services" />
          })}
        </div>
        <p className="home-service-team-description">
          {RichText.asText(data.primary.description.raw)}
        </p>
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
