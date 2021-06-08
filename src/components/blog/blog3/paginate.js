import React, { useState } from "react"
import { Button } from "@react-md/button"
import { RichText } from "prismic-reactjs"
import ReactPaginate from "react-paginate"
import left from "../../../assets/blog/prev.svg"
import right from "../../../assets/blog/next.svg"
import "./style.scss"
const PER_PAGE = 1

export default function Paginate({ data }) {
  const [currentPage, setCurrentPage] = useState(0)
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage)
  }

  const offset = currentPage * PER_PAGE

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((info, index) => (
      <div key={index} className="blog-blog3-content">
        <div className="blog-blog3-content-image">
          <img src={info.node.data.image.url} alt="" />
        </div>
        <h3>{RichText.asText(info.node.data.title.raw)}</h3>
        <p className="center-p">
          Posted {RichText.asText(info.node.data.date.raw)}
        </p>
        <p>{RichText.asText(info.node.data.content.raw)}</p>
        <div className="bottom-text">
          <div className="button-container">
            <Button themeType="outline" className="blog3-button">
              Termites
            </Button>
            <Button themeType="outline" className="blog3-button">
              Pest Control
            </Button>
            <Button themeType="outline" className="blog3-button">
              Inspection
            </Button>
          </div>
          <p className="comments">
            {RichText.asText(info.node.data.comments)} Comments
          </p>
        </div>
      </div>
    ))

  const pageCount = Math.ceil(data.length / PER_PAGE)
  return (
    <div className="App">
      {currentPageData}
      <ReactPaginate
        previousLabel={
          <div style={{ display: "flex", border: "none !important" }}>
            <p style={{ color: "#fff", fontSize: "30px" }}>
              <img src={left} alt="" style={{ marginRight: "10px" }} />
              <span className="shift-buttons">Prev</span>
            </p>
          </div>
        }
        nextLabel={
          <div>
            <p style={{ color: "#fff", fontSize: "30px" }}>
              <span className="shift-buttons">Next</span>
              <img src={right} alt="" style={{ marginLeft: "10px" }} />
            </p>
          </div>
        }
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  )
}
