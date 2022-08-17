import React from 'react'
import ComponentFooter from './footer/ComponentFooter'

export default function Footer({ profileCompany, finishingMachine }) {
  const icons = [" fa-home ", " fa-phone ",  " fa-envelope "]

  return (
    <footer className="text-center text-lg-start text-muted text-dark bg-primary-gradient" style={{
      position: 'absolute',
      left: '0',
      right: '0'
    }} id="contact">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <a href="" className="me-4 ">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 ">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 ">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 ">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>
      <section className="py-0 bg-primary-gradient">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url( assets/img/illustrations/footer-bg.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container">
          <div className="row justify-content-lg-between pt-5">
            <ComponentFooter
              datas={Object.keys(finishingMachine)}
              title="Finishing Machine"
            />{" "}
            {/* Finishing machine */}
            <ComponentFooter
              title="Kontak"
              datas={Object.values(profileCompany).slice(0, 3)}
              icons={icons}
            />{" "}
            {/* Produk */}

            <ComponentFooter /> {/* Fasilitas Penunjang */}
            <ComponentFooter /> {/* Produk */}
          </div>
        </div>
      </section>
      <div
        className=" text-center p-4 text-dark fw-bold"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        {" "}
        © Copyright {new Date().getFullYear()}{" "}
      </div>{" "}
    </footer>
  )
}