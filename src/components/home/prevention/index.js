import React from "react"

import divider3 from "../../../assets/home/divider3.png"

import tick from "../../../assets/home/icons/tick.svg"

import "./style.scss"

export default function Prevention() {
  return (
    <div className="home-prevention">
      <img src={divider3} alt="" style={{ width: "100%" }} />
      <div className="home-prevention-conatiner">
        <h3>
          First, take a look at some of the powerful reasons we are considered
          the best by 92% of our regular customers:
        </h3>
        <div className="home-prevention-conatiner-content">
          <img src={tick} alt="tick" />
          <p>
            All of our products are environment-friendly and have been
            rigorously tested and proven to eliminate and control pests.
          </p>
        </div>
        <div className="home-prevention-conatiner-content">
          <img src={tick} alt="tick" />
          <p>
            Deliver reliable, safe Pest Control and Pest Management Service,
            providing our customers with an enhanced level of confidence every
            time we visit their home or business premises.
          </p>
        </div>
        <div className="home-prevention-conatiner-content">
          <img src={tick} alt="tick" />
          <p>
            Eliminate all types of pests successfully, without any of the risks
            involved from using chemicals inside a customer’s home or business
            premises.
          </p>
        </div>
        <div className="home-prevention-conatiner-content">
          <img src={tick} alt="tick" />
          <p>
            Communicate effectively with you – we ask the right questions,
            listen to your problems and come up with the best solution every
            time. We will solve your pest problems without delay.
          </p>
        </div>
        <div className="home-prevention-conatiner-content">
          <img src={tick} alt="tick" />
          <p>
            For more information, call one of our expert pest control team
            members on (9580 0550 – Monday – Saturday) who will be happy to
            advise you on your specific pest problem.
          </p>
        </div>
        <h4 className="prevent">
          PREVENTION IS THE KEY TO LIVING PEST FREESAFE BY NATURE BUILT ON TRUST
        </h4>
      </div>
    </div>
  )
}
