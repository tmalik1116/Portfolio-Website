import React,{ useState, useRef, useEffect } from "react";


export default function ProjectCard(props) {
    
    return (
        <div>
            <button className={`card ${props.isActive ? "expanded" : ""}`}>
                <div className="button-content">
                    <h2 className="card-title">Project Title</h2>
                    <p className="card-description">This is a description of the project. It provides an overview of what the project is about.</p>
                    <div className="card-footer">
                        <span className="card-date">Date: 2023</span>
                        <span className="card-tags">Tags: React, JavaScript</span>
                    </div>
                </div>
            </button>
        </div>
    );
}