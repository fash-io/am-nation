import SectionWrapper from "../components/SectionWrapper"
import { reviews } from "../constants"

export default function Reviews() {
  return (
      <SectionWrapper id={"Reviews"} title={"Reviews"} type={"2"} lead={"Hear what our fans have to say about their experiences at our events."}>
        <div className="row g-5 text-center mt-4">
        {reviews.map((val, index) => (
          <div key={index} className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{val.reviewTitle}</h5>
              <p className="card-text">{val.review}</p>
              <img src={val.img_url} alt={val.name} className="img-fluid rounded-circle mx-auto object-fit-cover" />
              <p className="card-text mt-4"> <small className="text-muted">- {val.name}.</small> </p>
            </div>
          </div>
        </div>
        ) )}
      </div>
      </SectionWrapper>
  )
}
