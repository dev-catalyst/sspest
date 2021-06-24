import React from "react"

import { Link } from "gatsby"

import mail from "../../../../assets/layout/footer/email.svg"
import call from "../../../../assets/layout/footer/call.svg"
import map from "../../../../assets/layout/footer/map.svg"
import mailS from "../../../../assets/layout/footer/mail-s.svg"
import callS from "../../../../assets/layout/footer/call-s.svg"
import mapS from "../../../../assets/layout/footer/map-s.svg"
import facebook from "../../../../assets/layout/footer/facebook.svg"
import insta from "../../../../assets/layout/footer/insta.svg"
import twitter from "../../../../assets/layout/footer/twitter.svg"
import facebookS from "../../../../assets/layout/footer/face-s.svg"
import instaS from "../../../../assets/layout/footer/insta-s.svg"
import twitterS from "../../../../assets/layout/footer/twit-s.svg"
import logo from "../../../../assets/layout/header/logo.svg"
import logoSmall from "../../../../assets/layout/footer/logo-small.svg"

import "./style.scss"

export default function primaryFooter() {
  return (
    <div className="primary-footer">
      <div className="primary-footer-container">
        <div className="primary-footer-contact-details">
          <div>
            <img
              src={mail}
              alt=""
              className="primary-footer-contact-details-icons-desktop"
            />
            <img
              src={mailS}
              alt=""
              className="primary-footer-contact-details-icons-mobile"
            />
            <p>
              <a href="mailto:info@sspestcontrol.com.au">
                info@sspestcontrol.com.au
              </a>
            </p>
          </div>
          <div>
            <img
              src={call}
              alt=""
              className="primary-footer-contact-details-icons-desktop"
            />
            <img
              src={callS}
              alt=""
              className="primary-footer-contact-details-icons-mobile"
            />
            <p>
              <a href="tel:1300 007 772">1300 007 772</a>
            </p>
          </div>
          <div>
            <img
              src={map}
              alt=""
              className="map primary-footer-contact-details-icons-desktop"
            />
            <img
              src={mapS}
              alt=""
              className="map primary-footer-contact-details-icons-mobile"
            />
            <p>
              12 Kawana St,
              <br className="hide" /> Bass Hill 2197
            </p>
          </div>
        </div>
        <div className="primary-footer-social-media-desktop">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={insta} alt="insta" />
          </a>
        </div>
        <div className="primary-footer-social-media-mobile">
          <a href="#">
            <img src={facebookS} alt="facebook" />
          </a>
          <a href="#">
            <img src={twitterS} alt="twitter" />
          </a>
          <a href="#">
            <img src={instaS} alt="insta" />
          </a>
        </div>
        <Link to="/">
          <div className="primary-footer-logo-xl">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <Link to="/">
          <div className="primary-footer-logo-l">
            <img src={logoSmall} alt="logo" />
          </div>
        </Link>
      </div>
    </div>
  )
}
