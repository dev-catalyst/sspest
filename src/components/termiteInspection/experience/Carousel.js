import React from "react"

import Content from "./content"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import left from "../../../assets/termite/icons/leftArrow.svg"
import right from "../../../assets/termite/icons/rightArrow.svg"

// function customPaging(i) {
//   return <span>{i + 1}</span>
// }

// function appendDots(dots) {
//   return (
//     <div style={{ backgroundColor: "rgba(196, 196, 196, 1)" }}>
//       <ul style={{ margin: "3px" }}> {dots} </ul>
//     </div>
//   )
// }

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

export default function Carousel() {
  var settings = {
    // customPaging = {customPaging},
    // appendDots = {appendDots},
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <img src={right} alt="" className="left-arrow" />,
    // prevArrow: <img src={left} alt="" className="right-arrow" />,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <section className="carousel_section">
      {/* Carousel */}
      <div className="carousel_container">
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
