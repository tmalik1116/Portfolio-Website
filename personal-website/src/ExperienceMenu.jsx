import React from 'react';
import ExperienceCard_2 from './ExperienceCard_2';
import UofG_1 from './assets/uofg_logo.jpg'
import UofG_2 from './assets/uofg_2.png'
import iGEM_2 from './assets/iGEM logo small.jpg';
import iGEM_1 from './assets/iGEM logo.png';
import Chandos_2 from './assets/Chandos logo small.webp';
import Chandos_1 from './assets/Chandos logo.png';
import kettleby_1 from './assets/kettleby_logo_upscayl_5x_digital-art-4x.png';
import kettleby_2 from './assets/kettleby_logo_2.png';
import career_arrow from './assets/career_arrow.png';

export default function ExperienceMenu() {
    return (
        <div id="experience" className="flex flex-col w-full md:w-max h-full mt-20 px-4 justify-around">
            <h1 className="text-center font-semibold text-2xl mb-6">Experience</h1>

            <div className="flex flex-col pt-5">
                
                {/* Card 1 */}
                <ExperienceCard_2
                    name="Teaching Assistant, Data Structures"
                    company="University of Guelph"
                    timeframe="September 2025 - Present"
                    point1="Leveraging strong understanding of data structures and algorithms to contribute to student learning and success"
                    point2="Responsibilities include conducting lab sessions, grading coursework, and providing one-on-one support to students" 
                    imageMobile={UofG_2}
                    imageDesktop={UofG_1}
                />
                
                <img className="h-30 object-contain my-5" src={career_arrow} alt="Arrow" />

                {/* Card 1 */}
                <ExperienceCard_2
                    name="Backend Module Lead"
                    company="iGEM Guelph"
                    timeframe="March 2025 - Present"
                    point1="Contributing to technical efforts of the University’s team for an international biological research competition"
                    point2="Responsibilities include RESTful API integration, ML development, and Agile/SCRUM project management" 
                    imageMobile={iGEM_1}
                    imageDesktop={iGEM_2}
                />
                
                <img className="h-30 object-contain my-5" src={career_arrow} alt="Arrow" />

                {/* Card 2 */}
                <ExperienceCard_2
                    name="Student Project Coordinator (Co-op)"
                    company="Chandos Construction"
                    timeframe="May 2024 - December 2024"
                    point1="Developed a wide variety of Python and VBA scripts to automate repetitive tasks, improving efficiency of common tasks by up to 400% between cross-functional teams"
                    point2="Gained vital skills in data analysis, process automation, project management, B2B communication, and database management using ViewPoint FieldView" 
                    imageMobile={Chandos_1}
                    imageDesktop={Chandos_2}
                />

                <img className="h-30 object-contain my-5" src={career_arrow} alt="Arrow" />

                {/* Card 3 */}
                <ExperienceCard_2
                    name="Day Counsellor"
                    company="Kettleby Valley Camp"
                    timeframe="June 2023 - August 2023"
                    point1="Gained valuable team experience working alongside peers, and was often tasked with leadership roles which entailed managing a number of staff members"
                    point2="Gained valuable teaching experience as well as the ability to supervise and lead a group of individuals" 
                    imageMobile={kettleby_2}
                    imageDesktop={kettleby_1}
                />
            </div>
        </div>
    )
}
