import React from 'react';
import ProjectCard from './ProjectCard';
import QualifAI from './assets/qualif-ai.png';
import PoolImage from './assets/pool-image.png';
import Redline from './assets/redline_image.png';
import Portfolio from './assets/portfolio-image.png';

export default function ProjectMenu(props) {
    return (
        <div id="projects" className="flex flex-col mt-5 w-full">
            <h1 className="mt-0 font-semibold text-2xl">Projects</h1>
            <div className="flex flex-wrap justify-center gap-6 mt-5">
                <ProjectCard className="w-full sm:w-64 md:w-72 m-3" 
                    name="F1 Qualif-AI" 
                    description="A ML-powered web app for estimating Formula 1 lap times and driver rankings." 
                    tech="React.js, Python, XGBoost, Pandas" 
                    date="2025" 
                    showHoverEffects={true} 
                    githubLink="https://github.com/tmalik1116/F1_Qualifying_Predictor_ML" 
                    demoLink="https://f1quali.online" 
                    image={QualifAI}/>
                <ProjectCard className="w-full sm:w-64 md:w-72 m-3" 
                    name="8 Ball Pool Game" 
                    description="A full-stack version of 8-ball pool, built using a comprehensive physics libary in C for ball collisions."
                    tech="C, Python, JS, SQL"
                    date="2024"
                    showHoverEffects={true}
                    githubLink="https://github.com/tmalik1116/8BallPool-Web"
                    image={PoolImage}/>
                <ProjectCard className="w-full sm:w-64 md:w-72 m-3" 
                    name="Redline"
                    description="An android application designed for tracking deadlines and organizing your assignments."
                    tech="Kotlin, Jetpack Compose"
                    date="2024"
                    showHoverEffects={true}
                    githubLink="https://github.com/m-GDEV/redline"
                    image={Redline}/>
                <ProjectCard className="w-full sm:w-64 md:w-72 m-3"
                    name="Portflio Website"
                    description="My one-stop shop for information about me, my career, and my projects."
                    tech="React.js, TailwindCSS"
                    date="2025"
                    showHoverEffects={true}
                    githubLink="https://github.com/tmalik1116/Portfolio-Website"
                    demoLink="https://talhamalik.ca"
                    image={Portfolio}/>
            </div>
        </div>
    );
}