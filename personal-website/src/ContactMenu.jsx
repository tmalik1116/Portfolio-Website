import react from 'react';

export default function ContactMenu() {

    return (
        <div className="flex flex-col w-max h-full px-4 justify-around"> {/* This MUST have fixed height, changing this will break it */}
                    <h1 className="text-center font-semibold">Contact</h1>
                    <div className="flex flex-row h-50 pt-5">
                        <div className="bg-gray-900 flex rounded-2xl p-3">
                            <div className="flex card h-auto p-0">
                                <h2>Email</h2>
                                <a href="mailto:tmalik2004@gmail.com?subject=Let's%20Connect!&body=Hello%20Talha%2C%0A%0A">Click Here</a>
                            </div>
                        
                        </div>

                    </div>
                    
                    
                </div>
    )
}