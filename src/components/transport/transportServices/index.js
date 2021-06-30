import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-light-01.png"
import curve2 from "../../../assets/curves/curve-bottom-light-02.png"
import "./style.scss"

export default function transportPestServices({ data, id }) {
  return (
    <div
      className="transport-PestServices"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18), url(${data.primary.bg_image.url})`,
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
        {id === "white-ant-pest-control" ? (
          <div className="transport-PestServices-btn-container">
            <a href="tel:1300 007 772 ">
              <Button
                themeType="contained"
                className="transport-PestServices-btn"
              >
                CONTACT US NOW
              </Button>
            </a>
            <a href="/ant-pest-control-sydney ">
              <Button
                themeType="contained"
                className="transport-PestServices-btn"
              >
                ANT PEST CONTROL
              </Button>
            </a>
          </div>
        ) : id === "pigeon-pest-control" ? (
          <div className="transport-PestServices-btn-container">
            <a href="/bird-pest-control-sydney">
              <Button
                themeType="contained"
                className="transport-PestServices-btn"
              >
                BIRD PEST CONTROL SERVICES
              </Button>
            </a>
          </div>
        ) : null}
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
