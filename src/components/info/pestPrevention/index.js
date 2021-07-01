import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
// import curve2 from "../../../assets/curves/curve-bottom-dark-02.png"
// import curve1 from "../../../assets/curves/curve-top-dark-01.png"
import "./style.scss"

export default function pestPrevention({ data }) {
  return (
    <div
      className="info-pestPrevention"
      // style={{
      //   backgroundImage: `linear-gradient(#333333, #1E1D18),url(${data.primary.bg_image.url})`,
      //   backgroundBlendMode: "multiply",
      // }}
    >
      <div className="container">
        <div className="info-pestPrevention-content">
          {data.primary.bg_image ? (
            <img src={data.primary.bg_image.url} alt="" className="termite1" />
          ) : null}
        </div>
        <div className="info-pestPrevention-content">
          <RichText render={data.primary.title} />
          <RichText render={data.primary.description} />
          <div className="info-pestPrevention-btn-container1">
            <a href="tel:1300 007 772 ">
              <Button themeType="contained" className="info-pestPrevention-btn">
                CONTACT US NOW
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
