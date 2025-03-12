import {Outlet, Link } from "react-router-dom";
import "./Layout.css";
import Logo from "/images/logo.png";

function Navbar () {
  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-transparent fixed-top shadow p-3">
          <div className="container-fluid ">
              <Link to="/" className="navbar-brand fw-bold text-center"><img className="img-fluid rounded rounded-circle" style={{width: "4rem"}} src={Logo} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/about" className="nav-link active" >About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/project" className="nav-link active" >Project</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link active" >Contact</Link>
                  </li>
              </ul>
            </div>
          </div>
      </nav>
        <Outlet />
    </div>
    
  )
}

export default Navbar