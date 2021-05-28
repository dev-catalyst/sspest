import React from "react"
import { Button } from "@react-md/button"
import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"

import "./style.scss"

const Need = props => {
  return (
    <div className="school-need-structure">
      <img src={tick} alt="" />
      <p>{props.children}</p>
    </div>
  )
}

export default function schoolNeed() {
  return (
    <div className="school-need">
      <div className="container">
        <h1>
          <img src={stone} alt="" />
          Why do you need School Pest Control?
        </h1>
        <p className="p1">
          Your children deserve to learn in a safe and clean environment. An
          unhygienic school can lead to pests and the spread of diseases.
        </p>
        <p className="p2">
          Here are some reasons why school pest control is important:
        </p>
        <div className="school-need-points-container">
          <div className="school-need-points">
            <Need>
              Cafeterias, classrooms, locker rooms, gyms, school grounds and
              rubbish bins attract pests due to discarded or leftover food.
            </Need>
            <Need>
              Areas of schools can have poor ventilation, which can lead to
              pests.
            </Need>
            <Need>
              Damp environments like bathrooms can lead to cockroaches which
              spread diseases.
            </Need>
            <Need>
              Moths and other insects can congregate in cupboards and pantries
              and spoil food.
            </Need>
            <Need>
              Given the high density of students and staff, diseases from pests
              can spread quickly and lead to families being infected.
            </Need>
            <Need>
              Poor hygiene and pests can ruin a school reputation with families
              and the community.
            </Need>
          </div>
        </div>
        <p>
          Sydney Side Pest Control’s experts can help keep your school
          pest-free. Contact us now to set up an inspection at your school.
        </p>
        <div className="school-need-btn-container">
          <Button themeType="contained" className="school-need-btn">
            CONTACT US NOW
          </Button>
        </div>
      </div>
    </div>
  )
}
