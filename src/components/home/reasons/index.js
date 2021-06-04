import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function reasons({ data }) {
  return (
    <div className="home-reasons">
      <div className="home-reasons-container">
        <h3>{RichText.asText(data.primary.title.raw)}</h3>
        {data.items.map((para, index) => {
          return <p key={index}>{RichText.asText(para.content.raw)}</p>
        })}
      </div>
    </div>
  )
}
