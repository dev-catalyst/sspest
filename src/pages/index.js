import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import PestControl from "../components/home/pestControl"
import WhoAreWe from "../components/home/whoAreWe"
import ServiceTeam from "../components/home/serviceTeam"
import ServiceTypes from "../components/home/serviceTypes"
import Prevention from "../components/home/prevention"
import Expertise from "../components/home/expertise"
import PestControl2 from "../components/home/pestControl2"
import Reasons from "../components/home/reasons"
import PestControl3 from "../components/home/pestControl3"
import Reviews from "../components/home/reviews"
import Quote from "../components/home/quote"
import Choose from "../components/home/choose"
import Order from "../components/home/order"
import Blog from "../components/home/blog"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <img src={divider1} style={{ width: "100%" }} />
        <PestControl />
        <WhoAreWe />
        <ServiceTeam />
        <ServiceTypes />
        <Prevention />
        <Expertise />
        <PestControl2 />
        <Reasons />
        <PestControl3 />
        <Reviews />
        <Quote />
        <Choose />
        <Order />
        <Blog />
        <Call />
      </Layout>
    </div>
  )
}
