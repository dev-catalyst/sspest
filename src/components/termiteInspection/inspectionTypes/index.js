import React from "react"

import inspection1 from "../../../assets/termite/inspection1.png"
import inspection2 from "../../../assets/termite/inspection2.png"
import inspection3 from "../../../assets/termite/inspection3.png"

import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function inspectionTypes() {
  return (
    <div className="termite-inspectionTypes">
      <div className="container">
        {/* row1 */}
        <div className="termite-inspectionTypes-inspection">
          <div className="termite-inspectionTypes-inspection-content">
            <h1>
              <img src={stone} alt="" />
              PRE-INSPECTION
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              ut sem viverra aliquet eget sit amet. Condimentum vitae sapien
              pellentesque habitant morbi tristique. Magna etiam tempor orci eu
              lobortis elementum. Sed vulputate odio ut enim. Elit duis
              tristique sollicitudin nibh. Nisi lacus sed viverra tellus in.
              Turpis egestas integer eget aliquet nibh praesent tristique magna.
              Arcu risus quis varius quam. Arcu felis bibendum ut tristique et
              egestas quis. Etiam non quam lacus suspendisse faucibus interdum.
            </p>
          </div>
          <div className="termite-inspectionTypes-inspection-image">
            <img src={inspection1} alt="" />
          </div>
        </div>
        {/* row2 */}
        <div className="termite-inspectionTypes-inspection col-rev">
          <div className="termite-inspectionTypes-inspection-image">
            <img src={inspection2} alt="" />
          </div>
          <div className="termite-inspectionTypes-inspection-content space">
            <h1>
              <img src={stone} alt="" />
              THE INSPECTION
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              ut sem viverra aliquet eget sit amet. Condimentum vitae sapien
              pellentesque habitant morbi tristique. Magna etiam tempor orci eu
              lobortis elementum. Sed vulputate odio ut enim. Elit duis
              tristique sollicitudin nibh. Nisi lacus sed viverra tellus in.
              Turpis egestas integer eget aliquet nibh praesent tristique magna.
              Arcu risus quis varius quam. Arcu felis bibendum ut tristique et
              egestas quis. Etiam non quam lacus suspendisse faucibus interdum.
            </p>
          </div>
        </div>
        {/* row3 */}
        <div className="termite-inspectionTypes-inspection">
          <div className="termite-inspectionTypes-inspection-content">
            <h1>
              <img src={stone} alt="" />
              POST INSPECTION
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              ut sem viverra aliquet eget sit amet. Condimentum vitae sapien
              pellentesque habitant morbi tristique. Magna etiam tempor orci eu
              lobortis elementum. Sed vulputate odio ut enim. Elit duis
              tristique sollicitudin nibh. Nisi lacus sed viverra tellus in.
              Turpis egestas integer eget aliquet nibh praesent tristique magna.
              Arcu risus quis varius quam. Arcu felis bibendum ut tristique et
              egestas quis. Etiam non quam lacus suspendisse faucibus interdum.
            </p>
          </div>
          <div className="termite-inspectionTypes-inspection-image">
            <img src={inspection3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
