import React from "react"
import Paginate from "./paginate"
import cutter from "../../../assets/blog/cutter.png"
import "./style.scss"

export default function Blog3({ bg, data }) {
  return (
    <div
      className="blog-blog3"
      style={{
        backgroundImage: `linear-gradient(#0A6A9C, #01639A),url(${bg.bg_image.url})`,
        backgroundBlendMode: "multiply",
      }}
    >
      <img src={cutter} alt="" style={{ width: "100%", marginTop: "-7px" }} />
      <div className="container">
        {/* <Carousel data={data} /> */}
        <Paginate data={data} />
      </div>
    </div>
  )
}
