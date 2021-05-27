import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import CommercialPest from "../components/info/commercialPest"
import CommercialPestServices from "../components/info/commercialPestServices"
import TreatmentServices from "../components/info/treatmentServices"
import ControlPlan from "../components/info/controlPlan"
import Extermination from "../components/info/extermination"
import PestPrevention from "../components/info/pestPrevention"
import ChoosePest from "../components/info/choosePest"
import Order from "../components/home/order"
import BlogPost from "../components/termiteInspection/blogPosts"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <CommercialPest />
        <CommercialPestServices />
        <TreatmentServices />
        <ControlPlan />
        <Extermination />
        <PestPrevention />
        <ChoosePest />
        <Order text="ORDER #1 TERMITE INSPECTION SERVICE IN SYDNEY NOW!" />
        <BlogPost />
        <Call />
      </Layout>
    </div>
  )
}
