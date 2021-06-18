import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-dark-01.png"
import "./style.scss"

export default function extermination({ data }) {
  return (
    <div
      className="info-extermination"
      style={{
        // backgroundImage: `url(${data.primary.bg_image.url}), linear-gradient(#dde4ec, #231f20)`,
        backgroundImage: `linear-gradient(#F0F1F2, #FBFBFC,#F6F6F8,#FBFBFC,#F4F6F9),url(${data.primary.bg_image.url})`,
        backgroundBlendMode: "hard-light",
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
        <RichText render={data.primary.title} />
        <RichText render={data.primary.description} />
        <div className="info-extermination-btn-container">
          <Button themeType="contained" className="info-extermination-btn">
            ORGANIC PEST CONTROL SERVICES
          </Button>
        </div>
      </div>
    </div>
  )
}
