import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Latest from "../components/blog/latest"
import Blog1 from "../components/blog/blog1"
import Blog2 from "../components/blog/blog2"
import Blog3 from "../components/blog/blog3"
import divider1 from "../assets/home/divider1.png"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <Latest />
        <Blog1 />
        <Blog2 />
        <Blog3 />
      </Layout>
    </div>
  )
}
