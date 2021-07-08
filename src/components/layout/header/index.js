import React from "react"
import { Link } from "gatsby"
import logo from "../../../assets/layout/header/logo.png"
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
            <a href="/">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar">
            <div id="navbar-header" className="navbar-menu">
              <a href="/">
                <li>HOME</li>
              </a>
              {/* Pest Control Services */}
              <a href="#">
                <li className="pcs">
                  PEST CONTROL SERVICES{" "}
                  <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown pcs-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li className="sub-menu-field">
                        <a href="/commercial-pest-control">
                          Commercial Pest Control
                        </a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu cpc">
                          <ul>
                            <li>
                              <a href="/commercial-pest-control/strata-pest-control">
                                Strata Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/commercial-pest-control/school-pest-control">
                                School Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/commercial-pest-control/transport-pest-control">
                                Transport Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/commercial-pest-control/government-pest-control">
                                Government Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/commercial-pest-control/pest-inspection">
                                Pest Inspection
                              </a>
                            </li>
                            <li>
                              <a href="/commercial-pest-control/aged-care-pest-control">
                                Aged Care Pest Control
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="/residential-pest-control">
                          Residential Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/pet-and-kid-friendly-pest-control">
                          Pet and Kid Friendly Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/organic-pest-control">
                          Organic Pest Control
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </a>
              {/* TERMITE CONTROL */}
              <a href="/the-termite">
                <li className="pcs">
                  TERMITE CONTROL <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown termite-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li>
                        <a href="/termite-treatment">Termite Treatment</a>
                      </li>
                      <li>
                        <a href="/termite-inspection">Termite Inspection</a>
                      </li>
                      <li>
                        <a href="/termite-prevention">Termite Prevention</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </a>
              {/* Pest solutions */}
              <a href="#">
                <li className="pcs">
                  PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li>
                        <a href="/cockroach-pest-control-sydney">
                          Cockroach Pest Control
                        </a>
                      </li>
                      <li className="sub-menu-field">
                        <a href="/spider-pest-control-sydney">
                          Spider Pest Control
                        </a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <a href="/spider-pest-control/redback-spider-pest-control-sydney">
                                Redback Spider Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/spider-pest-control/funnel-web-spider-pest-control">
                                Funnel-Web Spider Pest Control
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <a href="/ant-pest-control-sydney">
                          Ant Pest Control
                        </a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <a href="/ant-pest-control-sydney/white-ant-pest-control">
                                White Ant Pest Control
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <a href="/bird-pest-control-sydney">
                          Bird Pest Control
                        </a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <a href="/bird-pest-control/pigeon-pest-control">
                                Pigeon Pest Control
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <a href="/feral-animal-removal">
                          Feral Animal Removal
                        </a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <a href="/feral-animal-removal/possum-pest-control">
                                Possum Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/feral-animal-removal/rabbit-control">
                                Rabbit Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/feral-animal-removal/feral-cat-control">
                                Feral Cat Pest Control
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <a href="/fly-control">Fly Control</a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <a href="/flying-insect-control">
                                Flying insect Control
                              </a>
                            </li>
                            <li>
                              <a href="/fly-control/mosquito-control-sydney">
                                Mosquito Pest Control
                              </a>
                            </li>
                            <li>
                              <a href="/fly-control/bee-wasp-control-sydney">
                                Bee {"&"} Wasp Control
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="/rodent-control-sydney">
                          Rodent Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/silverfish-control">
                          Silverfish Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/bed-bug-control">Bed Bug Pest Control</a>
                      </li>
                      <li>
                        <a href="/bird-mites-control">Bird Mites Control</a>
                      </li>
                      <li>
                        <a href="/carpet-beetle-control">
                          Carpet Beetle Pest Control
                        </a>
                      </li>
                      <li className="sub-menu-field">
                        <a href="/moth-control">Moth Pest Control</a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu pssm">
                          <ul>
                            <li>
                              <a href="/moth-control/pantry-moth-control">
                                Pantry Moth Pest Control
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </a>
              {/* pest types */}
              <a href="#">
                <li className="pcs">
                  PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown pest_types">
                    <ul className="sub-menu-dropdown-ul">
                      <li>
                        <a href="/the-end-of-lease">Dog Fleas</a>
                      </li>
                      <li>
                        <a href="/the-ant">Ants</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </a>
              {/* areas covered */}
              <a href="#">
                <li className="pcs">
                  AREAS COVERED <img src={dropDownIcon} alt="dropDownIcon" />
                  <div className="sub-menu-dropdown areas-dropdown">
                    <ul className="sub-menu-dropdown-ul">
                      <li className="sub-menu-field">
                        <a href="/the-end-of-lease">Regions</a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu regions-side-menu">
                          <ul>
                            <li>
                              <a href="/regions/blue-mountains">
                                Blue Mountains
                              </a>
                            </li>
                            <li>
                              <a href="/regions/central-coast">
                                Central Coast
                              </a>
                            </li>
                            <li>
                              <a href="/regions/eastern-suburbs">
                                Eastern Suburbs
                              </a>
                            </li>
                            <li>
                              <a href="/regions/hawkesbury">Hawkesbury</a>
                            </li>
                            <li>
                              <a href="/regions/hills-district">
                                Hills District
                              </a>
                            </li>
                            <li>
                              <a href="/regions/wollongong">Wollongong</a>
                            </li>
                            <li>
                              <a href="/regions/inner-west">Inner West</a>
                            </li>
                            <li>
                              <a href="/regions/macarthur">Macarthur</a>
                            </li>
                            <li>
                              <a href="/regions/campbelltown">
                                Campbelltown
                              </a>
                            </li>
                            <li>
                              <a href="/regions/newcastle">Newcastle</a>
                            </li>
                            <li>
                              <a href="/regions/northern-suburbs">
                                Northern Suburbs
                              </a>
                            </li>
                            <li>
                              <a href="/regions/st-george">St George</a>
                            </li>
                            <li>
                              <a href="/regions/south-sydney">
                                South Sydney
                              </a>
                            </li>
                            <li>
                              <a href="/regions/western-sydney">
                                Western Sydney
                              </a>
                            </li>
                            <li>
                              <a href="/regions/bankstown">Bankstown</a>
                            </li>
                            <li>
                              <a href="/regions/bondi">Bondi</a>
                            </li>
                            <li>
                              <a href="/regions/camden">Camden</a>
                            </li>
                            <li>
                              <a href="/regions/gosford">Gosford</a>
                            </li>
                            <li>
                              <a href="/regions/kellyville">Kellyville</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="sub-menu-field">
                        <a href="/the-ant">Suburbs</a>
                        <img
                          src={dropDownIcon}
                          alt="dropDownIcon"
                          className="modified-icon"
                        />
                        <div className="inner-side-menu regions-side-menu">
                          <ul>
                            <li>
                              <a href="/suburbs/liverpool">Liverpool</a>
                            </li>
                            <li>
                              <a href="/suburbs/narellan">Narellan</a>
                            </li>
                            <li>
                              <a href="/suburbs/nowra">Nowra</a>
                            </li>
                            <li>
                              <a href="/suburbs/parramatta">Parramatta</a>
                            </li>
                            <li>
                              <a href="/suburbs/penrith">Penrith</a>
                            </li>
                            <li>
                              <a href="/suburbs/sutherland-shire">
                                Sutherland shire
                              </a>
                            </li>
                            <li>
                              <a href="/suburbs/castle-hill">Castle Hill</a>
                            </li>
                            <li>
                              <a href="/suburbs/austral">Austral</a>
                            </li>
                            <li>
                              <a href="/suburbs/dee-why">Dee Why</a>
                            </li>
                            <li>
                              <a href="/suburbs/manly">Manly</a>
                            </li>
                            <li>
                              <a href="/suburbs/caringbah">Caringbah</a>
                            </li>
                            <li>
                              <a href="/suburbs/dapto">Dapto</a>
                            </li>
                            <li>
                              <a href="/suburbs/epping">Epping</a>
                            </li>
                            <li>
                              <a href="/suburbs/hurstville">Hurstville</a>
                            </li>
                            <li>
                              <a href="/suburbs/kiama">Kiama</a>
                            </li>
                            <li>
                              <a href="/suburbs/lake-macquarie">
                                Lake-macquarie
                              </a>
                            </li>
                            <li>
                              <a href="/suburbs/marrickville">
                                Marrickville
                              </a>
                            </li>
                            <li>
                              <a href="/suburbs/randwick">Randwick</a>
                            </li>
                            <li>
                              <a href="/suburbs/ryde">Ryde</a>
                            </li>
                            <li>
                              <a href="/suburbs/shellharbour">
                                Shellharbour
                              </a>
                            </li>
                            <li>
                              <a href="/suburbs/blacktown">Blacktown</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </a>
              <a href="#">
                <li className="empty-link">SHOP</li>
              </a>
              <a href="/blog">
                <li>BLOG </li>
              </a>
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
                <a href="/" className="nav-link nav-imp-sizes">
                  HOME
                </a>
              </li>
              <li>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<img src={dropDownIcon} alt="" />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <a href="#">PEST CONTROL SERVICES</a>
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
                            <a href="/commercial-pest-control">
                              Commercial Pest Control
                            </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/commercial-pest-control/strata-pest-control">
                                  Strata Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/commercial-pest-control/school-pest-control">
                                  School Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/commercial-pest-control/transport-pest-control">
                                  Transport Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/commercial-pest-control/government-pest-control">
                                  Government Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/commercial-pest-control/pest-inspection">
                                  Pest Inspection
                                </a>
                              </li>
                              <li>
                                <a href="/commercial-pest-control/aged-care-pest-control">
                                  Aged Care Pest Control
                                </a>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <a href="/residential-pest-control">
                          Residential Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/pet-and-kid-friendly-pest-control">
                          Pet and Kid Friendly Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/organic-pest-control">
                          Organic Pest Control
                        </a>
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
                    <a href="#">TERMITE CONTROL</a>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <a href="/termite-treatment">Termite Treatment</a>
                      </li>
                      <li>
                        <a href="/termite-inspection">Termite Inspection</a>
                      </li>
                      <li>
                        <a href="/termite-prevention">Termite Prevention</a>
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
                    <a href="#">PEST SOLUTIONS</a>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <a href="/cockroach-pest-control-sydney">
                          Cockroach Pest Control
                        </a>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <a href="/spider-pest-control-sydney">
                              Spider Pest Control
                            </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/spider-pest-control/redback-spider-pest-control-sydney">
                                  Red Back Spider Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/spider-pest-control/funnel-web-spider-pest-control">
                                  Funnel-Web Spider Pest Control
                                </a>
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
                            <a href="/ant-pest-control-sydney">
                              Ant Pest Control
                            </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/ant-pest-control-sydney/white-ant-pest-control">
                                  White Ant Pest Control
                                </a>
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
                            <a href="/bird-pest-control-sydney">
                              Bird Pest Control
                            </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/bird-pest-control/pigeon-pest-control">
                                  Pigeon Pest Control
                                </a>
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
                            <a href="/feral-animal-removal">
                              Feral Animal Removal
                            </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/feral-animal-removal/possum-pest-control">
                                  Possum Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/feral-animal-removal/rabbit-control">
                                  Rabbit Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/feral-animal-removal/feral-cat-control">
                                  Feral Cat Pest Control
                                </a>
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
                            <a href="/fly-control">Fly Control </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/flying-insect-control">
                                  Flying Insect Control
                                </a>
                              </li>
                              <li>
                                <a href="/fly-control/mosquito-control-sydney">
                                  Mosquito Pest Control
                                </a>
                              </li>
                              <li>
                                <a href="/fly-control/bee-wasp-control-sydney">
                                  Bee {"&"} Wasp Control
                                </a>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <a href="/rodent-control-sydney">
                          Rodent Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/silverfish-control">
                          Silverfish Pest Control
                        </a>
                      </li>
                      <li>
                        <a href="/bed-bug-control">Bed Bug Pest Control</a>
                      </li>
                      <li>
                        <a href="/bird-mites-control">Bird Mites Control</a>
                      </li>
                      <li>
                        <a href="/carpet-beetle-control">
                          Carpet Beetle Pest Control
                        </a>
                      </li>
                      <li>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<img src={dropDownIcon} alt="" />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                          >
                            <a href="/moth-control">Moth Pest Control</a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/moth-control/pantry-moth-control">
                                  Pantry Moth Pest Control
                                </a>
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
                    <a href="#" className="nav-link accordion-header">
                      PEST TYPES
                    </a>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className="accordion-submenu-ul">
                      <li>
                        <a href="/the-end-of-lease">Dog Fleas</a>
                      </li>
                      <li>
                        <a href="/the-ant">Ants</a>
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
                    <a href="#">AREAS</a>
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
                            <a href="">Regions </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/regions/blue-mountains">
                                  Blue Mountains
                                </a>
                              </li>
                              <li>
                                <a href="/regions/central-coast">
                                  Central Coast
                                </a>
                              </li>
                              <li>
                                <a href="/regions/eastern-suburbs">
                                  Eastern Suburbs
                                </a>
                              </li>
                              <li>
                                <a href="/regions/hawkesbury">Hawkesbury</a>
                              </li>
                              <li>
                                <a href="/regions/hills-district">
                                  Hills District
                                </a>
                              </li>
                              <li>
                                <a href="/regions/wollongong">Wollongong</a>
                              </li>
                              <li>
                                <a href="/regions/inner-west">Inner West</a>
                              </li>
                              <li>
                                <a href="/regions/macarthur">Macarthur</a>
                              </li>
                              <li>
                                <a href="/regions/campbelltown">
                                  Campbelltown
                                </a>
                              </li>
                              <li>
                                <a href="/regions/newcastle">Newcastle</a>
                              </li>
                              <li>
                                <a href="/regions/northern-suburbs">
                                  Northern Suburbs
                                </a>
                              </li>
                              <li>
                                <a href="/regions/st-george">St George</a>
                              </li>
                              <li>
                                <a href="/regions/south-sydney">
                                  South Sydney
                                </a>
                              </li>
                              <li>
                                <a href="/regions/western-sydney">
                                  Western Sydney
                                </a>
                              </li>
                              <li>
                                <a href="/regions/bankstown">Bankstown</a>
                              </li>
                              <li>
                                <a href="/regions/bondi">Bondi</a>
                              </li>
                              <li>
                                <a href="/regions/camden">Camden</a>
                              </li>
                              <li>
                                <a href="/regions/gosford">Gosford</a>
                              </li>
                              <li>
                                <a href="/regions/kellyville">Kellyville</a>
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
                            <a href="">Suburbs </a>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <a href="/suburbs/lake-macquarie">
                                  Lake-macquarie
                                </a>
                              </li>
                              <li>
                                <a href="/suburbs/liverpool">Liverpool</a>
                              </li>
                              <li>
                                <a href="/suburbs/narellan">Narellan</a>
                              </li>
                              <li>
                                <a href="/suburbs/nowra">Nowra</a>
                              </li>
                              <li>
                                <a href="/suburbs/parramatta">Parramatta</a>
                              </li>
                              <li>
                                <a href="/suburbs/penrith">Penrith</a>
                              </li>
                              <li>
                                <a href="/suburbs/sutherland-shire">
                                  Sutherland shire
                                </a>
                              </li>
                              <li>
                                <a href="/suburbs/castle-hill">
                                  Castle Hill
                                </a>
                              </li>
                              <li>
                                <a href="/suburbs/austral">Austral</a>
                              </li>
                              <li>
                                <a href="/suburbs/dee-why">Dee Why</a>
                              </li>
                              <li>
                                <a href="/suburbs/manly">Manly</a>
                              </li>
                              <li>
                                <a href="/suburbs/caringbah">Caringbah</a>
                              </li>
                              <li>
                                <a href="/suburbs/dapto">Dapto</a>
                              </li>
                              <li>
                                <a href="/suburbs/epping">Epping</a>
                              </li>
                              <li>
                                <a href="/suburbs/hurstville">Hurstville</a>
                              </li>
                              <li>
                                <a href="/suburbs/kiama">Kiama</a>
                              </li>
                              <li>
                                <a href="/suburbs/marrickville">
                                  Marrickville
                                </a>
                              </li>
                              <li>
                                <a href="/suburbs/randwick">Randwick</a>
                              </li>
                              <li>
                                <a href="/suburbs/ryde">Ryde</a>
                              </li>
                              <li>
                                <a href="/suburbs/shellharbour">
                                  Shellharbour
                                </a>
                              </li>
                              <li>
                                <a href="/suburbs/blacktown">Blacktown</a>
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
                {/* <a href="/" className="nav-link nav-imp-sizes"> */}
                  SHOP
                {/* </a> */}
              </li>
              <li>
                <a href="/blog" className="nav-link nav-imp-sizes">
                  BLOG
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
