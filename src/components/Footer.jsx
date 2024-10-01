import { navLinks, navIcons } from "../constants";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (<>
    <Newsletter/>
    <footer className="py-5 mt-5 bg-dark text-light px-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="mb-4 text-uppercase fw-bold">About Us</h5>
            <p>
              AMNation is dedicated to bringing you the best in live music experiences. From thrilling concerts to unforgettable performances, we offer something for every music lover.
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="mb-4 text-uppercase fw-bold">Quick Links</h5>
            <ul className="nav flex-column">
              {navLinks.map((val, index) => (
                <li key={index} className="nav-item">
                  <Link to={val.href} className="nav-link text-light hover-link">{val.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="mb-4 text-uppercase fw-bold">Follow Us</h5>
            <div className="d-flex">
              {navIcons.map((val, index) => (
                <a
                  key={index}
                  href={val.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3 fs-4 hover-icon"
                  title={val.label}
                >
                  <i className={`bi ${val.class}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="mb-4 border-light" />
        <div className="text-center">
          <p className="mb-2">Contact Us: <a href="mailto:info@amnation.com" className="text-light hover-link">info@amnation.com</a></p>
          <p className="mb-0"> &copy; 2024 AMNation, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
}
export default Footer;