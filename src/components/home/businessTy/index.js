import React from "react"
import { RichText } from "prismic-reactjs"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function serviceType({ data, data2, data3 }) {
  return (
    <div className="home-business-types">
      <div className="home-business-types-container">
        {/* Residential block */}
        <div className="home-business-type">
          <div className="home-business-type-content">
            <img
              src={stone}
              alt="stone"
              className="home-business-type-content-stone"
            />
            <h1>{RichText.asText(data.title.raw)}</h1>
            <p>{RichText.asText(data.description.raw)}</p>
          </div>
          <div className="home-business-type-image">
            <div className="image-container">
              <div className="overlay"></div>
              <img src={data.image.url} alt="" className="btn2" />
              {/* <h1>{RichText.asText(data.title.raw)}</h1> */}
            </div>
            <h4>FIND OUT MORE</h4>
          </div>
        </div>
        {/* commercial block */}
        <div className="home-business-type commercial">
          <div className="home-business-type-image">
            <div className="image-container">
              <img src={data2.image.url} alt="" className="btn2" />
              {/* <h1>{RichText.asText(data2.title.raw)}</h1> */}
            </div>
            <h4>FIND OUT MORE</h4>
          </div>
          <div className="home-business-type-content">
            <img
              src={stone}
              alt="stone"
              className="home-business-type-content-stone"
            />
            <h1>{RichText.asText(data2.title.raw)}</h1>
            <p>{RichText.asText(data2.description.raw)}</p>
          </div>
        </div>

        {/* termite block */}
        <div className="home-business-type">
          <div className="home-business-type-content">
            <img
              src={stone}
              alt="stone"
              className="home-business-type-content-stone"
            />
            <h1>{RichText.asText(data3.title.raw)}</h1>
            <p>{RichText.asText(data3.description.raw)}</p>
          </div>
          <div className="home-business-type-image">
            <div className="image-container">
              <img src={data3.image.url} alt="" className="btn2" />
              {/* <h1 className="termite-h1">{RichText.asText(data3.title.raw)}</h1> */}
            </div>
            <h4>FIND OUT MORE</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
