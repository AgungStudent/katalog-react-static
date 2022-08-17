import React from 'react'
import ItemProduct from './ItemProduct'

export default function Product({lgContent, isProduct}) {
  const rows = []
  for (let i = 0; i < 6; i++) rows.push(<ItemProduct key={i} image="https://source.unsplash.com/user/c_v_r/1600x900" title={`Product ${i+1}`} description="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero quo dolor asperiores distinctio suscipit? Veritatis aspernatur 
  " lgContent={lgContent} isProduct={isProduct} />)

  return (
        <div className={`col-11 col-xl-${lgContent == 4 ? '10' : '12'}`}>
          <div className="row">{rows}</div>
        </div>
  )
}