import React from "react"
import "./style.scss"

export default function content({ data }) {
  console.log(data)
  return (
    <div className="landing-carousel-content">
      <div className="landing-carousel-content-para">
        <h2>Qualified field service specialists</h2>
        <p>
          Our field specialists are fully-trained and licensed Pest Management
          Technicians with Termite endorsement accreditation, along with their
          extensive experience in residential and commercial pest management. We
          pride ourselves on consistency in executing onsite pest & termite
          assessments for safe application of chemical or non-chemical treatment
          plans on any standard service carried daily.
        </p>
      </div>
    </div>
  )
}
