import React from "react"
import { Button } from "@react-md/button"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"

import "./style.scss"

const Need = props => {
  return (
    <div className="transport-need-structure">
      <img src={tick} alt="" />
      <p>{props.children}</p>
    </div>
  )
}

export default function transportNeed() {
  return (
    <div className="transport-need">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          Why do you need Transport Pest Control?
        </h1>
        <p className="p1">
          Given that thousands of people use airports, train platforms, wharves
          and washrooms on a daily basis, it’s vital that these facilities are
          regularly cleaned and inspected for pests.
        </p>
        <p className="p2">
          Here are some reasons why transport pest control is important:
        </p>
        <div className="transport-need-points-container">
          <div className="transport-need-points">
            <Need>
              During rush hour, people can discard rubbish without thinking.
              This creates a breeding ground for pests.
            </Need>
            <Need>
              Dirty or filthy transport facilities can attract pests like
              cockroaches, birds and rodents, many of which could be carry
              harmful diseases.
            </Need>
            <Need>
              Pests like spiders, rodents and cockroaches can scare customers
              and harm the transport businesses reputation.{" "}
            </Need>
            <Need>
              Airports are particularly susceptible to rodent or bird
              infestations, given they have many onsite food stores and
              washrooms.
            </Need>
          </div>
        </div>
        <p>
          Sydney Side Pest Control’s experts can help keep your transport
          facilities pest-free. Contact us now to set up an inspection at your
          property.
        </p>
        <div className="transport-need-btn-container">
          <Button themeType="contained" className="transport-need-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
