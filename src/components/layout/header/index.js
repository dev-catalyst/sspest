import React from "react"
import { Link } from "gatsby"

import "./style.scss"

import logo from "../../../assets/layout/header/logo.svg"
import phoneIcon from "../../../assets/layout/header/phone-icon.svg"
import dropDownIcon from "../../../assets/layout/header/dropdown-icon.svg"

export default function index() {
  return (
    <>
      <header>
        <div className="header-container">
          <img className="logo" src={logo} alt="logo" />
          <nav className="navbar">
            <Link to="/">HOME</Link>
            <Link to="">
              PEST CONTROL SERVICES{" "}
              <img src={dropDownIcon} alt="dropDownIcon" />
            </Link>
            <Link to="">
              TERMITE CONTROL <img src={dropDownIcon} alt="dropDownIcon" />
            </Link>
            <Link to="">
              PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
            </Link>
            <Link to="">
              PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
            </Link>
            <Link to="">
              AREAS COVERED <img src={dropDownIcon} alt="dropDownIcon" />
            </Link>
            <Link to="">
              SHOP <img src={dropDownIcon} alt="dropDownIcon" />
            </Link>
            <Link to="">
              BLOG <img src={dropDownIcon} alt="dropDownIcon" />
            </Link>
          </nav>
        </div>
      </header>
      <div className="header-telephone">
        <img src={phoneIcon} alt="phone-icon" />
        <a href="tel:1300 007 772">1300 007 772</a>
      </div>
    </>
  )
}
