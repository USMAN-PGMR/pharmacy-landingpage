import React from "react";
import { FaCapsules, FaHeartbeat, FaSyringe, FaUserMd, FaFilePrescription, FaStore } from "react-icons/fa";
// import "./WhatOffer.scss";

export default function WhatOffer() {
  const offers = [
    { icon: <FaCapsules />, title: "Generic Medicine" },
    { icon: <FaHeartbeat />, title: "Health Checks & Screening" },
    { icon: <FaSyringe />, title: "Vaccination" },
    { icon: <FaUserMd />, title: "Medicine Consultation" },
    { icon: <FaFilePrescription />, title: "Doctor Receipt" },
    { icon: <FaStore />, title: "Pharmacy Store" },
  ];

  return (
    <section className="what-offer container">
      <h5 className="subtitle">What we offer</h5>
      <h2 className="title">Live happily, Live healthily</h2>
      <div className="offer-grid">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <div className="icon">{offer.icon}</div>
            <h4>{offer.title}</h4>
            <p>
              Dignissim libero donec accumsan cubilia consectetur lobortis ornare si vehicula amet fames
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
