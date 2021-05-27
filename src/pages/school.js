import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import ChoosePest from "../components/info/choosePest"
import Order from "../components/home/order"
import BlogPost from "../components/termiteInspection/blogPosts"
import Call from "../components/home/call"
import divider1 from "../assets/home/divider1.png"
import separator2 from "../assets/info/separator2.png"
export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <img src={divider1} style={{ width: "100%" }} alt="" />
        <img
          src={separator2}
          style={{ width: "100%", backgroundColor: "#dde4ec" }}
          alt="school"
        />
        <ChoosePest />
        <Order text="ORDER #1 TERMITE INSPECTION SERVICE IN SYDNEY NOW!" />
        <BlogPost />
        <Call />
      </Layout>
    </div>
  )
}
