import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function extermination({ data }) {
  return (
    <div
      className="info-extermination"
      style={{
        backgroundImage: `url(${data.primary.bg_image.url}), linear-gradient(#dde4ec, #231f20)`,
      }}
    >
      <div className="container">
        <h1> {RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((para, index) => {
          return (
            <p key={index}>
              {RichText.asText(para.description.raw)}
              <br />
            </p>
          )
        })}
        <div className="info-extermination-btn-container">
          <Button themeType="contained" className="info-extermination-btn">
            ORGANIC PEST CONTROL SERVICES
          </Button>
        </div>
      </div>
    </div>
  )
}
