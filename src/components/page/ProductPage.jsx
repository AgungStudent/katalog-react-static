import CorouselProduct from "../CorouselProduct"
import Product from "../Product"

// import "./../background.css"

export default function ProductPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/assets/img/background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div
            style={{
              backgroundImage: "/assets/img/illustrations/waves.svg",
            }}
          ></div>
          <div
            className="container"
            id="product"
            style={{
              paddingTop: "10vh",
              backgroundImage: "url(/assets/img/illustrations/category-bg.png)",
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-6 text-center mb-3">
                <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                  Daftar Produk
                </h5>
                <hr className=""></hr>
              </div>
            </div>
            <div className="row flex-center h-100">
              <Product lgContent="4" isProduct="true" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
