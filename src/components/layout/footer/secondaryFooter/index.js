import React from "react"
import { Link } from "gatsby"
import "./style.scss"

export default function secondaryFooter() {
  return (
    <div className="secondary-footer">
      <div className="secondary-footer-container">
        <div className="secondary-footer-links">
          <ul className="link-container">
            {/* <img src={nav} alt="" /> */}
            <Link to="">HOME</Link>
            <Link to="">PEST CONTROL SERVICES</Link>
            <Link to="">PEST SOLUTIONS</Link>
            <Link to="">AREAS COVERED</Link>
            <Link to="">BLOG</Link>
          </ul>
        </div>
        <div className="secondary-footer-copyright">
          <p>© 2021 SSPESTCONTROL. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
