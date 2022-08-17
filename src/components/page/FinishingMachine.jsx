import React from "react"
import { Link } from "react-router-dom"
import ItemProduct from "../ItemProduct"

export default function FinishingMachine() {
  return (
    <>
      <section className="py-8" style={{ backgroundColor: "#f7f4f4" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-6 text-center mb-3">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Daftar Finishing Machine</h5>
              <h5 className="fw-light">
                <Link className="text-info" to="/finishing-machine">
                  Lihat semua <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </h5>
            </div>
          </div>
          <div className="row h-100">
            <ItemProduct
              image="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
              lgContent="4"
              isHover="false"
              title="title"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nam fugit. Magni in corrupti quos ut esse dicta fugiat rerum nobis, sed vitae consequatur nisi sapiente rem officia tenetur minima?"
            />
            <ItemProduct
              image="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
              lgContent="4"
              isHover="false"
              title="title"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nam fugit. Magni in corrupti quos ut esse dicta fugiat rerum nobis, sed vitae consequatur nisi sapiente rem officia tenetur minima?"
            />
            <ItemProduct
              image="https://source.unsplash.com/user/c_v_r/1600x900"
              lgContent="4"
              isHover="false"
              title="title"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, nam fugit. Magni in corrupti quos ut esse dicta fugiat rerum nobis, sed vitae consequatur nisi sapiente rem officia tenetur minima?"
            />
          </div>
        </div>
      </section>
    </>
  )
}

