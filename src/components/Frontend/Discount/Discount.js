import React from "react";
// import "./Discount.scss";

export default function Discount() {
  return (
    <div className="discount-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="discount-content">
              <h2>Discount up to 50% <br /> only this month.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="shop-now-btn">
                <i className="fas fa-shopping-cart"></i> Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
