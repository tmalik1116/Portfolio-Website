import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function ContactMenu() {
    return (
        <div id="contact" className="flex flex-col w-full">
            <h1 className="font-semibold text-2xl mb-6 text-center">Contact Me</h1>
            <div className="flex flex-wrap justify-center gap-6">

                {/* Email */}
                <a 
                    href="mailto:tmalik2004@gmail.com?subject=Let's%20Connect!&body=Hello%20Talha%2C%0A%0A" 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                    <Mail size={20} />
                    <span>Email</span>
                </a>

                {/* Phone */}
                <a 
                    href="tel:+13065962311" 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                    <Phone size={20} />
                    <span>Phone</span>
                </a>

                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/talha-malik-software-developer" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition-colors"
                >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                </a>

                {/* GitHub */}
                <a 
                    href="https://github.com/tmalik1116" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                    <Github size={20} />
                    <span>GitHub</span>
                </a>

            </div>
        </div>
    );
}
