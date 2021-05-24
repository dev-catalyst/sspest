import React from "react"
import divider5 from "../../../assets/home/divider5.png"
import "./style.scss"
import callImg from "../../../assets/home/call-img.png"
import callImgS from "../../../assets/home/mobile/call-img.png"
export default function Call() {
  return (
    <div className="home-call">
      <img src={divider5} alt="" style={{ width: "100%", marginTop: "-5px" }} />
      <div className="home-call-container">
        <div className="home-call-content">
          <h1>FOUR REASONS TO CALL SSPEST</h1>
          <p>
            If your looking for a professional pest control company you’ve come
            to the right place, it’s our business to manage pests, any pest, and
            we know how to manage an ant out of an ant hill, We make no qualms
            about it, providing the safest pest control possible for you, your
            pet and the environment is what we do best.
          </p>
        </div>
        <div className="home-call-image">
          <img src={callImg} alt="" />
        </div>
      </div>
    </div>
  )
}
