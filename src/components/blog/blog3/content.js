import React from "react"

import { Button } from "@react-md/button"
import img3 from "../../../assets/blog/blog3-img.png"
import "./style.scss"

export default function content() {
  const date = "February 26, 2021"
  const count = 15
  return (
    <div className="blog-blog3-content">
      <div className="blog-blog3-content-image">
        <img src={img3} alt="" />
      </div>
      <h3>LOREM IPSUM DOLOR SIT AMET</h3>
      <p className="center-p">Posted {date}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed
        enim ut. Quam id leo in vitae turpis. Eu facilisis sed odio morbi quis
        commodo odio. Et tortor at risus viverra adipiscing at in tellus
        integer. Nec dui nunc mattis enim ut tellus. Tellus mauris a diam
        maecenas sed. Tortor vitae purus faucibus ornare suspendisse sed nisi.
        Dignissim sodales ut eu sem integer vitae justo eget. Diam donec
        adipiscing tristique risus nec. Pharetra pharetra massa massa ultricies
        mi. Purus gravida quis blandit turpis cursus in. Faucibus in ornare quam
        viverra orci sagittis eu volutpat odio. Quis enim lobortis scelerisque
        fermentum dui faucibus.
      </p>
      <div className="bottom-text">
        <div className="button-container">
          <Button themeType="outline" className="blog3-button">
            Termites
          </Button>
          <Button themeType="outline" className="blog3-button">
            Pest Control
          </Button>
          <Button themeType="outline" className="blog3-button">
            Inspection
          </Button>
        </div>
        <p className="comments">{count} Comments</p>
      </div>
    </div>
  )
}
