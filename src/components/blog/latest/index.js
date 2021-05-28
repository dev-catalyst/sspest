import React from "react"
import GeneralPest from "../../home/generalPest"
import stone from "../../../assets/layout/stone.svg"
import "./style.scss"

export default function latest() {
  return (
    <div className="blog-latest">
      <div className="container">
        <div className="blog-general-pest">
          <GeneralPest />
        </div>
        <h4>OUR LATEST NEWS</h4>
        <h1>
          <img src={stone} alt="" />
          BLOG
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  )
}
