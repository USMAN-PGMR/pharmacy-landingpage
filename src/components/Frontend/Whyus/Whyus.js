import React from 'react';

export default function WhyUs() {
  return (
    <section className="why-us py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <span className="section-tag">Why Us</span>
            <h2 className="section-title">Best services available for the best customers</h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success"></i> Nostra potenti faucibus vel</li>
                  <li><i className="bi bi-check-circle-fill text-success"></i> Tincidunt non nisi sociosqu</li>
                  <li><i className="bi bi-check-circle-fill text-success"></i> Maximus mattis sodales scelerisque</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="bi bi-check-circle-fill text-success"></i> Nostra potenti faucibus vel</li>
                  <li><i className="bi bi-check-circle-fill text-success"></i> Tincidunt non nisi sociosqu</li>
                  <li><i className="bi bi-check-circle-fill text-success"></i> Maximus mattis sodales scelerisque</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="https://demo.moxcreative.com/medipharma/wp-content/uploads/sites/74/2021/10/pharmacy-store-or-drugstore-exterior-design--e1634044444549.jpg" alt="Pharmacy" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
