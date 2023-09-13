import React from "react";

const Info = () => {
    return(
        <div className="about_info grid">
            <div className="about_box">
                <i className='bx bx-award about_icon'></i>

                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">680+ hours of active coding</span>
            </div>

            <div className="about_box">
                <i className='bx bxs-briefcase-alt about_icon'></i>

                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10+ Projects</span>
            </div>

            <div className="about_box">
                <i className='bx bx-code about_icon'></i>

                <h3 className="about_title">Languages</h3>
                <span className="about_subtitle">8</span>
            </div>
        </div>
    )
}

export default Info;