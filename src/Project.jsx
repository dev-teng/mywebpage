import Sb from "/images/sb.jpg";
import Ngg from "/images/ngg.jpg";
import Pokeapi from "/images/pokeapi.jpg";
import Rps from "/images/rps.jpg";
import Empdashboard from "/images/empdashboard.jpg";
import Campgyup from "/images/campgyup.jpg";
import AosAnimation from "./AosAnimation";
function Project () {
  return(
    <div className="d-flex flex-column min-vh-100 projectBackground">
        <div className="row g-0">
            <h2 data-aos="fade-up" className="p-5 text-center mt-5"> 
              <span className="border border-light p-3 rounded border-3">
                <span className="fw-bold text-light">My</span> 
                <span className="bg-dark text-light rounded p-1">Project</span>
              </span>
              <AosAnimation />
            </h2>
            <div data-aos="fade-up" className="col-6 col-md-3 mb-2 g-2">
              <div className="card bg-dark-subtle hover-bounce">
                <div className="card-body">
                  <img className="img-fluid" src={Sb} />
                  <div className="card title p-2 mb-2 fw-bold">
                    Starbucks Clone Website
                  </div>
                    <a href="https://project-1-theta-gilt.vercel.app/" className="btn btn-dark d-grid">View project ➡️ </a>
                </div>
              </div>
              <AosAnimation />
            </div>
            <div data-aos="fade-up" className="col-6 col-md-3 mb-2 g-2">
              <div className="card bg-dark-subtle hover-bounce">
                <div className="card-body">
                  <img className="img-fluid" src={Ngg} />
                  <div className="card title p-2 mb-2 fw-bold">
                    Number Guessing Game
                  </div>
                    <a href="https://project-2-zeta-ten.vercel.app/" className="btn btn-dark d-grid">View project ➡️ </a>
                </div>
              </div>
              <AosAnimation />
            </div>
            <div data-aos="fade-up" className="col-6 col-md-3 mb-2 g-2">
              <div className="card bg-dark-subtle hover-bounce">
                <div className="card-body">
                  <img className="img-fluid" src={Pokeapi} />
                  <div className="card title p-2 mb-2 fw-bold">
                    Poke Api
                  </div>
                    <a href="https://project-3-psi-lemon.vercel.app/" className="btn btn-dark d-grid">View project ➡️ </a>
                </div>
              </div>
              <AosAnimation />
            </div>
            <div data-aos="fade-up" className="col-6 col-md-3 mb-2 g-2">
              <div className="card bg-dark-subtle hover-bounce">
                <div className="card-body">
                  <img className="img-fluid" src={Rps} />
                  <div className="card title p-2 mb-2 fw-bold">
                    RPS Game
                  </div>
                    <a href="https://dev-teng.github.io/rock-paper-scissor/" className="btn btn-dark d-grid">View project ➡️ </a>
                </div>
              </div>
              <AosAnimation />
            </div>
        </div>
        <div className="row g-0">
          <div data-aos="fade-up" className="col-6 col-md-3 g-2 mb-2">
            <div className="card bg-dark-subtle hover-bounce">
              <div className="card-body">
                <img className="img-fluid" src={Empdashboard} />
                <div className="card-title fw-bold">
                  Sample Employee dashboard
                </div>
                <a href="https://project4-xi-three.vercel.app/" className="btn btn-dark d-grid">View project ➡️</a>
              </div>
            </div>
            <AosAnimation />
          </div>
          <div data-aos="fade-up" className="col-6 col-md-3 g-2 mb-2">
            <div className="card bg-dark-subtle hover-bounce">
              <div className="card-body">
                <img className="img-fluid" src={Campgyup} />
                <div className="card-title fw-bold">
                  Campgyup Cafe = Camping / Samgyup
                </div>
                <a href="https://capstone-ten-weld.vercel.app/" className="btn btn-dark d-grid">View project ➡️</a>
              </div>
            </div>
            <AosAnimation />
          </div>
          
        </div>
    </div>
    
  )
}

export default Project