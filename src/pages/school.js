import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import SchoolControl from "../components/school/schoolControl"
import SchoolServices from "../components/school/schoolServices"
import SchoolNeed from "../components/school/schoolNeed"
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
        <SchoolControl />
        <SchoolServices />
        <SchoolNeed />
        <ChoosePest />
        <Order text="ORDER #1 TERMITE INSPECTION SERVICE IN SYDNEY NOW!" />
        <BlogPost />
        <Call />
      </Layout>
    </div>
  )
}
