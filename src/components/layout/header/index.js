import React from "react"
import { Link } from "gatsby"
import logo from "../../../assets/layout/header/logo.svg"
import phoneIcon from "../../../assets/layout/header/phone-icon.svg"
import dropDownIcon from "../../../assets/layout/header/dropdown-icon.svg"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"

import "./style.scss"

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
            <div className="navbar-menu">
              <Link to="/">
                <li>HOME</li>
              </Link>
              {/* Pest Control Services */}
              <Link to="#">
                <li className="pcs">
                  PEST CONTROL SERVICES{" "}
                  <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown pcs-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li className="sub-menu-field">
                        <Link to="/commercial-pest-control">
                          Commercial Pest Control
                        </Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu cpc">
                          <ul>
                            <li>
                              <Link to="/commercial-pest-control/strata-pest-control">
                                Strata Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/commercial-pest-control/school-pest-control">
                                School Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/commercial-pest-control/transport-pest-control">
                                Transport Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/commercial-pest-control/government-pest-control">
                                Government Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/commercial-pest-control/pest-inspection">
                                Pest Inspection
                              </Link>
                            </li>
                            <li>
                              <Link to="/commercial-pest-control/aged-care-pest-control">
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
                        <Link to="/pet-and-kid-friendly-pest-control">
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
              </Link>
              {/* TERMITE CONTROL */}
              <Link to="/the-termite">
                <li className="pcs">
                  TERMITE CONTROL <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown termite-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li>
                        <Link to="/termite-treatment">Termite Treatment</Link>
                      </li>
                      <li>
                        <Link to="/termite-inspection">Termite Inspection</Link>
                      </li>
                      <li>
                        <Link to="/termite-prevention">Termite Prevention</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </Link>
              {/* Pest solutions */}
              <Link to="#">
                <li className="pcs">
                  PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li>
                        <Link to="/cockroach-pest-control-sydney">
                          Cockroach Pest Control
                        </Link>
                      </li>
                      <li className="sub-menu-field">
                        <Link to="/spider-pest-control-sydney">
                          Spider Pest Control
                        </Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <Link to="/spider-pest-control/redback-spider-pest-control-sydney">
                                Redback Spider Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/spider-pest-control/funnel-web-spider-pest-control">
                                Funnel-Web Spider Pest Control
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <Link to="/ant-pest-control-sydney">
                          Ant Pest Control
                        </Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <Link to="/ant-pest-control-sydney/white-ant-pest-control">
                                White Ant Pest Control
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <Link to="/bird-pest-control-sydney">
                          Bird Pest Control
                        </Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <Link to="/bird-pest-control/pigeon-pest-control">
                                Pigeon Pest Control
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <Link to="/feral-animal-removal">
                          Feral Animal Removal
                        </Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <Link to="/feral-animal-removal/possum-pest-control">
                                Possum Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/feral-animal-removal/rabbit-control">
                                Rabbit Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/feral-animal-removal/feral-cat-control">
                                Feral Cat Pest Control
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <Link to="/fly-control">Fly Control</Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <Link to="/flying-insect-control">
                                Flying insect Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/fly-control/mosquito-control-sydney">
                                Mosquito Pest Control
                              </Link>
                            </li>
                            <li>
                              <Link to="/fly-control/bee-wasp-control-sydney">
                                Bee {"&"} Wasp Control
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link to="/rodent-control-sydney">
                          Rodent Pest Control
                        </Link>
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
                        <Link to="/bird-mites-control">Bird Mites Control</Link>
                      </li>
                      <li>
                        <Link to="/carpet-beetle-control">
                          Carpet Beetle Pest Control
                        </Link>
                      </li>
                      <li className="sub-menu-field">
                        <Link to="/moth-control">Moth Pest Control</Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <Link to="/moth-control/pantry-moth-control">
                                Pantry Moth Pest Control
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </Link>
              {/* pest types */}
              <Link to="#">
                <li className="pcs">
                  PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown pest_types">
                    <ul className="sub-menu-dropdown-ul">
                      <li>
                        <Link to="/the-end-of-lease">Dog Fleas</Link>
                      </li>
                      <li>
                        <Link to="/the-ant">Ants</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </Link>
              {/* areas covered */}
              <Link to="#">
                <li className="pcs">
                  AREAS COVERED <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown areas-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li className="sub-menu-field">
                        <Link to="/the-end-of-lease">Regions</Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu regions-side-menu">
                          <ul>
                            <li>
                              <Link to="/regions/blue-mountains">
                                Blue Mountains
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/central-coast">
                                Central Coast
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/eastern-suburbs">
                                Eastern Suburbs
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/hawkesbury">Hawkesbury</Link>
                            </li>
                            <li>
                              <Link to="/regions/hills-district">
                                Hills District
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/wollongong">Wollongong</Link>
                            </li>
                            <li>
                              <Link to="/regions/inner-west">Inner West</Link>
                            </li>
                            <li>
                              <Link to="/regions/macarthur">Macarthur</Link>
                            </li>
                            <li>
                              <Link to="/regions/campbelltown">
                                Campbelltown
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/newcastle">Newcastle</Link>
                            </li>
                            <li>
                              <Link to="/regions/northern-suburbs">
                                Northern Suburbs
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/st-george">St George</Link>
                            </li>
                            <li>
                              <Link to="/regions/south-sydney">
                                South Sydney
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/western-sydney">
                                Western Sydney
                              </Link>
                            </li>
                            <li>
                              <Link to="/regions/bankstown">Bankstown</Link>
                            </li>
                            <li>
                              <Link to="/regions/bondi">Bondi</Link>
                            </li>
                            <li>
                              <Link to="/regions/camden">Camden</Link>
                            </li>
                            <li>
                              <Link to="/regions/gosford">Gosford</Link>
                            </li>
                            <li>
                              <Link to="/regions/kellyville">Kellyville</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <Link to="/the-ant">Suburbs</Link>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu regions-side-menu">
                          <ul>
                            <li>
                              <Link to="/suburbs/liverpool">Liverpool</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/narellan">Narellan</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/nowra">Nowra</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/parramatta">Parramatta</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/penrith">Penrith</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/sutherland-shire">
                                Sutherland shire
                              </Link>
                            </li>
                            <li>
                              <Link to="/suburbs/castle-hill">Castle Hill</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/austral">Austral</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/dee-why">Dee Why</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/manly">Manly</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/caringbah">Caringbah</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/dapto">Dapto</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/epping">Epping</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/hurstville">Hurstville</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/kiama">Kiama</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/lake-macquarie">
                                Lake-macquarie
                              </Link>
                            </li>
                            <li>
                              <Link to="/suburbs/marrickville">
                                Marrickville
                              </Link>
                            </li>
                            <li>
                              <Link to="/suburbs/randwick">Randwick</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/ryde">Ryde</Link>
                            </li>
                            <li>
                              <Link to="/suburbs/shellharbour">
                                Shellharbour
                              </Link>
                            </li>
                            <li>
                              <Link to="/suburbs/blacktown">Blacktown</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </Link>
              <Link to="#">
                <li className="empty-link">SHOP</li>
              </Link>
              <Link to="/blog">
                <li>BLOG </li>
              </Link>
            </div>
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
            <ul style={{ marginTop: "200px" }} className="mobile-navbar">
              <li>
                <Link to="/" className="nav-link nav-imp-sizes">
                  HOME
                </Link>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<img src={dropDownIcon} alt="" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Link to="#">PEST CONTROL SERVICES</Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="/commercial-pest-control">
                              Commercial Pest Control
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/commercial-pest-control/strata-pest-control">
                                  Strata Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/commercial-pest-control/school-pest-control">
                                  School Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/commercial-pest-control/transport-pest-control">
                                  Transport Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/commercial-pest-control/government-pest-control">
                                  Government Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/commercial-pest-control/pest-inspection">
                                  Pest Inspection
                                </Link>
                              </li>
                              <li>
                                <Link to="/commercial-pest-control/aged-care-pest-control">
                                  Aged Care Pest Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Link to="/residential-pest-control">
                          Residential Pest Control
                        </Link>
                      </li>
                      <li>
                        <Link to="/pet-and-kid-friendly-pest-control">
                          Pet and Kid Friendly Pest Control
                        </Link>
                      </li>
                      <li>
                        <Link to="/organic-pest-control">
                          Organic Pest Control
                        </Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<img src={dropDownIcon} alt="" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Link to="#">TERMITE CONTROL</Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <Link to="/termite-treatment">Termite Treatment</Link>
                      </li>
                      <li>
                        <Link to="/termite-inspection">Termite Inspection</Link>
                      </li>
                      <li>
                        <Link to="/termite-prevention">Termite Prevention</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<img src={dropDownIcon} alt="" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Link to="#">PEST SOLUTIONS</Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <Link to="/cockroach-pest-control-sydney">
                          Cockroach Pest Control
                        </Link>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="/spider-pest-control-sydney">
                              Spider Pest Control
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/spider-pest-control/redback-spider-pest-control-sydney">
                                  Red Back Spider Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/spider-pest-control/funnel-web-spider-pest-control">
                                  Funnel-Web Spider Pest Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="/ant-pest-control-sydney">
                              Ant Pest Control
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/ant-pest-control-sydney/white-ant-pest-control">
                                  White Ant Pest Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="/bird-pest-control-sydney">
                              Bird Pest Control
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/bird-pest-control/pigeon-pest-control">
                                  Pigeon Pest Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="/feral-animal-removal">
                              Feral Animal Removal
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/feral-animal-removal/possum-pest-control">
                                  Possum Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/feral-animal-removal/rabbit-control">
                                  Rabbit Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/feral-animal-removal/feral-cat-control">
                                  Feral Cat Pest Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="/fly-control">Fly Control </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/flying-insect-control">
                                  Flying Insect Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/fly-control/mosquito-control-sydney">
                                  Mosquito Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/fly-control/bee-wasp-control-sydney">
                                  Bee {"&"} Wasp Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Link to="/rodent-control-sydney">
                          Rodent Pest Control
                        </Link>
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
                        <Link to="/bird-mites-control">Bird Mites Control</Link>
                      </li>
                      <li>
                        <Link to="/carpet-beetle-control">
                          Carpet Beetle Pest Control
                        </Link>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="/moth-control">Moth Pest Control</Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/moth-control/pantry-moth-control">
                                  Pantry Moth Pest Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<img src={dropDownIcon} alt="" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Link to="#" className="nav-link accordion-header">
                      PEST TYPES
                    </Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <Link to="/the-end-of-lease">Dog Fleas</Link>
                      </li>
                      <li>
                        <Link to="/the-ant">Ants</Link>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<img src={dropDownIcon} alt="" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Link to="#">AREAS</Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="">Regions </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/regions/blue-mountains">
                                  Blue Mountains
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/central-coast">
                                  Central Coast
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/eastern-suburbs">
                                  Eastern Suburbs
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/hawkesbury">Hawkesbury</Link>
                              </li>
                              <li>
                                <Link to="/regions/hills-district">
                                  Hills District
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/wollongong">Wollongong</Link>
                              </li>
                              <li>
                                <Link to="/regions/inner-west">Inner West</Link>
                              </li>
                              <li>
                                <Link to="/regions/macarthur">Macarthur</Link>
                              </li>
                              <li>
                                <Link to="/regions/campbelltown">
                                  Campbelltown
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/newcastle">Newcastle</Link>
                              </li>
                              <li>
                                <Link to="/regions/northern-suburbs">
                                  Northern Suburbs
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/st-george">St George</Link>
                              </li>
                              <li>
                                <Link to="/regions/south-sydney">
                                  South Sydney
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/western-sydney">
                                  Western Sydney
                                </Link>
                              </li>
                              <li>
                                <Link to="/regions/bankstown">Bankstown</Link>
                              </li>
                              <li>
                                <Link to="/regions/bondi">Bondi</Link>
                              </li>
                              <li>
                                <Link to="/regions/camden">Camden</Link>
                              </li>
                              <li>
                                <Link to="/regions/gosford">Gosford</Link>
                              </li>
                              <li>
                                <Link to="/regions/kellyville">Kellyville</Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <Link to="">Suburbs </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/suburbs/lake-macquarie">
                                  Lake-macquarie
                                </Link>
                              </li>
                              <li>
                                <Link to="/suburbs/liverpool">Liverpool</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/narellan">Narellan</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/nowra">Nowra</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/parramatta">Parramatta</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/penrith">Penrith</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/sutherland-shire">
                                  Sutherland shire
                                </Link>
                              </li>
                              <li>
                                <Link to="/suburbs/castle-hill">
                                  Castle Hill
                                </Link>
                              </li>
                              <li>
                                <Link to="/suburbs/austral">Austral</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/dee-why">Dee Why</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/manly">Manly</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/caringbah">Caringbah</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/dapto">Dapto</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/epping">Epping</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/hurstville">Hurstville</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/kiama">Kiama</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/marrickville">
                                  Marrickville
                                </Link>
                              </li>
                              <li>
                                <Link to="/suburbs/randwick">Randwick</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/ryde">Ryde</Link>
                              </li>
                              <li>
                                <Link to="/suburbs/shellharbour">
                                  Shellharbour
                                </Link>
                              </li>
                              <li>
                                <Link to="/suburbs/blacktown">Blacktown</Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </li>
              <li className="empty-link">
                {/* <Link to="/" className="nav-link nav-imp-sizes"> */}
                  SHOP
                {/* </Link> */}
              </li>
              <li>
                <Link to="/blog" className="nav-link nav-imp-sizes">
                  BLOG
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
