import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function chooseUs({ data }) {
  return (
    <div
      className="termite-chooseUs"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url}),linear-gradient(#dde4ec, #eff2f7)`,
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
