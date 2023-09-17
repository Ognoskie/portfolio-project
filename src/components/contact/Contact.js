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
                            <i className="bx bx contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">bradenjognoskie@gmail.com</span>

                            <a href="" className="contact_button"></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bx contact_card-icon"></i>

                            <h3 className="contact_card-title">Cell Phone</h3>
                            <span className="contact_card-data">(210) 500-0386</span>

                            <a href="" className="contact_button"></a>
                        </div>

                        <div className="contact_card">
                            <i className="bx bx contact_card-icon"></i>

                            <h3 className="contact_card-title">Message me</h3>
                            <span className="contact_card-data">(210) 500-0386</span>

                            <a href="" className="contact_button"></a>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_titile">Email me here!</h3>
                </div>
            </div>
        </section>
    )
}

export default Contact;