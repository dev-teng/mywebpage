import Enteng from "/images/enteng.png";
function About () {
  return(
    <div className="d-flex flex-column min-vh-100 aboutBackground">
      <div className="row mt-5 g-0 justify-content-center align-items-center" >
          <div className="col-md-6 col-sm-12 mt-5">
            <div className="m-5 d-flex justify-content-center">
              <div className="border border-success rounded p-2">
                <div className="border border-success rounded p-2">
                  <div className="border border-success rounded p-2">
                    <div className="border border-success rounded p-2">
                      <div className="border border-success rounded p-2">
                        <div className="border border-success rounded p-2">
                            <div className="border border-success rounded p-2">
                              <div className="card" style={{maxWidth: "20rem", width: "100%", height: "100%", maxHeight: "20rem"}}>
                                <div className="card-body bg-success-subtle rounded" style={{maxWidth: "20rem", width: "100%", height: "100%", maxHeight: "20rem"}}>
                                  <div className="bg-success rounded rounded-circle text-center">
                                    <img className="img-fluid rounded-cirle" src={Enteng} style={{maxWidth: "10rem"}} />
                                    <div className="card-title bg-light rounded border border-3 border-success p-2">
                                      <h4 className="text-success">Front-end Developer</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="col-md-6 mb-2">
            <div className="container">
                <div className="container mt-5 me-5 border border-success rounded d-flex flex-column justify-content-center align-items-center">
                  <h1 className="text-light">Hi I'm VINCENT <span className="text-success">LACERNA</span>👋🏻</h1>
                    <p className="text-light frontEndContent">as a frontend developer, my primary responsibility
                          is to create user interfaces that are visually appealing,
                          intuitive to use, and functional. This involves writing 
                          code using languages such as HTML, CSS, and JavaScript
                          to build websites and web applications. Here's of what I typically do:
                          HTML, CSS, JavaScript, Frameworks and Libraries like react js, bootstrap, Responsive Design
                          Browser Compatibility, Performance Optimization, Accessibility and Version Control
                          Overall, as a frontend developer, my goal is to create engaging and functional
                          user interfaces that meet the needs of both users and clients while adhering 
                          to best practices and industry standards.
                      </p>
                </div>
              
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default About