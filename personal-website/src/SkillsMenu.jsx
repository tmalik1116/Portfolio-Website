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

import dart_icon from './assets/dart-icon.png';
import excel_icon from './assets/excel-icon.png';
import firebase_icon from './assets/firebase-icon.png';
import flutter_icon from './assets/flutter-icon.png';
import gemini_icon from './assets/gemini-icon.png';
import pandas_icon from './assets/pandas-icon.png';
import powerbi_icon from './assets/powerbi-icon.png';
import selenium_icon from './assets/selenium-icon.png';
import sklearn_icon from './assets/sklearn-icon.png';

export default function SkillsMenu() {
    const skills = [
        { name: "React", src: react_icon, bg: "bg-gray-900" },
        { name: "Python", src: python_icon, bg: "bg-gray-900" },
        { name: "TailwindCSS", src: tailwind_icon, bg: "bg-white" },
        { name: "C", src: c_icon, bg: "bg-gray-900" },
        { name: "SQL", src: sql_icon, bg: "bg-white" },
        { name: "Kotlin", src: kotlin_icon, bg: "bg-gray-900" },
        { name: "Java", src: java_icon, bg: "bg-white" },
        { name: "JavaScript", src: js_icon, bg: "bg-white" },
        { name: "Git", src: git_icon, bg: "bg-gray-900" },
        { name: "HTML", src: html_icon, bg: "bg-gray-900" },
        { name: "Dart", src: dart_icon, bg: "bg-gray-900" },
        { name: "Firebase", src: firebase_icon, bg: "bg-gray-900" },
        { name: "Flutter", src: flutter_icon, bg: "bg-gray-900" },
        { name: "Gemini", src: gemini_icon, bg: "bg-gray-900" },
        { name: "Pandas", src: pandas_icon, bg: "bg-white" },
        { name: "Selenium", src: selenium_icon, bg: "bg-white" },
        { name: "Scikit-learn", src: sklearn_icon, bg: "bg-white" },
        { name: "Excel", src: excel_icon, bg: "bg-white" },
        { name: "Power BI", src: powerbi_icon, bg: "bg-white" },
    ];
    

    return (
        <div id="skill" className="flex flex-col mt-10 mb-10 w-9/10">
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
                            className={`h-20 w-20 object-contain rounded-2xl ${skill.bg}`}
                        />
                        <span className="mt-2 text-lg text-white">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
