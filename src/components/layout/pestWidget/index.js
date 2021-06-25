import React, { useState } from "react"
import { Button } from "antd"
import "./style.scss"
import { Link } from "gatsby"
import Flea from "../../../assets/layout/widget/pests/flea.svg"
import CockRoach from "../../../assets/layout/widget/pests/cockroach.svg"
import BedBug from "../../../assets/layout/widget/pests/bed-bug.svg"
import Spider from "../../../assets/layout/widget/pests/spider.svg"
import Termite from "../../../assets/layout/widget/pests/termite.svg"
import Rodent from "../../../assets/layout/widget/pests/rodent.svg"
import AntPest from "../../../assets/layout/widget/pests/ant-pest.svg"

import Home from "../../../assets/layout/widget/cardFooter/home.svg"
import Pest from "../../../assets/layout/widget/cardFooter/pest.svg"

import Sydney from "../../../assets/layout/widget/cardFooter/sydney.svg"
import Crew from "../../../assets/layout/widget/cardFooter/crew.svg"
import Ten from "../../../assets/layout/widget/cardFooter/ten.svg"
import Shield from "../../../assets/layout/widget/cardFooter/shield.svg"

import { CloseCircleOutlined } from "@ant-design/icons"

const PestWidget = () => {
  return <PestWidgetInner />
}

const PestWidgetInner = () => {
  const [show, setShow] = useState("none")
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const handleClick = () => {
    if (show === "block") {
      setShow("none")
    } else {
      setShow("block")
    }
  }

  const handleFlea = () => {
    setShow("block")
    setName("The End of Lease")
    setLink("/the-end-of-lease")
  }
  const handleCockroach = () => {
    setShow("block")
    setName("The German")
    setLink("/the-german")
  }
  const handleBedBug = () => {
    setShow("block")
    setName("The BedBug")
    setLink("/the-bed-bug")
  }
  const handleSpider = () => {
    setShow("block")
    setName("The Spider")
    setLink("/the-spider")
  }
  const handleTermite = () => {
    setShow("block")
    setName("The Termite")
    setLink("/the-termite")
  }
  const handleRodent = () => {
    setShow("block")
    setName("The Rodent")
    setLink("/the-rodent")
  }
  const handleAntPest = () => {
    setShow("block")
    setName("The AntPest")
    setLink("/the-ant")
  }
  return (
    <div className="fixed-widget-layout">
      <div className="pest-widget-general" style={{ display: show }}>
        <Button className="close-widget" onClick={handleClick}>
          <CloseCircleOutlined />
        </Button>
        <div className="pest-widget-general-inner">
          <h3>{name}</h3>
          <p className="widget-info">
            <img src={Home} alt="" /> Flat rate $170 any house
          </p>
          <p className="widget-info">
            <img src={Pest} alt="" /> Includes rodent treatment
          </p>
          <p className="widget-info">
            <img src={Sydney} alt="" /> Servicing all of Sydney
          </p>
          <p className="widget-info">
            <img src={Crew} alt="" /> Servicing all of Sydney
          </p>
          <p className="widget-info">
            <img src={Ten} alt="" /> 10 Years experience
          </p>
          <p className="widget-info">
            <img src={Shield} alt="" /> All pests {"&"} bugs treated
          </p>
        </div>

        <div className="btn-container-widget" onClick={handleClick}>
          <Link to={link}>VIEW INFO</Link>
        </div>
      </div>
      <div>
        <div className="pest-widget-holder ">
          <img src={Flea} alt="" />
          <Button
            className="pest-widget-price pest-widget-animation1"
            onClick={handleFlea}
          >
            <span>the end of lease</span>
            <p>$160</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={CockRoach} alt="" />
          <Button
            className="pest-widget-price pest-widget-animation2"
            onClick={handleCockroach}
          >
            <span>the german</span>
            <p>$260</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={BedBug} alt="" />
          <Button
            className="pest-widget-price pest-widget-animation3"
            onClick={handleBedBug}
          >
            <span>the BedBug</span>
            <p>$340</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={Spider} alt="" />
          <Button
            className="pest-widget-price pest-widget-animation4"
            onClick={handleSpider}
          >
            <span>the spider</span>
            <p>$120</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={Termite} alt="" />
          <Button
            className="pest-widget-price pest-widget-animation5"
            onClick={handleTermite}
          >
            <span>the termite</span>
            <p>$189</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={Rodent} alt="" />
          <Button
            className="pest-widget-price pest-widget-animation6"
            onClick={handleRodent}
          >
            <span>the rodent</span>
            <p>$260</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={AntPest} alt="" />
          <Button
            className="pest-widget-price pest-widget-animation7"
            onClick={handleAntPest}
          >
            <span>the ant</span>
            <p>$160</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PestWidget
