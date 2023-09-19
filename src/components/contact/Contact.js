import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_titile">Contact Info</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">bradenjognoskie@gmail.com</span>

                            <a href="mailto:bradenjognoskie@gmail.com.com" className="contact_button"> Email me
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bx-phone contact_card-icon"></i>

                            <h3 className="contact_card-title">Cell Phone</h3>
                            <span className="contact_card-data">(210) 500-0386</span>

                            <a className="contact_button">Call me</a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bx-message contact_card-icon"></i>

                            <h3 className="contact_card-title">Message me</h3>
                            <span className="contact_card-data">(210) 500-0386</span>

                            <a className="contact_button">Text me</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;