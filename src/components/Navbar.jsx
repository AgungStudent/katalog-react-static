import React from "react"
import ListNavbar from "./ListNavbar"

export default function Navbar() {
  const pathName = window.location.pathname
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3 backdrop bg-white"
      data-navbar-on-scroll="data-navbar-on-scroll"
    >
      <div className="container">
        <img src="/assets/img/sidomulyo2.png" className="image-logo" alt="" />

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse border-lg-0 mt-4 mt-lg-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0">
            <ListNavbar link="/" content="Landing Page" />
            <ListNavbar link="/about" content="Tentang Kami" />
            <ListNavbar link="/products" content="Produk" />
            <ListNavbar link="/clients" content="Klein Kami" />
            {/* <ListNavbar link="#client" content="Klien Kita" />
            <ListNavbar link="#contact" content="Kontrak" /> */}
          </ul>
          {/* <form className="ps-lg-5">
            <button
              className="btn btn-lg btn-primary rounded-pill bg-gradient order-0"
              type="submit"
            >
              Login
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}
