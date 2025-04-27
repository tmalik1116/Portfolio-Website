import React from 'react';

export default function ExperienceCard_2(props) {
    return (
        <div className="flex flex-col w-full md:max-w-[55%] mx-auto my-4 bg-gray-900 rounded-2xl p-3 select-none">
            <div className="card w-full flex flex-col md:flex-row justify-between items-center gap-4">
                
                {/* Left side: text */}
                <div className="w-full md:w-3/5 pl-3">
                    <h2 className="font-bold text-white text-xl mb-1">{props.name}</h2>
                    <h3 className="font-light text-gray-400 mb-3">{props.company} | {props.timeframe}</h3>
                    <ul className="list-disc ml-5 text-gray-300 space-y-2">
                        <li>{props.point1}</li>
                        <li>{props.point2}</li>
                    </ul>
                </div>

                {/* Right side: IMAGE AREA */}

                {/* MOBILE: full width rectangular banner */}
                <div className="w-full flex justify-center mb-0 md:hidden">
                    <img 
                        src={props.imageMobile}
                        alt={props.name}
                        className="object-contain w-full h-auto rounded-lg bg-white p-3"
                    />
                </div>

                {/* DESKTOP: classic square container */}
                <div className="hidden md:flex bg-white rounded-lg p-3 w-64 h-64 items-center justify-end">
                    <img 
                        src={props.imageDesktop}
                        alt={props.name}
                        className="object-contain h-full w-full"
                    />
                </div>

            </div>
        </div>
    );
}
