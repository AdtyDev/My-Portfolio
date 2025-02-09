import React from "react";
import adi from '../assets/adi.jpg'

const About = () =>{
    return (

        <div className="bg-black text-white py-20" id="about">

            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <img src={adi} alt="" className="w-72 h-80 rounded object-cover mb-8 md:0"/>
                    <div className="flex-1">
                        <p className="text-lg mb-8">
                            A final year computer science engineer with a strong interest in 
                            developing innovative software solutions and exploring industry 
                            trends. Proficient in Python, with a foundational understanding of
                            Django and MySQL. Eager to join a dynamic team, contribute to 
                            impactful projects, and gain valuable experience in the evolving 
                            tech market.  
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">Python </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className='bg-gradient-to-r from-blue-400 to-red-500 h-2.5 rounded-full 
                                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">Django</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className='bg-gradient-to-r from-blue-400 to-red-500 h-2.5 rounded-full 
                                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-2/12">ReactJS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className='bg-gradient-to-r from-blue-400 to-red-500 h-2.5 rounded-full 
                                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 w-10/12'>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-12 flex justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500">
                                    3+
                                </h3>
                                <p>Experience</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500">
                                    5
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                                bg-gradient-to-r from-green-400 to-blue-500">
                                    2
                                </h3>
                                <p>Research Papers</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default About;