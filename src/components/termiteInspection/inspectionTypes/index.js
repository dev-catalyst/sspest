import React from "react"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function inspectionTypes({ data, data2, data3 }) {
  console.log(data2.items)
  console.log(data3.items)
  return (
    <div className="termite-inspectionTypes">
      <div className="container">
        {/* row1 */}
        <div className="termite-inspectionTypes-inspection">
          <div className="termite-inspectionTypes-inspection-content">
            <h1>
              <img src={stone} alt="" />
              <RichText render={data.primary.title} />
            </h1>
            <RichText render={data.primary.description} />
            {/* {data.items.map((para, index) => {
              return <RichText key={index} render={para.description} />
            })} */}
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
              <RichText render={data2.primary.title} />
            </h1>
            <RichText render={data2.primary.description} />
            {/* {data2.items.map((para, index) => {
              return (
                <>
                  <RichText key={index} render={para.description} />
                </>
              )
            })} */}
          </div>
        </div>
        {/* row3 */}
        <div className="termite-inspectionTypes-inspection">
          <div className="termite-inspectionTypes-inspection-content">
            <h1>
              <img src={stone} alt="" />
              <RichText render={data3.primary.title} />
            </h1>
            <RichText render={data3.primary.description} />
            {/* {data3.items.map((para, index) => {
              return (
                <>
                  <RichText key={index} render={para.description} />
                </>
              )
            })} */}
          </div>
          <div className="termite-inspectionTypes-inspection-image">
            <img src={data3.primary.image.url} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
