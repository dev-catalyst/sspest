import React from "react"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function inspectionTypes({ data, data2, data3 }) {
  return (
    <div className="termite-inspectionTypes">
      <div className="container">
        {/* row1 */}
        <div className="termite-inspectionTypes-inspection">
          <div className="termite-inspectionTypes-inspection-content">
            <h1>
              <img src={stone} alt="" />
              {RichText.asText(data.primary.title.raw)}
            </h1>
            {data.items.map((para, index) => {
              return <p key={index}>{RichText.asText(para.content.raw)}</p>
            })}
          </div>
          <div className="termite-inspectionTypes-inspection-image">
            <img src={data.primary.image.url} alt="" />
          </div>
        </div>
        {/* row2 */}
        <div className="termite-inspectionTypes-inspection col-rev">
          <div className="termite-inspectionTypes-inspection-image">
            <img src={data2.primary.image.url} alt="" />
          </div>
          <div className="termite-inspectionTypes-inspection-content space">
            <h1>
              <img src={stone} alt="" />
              {RichText.asText(data2.primary.title.raw)}
            </h1>
            {data2.items.map((para, index) => {
              return <p key={index}>{RichText.asText(para.content.raw)}</p>
            })}
          </div>
        </div>
        {/* row3 */}
        <div className="termite-inspectionTypes-inspection">
          <div className="termite-inspectionTypes-inspection-content">
            <h1>
              <img src={stone} alt="" />
              {RichText.asText(data3.primary.title.raw)}
            </h1>
            {data3.items.map((para, index) => {
              return <p key={index}>{RichText.asText(para.content.raw)}</p>
            })}
          </div>
          <div className="termite-inspectionTypes-inspection-image">
            <img src={data3.primary.image.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
