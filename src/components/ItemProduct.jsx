import React from "react"
import { Link } from "react-router-dom"

export default function ItemProduct({
  title,
  description,
  image,
  lgContent,
  isProduct,
  isHover
}) {
  return (
    <div className={`col-sm-6 col-lg-${lgContent} pb-lg-6 px-lg-4 pb-4`}>
      <div
        className={`card py-3 shadow-sm h-100 ${isHover == undefined || isHover == "true" ? "hover-top" : ""} `}
      >
        <div className="text-center">
          <Link to="/detail/1">
            <img
              className="image-zoom rounded"
              src={image}
              width="90%"
              alt=""
            />
          </Link>
          <div className="card-body px-2">
            <h6 className="fw-bold fs-1 heading-color">{title}</h6>
            <p className="mb-0 card-text text-left">{description}</p>
            {isProduct ? (
              <div className="mt-3">
                <Link
                  to="/detail/1"
                  className="text-center p-2 d-block btn btn-outline-primary"
                >
                  Detail
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
