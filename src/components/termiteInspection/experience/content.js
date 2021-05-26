import React from "react"

import carousel1 from "../../../assets/termite/carousel1.png"
import "./style.scss"

export default function content() {
  return (
    <div className="termite-exp-carousel-content">
      <div className="termite-exp-carousel-content-para">
        <h1>EXPERIENCE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam
          dignissim diam quis enim lobortis scelerisque fermentum dui. At urna
          condimentum mattis pellentesque id nibh tortor. Volutpat sed cras
          ornare arcu dui vivamus arcu felis bibendum. Id aliquet risus feugiat
          in ante metus dictum. Rhoncus mattis rhoncus urna neque. Elementum
          tempus egestas sed sed risus. In ante metus dictum at tempor commodo
          ullamcorper. Amet volutpat consequat mauris nunc congue nisi vitae
          suscipit. Viverra orci sagittis eu volutpat odio facilisis mauris sit
          amet. Libero volutpat sed cras ornare arcu dui vivamus. Ipsum dolor
          sit amet consectetur.
        </p>
        <br />
        <p>
          Laoreet sit amet cursus sit amet dictum sit amet. Euismod lacinia at
          quis risus sed vulputate odio. Vel quam elementum pulvinar etiam non.
          Porttitor leo a diam sollicitudin tempor id eu. Nunc consequat
          interdum varius sit amet mattis vulputate enim nulla. Bibendum ut
          tristique et egestas quis. Porttitor lacus luctus accumsan tortor
          posuere ac.{" "}
        </p>
      </div>
      <div className="carousel-image">
        <img src={carousel1} alt="" />
      </div>
    </div>
  )
}
