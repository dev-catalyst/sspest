import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function pestPrevention({ data }) {
  return (
    <div
      className="info-pestPrevention"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url})`,
      }}
    >
      <div className="container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        <p>{RichText.asText(data.primary.description.raw)}</p>
        <p>{RichText.asText(data.primary.following.raw)}</p>
        <ul>
          {data.items.map((para, index) => {
            return (
              <li key={index}>
                {RichText.asText(para.list.raw)}
                <br />
              </li>
            )
          })}
        </ul>
        <div className="info-pestPrevention-btn-container">
          <Button themeType="contained" className="info-pestPrevention-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
