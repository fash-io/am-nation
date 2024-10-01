import { artists } from "../constants"
import SectionWrapper from "./SectionWrapper";
import { Link } from "react-router-dom";

const Headliners = () => {
  console.log();
  return (
    <SectionWrapper id={"case-stud"} title={"Headliners"} type={"1"}>
      <div className="row case-row my-4 gap-y-3">
        {artists
        .filter(artist => artist.headline)
        .sort((a,b) => a.name.localeCompare(b.name))
        .map((val, index) => (
          <div key={index} className={"relative cases-1 " + (index === 1 || index === 2|| index === 5 ? "col-md-7" : "col-md-5" )} style={{ minHeight: '300px' }}>
            <div className="cases relative overflow-hidden w-100 h-100 hover:rounded-xl duration-200">
              <img src={val.img_url} className="block w-100 img-fluid h-100 object-fit-cover" alt={val.name} />
              <div className="case-card w-100 h-100 position-absolute d-flex flex-column justify-content-end p-4 rounded-3 text-center top-0 start-0">
                <h3 className={"display-5 fs-4 text-end " + (val.event ? "text-light" : "text-secondary")}><small>{val.event ? val.event.name.toUpperCase() : "unannounced"}</small></h3>
                <h3 className="text-light display-5 fs-2 fw-bold">{val.name.toUpperCase()}</h3>
                <Link to={val.event.link_name} className={"button btn " + (!(val.event) && "disabled")}>Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
export default Headliners;