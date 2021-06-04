import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function quote({ data }) {
  return (
    <div
      className="home-quote"
      style={{
        backgroundImage: `url(${data.bg_image.url}),linear-gradient(#eff2f7, #dde4ec)`,
      }}
    >
      <div className="home-quote-container">
        <h2>{RichText.asText(data.title.raw)}</h2>
        <p>{RichText.asText(data.description.raw)}</p>
      </div>
    </div>
  )
}
