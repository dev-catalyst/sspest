import React from "react"
import Content from "./content"
import left from "../../../assets/blog/prev.svg"
import right from "../../../assets/blog/next.svg"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./style.scss"

function NextArrow(props) {
  const { style, onClick } = props
  return (
    <div
      className="right-arrow"
      style={{
        ...style,
        display: "block",
        // width: "63px",
        // height: "63px",
        position: `absolute`,
        bottom: "-15%",
        cursor: `pointer`,
        right: "315px",
      }}
      onClick={onClick}
    >
      <div>
        <p style={{ color: "#fff", fontSize: "30px" }}>
          Next
          <img src={right} alt="" style={{ marginLeft: "10px" }} />
        </p>
      </div>
    </div>
  )
}

function PrevArrow(props) {
  const { style, onClick } = props
  return (
    <div
      className="left-arrow"
      id="left-arrow-slick-about"
      style={{
        ...style,
        position: `absolute`,
        bottom: "-15%",
        // width: "63px",
        // height: "63px",
        cursor: "pointer",
        zIndex: "10",
        left: "330px",
      }}
      onClick={onClick}
    >
      <div style={{ display: "flex" }}>
        <p style={{ color: "#fff", fontSize: "30px" }}>
          <img src={left} alt="" style={{ marginRight: "10px" }} />
          Prev
        </p>
      </div>
    </div>
  )
}

export default function Carousel({ data }) {
  var settings = {
    // customPaging = {customPaging},
    // appendDots = {appendDots},
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
  }

  return (
    <section className="blog-carousel_section">
      {/* Carousel */}
      <div className="blog-carousel_container">
        <Slider {...settings}>
          {data.map((data, index) => {
            return <Content key={index} data={data} />
          })}
        </Slider>
      </div>
    </section>
  )
}
