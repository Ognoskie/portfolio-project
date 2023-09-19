import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Ognoskie</h1>
                
                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://www.instagram.com/braden_ognoskie/" className="footer_social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/braden-ognoskie/" className="footer_social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/Ognoskie" className="footer_social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer_copy">
                    &#169; Crypticalcoder. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;