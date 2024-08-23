import { Link } from "react-router-dom"
export default function Carousel(props) {
  const { carouselItems, btn } = props
  return (
    <div className="container-fluid px-0 overflow-hidden text-light hero" id="hero">
    <div className="row">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button key={index} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={index} className={index === 0 && "active"} aria-current={index === 0 ? "true" : "false"} aria-label={`Slide ${index + 1}`} ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div key={index} className={"carousel-item " + (item.isActive && "active")} >
            <img src={item.imgSrc} className="d-block w-100 img-fluid object-fit-cover " alt={item.altText} />
            <div className="carousel-caption h-50">
              <h2 className="text-light">{item.caption}</h2>
              {btn && (<Link to="/booking" className="btn btn-light">Book Now</Link>)}
            </div>
          </div>
        ))}
      </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  )
}
