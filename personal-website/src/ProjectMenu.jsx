import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectMenu(props) {
    return (
        <div className="flex flex-col mt-5 w-full">
            <h1 className="mt-0 font-semibold text-2xl">Projects</h1>
            <div className="flex flex-wrap justify-center gap-6 mt-5">
                <ProjectCard className="w-full sm:w-64 md:w-72 m-3" name="F1 Qualif-AI"/>
                <ProjectCard className="w-full sm:w-64 md:w-72 m-3" name="8 Ball Pool Game"/>
                <ProjectCard className="w-full sm:w-64 md:w-72 m-3" name="Mobile Scheduling App"/>
            </div>
        </div>
    );
}