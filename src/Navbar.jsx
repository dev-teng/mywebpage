import {Outlet, Link } from "react-router-dom";
import "./Layout.css";
import Logo from "/images/logo.png";

function Navbar () {
  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-transparent fixed-top shadow p-3">
          <div class="container-fluid">
              <Link to="/" class="navbar-brand"><img className="img-fluid rounded rounded-circle" style={{width: "4rem"}} src={Logo} /></Link>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="toggler-icon top-bar"></span>
                    <span class="toggler-icon middle-bar"></span>
                    <span class="toggler-icon bottom-bar"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <Link to="/about" class="nav-link active" aria-current="page" href="#">About</Link>
                          </li>
                          <li class="nav-item">
                            <Link to="/project" class="nav-link active" aria-current="page" href="#">Project</Link>
                          </li>
                          <li class="nav-item">
                            <Link to="/contact" class="nav-link active" aria-current="page" href="#">Contact</Link>
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