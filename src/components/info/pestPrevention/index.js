import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import curve2 from "../../../assets/curves/curve-bottom-dark-02.png"
import "./style.scss"

export default function pestPrevention({ data }) {
  return (
    <div
      className="info-pestPrevention"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18),url(${data.primary.bg_image.url})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container">
        <RichText render={data.primary.title} />
        <RichText render={data.primary.description} />

        <div className="info-pestPrevention-btn-container">
          <Button themeType="contained" className="info-pestPrevention-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
      <img
        src={curve2}
        style={{
          width: "100%",
          marginBottom: "-8px",
        }}
        alt=""
      />
    </div>
  )
}
