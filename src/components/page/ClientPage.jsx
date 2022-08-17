export default function ClientPage() {
  const clients = []
  for (let i = 0; i <= 10; i++) clients.push(`/assets/img/mitra/mitra${i}.jpg`)

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
          <div className="container" id="product" style={{ paddingTop: "10vh", }} >
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-6 text-center mb-3">
                <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                Daftar Klein
                </h5>
                <hr className=""></hr>
              </div>
            </div>
            <div className="row flex-center h-100">
              {clients.map((image, i) => (
                <div className="col-11 col-xl-4 p-3" key={i}>
                  <img src={image} alt="" className="image-zoom shadow-transition" width="300" height="150" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
