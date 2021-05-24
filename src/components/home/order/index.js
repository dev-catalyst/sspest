import React from "react"

import { Button } from "@react-md/button"
import "./style.scss"

export default function order() {
  return (
    <div className="home-order">
      <div className="home-order-container">
        <h2>Order Pest Control Services in Sydney now!</h2>
        <p>
          Get in touch with us and one of our friendly team members will arrange
          a free of charge appointment at your convenience.
        </p>
        <h4>
          Call <a href="tel:1300 007 772">1300 007 772 </a>or email{" "}
          <a href="mailto:info@sspestcontrol.com.au">
            info@sspestcontrol.com.au
          </a>
        </h4>
        <Button themeType="outline" className="btn">
          READ MORE
        </Button>
      </div>
    </div>
  )
}
