import React from "react"
import divider3 from "../../../assets/home/divider3.png"
import { RichText } from "prismic-reactjs"
import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

export default function Prevention({ data }) {
  return (
    <div className="home-prevention">
      <img src={divider3} alt="" style={{ width: "100%" }} />
      <div className="home-prevention-conatiner">
        <h3>{RichText.asText(data.primary.title.raw)}</h3>
        {data.items.map((para, index) => {
          return (
            <div key={index} className="home-prevention-conatiner-content">
              <img src={tick} alt="tick" />
              <p>{RichText.asText(para.reasons.raw)}</p>
            </div>
          )
        })}
        <h4 className="prevent">{RichText.asText(data.primary.keynote.raw)}</h4>
      </div>
    </div>
  )
}
