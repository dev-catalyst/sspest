import React from "react"

import stone from "../../../assets/layout/stone.svg"
import tick from "../../../assets/home/icons/tick.svg"

import "./style.scss"

const Reason = props => {
  return (
    <div className="choosePest-reason-structure">
      <img src={tick} alt="" />
      <p>{props.children}</p>
    </div>
  )
}

export default function choosePest() {
  return (
    <div className="info-choosePest">
      <div className="info-choosePest-container">
        <h1>
          <img src={stone} alt="" />
          Why Choose Sydney Side Pest Control?
        </h1>
        <p className="p1">
          Sydney Side Pest Control has been providing pest management services
          for more than 10 years. Over this time, we’ve grown into one of the
          most reliable, efficient and trusted pest control businesses in
          Sydney. Our clients are often impressed by our professionalism,
          expertise, and ability to just get the job done.
        </p>
        <br />
        <p className="p2">Reasons to choose us:</p>
        <div className="choosePest-reasons-container">
          <div className="choosePest-reasons-points">
            <Reason>Experienced exterminators</Reason>
            <Reason>Trusted brands proven to be safe and effective</Reason>
            <Reason>
              Treatment methods that protect the environment, wildlife and
              safety of our technicians, customers and community
            </Reason>
            <Reason>Moderns tools and advanced techniques</Reason>
            <Reason>100% customer satisfaction guaranteed</Reason>
          </div>
          <div className="choosePest-reasons-points">
            <Reason>Fully licensed and insured service</Reason>
            <Reason>Dedicated support that’s available 7 days a week</Reason>
            <Reason>
              Friendly staff that understand how uncomfortable pest issues can
              be
            </Reason>
            <Reason>
              Accurate inspection and treatment reports, including site-specific
              documentation and auditing.
            </Reason>
          </div>
        </div>
        <p>
          Whether it’s residential or commercial pest control, we can use our
          advanced tools and methods to provide fast, safe and effective pest
          control.
        </p>
      </div>
    </div>
  )
}
