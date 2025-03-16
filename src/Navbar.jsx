import {Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import "./Layout.css";
import Logo from "/images/logo.png";
import Gmail from "/images/gmail.webp";
import Linkedin from "/images/linkedin.webp";
import Instagram from "/images/instagram.webp";

function Navbar () {
  let navigate= useNavigate();
  let location = useLocation();

  const handleNavigation = (route) => {
    navigate(route)
    window.scrollTo(0,0);
  }

  const isActive = (path) => {
    return location.pathname === path? "underline" : "";
  }



  return(
    <div>
      <nav class="navbar navbar-expand-lg navbar-transparent fixed-top shadow p-1">
          <div class="container-fluid">
              <Link to="/" onClick={handleNavigation} class="navbar-brand"><img className="img-fluid rounded rounded-circle" style={{width: "4rem"}} src={Logo} /></Link>
                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="toggler-icon top-bar"></span>
                    <span class="toggler-icon middle-bar"></span>
                    <span class="toggler-icon bottom-bar"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-lg-0">
                          <li class="nav-item">
                            <Link  to="/about" onClick={handleNavigation} class={`nav-link active ${isActive("/about")}`} aria-current="page">About</Link>
                          </li>
                          <li class="nav-item">
                            <Link to="/project" onClick={handleNavigation} class={`nav-link active ${isActive("/project")}`} aria-current="page" >Project</Link>
                          </li>
                          <li class="nav-item">
                            <Link to="/contact" onClick={handleNavigation} class={`nav-link active ${isActive("/contact")}`} aria-current="page">Contact</Link>
                          </li>
                    </ul>
                </div>
          </div>
      </nav>
        
        <Outlet />
        <div className="footer bg-dark text-center d-flex flex-column justify-content-center mt-auto">
          <div className="row g-0">
              <div className="col-md-12 border-bottom p-2">
                <h5 className="text-light text-center quote">The journey of a thousand miles begins with a single step. — Lao Tzu</h5>
              </div>
              <div className="col-md-12">
                <p className="text-light">@Copyright 2025. All rights served 
                 <a href="https://mail.google.com/mail/u/0/#inbox" target="blank"><img className="img-fluid gmail rounded rounded-circle bg-light ms-2 p-2"src={Gmail} style={{width: "2rem"}}/></a> 
                 <a href="https://www.linkedin.com/in/vincent-bobby-lacerna-6173b7279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><img className="img-fluid linkedin rounded rounded-circle ms-2 " src={Linkedin} style={{width: "2rem"}}/></a> 
                 <a href="https://www.instagram.com/vincentlacernaa?igsh=MjhjYzVxcjhnaTBs" target="blank"></a> <img className="img-fluid instagram rounded rounded-circle" src={Instagram} style={{width: "3.2rem"}}/>
                </p>
              </div>
          </div>
          
          
        </div>
    </div>
    
  )
}

export default Navbar