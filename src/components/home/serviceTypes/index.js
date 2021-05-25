import React from "react"

import stone from "../../../assets/layout/stone.svg"
import residential from "../../../assets/home/residential.png"
import commercial from "../../../assets/home/commercial.png"
import termite from "../../../assets/home/termite.png"
import residentialS from "../../../assets/home/mobile/resi-small.png"
import commercialS from "../../../assets/home/mobile/com-small.png"
import termiteS from "../../../assets/home/mobile/term-small.png"
import "./style.scss"

export default function serviceType() {
  return (
    <div className="home-service-types">
      <div className="home-service-types-container">
        <div className="home-service-type-residential">
          <div className="home-service-type-residential-content">
            <img
              src={stone}
              alt="stone"
              className="home-service-type-residential-content-stone"
            />
            <h1>RESIDENTIAL</h1>
            <p>
              We know our core Business is B2C, Residential Sydney Siders who
              need a Professional Pest Company to offer the best Solutions at a
              low cost.
            </p>
          </div>
          <div className="home-service-type-residential-image">
            <div className="residential-image">
              <img src={residential} alt="" className="btn2" />
              <img src={residentialS} alt="" className="btn2" />
              <h1>RESIDENTIAL</h1>
            </div>
            <h4>FIND OUT MORE</h4>
          </div>
        </div>

        <div className="home-service-type-commercial">
          <div className="home-service-type-commercial-image">
            <div className="commercial-image">
              <img src={commercial} alt="" className="btn2" />
              <img src={commercialS} alt="" className="btn2" />
              <h1>COMMERCIAL</h1>
            </div>
            <h4>FIND OUT MORE</h4>
          </div>

          <div className="home-service-type-commercial-content">
            <img
              src={stone}
              alt="stone"
              className="home-service-type-commercial-content-stone"
            />
            <h1>COMMERCIAL</h1>
            <p>
              B2B Commercial Clients are also a core part of our Business,
              Providing Integrated Pest Management Solution to reduce
              operational disruptions and protect your Company Brand and
              Business from Pests.
            </p>
          </div>
        </div>

        <div className="home-service-type-termite">
          <div className="home-service-type-termite-content">
            <img
              src={stone}
              alt="stone"
              className="home-service-type-termite-content-stone"
            />
            <h1>TERMITE CONTROL</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="home-service-type-termite-image">
            <div className="termite-image">
              <img src={termite} alt="" className="btn2" />
              <img src={termiteS} alt="" className="btn2" />
              <h1>TERMITE CONTROL</h1>
            </div>
            <h4>FIND OUT MORE</h4>
          </div>
        </div>
      </div>
    </div>
  )
}
