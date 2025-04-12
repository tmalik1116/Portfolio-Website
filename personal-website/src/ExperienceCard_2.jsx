import React from 'react';

export default function ExperienceCard(props) {
  return (
    <div
        className="flex flex-col sm:max-w-[95%] md:max-w-[55%] mx-auto my-3 bg-gray-900 rounded-2xl p-3 select-none">
        <div className="card w-full flex flex-col md:flex-row justify-between items-center gap-2">
            {/* Left Column: 60% on md and up */}
            <div className="md:w-full pl-3 pt-0">
                <h2 className="font-bold">{props.name}</h2>
                <h3 className="font-light md:mb-3">{props.company} | {props.timeframe}</h3>
                <ul className="list-disc ml-5 break-words">
                    <li className="text-left mb-2">{props.point1}</li>
                    <li className="text-left">{props.point2}</li>
                </ul>
            </div>

            {/* Right Column: 40% on md and up */}
            <div className="bg-white w-80 rounded-lg flex items-center justify-center p-3">
                <img
                    src={props.image}
                    alt={props.name}
                    className="object-contain"
                />
            </div>
        </div>  
    </div>
  );
}
