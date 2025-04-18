import react from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceCard_2 from './ExperienceCard_2';
import iGEM_1 from './assets/iGEM logo.png';
import iGEM_2 from './assets/iGEM logo small.jpg';
import Chandos_1 from './assets/Chandos logo.png';
import Chandos_2 from './assets/Chandos logo small.webp';
import career_arrow from './assets/career_arrow.png';
import kettleby_1 from './assets/kettleby_logo_upscayl_5x_digital-art-4x.png';

export default function ExperienceMenu(props) {
    return (
        <div className="flex flex-col w-max h-full mt-20 px-4 justify-around"> {/* This MUST have fixed height, changing this will break it */}
            <h1 className="text-center font-semibold">Experience</h1>
            <div className="flex flex-col pt-5">

                <ExperienceCard_2
                    name="Modelling & Software General Member"
                    company="iGEM Guelph"
                    timeframe="March 2025 - Present"
                    point1="Contributing to technical efforts of the University’s team for an international biological research competition"
                    point2="Responsibilities will include software modelling, data analysis, and collaborative software development" 
                    image={iGEM_2}
                />
                <img className="h-30 object-contain" src={career_arrow}></img>

                <ExperienceCard_2
                    name="Student Project Coordinator (Co-op)"
                    company="Chandos Construction"
                    timeframe="May 2024 - December 2024"
                    point1="Developed a wide variety of Python and VBA scripts to automate repetitive tasks, improving efficiency of common tasks by up to 400% between cross-functional teams"
                    point2="Gained vital skills in data analysis, process automation, project management, B2B communication, and database management using ViewPoint FieldView" 
                    image={Chandos_2}
                />

                <img className="h-30 object-contain" src={career_arrow}></img>

                <ExperienceCard_2
                    name="Day Counsellor"
                    company="Kettleby Valley Camp"
                    timeframe="June 2023 - August 2023"
                    point1="Gained valuable team experience working alongside peers, and was often tasked with leadership roles which entailed managing a number of staff members"
                    point2="Gained valuable teaching experience as well as the ability to supervise and lead a group of individuals" 
                    image={kettleby_1}
                />
            </div>
            
            
        </div>
    )
}