import React from 'react'
import ItemProduct from './ItemProduct'

export default function Product() {
  const rows = []
  for (let i = 0; i < 6; i++) rows.push(<ItemProduct key={i} image="/assets/img/gallery/company-1.png" title={`Product ${i+1}`} discription="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero quo dolor asperiores distinctio suscipit? Veritatis aspernatur 
  " />)
  return (
    <div className="container" id='product'>
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-6 text-center mb-3">
          <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Daftar Produk</h5>
      <h5 className="fw-light"><a href="#!" className='text-info'> Lihat semua <i className='fa-solid fa-arrow-right-long'></i></a></h5>
        </div>
      </div>
      <div className="row flex-center h-100">
        <div className="col-11 col-xl-10">
          <div className="row">{rows}</div>
        </div>
      </div>
    </div>
  )
}