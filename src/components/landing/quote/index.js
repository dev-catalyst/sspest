import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function quote({ data }) {
  return (
    <div
      className="landing-quote"
      style={{
        backgroundImage: `url(${data.bg_image.url}),linear-gradient(#dde4ec, #eff2f7)`,
      }}
    >
      <div className="container">
        <h1>{RichText.asText(data.title.raw)}</h1>
        <p>{RichText.asText(data.paragraph.raw)}</p>
      </div>
    </div>
  )
}
