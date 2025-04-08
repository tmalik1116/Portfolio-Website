import React from 'react';
import batman from './assets/batman.jpg';

export default function AboutMe() {



    return (
        <div className="flex flex-row">
            <div className="flex flex-col w-1/2">
                <h1 className="font-bold">Hi, I'm Talha Malik</h1>
                <h2 className="p-5">I am an incoming fourth-year student in the Bachelor of Computing, Computer Science Co-op program at the University of Guelph. </h2>
                <h2 className="p-5">I have had a passion for technology for years, with experience in full-stack development, machine learning, data science, and project management. </h2>
                <h2 className="p-5">I am always looking for new opportunities to learn and grow, and I am excited to see where my career takes me next.</h2>
            </div>

            <div className=" bg-gray-900 w-2/5 h-full rounded-2xl ml-12 mr-3 p-3" id="card">
                <div className="card">
                    <img src={batman} className="rounded-lg"></img>
                </div>
            </div>

        </div>
    )
}