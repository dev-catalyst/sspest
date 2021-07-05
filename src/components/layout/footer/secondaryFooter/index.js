import React from "react"
import { Link } from "gatsby"
import "./style.scss"

export default function secondaryFooter() {
  return (
    <div className="secondary-footer">
      <div className="secondary-footer-container">
        <div className="secondary-footer-links">
          <ul className="link-container">
            <Link to="/">HOME</Link>
            <Link to="/about-us">ABOUT US</Link>
            <Link to="#">SHOP</Link>
            <Link to="/blog">BLOG</Link>
          </ul>
        </div>
        <div className="secondary-footer-copyright">
          <p>
            © {new Date().getFullYear()} SSPESTCONTROL. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
