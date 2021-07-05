// import React from "react"
import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import Widget from "./pestWidget"
import { Helmet } from "react-helmet"

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
      <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> 
       <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700;800;900&display=swap" rel="stylesheet" />
       <link href="https://fonts.googleapis.com/css2?family=Montez:wght@200;400;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <Widget />
      {props.children}
      <Footer />
    </div>
  )
}
