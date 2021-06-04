import React from "react"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import separator1 from "../../../assets/info/separator1.png"
import "./style.scss"

export default function controlPlan({ data, data1 }) {
  return (
    <div className="info-controlPlan">
      <img
        src={separator1}
        alt=""
        style={{ width: "100%", marginTop: "-7px" }}
      />
      <div className="container">
        <div className="info-controlPlan-inspection">
          <div className="info-controlPlan-inspection-content">
            <h1>
              <img src={stone} alt="" />
              {RichText.asText(data.title.raw)}
            </h1>
            <p>{RichText.asText(data.description.raw)}</p>
          </div>
          <div className="info-controlPlan-inspection-image">
            <img src={data.image.url} alt="" className="termite1" />
          </div>
        </div>
        <div className="info-controlPlan-inspection container2">
          <div className="info-controlPlan-inspection-image">
            <img src={data1.image.url} alt="" className="termite2" />
          </div>
          <div className="info-controlPlan-inspection-content content2">
            <h1>
              <img src={stone} alt="" />
              {RichText.asText(data1.title.raw)}
            </h1>
            <p>{RichText.asText(data1.description.raw)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
