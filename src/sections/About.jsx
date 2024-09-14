import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
      <SectionWrapper id={"about"} title={"About Us"} type={"2"}>
        <div className="row gy-4">
        <div className="col-lg-6">
          <p className="text-body text-lead"> At AMNation, we&lsquo;re passionate about creating unforgettable experiences. Our mission is to bring you the best in live entertainment, from stunning performances to immersive experiences that resonate long after the final encore. </p>
          <i className="bi bi-check2-circle text-secondary"></i>
          <li className="d-inline my-1 ms-2"> Exceptional live performances featuring top artists and bands. </li>
          <br />
          <i className="bi bi-check2-circle text-secondary"></i>
          <li className="d-inline my-1 ms-2"> A commitment to delivering a seamless and engaging event experience. </li>
          <br />
          <i className="bi bi-check2-circle text-secondary"></i>
          <li className="d-inline my-1 ms-2"> Innovative event planning tailored to your entertainment needs. </li>
        </div>
        <div className="col-lg-6">
          <p className="text-body"> Our team of dedicated professionals ensures that every event is executed with precision and flair. From the initial planning stages to the final curtain call, we are here to make your experience extraordinary. Join us and be part of a vibrant community that celebrates the magic of live entertainment. </p>
        </div>
      </div>
      </SectionWrapper>
 
  )
}