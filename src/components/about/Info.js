import React from "react";

const Info = () => {
    return(
        <div className="about_info grid">
            <div className="about_box">
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">680+ hours of active coding in a web development bootcamp</span>
            </div>

            <div className="about_box">
                <h3 className="about_title">Completed</h3>
                <span className="about_subtitle">10+ Projects</span>
            </div>

            <div className="about_box">
                <h3 className="about_title">Languages</h3>
                <span className="about_subtitle">8</span>
            </div>
        </div>
    )
}

export default Info;