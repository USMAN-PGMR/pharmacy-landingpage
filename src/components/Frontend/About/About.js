import React from "react";
// import "./About.scss";
// import aboutImage from "../assets/about-image.png"; // Ensure correct path to the image
import { FaCapsules, FaHeartbeat } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 position-relative">
          <img src='https://demo.moxcreative.com/medipharma/wp-content/uploads/sites/74/2021/10/pretty-blond-female-pharmacist-and-her-senior-colleague-in-whitecoats-800x533.jpg' alt="About Us" className="img-fluid rounded" />
          <div className="experience-card rounded shadow p-3">
            <FaCapsules className="feature-icon text-success" />
            <div>
              <h5>25+ Years Experience</h5>
              <p>
                Elementum fringilla risus gravida tristique dis hac curabitur
                sociosqu habitant
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <span className="section-title text-success">About Us</span>
          <h2 className="section-heading">
            With us, expect more than just a pharmacy.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="row pt-3">
            <div className="col-md-6 ">
              <FaCapsules className="feature-icon text-success" />
              <div>
                <h5>Pharmacy Store</h5>
                <p>
                  Dignissim libero donec accumsan cubilia consectetur lobortis
                  ornare si vehicula amet fames
                </p>
              </div>
            </div>
            <div className="col-md-6 ">
              <FaHeartbeat className="feature-icon text-success" />
              <div>
                <h5>Healthy Care</h5>
                <p>
                  Dignissim libero donec accumsan cubilia consectetur lobortis
                  ornare si vehicula amet fames
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
