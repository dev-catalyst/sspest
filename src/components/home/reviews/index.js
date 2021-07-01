import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function pestControl3({ data, data2 }) {
  return (
    <div className="home-reviews">
      <div className="home-reviews-container">
        <h1>{RichText.asText(data.primary.title.raw)}</h1>
        {data.items.map((para, index) => {
          return (
            <p key={index}>
              {RichText.asText(para.content.raw)}
              <br />
            </p>
          )
        })}
        <h2>{RichText.asText(data2.title.raw)}</h2>
        <div className="customer-review">
          <div className="review-message">
            <div className="quote-block">
              <p className="quote-comma">“</p>
              <p className="quote-para">{RichText.asText(data2.quote.raw)}</p>
            </div>
            <p style={{ marginLeft: "39px", fontStyle: "italic" }}>
              <span style={{ color: "#017CC0", fontWeight: "bold" }}>
                {" "}
                {RichText.asText(data2.author_name.raw)}
              </span>
              , {RichText.asText(data2.author_place.raw)}{" "}
            </p>
          </div>
          <div className="review-image">
            {data2.image ? <img src={data2.image.url} alt="" /> : null}
          </div>
        </div>
        <p>{RichText.asText(data2.finally.raw)}</p>
      </div>
    </div>
  )
}
