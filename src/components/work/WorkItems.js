import React from "react";

const WorkItems = ({item}) => {
    return (
        <div className="work_card" key={item.id}>
            <img src={item.image} alt="" className="work_img"/>
        </div>
    )
}

export default WorkItems;