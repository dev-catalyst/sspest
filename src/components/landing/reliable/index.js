import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function reliable({ data }) {
  return (
    <div
      className="landing-reliable"
      style={{ backgroundImage: `url(${data.primary.bg_image.url})` }}
    >
      <div className="container">
        <div className="landing-reliable-content">
          <h1>{RichText.asText(data.primary.title.raw)}</h1>
          {data.items.map((para, index) => {
            return <p key={index}>{RichText.asText(para.content.raw)}</p>
          })}
        </div>
      </div>
    </div>
  )
}
