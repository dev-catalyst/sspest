import React from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import { Link } from "gatsby"
import "./style.scss"

export default function extermination({ data, id }) {
  return (
    <div className="info-extermination">
      <div className="container">
        <div className="info-extermination-content">
          <div className="info-extermination-description">
            <RichText render={data.primary.title} />
            <RichText render={data.primary.description} />
            {id !== "flying-insect-control" ||
            id !== "rodent-control-sydney" ? null : (
              <div className="info-extermination-btn-container">
                <Link to="/organic-pest-control">
                  <Button
                    themeType="contained"
                    className="info-extermination-btn"
                  >
                    ORGANIC PEST CONTROL SERVICES
                  </Button>
                </Link>
              </div>
            )}
          </div>
          <div className="info-extermination-image">
            {data.primary.bg_image ? (
              <img
                src={data.primary.bg_image.url}
                alt=""
                className="termite1"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
