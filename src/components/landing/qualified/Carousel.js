import React from "react"
import { RichText } from "prismic-reactjs"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default function Carousel({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
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
                  <h2>{RichText.asText(para.subtitle.raw)}</h2>
                  <p>{RichText.asText(para.description.raw)}</p>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}
