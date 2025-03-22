import React from "react";

export default function Contact() {
  return (
    <section className="contact-section pt-5 mt-lg-5">
      <div className="container-fluid  mt-lg-5 ">
        <div className="row align-items-center mt-lg-5 pt-lg-5 ">
          {/* Left Side - Form */}
          <div className="col-lg-6  d-flex justify-content-end ">
          <div className="p-4 bg-white card border-0 w-auto shadow m-2 pt-lg-5 rounded ps-lg-5 mb-5  ">

              <h3 className="mb-3">Complete the form below</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" placeholder="Phone" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" rows="3" placeholder="Address"></textarea>
                </div>
                <button className="btn btn-success w-100">Submit</button>
              </form>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 px-4 text-white contact-content">
            <h6 className="text-uppercase">Ready to become our member?</h6>
            <h2>We assure customer satisfaction with personal care</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn btn-success">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
