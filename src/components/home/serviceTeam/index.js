import React from "react"

import divider2 from "../../../assets/home/divider2.png"
import man from "../../../assets/home/man.png"
import "./style.scss"

export default function serviceTeam() {
  return (
    <div className="home-service-team">
      <img src={divider2} style={{ width: "100%", marginTop: "-5px" }} />
      <div className="home-service-team-container">
        <h1>OUR SERVICE TEAM</h1>
        <div className="home-service-team-images">
          <img src={man} alt="service" />
          <img src={man} alt="service" />
          <img src={man} alt="service" />
          <img src={man} alt="service" />
          <img src={man} alt="service" />
        </div>
        <p className="home-service-team-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}
