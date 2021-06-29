import React from "react"

import ellipse from "../../../assets/home/icons/ellipse.svg"
import call from "../../../assets/home/icons/call.svg"
import quotes from "../../../assets/home/icons/quotes.svg"
import Home from "../../../assets/home/icons/home.svg"
import Pest from "../../../assets/home/icons/pest.svg"
import Sydney from "../../../assets/home/icons/sydney.svg"
import Crew from "../../../assets/home/icons/crew.svg"
import Ten from "../../../assets/home/icons/ten.svg"
import Shield from "../../../assets/home/icons/shield.svg"
import callSmall from "../../../assets/home/icons/hero-call.svg"
import { useLocation } from "@reach/router"

import "./style.scss"

const stripSlashes = path => {
  return path.split("/").join("")
}

export default function GeneralPest() {
  const location = useLocation()
  const [currentPath, setCurrenpath] = React.useState("")
  const [title, setTitle] = React.useState("")
  const [price, setPrice] = React.useState("")

  React.useEffect(() => {
    setCurrenpath(stripSlashes(location.pathname))
    switch (currentPath) {
      case "the-end-of-lease":
        setTitle("THE END OF LEASE")
        setPrice("150")
        break
      case "the-german":
        setTitle("THE GERMAN")
        setPrice("150")
        break
      case "the-bed-bug":
        setTitle("THE BED BUG")
        setPrice("340")
        break
      case "the-spider":
        setTitle("THE SPIDER")
        setPrice("120")
        break
      case "the-termite":
        setTitle("THE TERMITE INSPECTION")
        setPrice("189")
        break
      case "the-rodent":
        setTitle("THE RODENT")
        setPrice("150")
        break
      case "the-ant":
        setTitle("THE ANT")
        setPrice("160")
        break
      default:
        setTitle("THE GENERAL PEST")
        setPrice("170")
    }
  }, [currentPath])
  return (
    <div className="features">
      <div className="features-general">
        <h4>{title}</h4>
        <h2>${price}</h2>
        <span className="place">ANY HOUSE</span>
        <img src={ellipse} alt="" />
        <span className="place">INSIDE AND OUT</span>
        <img src={ellipse} alt="" />
        <span className="place">ALL PESTS TREATED</span>
        <div className="get-quote">
          <a href="tel:1300 007 772">
            <div className="call">
              <img src={call} alt="" />
              <img src={callSmall} alt="" />
              <p className="free-quote">
                FREE QUOTE! CALL NOW
                <br></br>
                <span>1300 007 772</span>
              </p>
            </div>
          </a>
        </div>
        <div className="quote-conatiner">
          <img src={quotes} alt="" className="quote-img" />
          <p className="quote">
            Very happy with an on-time service. Would recommend to friends and
            family! <br /> <br />
            <span>Karla</span>, Greenwich
          </p>
        </div>
        <div className="quote-conatiner">
          <img src={quotes} alt="" className="quote-img" />
          <p className="quote">
            Service was great and Jeff was helpful. Have already recommended him
            to my son. <br /> <br />
            <span>May {"&"} Dennis</span>, Padstow
          </p>
        </div>
        <div className="quote-conatiner">
          <img src={quotes} alt="" className="quote-img" />
          <p className="quote">
            Had all 3 of my properties done - will definitely call them back
            next year. <br /> <br />
            <span>David</span>, Neutral Bay
          </p>
        </div>
      </div>
      <div className="features-cost">
        <h6 className="title">
          Sydney's <span>LOW COST </span>professional pest control company.
          Price fixed at $170 for any house!
        </h6>
        <p>
          <img src={Home} alt="" /> Flat rate $170 any house
        </p>
        <p>
          <img src={Pest} alt="" /> Includes rodent treatment
        </p>
        <p>
          <img src={Sydney} alt="" /> Servicing all of Sydney
        </p>
        <p>
          <img src={Crew} alt="" /> Servicing all of Sydney
        </p>
        <p>
          <img src={Ten} alt="" /> 10 Years experience
        </p>
        <p>
          <img src={Shield} alt="" /> All pests {"&"} bugs treated
        </p>
      </div>
    </div>
  )
}
