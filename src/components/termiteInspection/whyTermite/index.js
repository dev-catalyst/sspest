import React from "react"
import GeneralPest from "../../home/generalPest"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function WhyTermite({ data, data2 }) {
  return (
    <div className="termite-whyTermite">
      <div className="container">
        <div className="termite-general-pest">
          <GeneralPest />
        </div>
        <div className="termite-whyTermite-inspection">
          <div className="termite-whyTermite-inspection-content">
            <h1>
              <img src={stone} alt="" />
              {RichText.asText(data.primary.title.raw)}
            </h1>
            {data.items.map((para, index) => {
              return <p key={index}>{RichText.asText(para.content.raw)}</p>
            })}
          </div>
          <div className="termite-whyTermite-inspection-image">
            <img src={data.primary.image.url} alt="" className="termite1" />
          </div>
        </div>
        <div className="termite-whyTermite-inspection container2">
          <div className="termite-whyTermite-inspection-image">
            <img src={data2.primary.image.url} alt="" className="termite2" />
          </div>
          <div className="termite-whyTermite-inspection-content content2">
            <h1>
              <img src={stone} alt="" />
              {RichText.asText(data2.primary.title.raw)}
            </h1>
            <div>
              <p>{RichText.asText(data2.primary.subtitle.raw)}</p>
              <ul>
                {data2.items.map((para, index) => {
                  return (
                    <li key={index}>{RichText.asText(para.content.raw)}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
