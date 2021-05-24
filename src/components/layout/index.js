import React from "react"
import Header from "./header"
import Footer from "./footer"
import Widget from "./pestWidget"

export default function Layout(props) {
  return (
    <div>
      <Header />
      <Widget />
      {props.children}
      <Footer />
    </div>
  )
}
