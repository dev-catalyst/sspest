import React from "react"

import "./style.scss"

import review1 from "../../../assets/home/review1.png"

export default function pestControl3() {
  return (
    <div className="home-reviews">
      <div className="home-reviews-container">
        <h1>Company Reviews</h1>
        <p>
          It’s especially relevant seaching Google to type in “Sydney Side Pest
          Control Reviews” to do the due diligence. We’re confident that you’ll
          like what you see and that the exceptional commitment to customers we
          offer will result in our business continuing to grow, enabling us to
          provide a quality local service to more people in need of effective
          pest control and pest management.
        </p>
        <br />
        <p>
          We’ve worked hard to build a great reputation as an industry leader in
          providing exceptional levels of customer service, ensuring that we
          understand each client’s individual requirements and delivering
          efficient and professional pest control and assistance for all of our
          customers in the city of Sydney and the surrounding region.
        </p>
        <br />
        <p>
          Therefore We pay close attention to detail to guarantee that we
          provide the correct advice, which puts us head and shoulders above the
          competition.
        </p>
        <h2>
          Take a look at this testimonial from one of our satisfied customers
        </h2>
        <div className="customer-review">
          <div className="review-message">
            <div className="quote-block">
              <p className="quote-comma">“</p>
              <p className="quote-para">
                Service was fast and efficient. Jeff also took the time to
                advise me on future prevention of certain pests which was much
                appreciated. Great service and a fantastic price, I will use SS
                Pest Control again in the future.
              </p>
            </div>
            <p style={{ marginLeft: "39px", fontStyle: "italic" }}>
              <span style={{ color: "#017CC0", fontWeight: "bold" }}>Nick</span>
              , Campbelltown{" "}
            </p>
          </div>
          <div className="review-image">
            <img src={review1} alt="" />
          </div>
        </div>
        <p>
          Finally, If you require any assistance or advice regarding any type of
          pest control issues throughout Sydney, whether its termite inspection
          in Campbelltown, a redback at your property in Manly or a bird control
          problem in Penrith, Sydney Side Pest Control has got you covered and
          will offer a free quote at a time that’s convenient for you.
        </p>
      </div>
    </div>
  )
}
