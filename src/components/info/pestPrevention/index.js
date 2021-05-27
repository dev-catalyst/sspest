import React from "react"
import { Button } from "@react-md/button"
import "./style.scss"

export default function pestPrevention() {
  return (
    <div className="info-pestPrevention">
      <div className="info-pestPrevention-container">
        <h1>PEST PREVENTION</h1>
        <p>
          Preventing the recurrence of pests is vital to the long-term health
          and safety of your commercial business. Once our exterminators have
          finished their treatment, another inspection may be required in order
          to make sure your commercial space doesn’t contain traces of the
          pests. In serious cases of infestation, the team may need to make
          multiple extermination visits in order to guarantee your business is
          pest-free.
        </p>
        <p>
          Following our pest extermination service, we’ll provide you with tips
          on how to reduce the risk of another infestation at your commercial
          business. Some basic preventative measures you can take are:
        </p>
        <ul>
          <li>Inspecting your commercial space on a regular basis</li>
          <li>
            Making sure your business is well ventilated in order to limit damp
            areas
          </li>
          <li>
            Cleaning your commercial space and reducing clutter to prevent areas
            where pests can hide
          </li>
        </ul>
        <div className="info-pestPrevention-btn-container">
          <Button themeType="contained" className="info-pestPrevention-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
