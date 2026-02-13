import React from 'react';
import ExperienceCard_2 from './ExperienceCard_2';
import recurrent_1 from './assets/recurrent_logo_1.png';
import recurrent_2 from './assets/recurrent_logo_2.png'; 
import UofG_1 from './assets/uofg_logo.jpg';
import UofG_2 from './assets/uofg_2.png';
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
                    name="Junior Software Developer (Co-op)"
                    company="Recurrent Energy"
                    timeframe="January 2026 - Present"
                    point1="Working on RE’s custom REView platform for internal project management and solar farm analytics, helping the development team make useability improvements to the Angular frontend and Django backend"
                    point2="Gaining vital skills in Agile development, database design & integration, security fundamentals, server-side optimization techniques and real-time authentication platforms" 
                    imageMobile={recurrent_2}
                    imageDesktop={recurrent_1}
                />
                
                <img className="h-30 object-contain my-5" src={career_arrow} alt="Arrow" />

                {/* Card 2 */}
                <ExperienceCard_2
                    name="Software Lead"
                    company="iGEM Guelph"
                    timeframe="February 2026 - Present"
                    point1="Facilitated development of team wiki and led software project development supporting synthetic biology research for UofG's entry to the international iGEM competition"
                    point2="Gained skills in project management, team leadership" 
                    imageMobile={iGEM_1}
                    imageDesktop={iGEM_2}
                />
                
                <img className="h-30 object-contain my-5" src={career_arrow} alt="Arrow" />

                {/* Card 3 */}
                <ExperienceCard_2
                    name="Teaching Assistant, Data Structures"
                    company="University of Guelph"
                    timeframe="September 2025 - December 2025"
                    point1="Leveraging strong understanding of data structures and algorithms to contribute to student learning and success"
                    point2="Responsibilities include conducting lab sessions, grading coursework, and providing one-on-one support to students" 
                    imageMobile={UofG_2}
                    imageDesktop={UofG_1}
                />
                
                <img className="h-30 object-contain my-5" src={career_arrow} alt="Arrow" />

                {/* Card 4 */}
                <ExperienceCard_2
                    name="Backend Lead"
                    company="iGEM Guelph"
                    timeframe="March 2025 - December 2025"
                    point1="Worked to incorporate OpenAI’s API to develop a full-stack (FastAPI + React) web app for simulating biological ODE models"
                    point2="Made use of TensorFlow/Keras to develop a custom inference neural network for biological modelling using existing SynBio standards" 
                    imageMobile={iGEM_1}
                    imageDesktop={iGEM_2}
                />
                
                <img className="h-30 object-contain my-5" src={career_arrow} alt="Arrow" />

                {/* Card 5 */}
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

                {/* Card 6 */}
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
