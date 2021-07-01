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
              <RichText render={data.primary.title} />
            </h1>
            <RichText render={data.primary.description} />
          </div>
          <div className="info-controlPlan-inspection-image">
            {data.primary.image ? (
              <img src={data.primary.image.url} alt="" className="termite1" />
            ) : null}
          </div>
        </div>
        <div className="info-controlPlan-inspection container2">
          <div className="info-controlPlan-inspection-image">
            {data1.primary.image ? (
              <img src={data1.primary.image.url} alt="" className="termite1" />
            ) : null}
          </div>
          <div className="info-controlPlan-inspection-content content2">
            <h1>
              <img src={stone} alt="" />
              <RichText render={data1.primary.title} />
            </h1>
            <RichText render={data1.primary.description} />
          </div>
        </div>
      </div>
    </div>
  )
}
