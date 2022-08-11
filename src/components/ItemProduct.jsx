import React from 'react'

export default function ItemProduct({title, discription, image}) {
  return (
    <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
      <div className="card py-4 shadow-sm h-100 hover-top">
        <div className="text-center">
          <img src={image} width="90%" alt="" />
          <div className="card-body px-2">
            <h6 className="fw-bold fs-1 heading-color">{title}</h6>
            <p className="mb-0 card-text">{discription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}