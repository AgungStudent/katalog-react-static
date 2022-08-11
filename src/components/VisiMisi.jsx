import React from "react"

export default function VisiMisi() {
  return (
<div className="py-5" id="visi-misi">
        {/* background-image:url(assets/img/illustrations/printing2.jpg);background-position:left top;background-size:initial;margin-top:-180px; */}
        <div className="bg-holder my-5" style={{
          backgroundImage: 'url(background-image:url(assets/img/illustrations/printing2.jpg);background-position:left top;background-size:initial;margin-top:-180px;)',
          backgroundPosition: 'left',
          backgroundSize: 'initial',
        }}>
        </div>

        <div className="container">
          <div className="mx-4 row text-sm-start">
            <div className="col-md-5 order-md-0 text-center text-md-start pt-3">

              <h6 className="fw-bold fs-1 fs-lg-3 display-3 lh-sm">Visi</h6>
              <p className="my-4 pe-xl-8">Sebagai Problem Solving dan memberikan solusi tentang strategi beriklan yang efektif dan efisien</p>

            </div>
            <div className="col-md-1">
              <hr className="hr-line" />
            </div>
            <div className="col-md-6 text-center text-md-start pt-3">
              <h6 className="fw-bold fs-1 fs-lg-3 display-3 lh-sm">Misi</h6>
              <ol className="text-start">
                <li>Memberikan dan membuat hasil/karya iklan yang terbaik </li>
                <li>Meningkatkan Pelayanan dibidang Advertising</li>
                <li>Mengembangkan SDM dan Ethos Kerja Perusahaan yang berkinerja tinggi</li>
                <li>Integritas yang dapat diandalkan dan menjadi pribadi yang kreatif</li>
                <li>Menjalin kerja sama yang saling menguntungkan dengan Mitra Usaha </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
  )
}
