import React from "react"
import VisiMisi from "../VisiMisi"
import "../../css/about.css"

export default function AboutPage(props) {
  const [sub1, sub2] = spliceData(props.profileCompany)

  return (
    <>
      <div
        style={{
          backgroundImage: "url(/assets/img/bg2.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="/assets/img/sidomulyo2.png"
            alt=""
          />
          <h1 className="display-5 fw-bold text-shadow">Tentang Kami</h1>
          <div className="col-lg-6 mx-auto shadow-sm p-4">
            <p className="lead mb-4">
              Sidomulyo Advertising adalah salah satu perusahaan yang bergerak
              di bidang layanan jasa digital printing&Advertising dengan
              didukung oleh mesin-mesin tercanggih dan terbaru,serta management
              SDM yg profesional.
            </p>
            <p className="lead mb-4">
              Berdiri pada tanggal 12 November 2020 dengan nama Sidomulyo,
              perusahaan ini memulai usaha dibidang Advertising. Seiring dengan
              berjalannya waktu serta permintaan konsumen, dengan mempelajari,
              memahami, memperbaiki, dan meningkatkan layanan serta kualitas
              produksi menjadi lebih baik.sekarang menambah layanan ke digital
              printing & Event.
            </p>
          </div>
        </div>
        <section className="section about-section" id="about">
          <div className="container p-2">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-avatar">
                  <img
                    src="/assets/img/company-icon.jpg"
                    width="100%"
                    title=""
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-text go-to ms-2 mb-4">
                  <h3 className="dark-color">Profile Perusahaan</h3>
                  <h6 className="theme-color lead mb-2">
                    Sidomulyo Advertising
                  </h6>
                  <hr />
                  <div className="row about-list">
                    <div className="col-md-6">
                      {sub1.map((data, i) => (
                        <Information
                          label={data[0]}
                          description={data[1]}
                          key={i}
                        />
                      ))}
                    </div>
                    <div className="col-md-6">
                      {sub2.map((data, i) => (
                        <Information
                          label={data[0]}
                          description={data[1]}
                          key={i}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </section>
        <section>
          <div className="row justify-content-center"></div>
          <div className="container">
            <div className="row flex-center">
              <div className="col-md-5 order-md-1 text-center text-md-end">
                <img
                  className="img-fluid mb-4"
                  src="assets/img/illustrations/printing4.jpg"
                  width="450"
                  alt=""
                />
              </div>
              <div className="col-md-5 text-center text-md-start">
                <h6 className="fw-bold fs-2 fs-lg-3 display-3 lh-sm"></h6>
                <p className="my-4 pe-xl-8"></p>
                <p className="my-4 pe-xl-8">
                  Merupakan salah satu perusahaan yang bergerak di bidang
                  layanan jasa digital printing&Advertising dengan didukung oleh
                  mesin-mesin tercanggih dan terbaru,serta management SDM yg
                  profesional
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <VisiMisi />
        </section>
      </div>
    </>
  )
}

const Information = ({ label, description }) => (
  <div className="d-block">
    <div className="media d-inline-flex justify-content-evenly d-sm-block">
      <label>{label}</label>
      <p>{description}</p>
    </div>
  </div>
)

const spliceData = (profileCompany) => {
  const profiles = Object.entries(profileCompany)
  const midIndex = Math.floor(profiles.length / 2)
  const sub1 = profiles.splice(0, midIndex)
  const sub2 = [...profiles]

  return [sub1, sub2]
}
