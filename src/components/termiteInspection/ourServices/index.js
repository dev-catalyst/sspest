import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function ourServices({ data }) {
  return (
    <div
      className="termite-ourServices"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url}),linear-gradient(#eff2f7, #dde4ec)`,
      }}
    >
      <div className="container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((para, index) => {
          return <p key={index}>{RichText.asText(para.paragraph.raw)}</p>
        })}
      </div>
    </div>
  )
}
