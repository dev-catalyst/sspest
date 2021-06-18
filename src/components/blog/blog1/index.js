import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-light-02.png"
import "./style.scss"

export default function Blog1({ data, bg }) {
  const date = RichText.asText(data.date.raw)
  const count = data.comments
  return (
    <div
      className="blog-blog1"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18), url(${bg.bg_image.url})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <img
        src={curve1}
        style={{
          width: "100%",
          marginTop: "-6px",
        }}
        alt=""
      />
      <div className="container">
        <div className="blog-blog1-content">
          <div className="blog-blog1-content-image">
            <img src={data.image.url} alt="" />
          </div>
          <h3>{RichText.asText(data.title.raw)}</h3>
          <p className="center-p">Posted {date}</p>
          <p>{RichText.asText(data.content.raw)}</p>
          <div className="bottom-text">
            <div className="button-container">
              <Button themeType="outline" className="blog1-button">
                Termites
              </Button>
              <Button themeType="outline" className="blog1-button">
                Pest Control
              </Button>
              <Button themeType="outline" className="blog1-button">
                Inspection
              </Button>
            </div>
            <p className="comments">{count} Comments</p>
          </div>
        </div>
      </div>
      <img
        src={curve2}
        style={{
          width: "100%",
          marginBottom: "-6px",
        }}
        alt=""
      />
    </div>
  )
}
