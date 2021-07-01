import React from "react"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-light-02.png"
import "./style.scss"
import { Button } from "@react-md/button"

export default function commercialPestServices({ data, id }) {
  return (
    <div
      className="info-commercialPestServices"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18),url(${
          data.primary.bg_image ? data.primary.bg_image.url : null
        })`,
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
        <RichText render={data.primary.title} />
        <RichText render={data.primary.description} />
      </div>
      {id === "redback-spider-pest-control-sydney" ||
      id === "funnel-web-spider-pest-control" ||
      id === "flying-insect-control" ? (
        <div className="info-pestPrevention-btn-container">
          <a href="tel:1300 007 772 ">
            <Button themeType="contained" className="info-pestPrevention-btn">
              CONTACT US NOW
            </Button>
          </a>
        </div>
      ) : null}

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
