import React from "react"

import landSer from "../../../assets/landing/land-serve.png"

import "./style.scss"

export default function Services() {
  return (
    <div className="landing-services">
      <div className="container">
        <h1>Our Services</h1>
        <div className="landing-services-image">
          <img src={landSer} alt="" />
        </div>
        <div className="landing-services-content">
          <h3>Residential Pest Control</h3>
          <p>
            Our warranty provides that your home will be secure and free of
            pests that we service which offers customers a pest-free guarantee
            period. When it comes to the safety of your family or your property.
            Sydney Side Pest Control is the right choice and the best company to
            take care of your pest problems.
          </p>
        </div>
        <div className="landing-services-content">
          <h3>Commercial Pest Control</h3>
          <p>
            If your home is safe from pests, so should be your business. Our
            professional specialized team developed a range of different
            services focused on maintaining a pest-free environment for your
            business. Our well-developed and long-established pest exclusion
            programs from cockroach, rodent, flying insects, and building
            external perimeters are just some of the commercial services
            offered.
          </p>
        </div>
        <div className="landing-services-content">
          <h3>Termite Control</h3>
          <p>
            The Australian standards for termite management are divided into
            three Areas: Termite Inspection, Termite Control, and Termite
            Prevention. Through our accreditation in several termite management
            systems for post and pre-construction, we can create the right
            strategy to guarantee the complete service extermination of termites
            in your domestic or commercial property and reliable prevention so
            they will never return.
          </p>
        </div>
        <div className="landing-services-content">
          <h3>Bird Control</h3>
          <p>
            Our Bird Program not only eliminates but prevents re-infestation of
            the following species: Starling, Indian Myna, Pigeon, and Sparrow.
          </p>
        </div>
        <div className="landing-services-content">
          <h3>Feral Animal Control</h3>
          <p>
            The Feral Animal program consists of methodical traps followed by
            relocation through an ethical catch-and-release practice to free
            your property from feral cats, wild rabbits, and possums.
          </p>
        </div>
      </div>
    </div>
  )
}
