import React from 'react';
// import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="https://demo.moxcreative.com/medipharma/wp-content/uploads/sites/74/elementor/thumbs/logo_medipharma-pefn7ysnpfyts6bwyi1z4nc8u6ravyg9uxl5vlhdkw.png" alt="MediPharma" className="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item" href="#">Service 1</a></li>
                <li><a className="dropdown-item" href="#">Service 2</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Page</a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><a className="dropdown-item" href="#">Page 1</a></li>
                <li><a className="dropdown-item" href="#">Page 2</a></li>
              </ul>
            </li>
          </ul>
          <a href="#" className="btn btn-success ms-3">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
