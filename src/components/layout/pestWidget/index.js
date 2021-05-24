import React, { useState } from "react"
import { Row, Col, Button, Divider } from "antd"
import "./style.scss"

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
import callIcon from "../../../assets/home/icons/call-icon.svg"

import { CloseCircleOutlined, PhoneOutlined } from "@ant-design/icons"

const PestWidget = () => {
  return <PestWidgetInner />
}

const PestWidgetInner = () => {
  const [show, setShow] = useState("none")

  const handleClick = () => {
    if (show == "block") {
      setShow("none")
    } else {
      setShow("block")
    }
  }
  return (
    <div className="fixed-widget">
      <div className="pest-widget-general" style={{ display: show }}>
        <Button className="close-widget" onClick={handleClick}>
          <CloseCircleOutlined />
        </Button>
        <div className="pest-widget-general-inner">
          <h3>THE GERMAN</h3>
          <p className="widget-info">
            <img src={Home} /> Flat rate $170 any house
          </p>

          <p className="widget-info">
            <img src={Pest} /> Includes rodent treatment
          </p>

          <p className="widget-info">
            <img src={Sydney} /> Servicing all of Sydney
          </p>

          <p className="widget-info">
            <img src={Crew} /> Servicing all of Sydney
          </p>

          <p className="widget-info">
            <img src={Ten} /> 10 Years experience
          </p>

          <p className="widget-info">
            <img src={Shield} /> All pests & bugs treated
          </p>
        </div>

        <div className="btn-container-widget">
          <a href="tel:1300 007 772">
            <img src={callIcon} />
            <p> CALL NOW</p>
          </a>
        </div>
      </div>
      <div>
        <div className="pest-widget-holder">
          <img src={Flea} />
          <Button className="pest-widget-price" onClick={handleClick}>
            <span>the flea</span>
            <p>$160</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={CockRoach} />
          <Button className="pest-widget-price" onClick={handleClick}>
            <span>the cockroach</span>
            <p>$260</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={BedBug} />
          <Button className="pest-widget-price" onClick={handleClick}>
            <span>the BedBug</span>
            <p>$340</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={Spider} />
          <Button className="pest-widget-price" onClick={handleClick}>
            <span>the spider</span>
            <p>$120</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={Termite} />
          <Button className="pest-widget-price" onClick={handleClick}>
            <span>the termite</span>
            <p>$189</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={Rodent} />
          <Button className="pest-widget-price" onClick={handleClick}>
            <span>the rodent</span>
            <p>$260</p>
          </Button>
        </div>

        <div className="pest-widget-holder">
          <img src={AntPest} />
          <Button className="pest-widget-price" onClick={handleClick}>
            <span>the ant</span>
            <p>$160</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PestWidget
