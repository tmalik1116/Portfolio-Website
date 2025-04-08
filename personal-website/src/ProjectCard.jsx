import React,{ useState, useRef, useEffect } from "react";


export default function ProjectCard(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function toggleExpand() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="flex flex-col h-auto md:w-90 bg-gray-900 rounded-2xl p-3 m-3 select-none" id="card">
            <div className="card">
                <h2 className="font-bold">{props.name}</h2>
                <p className="card-description">This is a description of the project. It provides an overview of what the project is about.</p>
                <div className="card-footer">
                    <span className="card-date">Date: 2023</span>
                    <span className="card-tags">Tags: React, JavaScript</span>
                </div>
            </div>
        </div>
    );
}