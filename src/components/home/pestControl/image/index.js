import React from "react"
import { Link } from "gatsby"
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
import "./style.scss"

export default function image({ data }) {
  return (
    <div className="image-container">
      <img src={data.image.url} alt="" className="main-image" />
      <ul className="circle-container">
        <Link to="/cockroach-pest-control-sydney">
          <li>
            <img src={icon1} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/the-termite">
          <li>
            <img src={icon2} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/bird-pest-control-sydney">
          <li>
            <img src={icon3} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/ant-pest-control-sydney">
          <li>
            <img src={icon4} alt="" className="pest" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon5} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/spider-pest-control-sydney">
          <li>
            <img src={icon6} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/the-end-of-lease">
          <li>
            <img src={icon7} alt="" className="pest" />
          </li>
        </Link>
        <Link to="#">
          <li>
            <img src={icon8} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/possum-pest-control">
          <li>
            <img src={icon9} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/bed-bug-control">
          <li>
            <img src={icon10} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/rodent-control-sydney">
          <li>
            <img src={icon11} alt="" className="pest" />
          </li>
        </Link>
        <Link to="/the-termite">
          <li>
            <img src={icon12} alt="" className="pest" />
          </li>
        </Link>
      </ul>
    </div>
  )
}
