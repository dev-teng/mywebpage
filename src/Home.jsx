import Vincent from '/images/vincent.png';
import "./Layout.css";
function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 background">
      <div className="row g-0 ">
        <div className="col-md-12 text-center">
          <img className='img-fluid' src={Vincent} style={{ width: '35rem' }} />
        </div>
        <div className="row g-0 ">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center">
            <h5 className='text-white p-4 greeting rounded' style={{width: "100%"}}>
              <p className='welcome'>Welcome to My Corner of the Web!</p>
              I'm a passionate web developer, and this is where I share my work 
              and ideas. Feel free to explore and get in touch if you’d like to 
              collaborate!
            </h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>

    </div>
  )
}

export default Home