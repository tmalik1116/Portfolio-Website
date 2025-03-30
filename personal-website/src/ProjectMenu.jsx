import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectMenu(props) {

    return (
        <div className="flex-col mt-0 h-max w-full">
            <h1 className="mt-0 h-1/10 font-extrabold">Projects</h1>
            <div className="flex-row mt-5">
                <ProjectCard />
            </div>
        </div>
    );
}