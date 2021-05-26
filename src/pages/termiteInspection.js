import React from "react"
import Layout from "../components/layout"

import Hero from "../components/termiteInspection/hero"
import Call from "../components/home/call"
import WhyTermite from "../components/termiteInspection/whyTermite"
import OurServices from "../components/termiteInspection/ourServices"
import InspectionTypes from "../components/termiteInspection/inspectionTypes"
import ChooseUs from "../components/termiteInspection/chooseUs"
import Experinece from "../components/termiteInspection/experience"
import Order from "../components/home/order"
import BlogPost from "../components/termiteInspection/blogPosts"
import envelope1 from "../assets/termite/envelope1.png"

export default function termiteInspection() {
  return (
    <div>
      <Layout>
        <Hero />
        <img src={envelope1} style={{ width: "100%" }} alt="" />
        <WhyTermite />
        <OurServices />
        <InspectionTypes />
        <ChooseUs />
        <Experinece />
        <Order text="ORDER #1 TERMITE INSPECTION SERVICE IN SYDNEY NOW!" />
        <BlogPost />
        <Call />
      </Layout>
    </div>
  )
}
