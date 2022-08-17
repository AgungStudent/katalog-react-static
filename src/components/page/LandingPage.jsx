import React from "react"
import Header from "../Header"
import Product from "../Product"
import Client from "../Client"
import VisiMisi from "../VisiMisi"
import { Link } from "react-router-dom"
import Facilities from "../Facilities"
import FinishingMachine from "./FinishingMachine"

const LandingPage = (props) => {
  return (
    <>
      <Header />
      <hr className="featurette-divider"></hr>
      <VisiMisi />
      <hr className="featurette-divider"></hr>
      <Facilities />
      <hr className="featurette-divider"></hr>
      <FinishingMachine />
      <hr className="featurette-divider"></hr>
      <div
        className="mt-5"
        style={{
          backgroundImage:
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2MDU0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMjYzLjU0OCAyLjY3M0wtMTA3IDc5Mi44MDVWNzc0NWgxNjU1VjE1Ni45ODZMMTI4My42MTYgMi43MjZhMjAgMjAgMCAwIDAtMjAuMDY4LS4wNTN6IiBmaWxsPSIjRThFQUVEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9Ii43Ii8+PC9zdmc+)",
        }}
      >
        <div className="container" id="product">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-6 text-center mb-3">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Daftar Produk</h5>
              <h5 className="fw-light">
                <Link className="text-info" to="/products">
                  Lihat semua <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </h5>
            </div>
          </div>
          <div className="row flex-center h-100">
            <Product lgContent="4" isProduct="true" />
          </div>
        </div>
      </div>

      <Client />
    </>
  )
}

export default LandingPage
