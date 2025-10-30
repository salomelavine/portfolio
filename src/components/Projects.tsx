'use client';

import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Comparative LCA between plastic or cardboard plates for the EPFL campus.',
      image: '/project/LCA.png', // <--- Add this line
      description: 'Compare the ecological impact of distributing meals in a cardboard or re-usable plastic plate on various impact categorie.',
      technologies: ['OpenLCA','database: eco-invent3.6'],
      category: 'Life Cycle Assessment',
      pdf: '/project/LCA_ReCircle_Final_Report.pdf'
    },
    {
      id: 2, 
      title: 'Data story : Franchise to be or not continued', 
      image: '/project/ADA.png', // <--- Add this line
      description: ['Creating a data story, the reasearch questions, the visualization, the analyses using a data set given on movies.', 
      ],
      technologies:['Python', 'Github'], 
      category:'Data analysis',
      website: 'https://clementloyer.github.io/ada-website.github.io/',
  },
 
    {
      id: 3,
      title: 'Net Zero Electric Grid in Switzerland',
      image: '/project/Net.png', // <--- Add this line
      description: 'Project to optimize and modelize an net zero electric grid infrastructure for Switerland in 2050',
      technologies: ['Matlab', 'Energy Modeling', 'Sankey diagrams','Energy converion course'],
      category: 'Energy Conversion',
      pdf: '/project/Energy_conversion___final_report___group_10-2.pdf',
    },
    {
        id: 4,
        title: 'Smart griper',
        description: 'Conception and prototyping of a gripper, that can grab objects and detect detect if they are metalic or not.',
        technologies: ['CAD', 'Welding', '3D printing','Lazercutting','Arduino'],
        category: 'Mechanical Design',
        pdf: '/project/Final_Report_Prod_Design.pdf', // Make sure this file exists in public/project/
    }, 
    {
      id: 5,
      title: "Bachelor's project: Leonard da Vinci challenge",
      description: ['Project under the supervision of a PhD, in the Flex Lab at the EPFL',
        "Analyse and elaborate tests on one of Leonardo Da Vinci invention, and inspect its feasability", 
      ],
      technologies: ['Lazercutting', 'Matlab', 'CAD',''],
      category: 'Thermodynamics, mechanics',
      //pdf: '/project/Final_Report_Leonardo_Da_Vinci.pdf',
      website: 'https://actu.epfl.ch/news/bringing-leonardo-da-vinci-s-designs-to-life/',
    },


  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Projects</h2>
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
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
                      {/* Removed: PDF icon link */}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
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
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/all-projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              View all academics projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 