import React from "react"

import termite1 from "../../../assets/termite/termite1.png"
import termite2 from "../../../assets/termite/termite2.png"
import stone from "../../../assets/layout/stone.svg"
import GeneralPest from "../../home/generalPest"
import "./style.scss"

export default function WhyTermite() {
  return (
    <div className="termite-whyTermite">
      <div className="container">
        <div className="termite-general-pest">
          <GeneralPest />
        </div>
        <div className="termite-whyTermite-inspection">
          <div className="termite-whyTermite-inspection-content">
            <h1>
              <img src={stone} alt="" />
              TERMITE INSPECTION SYDNEY
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              ut sem viverra aliquet eget sit amet. Condimentum vitae sapien
              pellentesque habitant morbi tristique. Magna etiam tempor orci eu
              lobortis elementum. Sed vulputate odio ut enim. Elit duis
              tristique sollicitudin nibh. Nisi lacus sed viverra tellus in.
              Turpis egestas integer eget aliquet nibh praesent tristique magna.
              Arcu risus quis varius quam. Arcu felis bibendum ut tristique et
              egestas quis. Etiam non quam lacus suspendisse faucibus interdum.
            </p>
          </div>
          <div className="termite-whyTermite-inspection-image">
            <img src={termite1} alt="" className="termite1" />
          </div>
        </div>
        <div className="termite-whyTermite-inspection container2">
          <div className="termite-whyTermite-inspection-image">
            <img src={termite2} alt="" className="termite2" />
          </div>
          <div className="termite-whyTermite-inspection-content content2">
            <h1>
              <img src={stone} alt="" />
              WHY TERMITE INSPECTION?
            </h1>
            <div>
              <p>
                Velit euismod in pellentesque massa placerat duis ultricies:
              </p>
              <ul>
                <li>
                  Fringilla urna porttitor rhoncus dolor purus non enim. Ac
                  tincidunt vitae semper quis lectus.
                </li>
                <li>Vitae semper quis lectus nulla at volutpat diam.</li>
                <li>
                  Ac tortor vitae purus faucibus. Venenatis a condimentum vitae
                  sapien pellentesque habitant.
                </li>
                <li>Convallis posuere morbi leo urna molestie at.</li>
                <li>
                  Tellus integer feugiat scelerisque varius morbi enim nunc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
