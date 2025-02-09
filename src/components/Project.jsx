import React from "react";




const projects = [
    {
        id:1,
        title: "Project 1 ada",
        technologies: "",
        // image: ,
        github:"https://github.com/AdtyDev?tab=repositories",
        vercel:"",
    },
    {
        id:2,
        title: "Project 2 ada",
        technologies: "",
        // image: ,
        github:"",
        vercel:"",

    },
    {
        id:3,
        title: "Project 3 ada",
        technologies: "",
        // image: ,
        github:"",
        vercel:"",

    },
    {
        id:4,
        title: "Project 4 ada",
        technologies: "",
        // image: ,
        github:"",
        vercel:"",

    }
]

const Project = () =>{
    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) =>(
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        transform transition-transform duration-300 hover:scale-105">
                            <img src={project.image} alt={project.title} className="rounded-lg mb-4
                            w-full h-48 object-cover" />
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.technologies}</p>
                            <a href={project.github} className="inline-block bg-gradient-to-r 
                             from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" 
                              target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={project.vercel} className="inline-block bg-gradient-to-r 
                             from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" 
                              target="_blank" rel="noopener noreferrer">Vercel</a>
                        </div>
                                          
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project;