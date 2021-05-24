import React from "react"
import GeneralPest from "../generalPest"
import stone from "../../../assets/layout/stone.svg"
import cylinder from "../../../assets/home/cylinder.png"

import "./style.scss"

export default function pestControl() {
  return (
    <div className="home-pest-control">
      <div className="home-pest-control-container">
        <div className="general-pest">
          <GeneralPest />
        </div>
        <div className="home-pest-control-container-content">
          <h1>PEST CONTROL SYDNEY</h1>
          <img src={stone} alt="stone" className="pest-control-stone" />
          <p>
            If your looking for a professional pest control company you’ve come
            to the right place, it’s our business to manage pests, any pest, and
            we know how to manage an ant out of an ant hill, We make no qualms
            about it, providing the safest pest control possible for you, your
            pet and the environment is what we do best.
          </p>
        </div>
        <div className="image-holder">
          <img src={cylinder} alt="" />
        </div>
      </div>
    </div>
  )
}
