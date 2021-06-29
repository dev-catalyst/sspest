import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import "./style.scss"

export default function extermination({ data }) {
  return (
    <div className="info-extermination">
      <div className="container">
        <div className="info-extermination-content">
          <div className="info-extermination-description">
            <RichText render={data.primary.title} />
            <RichText render={data.primary.description} />
          </div>
          <div className="info-extermination-image">
            <img src={data.primary.bg_image.url} alt="" />
          </div>
        </div>
        <div className="info-extermination-btn-container">
          <Link to="/organic-pest-control">
            <Button themeType="contained" className="info-extermination-btn">
              ORGANIC PEST CONTROL SERVICES
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
