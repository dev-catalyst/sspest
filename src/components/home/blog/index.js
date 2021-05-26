import React from "react"
import { Button } from "@react-md/button"
import stone from "../../../assets/layout/stone.svg"
import post1 from "../../../assets/home/post1.png"
import post2 from "../../../assets/home/post2.png"
import post3 from "../../../assets/home/post3.png"
import "./style.scss"

export default function Blog() {
  return (
    <div className="home-blog">
      <div className="home-blog-container">
        <h1>
          <img src={stone} slt="" className="h1-stone" alt="" />
          BLOG POSTS
        </h1>
        <div className="posts">
          <div>
            <img src={post1} alt="" className="post-image" />
            <div className="post-card">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button themeType="contained" className="learn">
                LEARN MORE
              </Button>
            </div>
          </div>
          <div>
            {" "}
            <img src={post2} alt="" className="post-image" />
            <div className="post-card">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button themeType="contained" className="learn">
                LEARN MORE
              </Button>
            </div>
          </div>
          <div>
            {" "}
            <img src={post3} alt="" className="post-image" />
            <div className="post-card">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button themeType="contained" className="learn">
                LEARN MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
