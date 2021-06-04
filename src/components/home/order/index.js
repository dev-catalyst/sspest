import React from "react"
import { Button } from "@react-md/button"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import "./style.scss"

export default function order({ data }) {
  return (
    <div
      className="home-order"
      style={{
        backgroundImage: `url(${data.bg_image.url}), linear-gradient(#dde4ec, #eff2f7)`,
      }}
    >
      <div className="home-order-container">
        <h2>{RichText.asText(data.title.raw)}</h2>
        <p>{RichText.asText(data.content.raw)}</p>
        <h4>
          Call{" "}
          <a href="tel:RichText.asText(data.contact_no.raw)">
            {RichText.asText(data.contact_no.raw)}{" "}
          </a>
          or email{" "}
          <a href="mailto:RichText.asText(data.email_id.raw)">
            {RichText.asText(data.email_id.raw)}
          </a>
        </h4>
        <Link to={data.button.url}>
          <Button themeType="outline" className="btn">
            READ MORE
          </Button>
        </Link>
      </div>
    </div>
  )
}
