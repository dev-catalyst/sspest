import React from "react"
import { RichText } from "prismic-reactjs"
import curve from "../../../assets/curves/curve-top-light-01.png"
import map from "../../../assets/landing/map.svg"
import clock from "../../../assets/landing/clock.svg"
import search from "../../../assets/landing/search.svg"
import "./style.scss"

const Timings = props => {
  return (
    <div className="timings">
      <p>{props.day}</p>
      {props.time}
    </div>
  )
}

export default function address({ data }) {
  return (
    <div
      className="landing-address"
      style={{
        backgroundImage: `linear-gradient(#333333, #1E1D18), url(${data.primary.bg_image.url})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <img
        src={curve}
        style={{
          width: "100%",
          marginTop: "-6px",
        }}
        alt=""
      />
      <div className="container">
        <div className="landing-address-content">
          <div className="row">
            <img src={map} alt="" />
            <RichText render={data.primary.location} />
          </div>
          <div className="row">
            <img src={clock} alt="" />
            <div className="day-time">
              <Timings
                day="Monday"
                time={<RichText render={data.primary.timings} />}
              />
              <Timings
                day="Tuesday"
                time={<RichText render={data.primary.timings} />}
              />
              <Timings
                day="Wednesday"
                time={<RichText render={data.primary.timings} />}
              />
              <Timings
                day="Thursday"
                time={<RichText render={data.primary.timings} />}
              />
              <Timings
                day="Friday"
                time={<RichText render={data.primary.timings} />}
              />
              <Timings
                day="Saturday"
                time={<RichText render={data.primary.timings} />}
              />
              <Timings day="Sunday" time={<p>Closed</p>} />
            </div>
          </div>
          <div className="row">
            <img src={search} alt="" />
            <p>Residential Services, Commercial Services, Termite Control</p>
          </div>
        </div>
        <div className="landing-address-map">
          <iframe
            title="map"
            src={data.primary.address_link.url}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
