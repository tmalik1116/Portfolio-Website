import React from 'react';
import react_icon from './assets/react-icon.png';
import python_icon from './assets/python-icon.png';
import tailwind_icon from './assets/tailwindcss-icon.png';
import c_icon from './assets/c-icon.png';
import sql_icon from './assets/sql-icon.png';
import kotlin_icon from './assets/kotlin-icon.png';
import java_icon from './assets/java-icon.png';
import js_icon from './assets/js-icon.png';
import html_icon from './assets/html-icon.png';
import git_icon from './assets/git-icon.png';

export default function SkillsMenu() {
    const skills = [
        { name: "React", src: react_icon },
        { name: "Python", src: python_icon },
        { name: "TailwindCSS", src: tailwind_icon },
        { name: "C", src: c_icon},
        { name: "SQL", src: sql_icon },
        { name: "Kotlin", src: kotlin_icon },
        { name: "Java", src: java_icon },
        { name: "JavaScript", src: js_icon },
        { name: "Git", src: git_icon },
        { name: "HTML", src: html_icon },
    ];

    return (
        <div className="flex flex-col mt-10  mb-10 w-9/10">
            <h1 className="font-semibold text-2xl mb-6 text-center">Skills</h1>
            <div className="flex flex-wrap justify-center gap-8">

                {skills.map((skill, index) => (
                    <div 
                        key={index}
                        className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110"
                    >
                        <img 
                            src={skill.src} 
                            alt={skill.name}
                            className="h-20 w-20 object-contain rounded-2xl bg-gray-900"
                        />
                        <span className="mt-2 text-lg text-white">{skill.name}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}
