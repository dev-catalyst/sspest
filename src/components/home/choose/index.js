import React from "react"

import tick from "../../../assets/home/icons/tick.svg"
import "./style.scss"

export default function Choose() {
  return (
    <div className="home-choose">
      <div className="home-choose-container">
        <h1>Why Choose Us?</h1>
        <h4>
          SAFE, EFFECTIVE, GUARANTEED OUTCOMES, FRIENDLY, FULLY TRAINED AND
          ACCREDITED STAFF.
        </h4>
        <div className="why-and-card">
          <div className="why-container">
            <div className="why">
              <img src={tick} alt="tick" />
              <p>7 Days a week</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Fully Licensed & Insured</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Family & Pet Safe</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Brand Name Products</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Environmentally Friendly</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Guaranteed Results</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>On Time Service</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Possum Trapping</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Trained and Accredited</p>
            </div>
            <div className="why">
              <img src={tick} alt="tick" />
              <p>Safe Working Methods</p>
            </div>
          </div>
          <div className="card">
            <span className="quote-top">“</span>
            <p className="card-para">
              Just a quick note to say a BIG thank you to Jeff for his advice
              and service. You guys obviously care about what you do and how you
              do it and it was refreshing to deal with such an honest and
              reliable pest control company. Thanks again!
            </p>
            <span className="quote-bottom">”</span>
          </div>
        </div>
      </div>
    </div>
  )
}
