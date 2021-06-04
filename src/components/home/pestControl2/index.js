import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function pestControl2({ data }) {
  return (
    <div
      className="home-pestControl2"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url}),linear-gradient(#eff2f7, #dde4ec)`,
      }}
    >
      <div className="home-pestControl2-container">
        <h1> {RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((info, index) => {
          return <p key={index}>{RichText.asText(info.content.raw)}</p>
        })}
      </div>
    </div>
  )
}
