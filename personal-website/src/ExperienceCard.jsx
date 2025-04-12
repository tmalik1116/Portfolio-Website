import React from 'react';

export default function ExperienceCard(props) {
  return (
    <div className="flex h-auto sm:max-w-95% md:max-w-95% md:w-9/10 md:mt-8 bg-gray-900 rounded-2xl p-3 pr-0 mx-auto my-3 select-none" id="card">
      <div className="card w-full md:w-90% flex flex-col md:flex-row items-center md:items-start pr-0 mr-0 gap-2">
        {/* Text Content */}
        <div className="flex flex-col flex-wrap w-full md:w-6/10  pr-5 pt-2">
            <div className="flex md:flex-row sm:flex-col flex-wrap md:max-w-full">
                <h2 className="font-bold mb-0 md:ml-2 md:mr-8 text-left">{props.name}</h2>
                <h3 className="md:ml-2 md:mt-2 font-light">{props.timeframe}</h3>
            </div>

            <ul className="list-disc pl-5 space-y-2 md:mt-4 md:ml-2 max-w-7/10">
                <li className="text-left break-words">{props.point1}</li>
                <li className="text-left break-words">{props.point2}</li>
            </ul>
        </div>
        
        {/* Image Container - Updated to expand to full height */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-auto mr-0 pr-0 mt-4 md:mt-0 md:h-full">
          <div className="md:w-80 sm:w-40 h-full rounded-lg bg-white flex items-center justify-center">
            <img 
              src={props.image} 
              alt={props.name} 
              className="w-full object-contain p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}