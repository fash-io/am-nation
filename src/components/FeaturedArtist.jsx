import { artists } from "../constants";
import SectionWrapper from "./SectionWrapper";
export default function FeaturedArtist() {
  return (
    <SectionWrapper id={"headliners"} title={"Featured Artists"} type={"1"}>
      <div className="row g-4">
        {artists
          .filter((artist) => artist.featured)
          .splice(0, 4)
          .map((val, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="card border-0 artist-card overflow-hidden rounded-3">
                <img
                  src={val.img_url}
                  alt={val.name}
                  className="rounded-3 img-fluid object-fit-cover"
                />
                <div className="card-footer p-4 text-center rounded-3 border-0">
                  <h5 className="fw-bold fs-5">{val.name.toUpperCase()}</h5>
                </div>
              </div>
            </div>
          ))}
      </div>
    </SectionWrapper>
  );
}
