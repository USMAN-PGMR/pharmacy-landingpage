import React from "react";
import { FaHeartbeat, FaDollarSign, FaComments } from "react-icons/fa";

export default function Promises() {
  return (
    <div className="container-fluid py-5  bg-light mt-5">
      <p className="text-center text-success fw-bold">Our promises</p>
      <h2 className="text-center fw-bold">Why you should choose us.</h2>
      <p className="text-center text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="row text-center mt-4">
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center">
            <div className="p-3 bg-light rounded shadow">
              <FaHeartbeat className="text-success" size={40} />
            </div>
            <h5 className="fw-bold mt-3">Honesty & Transparency</h5>
            <p className="text-muted">
              Dignissim libero donec accumsan cubilia consectetur lobortis
              ornare si vehicula amet fames
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center">
            <div className="p-3 bg-light rounded shadow">
              <FaDollarSign className="text-success" size={40} />
            </div>
            <h5 className="fw-bold mt-3">Extra Discount</h5>
            <p className="text-muted">
              Dignissim libero donec accumsan cubilia consectetur lobortis
              ornare si vehicula amet fames
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center">
            <div className="p-3 bg-light rounded shadow">
              <FaComments className="text-success" size={40} />
            </div>
            <h5 className="fw-bold mt-3">24/7 Support</h5>
            <p className="text-muted">
              Dignissim libero donec accumsan cubilia consectetur lobortis
              ornare si vehicula amet fames
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
