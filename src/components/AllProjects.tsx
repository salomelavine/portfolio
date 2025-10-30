'use client';

import React from 'react';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Advance Lab in electrical energy systems',
      image: '/project/LAB.jpeg', // <--- Add this line
      description: 'Modelled and simulated an islanded electric grid in Simulink, integrating synchronous and asynchronous machines with speed and voltage controllers, and successfully implemented the experiment in a live laboratory setup.',
      technologies: ['Simulink', 'Oscilloscope', 'Electrical machines','Power bench'],
      category: 'Power Systems Operations',
      pdf: '/project/Hodder_grille-2.pdf', // Make sure this file exists in public/project/
      simulink: '/project/FilesForSimulationOfTheWholeSystem.zip'  // <--- Add this line
    }, 
    {
      id: 2,
      title: "Bachelor's project: Leonard da Vinci challenge",
      image: '/project/DAVINCI.png', // <--- Add this line
      description: ['Project under the supervision of a PhD, in the Flex Lab at the EPFL.',
        "Analyse and created a protoptype to tests on one of Leonardo Da Vinci invention, and inspect is feasability, using both prototyping and simulation skills.", 
      ],
      technologies: ['Lazercutting', 'Matlab', 'CAD'],
      category: 'Mechanics, Heat and Mass transfer',
      pdf: '/project/Projet_DaVinci.pdf',
      website: 'https://actu.epfl.ch/news/bringing-leonardo-da-vinci-s-designs-to-life/',
    },
    {
        id: 4,
        title: 'Smart gripper',
        image: '/project/smart_gripper.png', // <--- Add this line
        description: 'Designed and prototyped a robotic gripper capable of detecting whether objects are metallic or not, using an Arduino and a custom-built electrical circuit. The gripper was connected to and controlled by a computer interface.',
        technologies: ['CAD', 'Welding', '3D printing','Lazercutting','Arduino'],
        category: 'Mechanical Design',
        pdf: '/project/Smart_gripper.pdf', // Make sure this file exists in public/project/
    }, 
    
    
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">All Projects</h1>
            <a
              href="/#projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Go Back
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card group hover:shadow-xl transition-shadow duration-300"
                >
                <div className="aspect-video bg-gray-100 rounded-t-lg flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-400 text-4xl font-serif">{project.title.charAt(0)}</span>
                  )}
                </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-sm text-primary font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-1 flex items-center gap-2">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {Array.isArray(project.description) 
                        ? project.description.join(' ') 
                        : project.description
                      }
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="skill-tag text-sm"
                        >
                          {tech === 'Energy converion course' && project.website ? (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline text-green-700 hover:text-green-900"
                            >
                              {tech}
                            </a>
                          ) : (
                            tech
                          )}
                        </span>
                      ))}
                    </div>
                  {(project.pdf || project.website) && (
                    <div className="mt-4 flex gap-3">
                      {project.pdf && (
                        <a
                          href={project.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm inline-flex items-center gap-2"
                        >
                          <img src="/project/pdf_icon.png" alt="PDF" className="w-5 h-5" />
                          View PDF
                        </a>
                      )}
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm inline-flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Visit Website
                        </a>
                      )}
                      {project.simulink && (
  <a
    href={project.simulink}
    download
    className="btn-primary text-sm inline-flex items-center gap-2"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V4" />
    </svg>
    Download Simulink
  </a>
)}
                    </div>
                  )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
