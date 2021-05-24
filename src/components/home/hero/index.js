import React from "react"

import ellipse from "../../../assets/home/icons/ellipse.svg"
import call from "../../../assets/home/icons/call.svg"
import quotes from "../../../assets/home/icons/quotes.svg"
import Home from "../../../assets/home/icons/home.svg"
import Pest from "../../../assets/home/icons/pest.svg"
import Sydney from "../../../assets/home/icons/sydney.svg"
import Crew from "../../../assets/home/icons/crew.svg"
import Ten from "../../../assets/home/icons/ten.svg"
import Shield from "../../../assets/home/icons/shield.svg"
import ratings from "../../../assets/home/rating.png"

import "./style.scss"

export default function Hero() {
  return (
    <div className="home-hero">
      <div className="home-hero-container">
        <div className="home-hero-features">
          <div className="home-hero-features-general">
            <h4>THE GENERAL PEST</h4>
            <h2>$170</h2>
            <span className="place">ANY HOUSE</span>
            <img src={ellipse} alt="" />
            <span className="place">INSIDE AND OUT</span>
            <img src={ellipse} alt="" />
            <span className="place">ALL PESTS TREATED</span>
            <div className="get-quote">
              <a href="tel:1300 007 772">
                <div className="call">
                  <img src={call} />
                  <p className="free-quote">
                    FREE QUOTE! CALL NOW
                    <br></br>
                    <span>1300 007 772</span>
                  </p>
                </div>
              </a>
            </div>
            <div className="quote-conatiner">
              <img src={quotes} alt="" className="quote-img" />
              <p className="quote">
                Very happy with an on-time service. Would recommend to friends
                and family! <br /> <br />
                <span>Karla</span>, Greenwich
              </p>
            </div>
            <div className="quote-conatiner">
              <img src={quotes} alt="" className="quote-img" />
              <p className="quote">
                Service was great and Jeff was helpful. Have already recommended
                him to my son. <br /> <br />
                <span>May & Dennis</span>, Padstow
              </p>
            </div>
            <div className="quote-conatiner">
              <img src={quotes} alt="" className="quote-img" />
              <p className="quote">
                Had all 3 of my properties done - will definitely call them back
                next year. <br /> <br />
                <span>David</span>, Neutral Bay
              </p>
            </div>
          </div>
          <div className="home-hero-features-cost">
            <h6 className="title">
              Sydney's <span>LOW COST </span>professional pest control company.
              Price fixed at $170 for any house!
            </h6>
            <p>
              <img src={Home} alt="" /> Flat rate $170 any house
            </p>
            <p>
              <img src={Pest} alt="" /> Includes rodent treatment
            </p>
            <p>
              <img src={Sydney} alt="" /> Servicing all of Sydney
            </p>
            <p>
              <img src={Crew} alt="" /> Servicing all of Sydney
            </p>
            <p>
              <img src={Ten} alt="" /> 10 Years experience
            </p>
            <p>
              <img src={Shield} alt="" /> All pests & bugs treated
            </p>
          </div>
        </div>
        <div className="google-ratings">
          <img src={ratings} alt="google-ratings" />
        </div>
      </div>
    </div>
  )
}
