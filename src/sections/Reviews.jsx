import SectionWrapper from "../components/SectionWrapper";
import { reviews } from "../constants";

const getStarClasses = (rating, maxStars) => {
  const starClasses = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < maxStars; i++) {
    if (i < fullStars) {
      starClasses.push("fas fa-star text-warning"); // Full star
    } else if (i === fullStars && hasHalfStar) {
      starClasses.push("fas fa-star-half-alt text-warning"); // Half star
    } else {
      starClasses.push("far fa-star text-secondary"); // Empty star
    }
  }

  return starClasses;
};

export default function Reviews() {
  return (
    <SectionWrapper id={"Reviews"} title={"Reviews"} type={"2"} lead={"Hear what our fans have to say about their experiences at our events."}>
      <div className="row g-5 text-center mt-4">
        {reviews.map((val, index) => (
          <div key={index} className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="star-rating mb-3">
                  {getStarClasses(val.stars, 5).map((starClass, idx) => (
                    <i key={idx} className={starClass}></i>
                  ))}
                </div>
                <h5 className="card-title">{val.reviewTitle}</h5>
                <p className="card-text">{val.review}</p>
                <img src={val.img_url} alt={val.name} className="img-fluid rounded-circle mx-auto object-fit-cover" />
                <p className="card-text mt-4"><small className="text-muted">- {val.name}.</small></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
