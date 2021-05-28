import React from "react"
import GeneralPest from "../../home/generalPest"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function blackTown() {
  return (
    <div className="landing-blackTown">
      <div className="container">
        <div className="landing-general-pest">
          <GeneralPest />
        </div>
        <div className="landing-blackTown-content">
          <h1>
            <img src={stone} alt="" />
            PEST CONTROL BLACKTOWN
          </h1>
          <p>
            If you’re looking for a professional pest control Sydney company
            with a proven track record for quality pest management, competitive
            pricing, and guaranteed results, then you’ve come to the right
            place. At Sydney Side Pest Control, our business is to take care of
            your pest problem as fast as possible, with discretion, and
            efficient removal with our Sydney-wide services, providing the
            safest pest control in Sydney for you and your family, any day of
            the week.
            <br />
            <br /> Our treatment packages come with a warranty between 3 to 6
            months, serving as a safety net for your satisfaction. Throughout
            our customer service history, we have received positive feedback
            from either our new client, repeat customers or referrals, in
            residential and commercial contracts. When it comes down to trust,
            there is no better track record.
          </p>
        </div>
      </div>
    </div>
  )
}
