
import { navLinks } from "../constants"
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const {handleSetDarkMode, darkMode} = props
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom" id="navbar">
      <div className="container p-3">
        <Link className="navbar-brand fs-4" to="/">AM<span className="text-danger">NATION</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((val, index) => {
              return (
                <li key={index} className="nav-item"><Link className={"nav-link "+ (location.pathname === val.href && "active")} aria-current="page" to={val.href}>{val.label}</Link></li>
              )
            })}
          </ul>
          <form className="d-flex me-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-secondary" type="submit">Search</button>
          </form>
          <button className="ms-5 my-5 my-lg-0 position-absolute" id="darkMode" onClick={() => {
            handleSetDarkMode()
          }}>
            <i className={"w-100 h-100 bi "+ (darkMode ? "bi-moon" : "bi-sun")} ></i>
          </button>
        </div>
      </div>
    </nav>
  )
}
