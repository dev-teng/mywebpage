import Enteng from "/images/enteng.png";
function About () {
  return(
    <div className="d-flex flex-column min-vh-100 aboutBackground">
      <div className="row mt-5 g-0 justify-content-center align-items-center" >
          <div className="col-12 col-md-6 mt-5 aboutContent">
            <div className="m-5 d-flex justify-content-end">
              <div className="card" style={{width: "25rem"}}>
                <div className="card-body bg-success-subtle">
                  <div className="bg-success rounded rounded-circle text-center">
                    <img className="img-fluid rounded-cirle" src={Enteng} style={{width: "15rem"}} />
                  </div>
                </div>
              </div>
            </div>

              <div className="bg-light me-5 rounded border border-success border-3 contentTitle shadow">
                <h2 className="text-success text-center p-3 rounded" style={{width: "28rem"}}>Front-End Developer</h2>
              </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="container mt-5">
              <h1 className="text-light">Hi I'm VINCENT <span className="text-success">LACERNA</span>👋🏻</h1>
              <p className="text-light frontEndContent">as a frontend developer, my primary responsibility
                    is to create user interfaces that are visually appealing,
                    intuitive to use, and functional. This involves writing 
                    code using languages such as HTML, CSS, and JavaScript
                    to build websites and web applications. Here's of what I typically do:
                    HTML, CSS, JavaScript, Frameworks and Libraries like react js and bootstrap, Responsive Design
                    Browser Compatibility, Performance Optimization, Accessibility and Version Control
                    Overall, as a frontend developer, my goal is to create engaging and functional
                    user interfaces that meet the needs of both users and clients while adhering 
                    to best practices and industry standards.
                </p>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default About