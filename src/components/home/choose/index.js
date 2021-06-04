import React from "react"
import { RichText } from "prismic-reactjs"
import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

export default function Choose({ data }) {
  return (
    <div className="home-choose">
      <div className="home-choose-container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        <h4>{RichText.asText(data.primary.description.raw)}</h4>
        <div className="why-and-card">
          <div className="why-container">
            {data.items.map((info, index) => {
              return (
                <div key={index} className="why">
                  <img src={tick} alt="tick" />
                  <p>{RichText.asText(info.points.raw)}</p>
                </div>
              )
            })}
          </div>
          <div className="card">
            <span className="quote-top">“</span>
            <p className="card-para">
              {RichText.asText(data.primary.quote.raw)}
            </p>
            <span className="quote-bottom">”</span>
          </div>
        </div>
      </div>
    </div>
  )
}
