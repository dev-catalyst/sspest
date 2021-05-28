//import React from "react"
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
          <div className="header-logo">
            <Link to="/">
              <img className="logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar">
            <ul className="main-menu desktop-menu">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="">
                  PEST CONTROL SERVICES{" "}
                  <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Option 1</Link>
                  </li>
                  <li>
                    <Link to="#">Option 2</Link>
                  </li>
                  <li>
                    <Link to="#">Option 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  TERMITE CONTROL <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Option 1</Link>
                  </li>
                  <li>
                    <Link to="#">Option 2</Link>
                  </li>
                  <li>
                    <Link to="#">Option 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Option 1</Link>
                  </li>
                  <li>
                    <Link to="#">Option 2</Link>
                  </li>
                  <li>
                    <Link to="#">Option 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Option 1</Link>
                  </li>
                  <li>
                    <Link to="#">Option 2</Link>
                  </li>
                  <li>
                    <Link to="#">Option 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  AREAS COVERED <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Option 1</Link>
                  </li>
                  <li>
                    <Link to="#">Option 2</Link>
                  </li>
                  <li>
                    <Link to="#">Option 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  SHOP <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Option 1</Link>
                  </li>
                  <li>
                    <Link to="#">Option 2</Link>
                  </li>
                  <li>
                    <Link to="#">Option 3</Link>
                  </li>
                </ul>
              </li>
              <li>
                {" "}
                <Link to="">
                  BLOG <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Option 1</Link>
                  </li>
                  <li>
                    <Link to="#">Option 2</Link>
                  </li>
                  <li>
                    <Link to="#">Option 3</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="header-telephone">
            <a href="tel:1300 007 772">
              <img src={phoneIcon} alt="phone-icon" />
              <span>1300 007 772</span>
            </a>
          </div>
          <div class="toggle-menu">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>
        </div>

        <div class="mobile-menu">
          <nav class="header__nav nav-bar">
            <ul class="nav-list accordion">
              <li class="nav-list-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-list-item accordion-panel">
                <Link to="#" class="nav-link accordion-header">
                  PEST CONTROL SERVICES{" "}
                  <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Option 1</Link>
                    </li>
                    <li>
                      <Link to="#">Option 2</Link>
                    </li>
                    <li>
                      <Link to="#">Option 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-list-item accordion-panel">
                <Link to="#" class="nav-link accordion-header">
                  TERMITE CONTROL <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Option 1</Link>
                    </li>
                    <li>
                      <Link to="#">Option 2</Link>
                    </li>
                    <li>
                      <Link to="#">Option 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-list-item accordion-panel">
                <Link to="#" class="nav-link accordion-header">
                  PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Option 1</Link>
                    </li>
                    <li>
                      <Link to="#">Option 2</Link>
                    </li>
                    <li>
                      <Link to="#">Option 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-list-item accordion-panel">
                <Link to="#" class="nav-link accordion-header">
                  PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Option 1</Link>
                    </li>
                    <li>
                      <Link to="#">Option 2</Link>
                    </li>
                    <li>
                      <Link to="#">Option 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-list-item accordion-panel">
                <Link to="#" class="nav-link accordion-header">
                  AREAS COVERED <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Option 1</Link>
                    </li>
                    <li>
                      <Link to="#">Option 2</Link>
                    </li>
                    <li>
                      <Link to="#">Option 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-list-item accordion-panel">
                <Link to="#" class="nav-link accordion-header">
                  SHOP <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Option 1</Link>
                    </li>
                    <li>
                      <Link to="#">Option 2</Link>
                    </li>
                    <li>
                      <Link to="#">Option 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-list-item accordion-panel">
                <Link to="#" class="nav-link accordion-header">
                  BLOG <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div class="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Option 1</Link>
                    </li>
                    <li>
                      <Link to="#">Option 2</Link>
                    </li>
                    <li>
                      <Link to="#">Option 3</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
