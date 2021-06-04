import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function pestControl3({ data }) {
  return (
    <div
      className="home-pestControl3"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url}),linear-gradient(#dde4ec, #eff2f7)`,
      }}
    >
      <div className="home-pestControl3-container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((para, index) => {
          return <p key={index}>{RichText.asText(para.content.raw)}</p>
        })}
      </div>
    </div>
  )
}
