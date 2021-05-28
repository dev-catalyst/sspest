import React from "react"
import { Button } from "@react-md/button"
import "./style.scss"

export default function extermination() {
  return (
    <div className="info-extermination">
      <div className="container">
        <h1>THE EXTERMINATION PROCESS</h1>
        <p>
          Our highly qualified pest experts will follow your treatment plan in
          detail in order to eliminate all the identified pests. Depending on
          the level of infestation, we’ll choose the best extermination process
          for your situation. This may include using pesticides, pest traps,
          fumigation or other pest control methods.
          <br />
          <br />
          We’re dedicated to restoring your business to a clean and healthy
          state. We offer commercial customers the choice of organic pesticides
          or other approved products when conducting our cleaning services.
        </p>
        <div className="info-extermination-btn-container">
          <Button themeType="contained" className="info-extermination-btn">
            ORGANIC PEST CONTROL SERVICES
          </Button>
        </div>
      </div>
    </div>
  )
}
