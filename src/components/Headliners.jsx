import { artists } from "../constants"
import SectionWrapper from "./SectionWrapper";
export default function Headliners() {
  console.log();
  return (
    <SectionWrapper id={"case-stud"} title={"Headliners"} type={"1"}>
      <div className="row case-row my-4 gy-3">
        {artists
        .filter(artist => artist.headline)
        .sort((a,b) => a.name.localeCompare(b.name))
        .map((val, index) => (
          <div key={index} className={"position-relative cases-1 " + (index === 1 || index === 2|| index === 5 ? "col-md-7" : "col-md-5" )} style={{ minHeight: '300px' }}>
            <div className="cases position-relative rounded-4 overflow-hidden w-100 h-100">
              <img src={val.img_url} className="d-block w-100 img-fluid h-100 object-fit-cover" alt={val.name} />
              <div className="case-card w-100 h-100 position-absolute d-flex flex-column justify-content-end p-4 rounded-3 text-center top-0 start-0">
                <h3 className={"display-5 fs-4 text-end " + (val.event ? "text-light" : "text-secondary")}><small>{val.event ? val.event.name.toUpperCase() : "unannounced"}</small></h3>
                <h3 className="text-light display-5 fs-2 fw-bold">{val.name.toUpperCase()}</h3>
                <a href={val.event.link_name} className={"btn btn-outline-light w-50 " + (val.event ? "" : "disabled")}>Book Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
