import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import BlackTown from "../components/landing/blacktown"
import Address from "../components/landing/address"
import Reliable from "../components/landing/reliable"
import Qualified from "../components/landing/qualified"
import Proficient from "../components/landing/proficient"
import Services from "../components/landing/services"
import Quote from "../components/landing/quote"
import BlogPost from "../components/termiteInspection/blogPosts"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <BlackTown />
        <Address />
        <Reliable />
        <Qualified />
        <Proficient />
        <Services />
        <Quote />
        <BlogPost />
        <Call />
      </Layout>
    </div>
  )
}
