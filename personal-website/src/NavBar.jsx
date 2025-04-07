import React from 'react';
import githubLogo from './assets/GitHub Logo.png';
import linkedinLogo from './assets/LinkedIn Logo.png';

export default function NavBar(props) {

    return (
        <div className="fixed top-0 left-0 w-full h-11 bg-blue-950 pt-2 shadow-lg shadow-purple-900 z-50">
            <div className="flex pl-0 ml-0">
                <h2 className="w-1/5 left-1.5 font-bold ml-0 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Talha Malik</h2>
                <h4 className="w-1/5 ml-2 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Projects</h4>
                <h4 className="w-1/5 ml-2 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Experience</h4>
                <h4 className="w-1/5 ml-2 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Contact</h4>
                <div className="flex w-1/5">
                    <img src={linkedinLogo} className="w-7 h-7 pt-0 mr-0 ml-auto cursor-pointer hover:animate-spin"></img>
                    <img src={githubLogo} className="w-7 h-7 pt-0 mr-4 ml-4 cursor-pointer hover:animate-spin"></img>
                </div>
            </div>
        </div>
    );
}