import React from 'react';
// import { BiPlayCircle } from "react-icons/bi";
// import './HeroSection.scss';

export default function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center ">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-white">
            <p className="welcome-text">Welcome to medipharma</p>
            <h1 className="hero-title">A better way for medicine</h1>
            <p className="hero-text">Erat fringilla donec ligula magnis nulla consectetuer justo dolor</p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-success">Shop Now</a>
              <a href="#" className="btn btn-outline-light">Consultation</a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="play-button">
        <a href="#" className="play-icon">
          <BiPlayCircle  color="white" />
        </a>
      </div> */}
    </section>
  );
}
