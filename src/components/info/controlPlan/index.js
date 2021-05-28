import React from "react"

import plan1 from "../../../assets/info/plan1.png"
import plan2 from "../../../assets/info/plan2.png"
import stone from "../../../assets/layout/stone.svg"
import separator1 from "../../../assets/info/separator1.png"
import "./style.scss"

export default function controlPlan() {
  return (
    <div className="info-controlPlan">
      <img
        src={separator1}
        alt=""
        style={{ width: "100%", marginTop: "-5px" }}
      />
      <div className="container">
        <div className="info-controlPlan-inspection">
          <div className="info-controlPlan-inspection-content">
            <h1>
              <img src={stone} alt="" />
              COMMERCIAL PEST INSPECTION
            </h1>
            <p>
              Our experts will conduct extensive pest inspections of your
              business to identify the type of pests that need to be controlled
              or eliminated. Following the inspection, we’ll provide a detailed
              report with the types of pests at the property, their prevalence,
              and the level of damage they’ve caused.
            </p>
          </div>
          <div className="info-controlPlan-inspection-image">
            <img src={plan1} alt="" className="termite1" />
          </div>
        </div>
        <div className="info-controlPlan-inspection container2">
          <div className="info-controlPlan-inspection-image">
            <img src={plan2} alt="" className="termite2" />
          </div>
          <div className="info-controlPlan-inspection-content content2">
            <h1>
              <img src={stone} alt="" />
              OUR COMMERCIAL PEST CONTROL PLAN
            </h1>
            <p>
              Once the results have been finalised, we’ll put together a
              treatment plan to ensure your business is pest-free. The plan will
              clearly state the treatment type, how long it’ll take, and what
              you’ll need to do following our service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
