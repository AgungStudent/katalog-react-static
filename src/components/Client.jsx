import React, { useEffect } from 'react'
import ItemProduct from './ItemProduct'

// TODO: edit responsive mobile
const Client = () => { 

  useEffect(() => { 
    const items = document.querySelectorAll(".carousel .carousel-item")
      items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
          if (!next) {
            // wrap carousel by using first child
            next = items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
        }
      })
   },[])

   const clients = []
   for (let i = 0; i <= 10; i++) 
    clients.push(`/assets/img/mitra/mitra${i}.jpg`)

  return (
<div className="container text-center my-3" id='client'>
      <h2 className="font-weight-light">Klien Kita</h2>

    <div className="my-3 d-flex gap-4 justify-content-center">
          <a href="#recipeCarousel" role="button" data-bs-slide="prev" className="badge bg-info fs-2 " style={{ borderRadius:'40%'}}><i className="fa-solid fa-arrow-left"></i></a>
          <a href="#recipeCarousel" role="button" data-bs-slide="next" className="badge bg-info fs-2" style={{ borderRadius:'40%'}}><i className="fa-solid fa-arrow-right"></i></a>
    </div>

      <div className="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            
            {
              clients.map((image, i)=> (
            <div key={i} className={ `carousel-item ${i == 0? 'active': ''}` }>
                <ItemProduct image={image} />
            </div>
              ))
            }
            
          </div>

        </div>
      </div>
      <h5 className="mb-5 fw-light"><a href="#!" className='text-info'> Lihat semua <i className='fa-solid fa-arrow-right-long'></i></a></h5>
    </div>
  )
 }
 
 export default Client