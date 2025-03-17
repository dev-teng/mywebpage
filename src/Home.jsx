import Vincent from '/images/vincent.png';
import "./Layout.css";
import AosAnimation from './AosAnimation';
function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 background">
      <div className="row g-0">
          <div data-aos="fade-up" className="col-md-12 text-center">
            <img className='img-fluid' src={Vincent} style={{ width: '35rem' }} />
            <AosAnimation />
          </div>
          
          <div className="row g-0 ">
              <div className="col-md-3"></div>
                <div data-aos="fade-up" className="col-md-6 text-center">
                  <h5 className='text-white p-4 greeting rounded' >
                    <p className='welcome'>Welcome to My Corner of the Web!</p>
                    I'm a passionate web developer, and this is where I share my work 
                    and ideas. Feel free to explore and get in touch if you’d like to 
                    collaborate!
                    <br></br>
                    <button className='mt-3 btn btn-lg btn-warning resume'>Download CV</button>
                  </h5>
                  <AosAnimation />
                </div>
              <div className="col-md-3"></div>
          </div>
      </div>

    </div>
  )
}

export default Home