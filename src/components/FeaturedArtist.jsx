import { Link } from "react-router-dom";
import { artists } from "../constants";
import SectionWrapper from "./SectionWrapper";

const FeaturedArtist = (props) => {
  const { id, title, type, more, full } = props;

  const artistList = full
    ? artists.sort((a, b) => b.relevance - a.relevance)
    : artists.filter((artist) => artist.featured).slice(0, 4);

  return (
    <SectionWrapper id={id} title={title} type={type} more={more}>
      <div className="row g-4">
        {artistList.map((artist, index) => (
          <Link to={artist.link} key={index} className="col-lg-3 col-sm-6">
            <div className="card border-0 artist-card overflow-hidden rounded-3">
              <img
                src={artist.img_url}
                alt={artist.name}
                className="card-img-top rounded-3 img-fluid object-fit-cover"
              />
              <div className="card-footer p-4 text-center rounded-3 border-0">
                <h5 className="fw-bold fs-5">{artist.name.toUpperCase()}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturedArtist;
