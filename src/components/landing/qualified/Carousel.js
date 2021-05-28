import React from "react"

import Content from "./content"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: "linear",
    arrows: false,
  }

  return (
    <section className="landing-carousel_section">
      {/* Carousel */}
      <div className="landing-carousel_container">
        <Slider {...settings}>
          <Content />
          <Content />
          <Content />
          <Content />
        </Slider>
      </div>
    </section>
  )
}
