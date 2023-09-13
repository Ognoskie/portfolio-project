import React from "react";

const Backend = () => {
    return (
        <div className="skills_contemnt">
            <h3 className="skills_title">Backend developer</h3>

            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skill_name">Java</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skill_name">Node.Js</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skill_name">MySQL</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        <i className='bx bxs-badge-check'></i>

                        <div>
                            <h3 className="skill_name">Spring Boot</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend;