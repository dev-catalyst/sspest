// import React from "react"
import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import Widget from "./pestWidget"

export default function Layout(props) {
  useEffect(() => {
    const accordions = document.querySelectorAll(".accordion");
  for (const accordion of accordions) {
    const panels = accordion.querySelectorAll(".accordion-panel");
    for (const panel of panels) {
      const head = panel.querySelector(".accordion-header");
      head.addEventListener('click', () => {
        for (const otherPanel of panels) {
          if (otherPanel !== panel) {
            otherPanel.classList.remove('accordion-expanded');
          }
        }
        panel.classList.toggle('accordion-expanded');
      });
    }
  }

//mobile
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('body');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});


  }, [])
  return (
    <div>
      <Header />
      <Widget />
      {props.children}
      <Footer />
    </div>
  )
}
