import React from "react"
import Carousel from "./Carousel"
import Paginate from "./paginate"
import cutter from "../../../assets/blog/cutter.png"
import "./style.scss"

export default function Blog3({ bg, data }) {
  const len = data.length
  return (
    <div
      className="blog-blog3"
      style={{ backgroundImage: `url(${bg.bg_image.url})` }}
    >
      <img src={cutter} alt="" style={{ width: "100%", marginTop: "-7px" }} />
      <div className="container">
        {/* <Carousel data={data} /> */}
        <Paginate data={data.slice(2, len)} />
      </div>
    </div>
  )
}
