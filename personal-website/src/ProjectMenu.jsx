import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectMenu(props) {

    return (
        <div className="flex flex-col mt-0 h-max w-full">
            <h1 className="mt-0 h-1/10 font-extrabold">Projects</h1>
            <div className="flex wrap justify-evenly mt-5 h-1/8">
                <ProjectCard className="h-1/8 w-1/5 m-3" name="F1 Qualif-AI"/>
                <ProjectCard className="h-1/8 w-1/5 m-3" name="8 Ball Pool Game"/>
                <ProjectCard className="h-1/8 w-1/5 m-3" name="Mobile Scheduling App"/>
            </div>
        </div>
    );
}