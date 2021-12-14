import React from 'react';
import {Link} from "react-router-dom";
import logo from "../Images/logo-white-primary.png"
function Footer(props) {
    return (
        <div className="footer-container">
                    <div className="footer-items content-base">
                    <img src={logo} alt="logo"/>
                    <div className="footer-text">58 Howard Street #2 San Francisco</div>
                    <div className="footer-links footer-text"><Link to="">contact@homeid.com</Link></div>
                    <div className="footer-text footer-title">(+68)1221 09876</div>
                    <div className="footer-text">www.homeid.com</div>
                    <div className="footer-bellow">
                        <div className="footer-bellow-content">
                            Terms of Use
                        </div>
                        <div className="footer-bellow-content">
                            Privacy Policy
                        </div>
                    </div>
                </div>

                <div className="footer-items content-base">
                  <div className="footer-text footer-title">Popular Searches</div>
                  <div className="footer-text">Apartment for Rent</div>
                  <div className="footer-text">Apartment Low to hide</div>
                  <div className="footer-text">Offices for Buy</div>
                  <div className="footer-text">Offices for Rent</div>
                </div>

                <div className="footer-items content-base">
                    <div className="footer-text footer-title">Quick links</div>
                    <div className="footer-text">Terms of Use</div>
                    <div className="footer-text">Privacy Policy</div>
                    <div className="footer-text">Contact Support</div>
                    <div className="footer-text">Careers</div>
                </div>
                <div className="footer-items content-base">
                    <div className="footer-text footer-title"> Sign Up for Our Newsletter</div>
                    <div className="footer-text">Lorem ipsum dolor sit amet, consecte tur cing elit. Suspe ndisse suscipit sagittis</div>
                    <div className="footer-input"><input type="text"/></div>

                </div>



        </div>
    );
}

export default Footer;