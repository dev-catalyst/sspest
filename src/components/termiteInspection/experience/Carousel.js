import React from "react"
import left from "../../../assets/termite/icons/leftArrow.svg"
import right from "../../../assets/termite/icons/rightArrow.svg"
import Content from "./content"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

function NextArrow(props) {
  const { style, onClick } = props
  return (
    <div
      className="team-about-right-arrow"
      style={{
        ...style,
        display: "block",
        width: "63px",
        height: "63px",
        position: `absolute`,
        top: `50%`,
        right: `-100px`,
        cursor: `pointer`,
      }}
      onClick={onClick}
    >
      <img src={right} alt="" />
    </div>
  )
}

function PrevArrow(props) {
  const { style, onClick } = props
  return (
    <div
      className="team-about-left-arrow"
      id="left-arrow-slick-about"
      style={{
        ...style,
        position: `absolute`,
        top: `50%`,
        width: "63px",
        height: "63px",
        cursor: "pointer",
        zIndex: "10",
        left: "-100px",
      }}
      onClick={onClick}
    >
      <img src={left} alt="" />
    </div>
  )
}

export default function Carousel({ data }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  console.log(data)
  return (
    <section className="carousel_section">
      {/* Carousel */}
      <div className="carousel_container">
        <Slider {...settings}>
          {data.map((para, index) => {
            return <Content key={index} data={para} />
          })}
        </Slider>
      </div>
    </section>
  )
}
