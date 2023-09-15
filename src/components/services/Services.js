import React, {useState} from "react";
import "./services.css";

const Services = () => {
        const [toggleState, setToggleState] = useState(0);

        const toggleTab = (index) => {
            setToggleState(index);
        }

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>
            <span className="section_subtitle">What I offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                    <div>
                        <i className="uil uil-web-grid services_icon"></i>
                        <h3 className="services_title">Front-end <br /> Developer </h3>
                    </div>

                    <span className="services_button" onClick={() => toggleTab(1)}>View More<i
                        className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Front-end Developer</h3>
                            <p className="services_modal-description">Ability to provide front-end web development to companies and clients.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Website Development
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Cross-Browser Compatibility
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Testing and Debugging
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Performance Optimization
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Front-End Frameworks
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-arrow services_icon"></i>
                        <h3 className="services_title">Back-end <br /> Developer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services_button">View More<i
                        className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)}  className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">Back-end Developer</h3>
                            <p className="services_modal-description">Ability to provide back-end web development to companies and clients.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Server Development
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Database Management
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Authentication and Authorization
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Performance Optimization
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Error Handling and Logging
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services_content">
                    <div>
                        <i className="uil uil-edit services_icon"></i>
                        <h3 className="services_title">UX/UI <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(3)}  className="services_button">View More<i
                        className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                        <div className="services_modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                            <h3 className="services_modal-title">UX/UI Designer</h3>
                            <p className="services_modal-description">Ability to provide UX/UI design to companies and clients.</p>

                            <ul className="services_modal-services grid">
                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        UX/UI Design
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        User Research
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Wire-framing
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        Visual Design
                                    </p>
                                </li>

                                <li className="services_modal-service">
                                    <i className="uil uil-check-circle services_modal-icon"></i>
                                    <p className="services_modal-info">
                                        User Flows
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;