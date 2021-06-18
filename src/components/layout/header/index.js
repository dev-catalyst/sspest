//import React from "react"
import React from "react"
import { Link } from "gatsby"

import "./style.scss"

import logo from "../../../assets/layout/header/logo.svg"
import phoneIcon from "../../../assets/layout/header/phone-icon.svg"
import dropDownIcon from "../../../assets/layout/header/dropdown-icon.svg"

export default function Index() {
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
                  <li className="third-menu-container">
                    <Link to="/commercial-pest-control">
                      Commercial Pest Control{" "}
                      <img
                        src={dropDownIcon}
                        alt="dropDownIcon"
                        className="modified-icon"
                      />
                    </Link>
                    <div className="third-submenu-first">
                      <ul>
                        <li>
                          <Link to="/strata-pest-control">
                            Strata Pest Control
                          </Link>
                        </li>
                        <li>
                          <Link to="/school-pest-control">
                            School Pest Control
                          </Link>
                        </li>
                        <li>
                          <Link to="/transport-pest-control">
                            Transport Pest Control
                          </Link>
                        </li>
                        <li>
                          <Link to="/government-pest-control">
                            Government Pest Control
                          </Link>
                        </li>
                        <li>
                          <Link to="/building-pest-inspection">
                            Building Pest Inspection
                          </Link>
                        </li>
                        <li>
                          <Link to="/age-care-facilities">
                            Aged Care Pest Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/residential-pest-control">
                      Residential Pest Control
                    </Link>
                  </li>
                  <li>
                    <Link to="/kid-pet-friendly-pest-control">
                      Pet and Kid Friendly Pest Control
                    </Link>
                  </li>
                  <li>
                    <Link to="/organic-pest-control">Organic Pest Control</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  TERMITE CONTROL <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="#">Termite Treatment</Link>
                  </li>
                  <li>
                    <Link to="#">Termite Inspection</Link>
                  </li>
                  <li>
                    <Link to="#">Termite Prevention</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/cockroach-pest-control-sydney">
                      Cockroach Pest Control
                    </Link>
                  </li>
                  <li className="third-menu-container">
                    <Link to="/spider-pest-control">
                      Spider Pest Control{" "}
                      <img
                        src={dropDownIcon}
                        alt="dropDownIcon"
                        className="modified-icon"
                      />
                    </Link>
                    <div className="third-submenu">
                      <ul>
                        <li>
                          <Link to="/red-back-spider">
                            Red Back Spider Pest Control
                          </Link>
                        </li>
                        <li>
                          <Link to="/sydney-funnel-web-spider">
                            Funnel-Web Spider Pest Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="third-menu-container">
                    <Link to="/ant-control">
                      Ant Pest Control
                      <img
                        src={dropDownIcon}
                        alt="dropDownIcon"
                        className="modified-icon"
                      />
                    </Link>
                    <div className="third-submenu">
                      <ul>
                        <li>
                          <Link to="/white-ant-pest-control">
                            White Ant Pest Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="third-menu-container">
                    <Link to="/bird-pest-control">
                      Bird Pest Control
                      <img
                        src={dropDownIcon}
                        alt="dropDownIcon"
                        className="modified-icon"
                      />
                    </Link>
                    <div className="third-submenu">
                      <ul>
                        <li>
                          <Link to="/pigeon-pest-control">
                            Pigeon Pest Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="third-menu-container">
                    <Link to="/feral-animal-removal">
                      Feral Animal Removal
                      <img
                        src={dropDownIcon}
                        alt="dropDownIcon"
                        className="modified-icon"
                      />
                    </Link>
                    <div className="third-submenu">
                      <ul>
                        <li>
                          <Link to="/possum-control">Possum Pest Control</Link>
                        </li>
                        <li>
                          <Link to="/rabbit-pest-control">
                            Rabbit Pest Control
                          </Link>
                        </li>
                        <li>
                          <Link to="/feral-cat-control">
                            Feral Cat Pest Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="third-menu-container">
                    <Link to="/flying-insect-control">
                      Flying Pest Control{" "}
                      <img
                        src={dropDownIcon}
                        alt="dropDownIcon"
                        className="modified-icon"
                      />
                    </Link>
                    <div className="third-submenu">
                      <ul>
                        <li>
                          <Link to="/mosquito-control">
                            Mosquito Pest Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/rodent-control">Rodent Pest Control</Link>
                  </li>
                  <li>
                    <Link to="/silverfish-control">
                      Silverfish Pest Control
                    </Link>
                  </li>
                  <li>
                    <Link to="/bed-bug-control">Bed Bug Pest Control</Link>
                  </li>
                  <li>
                    <Link to="/carpet-beetle-control">
                      Carpet Beetle Pest Control
                    </Link>
                  </li>
                  <li className="third-menu-container">
                    <Link to="/moth-control">
                      Moth Pest Control
                      <img
                        src={dropDownIcon}
                        alt="dropDownIcon"
                        className="modified-icon"
                      />
                    </Link>
                    <div className="third-submenu">
                      <ul>
                        <li>
                          <Link to="/pantry-moth-control">
                            Pantry Moth Pest Control
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/the-end-of-lease">Dog Fleas</Link>
                  </li>
                  <li>
                    <Link to="/the-ant">Ants</Link>
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
          <div className="toggle-menu">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>

        <div className="mobile-menu">
          <nav className="header__nav nav-bar">
            <ul className="nav-list accordion">
              <li className="nav-list-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-list-item accordion-panel">
                <Link to="#" className="nav-link accordion-header">
                  PEST CONTROL SERVICES{" "}
                  <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div className="accordion-body">
                  <ul>
                    <li className="third-menu-mobile-container">
                      <Link to="/commercial-pest-control">
                        Commercial Pest Control{" "}
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                      </Link>
                      <div className="third-submenu-mobile">
                        <ul>
                          <li>
                            <Link to="/strata-pest-control">
                              Strata Pest Control
                            </Link>
                          </li>
                          <li>
                            <Link to="/school-pest-control">
                              School Pest Control
                            </Link>
                          </li>
                          <li>
                            <Link to="/transport-pest-control">
                              Transport Pest Control
                            </Link>
                          </li>
                          <li>
                            <Link to="/government-pest-control">
                              Government Pest Control
                            </Link>
                          </li>
                          <li>
                            <Link to="/building-pest-inspection">
                              Building Pest Inspection
                            </Link>
                          </li>
                          <li>
                            <Link to="/age-care-facilities">
                              Aged Care Pest Control
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/residential-pest-control">
                        Residential Pest Control
                      </Link>
                    </li>
                    <li>
                      <Link to="/kid-pet-friendly-pest-control">
                        Pet and Kid Friendly Pest Control
                      </Link>
                    </li>
                    <li>
                      <Link to="/organic-pest-control">
                        Organic Pest Control
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-list-item accordion-panel">
                <Link to="#" className="nav-link accordion-header">
                  TERMITE CONTROL <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link to="#">Termite Treatment</Link>
                    </li>
                    <li>
                      <Link to="#">Termite Inspection</Link>
                    </li>
                    <li>
                      <Link to="#">Termite Prevention</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-list-item accordion-panel">
                <Link to="#" className="nav-link accordion-header">
                  PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link to="/cockroach-pest-control-sydney">
                        Cockroach Pest Control
                      </Link>
                    </li>
                    <li className="third-menu-mobile-container">
                      <Link to="/spider-pest-control">
                        Spider Pest Control{" "}
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                      </Link>
                      <div className="third-submenu-mobile">
                        <ul>
                          <li>
                            <Link to="/red-back-spider">
                              Red Back Spider Pest Control
                            </Link>
                          </li>
                          <li>
                            <Link to="/sydney-funnel-web-spider">
                              Funnel-Web Spider Pest Control
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="third-menu-mobile-container">
                      <Link to="/ant-control">
                        Ant Pest Control
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                      </Link>
                      <div className="third-submenu-mobile">
                        <ul>
                          <li>
                            <Link to="/white-ant-pest-control">
                              White Ant Pest Control
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="third-menu-mobile-container">
                      <Link to="/bird-pest-control">
                        Bird Pest Control
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                      </Link>
                      <div className="third-submenu-mobile">
                        <ul>
                          <li>
                            <Link to="/pigeon-pest-control">
                              Pigeon Pest Control
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="third-menu-mobile-container">
                      <Link to="/feral-animal-removal">
                        Feral Animal Removal
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                      </Link>
                      <div className="third-submenu-mobile">
                        <ul>
                          <li>
                            <Link to="/possum-control">
                              Possum Pest Control
                            </Link>
                          </li>
                          <li>
                            <Link to="/rabbit-pest-control">
                              Rabbit Pest Control
                            </Link>
                          </li>
                          <li>
                            <Link to="/feral-cat-control">
                              Feral Cat Pest Control
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="third-menu-mobile-container">
                      <Link to="/flying-insect-control">
                        Flying Pest Control{" "}
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                      </Link>
                      <div className="third-submenu-mobile">
                        <ul>
                          <li>
                            <Link to="/mosquito-control">
                              Mosquito Pest Control
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link to="/rodent-control">Rodent Pest Control</Link>
                    </li>
                    <li>
                      <Link to="/silverfish-control">
                        Silverfish Pest Control
                      </Link>
                    </li>
                    <li>
                      <Link to="/bed-bug-control">Bed Bug Pest Control</Link>
                    </li>
                    <li>
                      <Link to="/carpet-beetle-control">
                        Carpet Beetle Pest Control
                      </Link>
                    </li>
                    <li className="third-menu-mobile-container">
                      <Link to="/moth-control">
                        Moth Pest Control
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                      </Link>
                      <div className="third-submenu-mobile">
                        <ul>
                          <li>
                            <Link to="/pantry-moth-control">
                              Pantry Moth Pest Control
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-list-item accordion-panel">
                <Link to="#" className="nav-link accordion-header">
                  PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div className="accordion-body">
                  <ul>
                    <li>
                      <Link to="/the-end-of-lease">Dog Fleas</Link>
                    </li>
                    <li>
                      <Link to="/the-ant">Ants</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-list-item accordion-panel">
                <Link to="#" className="nav-link accordion-header">
                  AREAS COVERED <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div className="accordion-body">
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
              <li className="nav-list-item accordion-panel">
                <Link to="#" className="nav-link accordion-header">
                  SHOP <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div className="accordion-body">
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
              <li className="nav-list-item accordion-panel">
                <Link to="#" className="nav-link accordion-header">
                  BLOG <img src={dropDownIcon} alt="dropDownIcon" />
                </Link>
                <div className="accordion-body">
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
