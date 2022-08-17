import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import ItemProduct from "./ItemProduct"

// TODO: edit responsive mobile
const Client = () => {
  const clients = []
  for (let i = 0; i <= 10; i++) clients.push(`/assets/img/mitra/mitra${i}.jpg`)

  return (
    <div className="container text-center my-5" id="client">
      <h2 className="font-weight-light">Klein Kita</h2>
      <h5 className="my-2 fw-light"></h5>
      <div
        className="row mx-auto justify-content-center my-5"
        style={{
          backgroundColor: "#fff",
        }}
      >
        {clients.map((image, i) =>
          i < 11 ? (
            <div className=" col-6 col-md-2" key={i}>
              <img src={image} width="100" alt="" />
            </div>
          ) : null
        )}
      </div>
      <Link to="/clients" className="text-info">
        Lihat semua <i className="fa-solid fa-arrow-right-long"></i>
      </Link>
    </div>
  )
}

export default Client
