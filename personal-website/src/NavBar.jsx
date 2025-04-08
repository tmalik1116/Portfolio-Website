import React from 'react';
import githubLogo from './assets/Copy of GitHub Logo.png';
import linkedinLogo from './assets/LinkedIn Logo.png';
import linkedinLogoTrans from './assets/LinkedIn Logo Transparent.png';

export default function NavBar(props) {

    return (
        <div className="fixed top-0 left-0 w-full h-11 bg-gray-900 pt-2 shadow-lg shadow-purple-900 z-50">
            <div className="flex pl-0 ml-0">
                <h3 className="w-1/5 left-1.5 font-bold ml-0 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Talha Malik</h3>
                <h4 className="w-1/5 ml-2 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Projects</h4>
                <h4 className="w-1/5 ml-2 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Experience</h4>
                <h4 className="w-1/5 ml-2 mr-auto cursor-pointer hover:text-purple-400 transition-all 150ms ease-in-out">Contact</h4>
                <div className="flex w-1/5">
                    <a href="https://linkedin.com/in/talha-malik-software-developer">
                        <img src={linkedinLogoTrans} className="w-7 h-7 p-0 mr-0 ml-40 rounded-full bg-black cursor-pointer hover:bg-blue-700 hover:h-8 hover:w-8 hover:-mt-0.5 transition-all 100ms ease-in-out absolute"></img>
                    </a>
                    
                    <a href="https://github.com/tmalik1116">
                        <img src={githubLogo} className="w-7 h-7 pt-0 mr-2 ml-50 rounded-full bg-white cursor-pointer hover:bg-indigo-400 hover:h-8 hover:w-8 hover:-mt-0.5 transition-all 100ms ease-in-out absolute"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}