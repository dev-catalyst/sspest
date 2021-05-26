import React from "react"
import { Button } from "@react-md/button"
import stone from "../../../assets/layout/stone.svg"
import post1 from "../../../assets/termite/blog1.png"
import post2 from "../../../assets/termite/blog2.png"
import post3 from "../../../assets/termite/blog3.png"
import "./style.scss"

export default function BlogPosts() {
  return (
    <div className="termite-blog">
      <div className="termite-blog-container">
        <h1>
          <img src={stone} slt="" className="termite-stone" alt="" />
          OUR BLOG POSTS
        </h1>
        <p>
          Our website has been professionally crafted in order to englobe
          essential information on the practice so that you can have an in-depth
          look at the issues that might be surrounding their concerns and how we
          face any given scenario. Have a look around, there is plenty to read
          and learn!
        </p>
        <div className="termite-posts">
          <div>
            <img src={post1} alt="" className="termite-post-image" />
            <div className="termite-post-card">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum is simply dummy text the printing and typesetting
                indu lorem ipsum has been the mag.
              </p>
              <Button themeType="contained" className="read">
                READ MORE
              </Button>
            </div>
          </div>
          <div>
            {" "}
            <img src={post2} alt="" className="termite-post-image" />
            <div className="termite-post-card">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum is simply dummy text the printing and typesetting
                indu lorem ipsum has been the mag.
              </p>
              <Button themeType="contained" className="read">
                READ MORE
              </Button>
            </div>
          </div>
          <div>
            {" "}
            <img src={post3} alt="" className="termite-post-image" />
            <div className="termite-post-card">
              <h4>Lorem Ipsum</h4>
              <p>
                Lorem ipsum is simply dummy text the printing and typesetting
                indu lorem ipsum has been the mag.
              </p>
              <Button themeType="contained" className="read">
                READ MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
