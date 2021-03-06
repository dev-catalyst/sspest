import React from "react"
import { Button } from "@react-md/button"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import curve1 from "../../../assets/curves/curve-top-dark-01.png"
import curve2 from "../../../assets/curves/curve-bottom-light-02.png"
import "./style.scss"

export default function order({ data }) {
  return (
    <div
      className="home-order"
      style={{
        backgroundImage: `linear-gradient(#0A6A9C, #01639A), url(${
          data.bg_image ? data.bg_image.url : null
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
      <div className="home-order-container">
        <h2>{RichText.asText(data.title.raw)}</h2>
        <p>{RichText.asText(data.content.raw)}</p>
        <h4>
          Call <a href="tel:1300 007 772">1300 007 772 </a>
          or email{" "}
          <a href="mailto:info@sspestcontrol.com.au">
            info@sspestcontrol.com.au
          </a>
        </h4>
        <Link to="/pest-control-pricing">
          <Button themeType="outline" className="btn">
            READ MORE
          </Button>
        </Link>
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
