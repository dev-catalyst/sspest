import React from "react"
import { RichText } from "prismic-reactjs"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default function Carousel({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: false,
  }

  return (
    <section className="landing-carousel_section">
      {/* Carousel */}
      <div className="landing-carousel_container">
        <Slider {...settings}>
          {data.items.map((para, index) => {
            return (
              <div key={index} className="landing-carousel-content">
                <div className="landing-carousel-content-para">
                  <RichText render={para.slice_title} />
                  <RichText render={para.slice_description} />
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
