import React from "react"
import { RichText } from "prismic-reactjs"
import "./style.scss"

const Timings = props => {
  return (
    <div className="timings">
      <p>{props.day}</p>
      <p>{props.time}</p>
    </div>
  )
}

export default function address({ data }) {
  return (
    <div
      className="landing-address"
      style={{
        backgroundImage: `url(${data.bg_image.url}),linear-gradient(#eff2f7, #eee4de)`,
      }}
    >
      <div className="container">
        <div className="landing-address-content">
          <div className="row">
            <img src={data.map_icon.url} alt="" />
            <p>{RichText.asText(data.address.raw)}</p>
          </div>
          <div className="row">
            <img src={data.time_icon.url} alt="" />
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
            <img src={data.map_icon.url} alt="" />
            <p>{RichText.asText(data.services.raw)}</p>
          </div>
        </div>
        <div className="landing-address-map">
          <iframe
            title="map"
            src={data.map_link.url}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
