import React from "react"

import mail from "../../../../assets/layout/footer/email.svg"
import call from "../../../../assets/layout/footer/call.svg"
import map from "../../../../assets/layout/footer/map.svg"
import facebook from "../../../../assets/layout/footer/facebook.svg"
import insta from "../../../../assets/layout/footer/insta.svg"
import twitter from "../../../../assets/layout/footer/twitter.svg"
import logo from "../../../../assets/layout/footer/logo.svg"

import "./style.scss"

export default function primaryFooter() {
  return (
    <div className="primary-footer">
      <div className="primary-footer-container">
        <div className="primary-footer-contact-details">
          <div>
            <img src={mail} alt="" />
            <p>
              <a href="mailto:info@sspestcontrol.com.au">
                info@sspestcontrol.com.au
              </a>
            </p>
          </div>
          <div>
            <img src={call} alt="" />
            <p>
              <a href="tel:1300 007 772">1300 007 772</a>
            </p>
          </div>
          <div>
            <img src={map} alt="" className="map" />
            <p>
              12 Kawana St,
              <br /> Bass Hill 2197
            </p>
          </div>
        </div>
        <div className="primary-footer-social-media">
          <a href="">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="">
            <img src={insta} alt="insta" />
          </a>
        </div>
        <div className="primary-footer-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}
