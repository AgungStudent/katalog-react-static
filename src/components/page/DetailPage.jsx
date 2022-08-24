import React from "react"

export default function DetailPage() {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img
                className="card-img-top mb-5 mb-md-0"
                src="https://dummyimage.com/500x500/dee2e6/6c757d.jpg"
                alt="..."
              />
            </div>
            <div className="col-md-7">
              <div className="small mb-1">Detail Produk</div>
              <h1 className="display-5 fw-bolder">Nama Produk</h1>
              {/* <div className="fs-5 mb-5"> <span>$40.00</span> </div> */}
              <p className="lead">
                spesifikasi: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Asperiores quibusdam nulla consequuntur laboriosam aliquid
                illum doloribus, quisquam, sapiente, cum eaque est provident
                nesciunt libero reprehenderit nobis quae ad eos eum.
              </p>

              <a href="" className="btn btn-success">
                <i className="fa-brands fa-whatsapp"></i> Pesan
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
