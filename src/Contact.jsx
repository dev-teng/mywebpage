import  Contacts from "/images/contacts.png";
function Contact () {
  return (
    <div className="d-flex flex-column min-vh-100 contactBackground">
      <div className="row g-0 m-5">
        <div className="col-md-6 mt-5">
          <img className="img-fluid rounded" src={Contacts} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Contact