import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function Services({ data }) {
  return (
    <div className="landing-services">
      <div className="container">
        <RichText render={data.primary.title} />
        <div className="landing-services-image">
          <img src={data.primary.image.url} alt="" />
        </div>
        {data.items.map((para, index) => {
          return (
            <div key={index} className="landing-services-content">
              <RichText render={para.subtitle} />
              <RichText render={para.description} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
