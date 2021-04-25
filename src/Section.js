import React from 'react'
import "./Section.css";

function Section({Icon, title, color, selected}) {
    return (
        <div className={`section ${selected && "selected"}`}
        style={{
            borderBottom: `2px solid ${selected && color}`,
            color: `${selected && color}`
        }}       
        >

            <Icon />
            <div className="title">{title}</div>
        </div>
    )
}

export default Section
