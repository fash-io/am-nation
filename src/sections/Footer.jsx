import { navLinks, navIcons } from "../constants"

export default function Footer() {
  return (
    <div className="container-fluid mt-5 p-0">
      <footer className="py-5 mt-4 p-0 bg-dark text-light">
        <div className="container">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {navLinks.map((val, index) => (
              <li key={index} className="nav-item"><a href={val.href} className="nav-link text-light">{val.label}</a></li>     
            ))}
          </ul>
          <div className="d-flex justify-content-center mb-3">
            {navIcons.map((val, index) => (
              <a key={index} href={val.href} title={val.label}><i className={"bi text-light me-3 fs-4 "+(val.class)}></i></a>
            ))}
          </div>
          <p className="text-center mb-0"> &copy; 2024 AMNation, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
