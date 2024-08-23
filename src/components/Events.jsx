import { events as eventData } from "../constants";
import { Link } from "react-router-dom";
import SectionWrapper from "./SectionWrapper";
eventData.sort((a, b) => b.rating - a.rating);
// eventData.sort((a, b) => a.name.localeCompare(b.name));

function AllEvents({ events }) {
  return (
    <SectionWrapper id="all-events" title="All Events" type="1">
      <div className="row case-row my-4 gy-4">
        {events.map((val, index) => (
          <div key={index} className="col-lg-6 position-relative cases-1">
            <div className="cases position-relative rounded-4 overflow-hidden w-100 h-100 h">
              <img
                src={val.hero_img}
                className="d-block w-100 img-fluid object-fit-cover h-100"
                alt={val.name}
                style={{ height: "280px" }}
              />
              <div className="case-card w-100 h-100 position-absolute d-flex flex-column justify-content-end p-4 rounded-3 text-center top-0 start-0">
                <h4 className="text-light display-5 fs-2 fw-bold">
                  {val.name.toUpperCase()}
                </h4>
                <Link to={val.link_name} className="button">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// Main Events component
export default function Events(props) {
  const { full } = props;

  if (!full) {
    return (
      <SectionWrapper
        id="case-stud"
        title="Upcoming Shows"
        more={{ name: "View All Events", url: "/events" }}
        type="1"
      >
        <div className="row case-row my-4 gy-5 gy-lg-0">
          {eventData.slice(0, 2).map(
            (
              val,
              index // Display only a few events here
            ) => (
              <div key={index} className="col-lg-6 position-relative cases-1">
                <div className="cases position-relative rounded-4 overflow-hidden w-100 h-100 h">
                  <img
                    src={val.hero_img}
                    className="d-block w-100 img-fluid h-100 object-fit-cover"
                    alt={val.name}
                  />
                  <div className="case-card w-100 h-100 position-absolute d-flex flex-column justify-content-end p-4 rounded-3 text-center top-0 start-0">
                    <h3 className="text-light display-5 fs-2 fw-bold">
                      {val.name.toUpperCase()}
                    </h3>
                    <Link to={val.link_name} className="button">
                      Buy Ticket(s)
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </SectionWrapper>
    );
  }

  return <AllEvents events={eventData} />;
}
