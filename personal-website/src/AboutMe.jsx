import React from 'react';
import batman from './assets/batman.jpg';
import portrait from './assets/portrait.jpg';
import portrait2 from './assets/portrait2.jpg'
import portrait3 from './assets/portrait_igem.jpeg'

export default function AboutMe() {
  return (
    <div id="home" className="flex flex-col md:flex-row items-center gap-3 py-6 justify-around px-4 md:px-6">
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="font-bold text-2xl mb-4">Hi, I'm Talha Malik</h1>
        <h2 className="mb-4">I am an incoming fourth-year student in the Bachelor of Computing, Computer Science Co-op program at the University of Guelph.</h2>
        <h2 className="mb-4">I have had an interest in technology for years, with experience in full-stack development, machine learning, data science, and project management.</h2>
        <h2 className="mb-4">I am always looking for new opportunities to learn and grow, and I am excited to see where my career takes me next.</h2>
      </div>

      <div className="bg-gray-900 w-9/10 md:w-2/5 rounded-2xl p-3 flex items-center md:self-stretch mx-8 md:mx-0 justify-around" id="card">
        <div className="card aspect-square w-full h-full">
          <img 
            src={portrait3} 
            alt="Talha Malik" 
            className="w-full h-auto aspect-square object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}