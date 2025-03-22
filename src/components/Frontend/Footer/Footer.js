import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="top-footer py-5 text-center">
                <h5>Medipharma now available at :</h5>
                <div className="d-flex justify-content-center gap-3 mt-2">
                    <img src="https://demo.moxcreative.com/medipharma/wp-content/uploads/sites/74/elementor/thumbs/Google-Play-eng-peg6oju5k30ij567t1ttp1mfm4b9tkkbpasdx34fsw.png" alt="Google Play" className="store-btn" />
                    <img src="https://demo.moxcreative.com/medipharma/wp-content/uploads/sites/74/elementor/thumbs/App-Store-eng-peg6oiwbd8z87j7kyjf74juz0qfwlvgld64wft5tz4.png" alt="App Store" className="store-btn" />
                </div>
            </div>

            <div className="bottom-footer">
                <div className="container py-5">
                    <div className="row py-5">
                        {/* Left Column - Logo & About */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <img src="https://demo.moxcreative.com/medipharma/wp-content/uploads/sites/74/elementor/thumbs/logo_medipharma_w-pefnw49db7123h8yxfvvp1xmblptnzbzih1asjo7pc.png" alt="Medipharma" className="logo mb-2" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <div className="social-icons">
                                <FaFacebookF />
                                <FaLinkedinIn />
                                <FaTwitter />
                                <FaYoutube />
                            </div>
                        </div>

                        {/* Middle Columns - Links */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h4>Company</h4>
                            <ul>
                                <li>About Us</li>
                                <li>Leadership</li>
                                <li>Careers</li>
                                <li>Partner</li>
                                <li>News & Article</li>
                                <li>Legal Notice</li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 mb-4">
                            <h4>Support</h4>
                            <ul>
                                <li>Help Center</li>
                                <li>FAQ</li>
                                <li>Contact Us</li>
                                <li>Ticket Support</li>
                            </ul>
                        </div>

                        {/* Right Column - Contact */}
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h4>Head Office</h4>
                            <p><FaMapMarkerAlt /> Jln Cempaka Wangi No 22, Jakarta - Indonesia</p>
                            <p><FaEnvelope /> support@yourdomain.tld</p>
                            <p><FaPhoneAlt /> +(62)21 2002-2012</p>
                            <p><FaClock /> Monday 07.00 am - 12.00 pm Sunday</p>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="container-fluid copyright">

                <div className="container  py-3 d-flex justify-content-between">
                    
                    <span>Copyright © 2025 medipharma. All rights reserved. Presented by MoxCreative.</span>
                    <span>Term of service | Privacy Policy | Cookie Policy</span>
                </div>
                </div>

            </div>
        </footer>
    );
}
