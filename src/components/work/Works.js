import React from "react";
import {projectsData} from "./Data";
import {projectsNav} from "./Data";
import {findAllByDisplayValue} from "@testing-library/react";

const Works = () => {
    return (
        <div>
            <div className="work_filters">
                {projectsNav.map((item, index) => {
                    return <span className="work_item" key={index}>{item.name}</span>
                })}
            </div>

            <div className="work_container container grid">
                {}
            </div>
        </div>
    )
}

export default Works;