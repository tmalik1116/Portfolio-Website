import react from 'react';

export default function ExperienceMenu(props) {
    return (
        <div className="flex flex-col w-full md:w-3/5 h-40 mt-20 px-4"> {/* This MUST have fixed height, changing this will break it */}
            <h1 className="text-center font-extrabold">Experience</h1>
            {/* Your experience content */}
        </div>
    )
}