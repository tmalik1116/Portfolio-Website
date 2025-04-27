import React from 'react';
import githubLogo from './assets/Copy of GitHub Logo.png';
import linkedinLogo from './assets/LinkedIn Logo Transparent.png';
import email from './assets/email icon.png';

export default function NavBar() {
    return (
        <div className="fixed top-0 left-0 w-full h-max bg-gray-900 pt-2 shadow-md z-50">
            <div className="flex flex-wrap justify-between items-center px-4 mb-2">

                {/* Left: Name */}
                <h3 className="font-bold cursor-pointer group relative text-lg sm:text-xl w-full md:w-auto text-center">
                    <span className="text-white group-hover:bg-gradient-to-r from-blue-400 to-purple-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                        Talha Malik
                    </span>
                </h3>

                {/* Center: Tabs (hidden on mobile) */}
                <div className="hidden md:flex space-x-8 flex-grow justify-center">
                    <h4 className="cursor-pointer group relative text-white">
                        <span className="group-hover:bg-gradient-to-r from-blue-400 to-purple-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                            Experience
                        </span>
                    </h4>

                    <h4 className="cursor-pointer group relative text-white">
                        <span className="group-hover:bg-gradient-to-r from-blue-400 to-purple-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                            Projects
                        </span>
                    </h4>

                    <h4 className="cursor-pointer group relative text-white">
                        <span className="group-hover:bg-gradient-to-r from-blue-400 to-purple-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                            Skills
                        </span>
                    </h4>

                    <h4 className="cursor-pointer group relative text-white">
                        <span className="group-hover:bg-gradient-to-r from-blue-400 to-purple-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                            Contact
                        </span>
                    </h4>
                </div>

                {/* Right: Social Icons (hidden on mobile) */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="mailto:tmalik2004@gmail.com?subject=Let's%20Connect!&body=Hello%20Talha%2C%0A%0A" className="relative w-8 h-8">
                        <img 
                            src={email} 
                            className="absolute inset-0 w-7 h-7 rounded-full bg-black cursor-pointer hover:bg-red-700 hover:h-8 hover:w-8 hover:-mt-0.5 hover:-ml-0.5 transition-all 100ms ease-in-out"
                            alt="Email"
                        />
                    </a>

                    <a href="https://linkedin.com/in/talha-malik-software-developer" className="relative w-8 h-8">
                        <img 
                            src={linkedinLogo} 
                            className="absolute inset-0 w-7 h-7 rounded-full bg-black cursor-pointer hover:bg-blue-700 hover:h-8 hover:w-8 hover:-mt-0.5 hover:-ml-0.5 transition-all 100ms ease-in-out"
                            alt="LinkedIn"
                        />
                    </a>

                    <a href="https://github.com/tmalik1116" className="relative w-8 h-8">
                        <img 
                            src={githubLogo} 
                            className="absolute inset-0 w-7 h-7 rounded-full bg-white cursor-pointer hover:bg-indigo-400 hover:h-8 hover:w-8 hover:-mt-0.5 hover:-ml-0.5 transition-all 100ms ease-in-out"
                            alt="GitHub"
                        />
                    </a>
                </div>

            </div>
        </div>
    );
}
