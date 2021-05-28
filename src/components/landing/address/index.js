import React from "react"

import map from "../../../assets/landing/map.svg"
import clock from "../../../assets/landing/clock.svg"
import search from "../../../assets/landing/search.svg"
import "./style.scss"

const Timings = props => {
  return (
    <div className="timings">
      <p>{props.day}</p>
      <p>{props.time}</p>
    </div>
  )
}

export default function address() {
  return (
    <div className="landing-address">
      <div className="container">
        <div className="landing-address-content">
          <div className="row">
            <img src={map} alt="" />
            <p>Lvl 3/81 Flushcombe Rd, Blacktown NSW 2148, Australia</p>
          </div>
          <div className="row">
            <img src={clock} alt="" />
            <div className="day-time">
              <Timings day="Monday" time="8:00 AM - 05:00 PM" />
              <Timings day="Tuesday" time="8:00 AM - 05:00 PM" />
              <Timings day="Wednesday" time="8:00 AM - 05:00 PM" />
              <Timings day="Thursday" time="8:00 AM - 05:00 PM" />
              <Timings day="Friday" time="8:00 AM - 05:00 PM" />
              <Timings day="Saturday" time="8:00 AM - 05:00 PM" />
              <Timings day="Sunday" time="Closed" />
            </div>
          </div>
          <div className="row">
            <img src={search} alt="" />
            <p>Residential Services, Commercial Services, Termite Control</p>
          </div>
        </div>
        <div className="landing-address-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.533963769329!2d150.90565851417333!3d-33.772706821507036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12985536815863%3A0x8cf85d0d6a147fc!2slevel%203%2F81%20Flushcombe%20Rd%2C%20Blacktown%20NSW%202148%2C%20Australia!5e0!3m2!1sen!2sin!4v1622092969639!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
