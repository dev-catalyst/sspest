import React from "react"
import { Link } from "gatsby"

import "./style.scss"

import main from "../../../../assets/home/image/main.png"
import icon1 from "../../../../assets/home/image/icon1.svg"
import icon2 from "../../../../assets/home/image/icon2.svg"
import icon3 from "../../../../assets/home/image/icon3.svg"
import icon4 from "../../../../assets/home/image/icon4.svg"
import icon5 from "../../../../assets/home/image/icon5.svg"
import icon6 from "../../../../assets/home/image/icon6.svg"
import icon7 from "../../../../assets/home/image/icon7.svg"
import icon8 from "../../../../assets/home/image/icon8.svg"
import icon9 from "../../../../assets/home/image/icon9.svg"
import icon10 from "../../../../assets/home/image/icon10.svg"
import icon11 from "../../../../assets/home/image/icon11.svg"
import icon12 from "../../../../assets/home/image/icon12.svg"

export default function image() {
  return (
    <div className="image-container">
      <img src={main} alt="" className="main-image" />
      <ul class="circle-container">
        <Link to="#">
          <li>
            <img src={icon1} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon2} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon3} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon4} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon5} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon6} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon7} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon8} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon9} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon10} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon11} alt="" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon12} alt="" />
          </li>
        </Link>
      </ul>
    </div>
  )
}
