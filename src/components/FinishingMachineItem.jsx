export default function FinishingMachineItem({ image, title, description }) {
  return (
    <div className="col-sm-6 col-lg-4 pb-lg-6 px-lg-4 pb-4">
      <div className="card py-3 shadow-sm h-100">
        <div className="text-center">
          <div className="bg-image hover-zoom">
            <img className="rounded" src={image} width="90%" alt="" />
          </div>
          <div className="card-body px-2">
            <h6 className="fw-bold fs-1 heading-color">{title}</h6>
            <p className="mb-0 card-text text-left">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}