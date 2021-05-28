import React from "react"
import { Button } from "@react-md/button"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"

import "./style.scss"

const Point = props => {
  return (
    <div className="treatment-point-structure">
      <img src={tick} alt="" />
      <p>{props.children}</p>
    </div>
  )
}

export default function treatmentServices() {
  return (
    <div className="info-treatment">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          TREATMENT SERVICES
        </h1>
        <p className="p1">
          We offer a variety of commercial pest control services to suit your
          needs. No matter the types of pests you’re dealing with, our expert
          team will help your business become clean and safe.
        </p>
        <p className="p2">You can call or email us about:</p>
        <div className="treatment-points-container">
          <div className="treatment-points">
            <Point>Ant prevention and control services</Point>
            <Point>Bed bug extermination</Point>
            <Point>Bird control</Point>
            <Point>Cockroach extermination</Point>{" "}
            <Point>Crickets treatment</Point>{" "}
          </div>
          <div className="treatment-points">
            <Point>Flea treatment</Point>
            <Point>Fermentation flies and house flies treatment</Point>
            <Point>Mite control</Point>
            <Point>Mosquito treatment</Point>
            <Point>Moth control</Point>
          </div>{" "}
          <div className="treatment-points">
            <Point>Mice and rat treatment</Point>
            <Point>Silverfish removal</Point>
            <Point>Spider removal</Point>
            <Point>Wasp and wasp nest extermination</Point>
            <Point>Termite control</Point>
          </div>
        </div>
        <p>
          We also offer businesses a general pest control service, which
          controls cockroaches, rats and mice, fermentation flies and house
          flies, ants, crickets, crawling inspects and spiders. By doing this
          regularly, we’ll keep your business clean and safe for your employees
          and customers.
        </p>
        <div className="info-treatment-btn-container">
          <Button themeType="contained" className="info-treatment-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
