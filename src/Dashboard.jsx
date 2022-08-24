import React from "react"

export default function Dashboard() {
  return (
    <>
    
      <header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0">
        <a
          className="navbar-brand col-md-3 col-lg-2 me-0 px-3 text-uppercase text-center text-bold"
          href="#"
        >
        <img src="/assets/img/sidomulyo2.png" className="rounded my-icon" />
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-nav">
          <div className="nav-item text-nowrap">
            {/* <a
              className="nav-link px-3"
              href="{{ route('admin.logout') }}"
            >
              <button type="submit" className="btn btn-danger btn-sm">
                logout
              </button>
            </a> */}
            <div className="">

            </div>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block sidebar collapse bg-white shadow"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column nav-pills nav-fill">
                <li className="nav-item">
                  <a
                    className="nav-link nav-active"
                    aria-current="page"
                    href="{{ route('pengumuman.index') }}"
                  >
                    <span data-feather="home"></span>
                    Pengumuman
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="{{ route('daftarKegiatan') }}"
                  >
                    <span data-feather="home"></span>
                    Daftar Kegiatan
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container ">
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2 py-2">
              <h1>Dashboard</h1>

            </main>
          </div>
        </div>
      </div>
    </>
  )
}
