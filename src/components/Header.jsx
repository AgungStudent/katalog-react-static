import { Link } from 'react-router-dom'
import ListNavbar from './ListNavbar'

const Header = () => {
  return (
    <section
      className="pb-0"
      style={{
        backgroundImage:
          "url(assets/img/illustrations/blurry-gradient-haikei.svg)",
        // backgroundColor: '#bddbff',
        backgroundSize: "cover",
      }}
      id="home"
    >
      <div className="container">
        <div className="row flex-center">
          <div className="col-md-5 order-md-1 text-center text-md-end">
            <img
              className="img-fluid mb-4"
              src="/assets/img/illustrations/printing.svg"
              width="450"
              alt=""
            />
          </div>
          <div className="col-md-5 text-center text-md-start">
            <h6 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3 text-uppercase">
              Sidomulyo Advertising
            </h6>
            <p className="my-4 pe-xl-6 text-dark">
              Merupakan salah satu perusahaan yang bergerak di bidang layanan
              jasa digital printing&Advertising dengan didukung oleh mesin-mesin
              tercanggih dan terbaru,serta management SDM yg profesional
            </p>
            <Link to="/about" className="btn btn-primary rounded-pill px-3">
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
      <svg xmlns="assets/img/illustrations/wave.svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,32L60,80C120,128,240,224,360,229.3C480,235,600,149,720,133.3C840,117,960,171,1080,160C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  )
}

export default Header