import  Contacts from "/images/contacts.png";
import Gmail from "/images/gmail.webp";
import Linkedin from "/images/linkedin.webp";
import Instagram from "/images/instagram.webp";
import Phone from "/images/phone.webp";
import AosAnimation from "./AosAnimation";
function Contact () {
  return (
    <div className="d-flex flex-column min-vh-100 contactBackground">
      <div className="row g-0 m-5">
          <div data-aos="fade-up" className="col-md-4 mt-5">
            <img className="img-fluid rounded" src={Contacts} alt="" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="text-light text-center getInTouch">GET IN TOUCH !</h1>
            <AosAnimation />
          </div>
          
          <div className="col-md-2"></div>
          <div data-aos="fade-up" className="col-6 g-2 col-md-3 mt-auto mt-5">
            <div className="card hover-bounce">
              <div className="card-body text-center">
                <a className="text-dark link-underline link-underline-opacity-0" href="https://mail.google.com/mail/u/0/#inbox"><img className="img-fluid" src={Gmail} />
                gmail</a>
              </div>
            </div>
            <AosAnimation />
          </div>

          <div data-aos="fade-up" className="col-6 g-2 col-md-3 mt-5">
            <div className="card hover-bounce">
              <div className="card-body text-center">
              <a className="text-dark link-underline link-underline-opacity-0" href="https://www.linkedin.com/in/vincent-bobby-lacerna-6173b7279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img className="img-fluid" src={Linkedin} />
              Linkedin</a>
              </div>
            </div>
            <AosAnimation />
          </div>
          <div data-aos="fade-up" className="col-6 g-2 col-md-3 offset-md-6 mt-2">
            <div className="card hover-bounce">
              <div className="card-body text-center">
                <a href="https://www.instagram.com/vincentlacernaa?igsh=MjhjYzVxcjhnaTBs"><img className="img-fluid" src={Instagram} /></a>
                Instagram
              </div>
            </div>
            <AosAnimation />
          </div>
          <div data-aos="fade-up" className="col-6 g-2 col-md-3 mt-2">
            <div className="card hover-bounce">
              <div className="card-body text-center">
                <img className="img-fluid" src={Phone} style={{width: "20rem"}}/>
                09158786163
              </div>
            </div>
            <AosAnimation />
          </div>
      </div>

    </div>
  )
}

export default Contact