import React from "react"
import divider4 from "../../../assets/home/divider4.png"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function Expertise({ data }) {
  return (
    <div className="home-expertise">
      <img src={divider4} alt="" style={{ width: "100%", marginTop: "-7px" }} />
      <div className="home-expertise-container">
        <h3>{RichText.asText(data.primary.title.raw)}</h3>
        <div className="home-expertise-conatiner-content">
          {data.items.map((info, index) => {
            return (
              <div key={index} className="points">
                {info.icons ? <img src={info.icons.url} alt=" fleas" /> : null}
                <p>{RichText.asText(info.pest_types.raw)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
