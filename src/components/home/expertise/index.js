import React from "react"

import divider4 from "../../../assets/home/divider4.png"
import fleas1 from "../../../assets/home/icons/Fleas1.svg"
import fleas2 from "../../../assets/home/icons/Fleas2.svg"
import fleas3 from "../../../assets/home/icons/Fleas3.svg"
import fleas4 from "../../../assets/home/icons/Fleas4.svg"
import fleas5 from "../../../assets/home/icons/Fleas5.svg"
import fleas6 from "../../../assets/home/icons/Fleas6.svg"
import fleas7 from "../../../assets/home/icons/Fleas7.svg"

import "./style.scss"

export default function Expertise() {
  return (
    <div className="home-expertise">
      <img src={divider4} alt="" style={{ width: "100%", marginTop: "-5px" }} />
      <div className="home-expertise-container">
        <h3>
          Our expertise includes the treatment and eradication of all types of
          pests, including:
        </h3>
        <div className="home-expertise-conatiner-content">
          <div className="points">
            <img src={fleas1} alt=" fleas" />
            <p>Flea Control</p>
          </div>
          <div className="points">
            <img src={fleas2} alt=" fleas" />
            <p>Spider Control</p>
          </div>
          <div className="points">
            <img src={fleas3} alt=" fleas" />
            <p>Rodent Control</p>
          </div>
          <div className="points">
            <img src={fleas4} alt=" fleas" />
            <p>Cockroach Control</p>
          </div>
          <div className="points">
            <img src={fleas5} alt=" fleas" />
            <p>Termite Control</p>
          </div>
          <div className="points">
            <img src={fleas6} alt=" fleas" />
            <p>Ant Control</p>
          </div>
          <div className="points">
            <img src={fleas7} alt=" fleas" />
            <p>Bed bug Control</p>
          </div>
        </div>
      </div>
    </div>
  )
}
