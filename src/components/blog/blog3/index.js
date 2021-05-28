import React from "react"

import cutter from "../../../assets/blog/cutter.png"
import Carousel from "./Carousel"

import "./style.scss"

export default function Blog3() {
  return (
    <div className="blog-blog3">
      <img src={cutter} alt="" style={{ width: "100%", marginTop: "-5px" }} />
      <div className="container">
        <Carousel />
      </div>
    </div>
  )
}
