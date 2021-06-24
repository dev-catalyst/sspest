import React from "react"
import { Link } from "gatsby"
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu"
import { useHistory } from "react-router-dom"
import logo from "../../../assets/layout/header/logo.svg"
import phoneIcon from "../../../assets/layout/header/phone-icon.svg"
import dropDownIcon from "../../../assets/layout/header/dropdown-icon.svg"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import "@szhsin/react-menu/dist/index.css"
import "./style.scss"

export default function Index() {
  // const history = useHistory()
  // const routeToCommercial = () => {
  //   console.log("yay")
  //   history.push({
  //     pathname: "/commercial-pest-control",
  //   })
  // }

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
              {" "}
              <Link href="/">
                <MenuButton className="ul-menu-button">Home</MenuButton>
              </Link>
              <Menu
                menuButton={
                  <MenuButton className="ul-menu-button">
                    PEST CONTROL SERVICES{" "}
                    <img src={dropDownIcon} alt="dropDownIcon" />
                  </MenuButton>
                }
              >
                <SubMenu label="Commercial Services" className="submenu-button">
                  <MenuItem href="/commercial-pest-control">
                    Commercial Pest Control
                  </MenuItem>
                  <MenuItem href="/strata-pest-control">
                    Strata Pest Control
                  </MenuItem>
                  <MenuItem href="/school-pest-control">
                    School Pest Control
                  </MenuItem>
                  <MenuItem href="/transport-pest-control">
                    Transport Pest Control
                  </MenuItem>
                  <MenuItem href="/government-pest-control">
                    Government Pest Control
                  </MenuItem>
                  <MenuItem href="/pest-inspection">
                    Building Pest Inspection
                  </MenuItem>
                  <MenuItem href="/aged-care-pest-control">
                    Aged Care Pest Control
                  </MenuItem>
                </SubMenu>
                <MenuItem href="/residential-pest-control">
                  Residential Pest Control
                </MenuItem>
                <MenuItem href="/pet-and-kid-friendly-pest-control">
                  Pet and Kid Friendly Pest Control
                </MenuItem>
                <MenuItem href="/organic-pest-control">
                  Organic Pest Control
                </MenuItem>
              </Menu>
              <Menu
                menuButton={
                  <MenuButton className="ul-menu-button">
                    TERMITE CONTROL{" "}
                    <img src={dropDownIcon} alt="dropDownIcon" />
                  </MenuButton>
                }
              >
                <MenuItem href="#">Termite Treatment</MenuItem>
                <MenuItem href="#">Termite Inspection</MenuItem>
                <MenuItem href="#">Termite Prevention</MenuItem>
              </Menu>
              <Menu
                menuButton={
                  <MenuButton className="ul-menu-button">
                    PEST SOLUTIONS <img src={dropDownIcon} alt="dropDownIcon" />
                  </MenuButton>
                }
              >
                {" "}
                <MenuItem href="/cockroach-pest-control-sydney">
                  Cockroach Pest Control
                </MenuItem>
                <SubMenu label="Spider Control">
                  <MenuItem href="/spider-pest-control-sydney">
                    Spider Pest Control
                  </MenuItem>
                  <MenuItem href="/redback-spider-pest-control-sydney">
                    Redback Spider Pest Control stone
                  </MenuItem>
                  <MenuItem href="/funnel-web-spider-pest-control">
                    Funnel-Web Spider Pest Control stone
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Ant Control">
                  <MenuItem href="/ant-pest-control-sydney">
                    Ant Pest Control
                  </MenuItem>
                  <MenuItem href="/white-ant-pest-control">
                    White Ant Pest Control
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Bird Control">
                  <MenuItem href="/bird-pest-control-sydney">
                    Bird Pest Control
                  </MenuItem>
                  <MenuItem href="/pigeon-pest-control">
                    Pigeon Pest Control
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Feral Control">
                  <MenuItem href="/feral-animal-removal">
                    Feral Animal Removal
                  </MenuItem>
                  <MenuItem href="/possum-pest-control">
                    Possum Pest Control
                  </MenuItem>
                  <MenuItem href="/rabbit-control.">
                    Rabbit Pest Control
                  </MenuItem>
                  <MenuItem href="/feral-cat-control">
                    Feral Cat Pest Control
                  </MenuItem>
                </SubMenu>
                <SubMenu label="Fly Control">
                  <MenuItem href="/flying-insect-control">
                    Flying insect Control
                  </MenuItem>
                  <MenuItem href="/mosquito-control-sydney">
                    Mosquito Pest Control
                  </MenuItem>
                </SubMenu>
                <MenuItem href="/rodent-control-sydney">
                  Rodent Pest Control
                </MenuItem>
                <MenuItem href="/silverfish-control">
                  Silverfish Pest Control
                </MenuItem>
                <MenuItem href="/bed-bug-control">
                  Bed Bug Pest Control
                </MenuItem>
                <MenuItem href="/carpet-beetle-control">
                  Carpet Beetle Pest Control
                </MenuItem>
                <SubMenu label="Moth Control">
                  <MenuItem href="/moth-control">Moth Pest Control</MenuItem>
                  <MenuItem href="/pantry-moth-control">
                    Pantry Moth Pest Control
                  </MenuItem>
                </SubMenu>
              </Menu>
              <Menu
                menuButton={
                  <MenuButton className="ul-menu-button">
                    PEST TYPES <img src={dropDownIcon} alt="dropDownIcon" />
                  </MenuButton>
                }
                position="initial"
                overflow="hidden"
              >
                <MenuItem href="/the-end-of-lease">Dog Fleas</MenuItem>
                <MenuItem href="/the-ant">Ants</MenuItem>
              </Menu>
              <Menu
                menuButton={
                  <MenuButton className="ul-menu-button">
                    AREAS COVERED <img src={dropDownIcon} alt="dropDownIcon" />
                  </MenuButton>
                }
              >
                <SubMenu label=" Regions">
                  <MenuItem href="/blue-mountains">Blue Mountains</MenuItem>
                  <MenuItem href="/central-coast">Central Coast</MenuItem>
                  <MenuItem href="/eastern-suburbs">Eastern Suburbs</MenuItem>
                  <MenuItem href="/hawkesbury">Hawkesbury</MenuItem>
                  <MenuItem href="/hills-district">Hills District</MenuItem>
                  <MenuItem href="/wollongong">Wollongong</MenuItem>
                  <MenuItem href="/inner-west">Inner West</MenuItem>
                  <MenuItem href="/macarthur">Macarthur</MenuItem>
                  <MenuItem href="#">Campbelltown</MenuItem>
                  <MenuItem href="/newcastle">Newcastle</MenuItem>
                  <MenuItem href="/northern-suburbs">Northern Suburbs</MenuItem>
                  <MenuItem href="/st-george">St George</MenuItem>
                  <MenuItem href="/south-sydney">South Sydney</MenuItem>
                  <MenuItem href="/western-sydney">Western Sydney</MenuItem>
                  <MenuItem href="/bankstown">Bankstown</MenuItem>
                  <MenuItem href="/bondi">Bondi</MenuItem>{" "}
                  <MenuItem href="/camden">Camden</MenuItem>{" "}
                  <MenuItem href="/gosford">Gosford</MenuItem>{" "}
                  <MenuItem href="/kellyville">Kellyville</MenuItem>
                </SubMenu>
                <SubMenu label="Suburbs">
                  <MenuItem href="/lake-macquarie">Lake-macquarie</MenuItem>
                  <MenuItem href="/liverpool">Liverpool</MenuItem>
                  <MenuItem href="/narellan">Narellan</MenuItem>
                  <MenuItem href="/nowra">Nowra</MenuItem>
                  <MenuItem href="#">Parramatta</MenuItem>
                  <MenuItem href="/penrith">Penrith</MenuItem>
                  <MenuItem href="#">Sutherland shire</MenuItem>
                  <MenuItem href="#">Castle Hill</MenuItem>
                  <MenuItem href="/austral">Austral</MenuItem>
                  <MenuItem href="/dee-why">Dee Why</MenuItem>
                  <MenuItem href="/manly">Manly</MenuItem>
                  <MenuItem href="/caringbah">Caringbah</MenuItem>
                  <MenuItem href="/dapto">Dapto</MenuItem>
                  <MenuItem href="/epping">Epping</MenuItem>
                  <MenuItem href="#">Hurstville</MenuItem>
                  <MenuItem href="/kiama">Kiama</MenuItem>
                  <MenuItem href="/marrickville">Marrickville</MenuItem>
                  <MenuItem href="/randwick">Randwick</MenuItem>
                  <MenuItem href="/ryde">Ryde</MenuItem>
                  <MenuItem href="/shellharbour">Shellharbour</MenuItem>
                  <MenuItem href="/blacktown">Blacktown</MenuItem>
                </SubMenu>
              </Menu>
              <Link to="#">
                <MenuButton className="ul-menu-button">Shop</MenuButton>
              </Link>
              <Link href="/blog">
                <MenuButton className="ul-menu-button">Blog</MenuButton>
              </Link>
            </div>

            {/* <ul className="main-menu desktop-menu">
            </ul> */}
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
                                <Link to="/pest-inspection">
                                  Building Pest Inspection
                                </Link>
                              </li>
                              <li>
                                <Link to="/aged-care-pest-control">
                                  Aged Care Pest Control
                                </Link>
                              </li>
                            </ul>
                          </AccordionDetails>
                        </Accordion>
                      </li>
                      <li>
                        <Link to="/services/app-security">
                          Residential Pest Control
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/devsecops">
                          Pet and Kid Friendly Pest Control
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/arch-analysis-threat-modeling">
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
                        <Link to="#">Termite Treatment</Link>
                      </li>
                      <li>
                        <Link to="#">Termite Inspection</Link>
                      </li>
                      <li>
                        <Link to="#">Termite Prevention</Link>
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
                                <Link to="/redback-spider-pest-control-sydney">
                                  Red Back Spider Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/funnel-web-spider-pest-control">
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
                                <Link to="/white-ant-pest-control">
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
                                <Link to="/pigeon-pest-control">
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
                                <Link to="/possum-pest-control">
                                  Possum Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/rabbit-control.">
                                  Rabbit Pest Control
                                </Link>
                              </li>
                              <li>
                                <Link to="/feral-cat-control">
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
                            <Link to="/flying-insect-control">
                              Flying Pest Control{" "}
                            </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/mosquito-control-sydney">
                                  Mosquito Pest Control
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
                                <Link to="/pantry-moth-control">
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
                            <Link to="">Regions </Link>
                          </AccordionSummary>
                          <AccordionDetails>
                            <ul className="accordion-submenu-ul">
                              <li>
                                <Link to="/blue-mountains">Blue Mountains</Link>
                              </li>
                              <li>
                                <Link to="/central-coast">Central Coast</Link>
                              </li>
                              <li>
                                <Link to="/eastern-suburbs">
                                  Eastern Suburbs
                                </Link>
                              </li>
                              <li>
                                <Link to="/hawkesbury">Hawkesbury</Link>
                              </li>
                              <li>
                                <Link to="/hills-district">Hills District</Link>
                              </li>
                              <li>
                                <Link to="/wollongong">Wollongong</Link>
                              </li>
                              <li>
                                <Link to="/inner-west">Inner West</Link>
                              </li>
                              <li>
                                <Link to="/macarthur">Macarthur</Link>
                              </li>
                              <li>
                                <Link to="#">Campbelltown</Link>
                              </li>
                              <li>
                                <Link to="/newcastle">Newcastle</Link>
                              </li>
                              <li>
                                <Link to="/northern-suburbs">
                                  Northern Suburbs
                                </Link>
                              </li>
                              <li>
                                <Link to="/st-george">St George</Link>
                              </li>
                              <li>
                                <Link to="/south-sydney">South Sydney</Link>
                              </li>
                              <li>
                                <Link to="/western-sydney">Western Sydney</Link>
                              </li>
                              <li>
                                <Link to="/bankstown">Bankstown</Link>
                              </li>
                              <li>
                                <Link to="/bondi">Bondi</Link>
                              </li>
                              <li>
                                <Link to="/camden">Camden</Link>
                              </li>
                              <li>
                                <Link to="/gosford">Gosford</Link>
                              </li>
                              <li>
                                <Link to="/kellyville">Kellyville</Link>
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
                                <Link to="/lake-macquarie">Lake-macquarie</Link>
                              </li>
                              <li>
                                <Link to="/liverpool">Liverpool</Link>
                              </li>
                              <li>
                                <Link to="/narellan">Narellan</Link>
                              </li>
                              <li>
                                <Link to="/nowra">Nowra</Link>
                              </li>
                              <li>
                                <Link to="#">Parramatta</Link>
                              </li>
                              <li>
                                <Link to="/penrith">Penrith</Link>
                              </li>
                              <li>
                                <Link to="#">Sutherland shire</Link>
                              </li>
                              <li>
                                <Link to="#">Castle Hill</Link>
                              </li>
                              <li>
                                <Link to="/austral">Austral</Link>
                              </li>
                              <li>
                                <Link to="/dee-why">Dee Why</Link>
                              </li>
                              <li>
                                <Link to="/manly">Manly</Link>
                              </li>
                              <li>
                                <Link to="/caringbah">Caringbah</Link>
                              </li>
                              <li>
                                <Link to="/dapto">Dapto</Link>
                              </li>
                              <li>
                                <Link to="/epping">Epping</Link>
                              </li>
                              <li>
                                <Link to="#">Hurstville</Link>
                              </li>
                              <li>
                                <Link to="/kiama">Kiama</Link>
                              </li>
                              <li>
                                <Link to="/marrickville">Marrickville</Link>
                              </li>
                              <li>
                                <Link to="/randwick">Randwick</Link>
                              </li>
                              <li>
                                <Link to="/ryde">Ryde</Link>
                              </li>
                              <li>
                                <Link to="/shellharbour">Shellharbour</Link>
                              </li>
                              <li>
                                <Link to="/blacktown">Blacktown</Link>
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
                <Link to="/" className="nav-link nav-imp-sizes">
                  SHOP
                </Link>
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
