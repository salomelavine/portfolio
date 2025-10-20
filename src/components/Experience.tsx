'use client';

import React from 'react';
import { FaGithub } from 'react-icons/fa';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: (string | JSX.Element)[];
  website?: string;
  githubUrl?: string;
  companyUrl?: string;
};

const Experience = () => {
  
  const Semester_projects: ExperienceItem[] =[{ 
    title: '15 minutes market, Loop blocks BESS',
    company: 'Distributed Electrical Systems Laboratory, DESL',
    companyUrl: 'https://www.epfl.ch/labs/desl/',
    location: 'EPFL, Lausanne, Switzerland',
    period: 'septembre 2025- current',
    description: [
      'At the DESL Lab, supervised under a Phd, I modelled optimal bidding strategies for renewables and BESSs in 15-minute European electricity markets using Python and optimization. After the goal is to use thedata from the EPEX-spot EU market, to compare the results.',
      'Tools : CXVPY, Gurobi',
    ],
    githubUrl: 'https://github.com/DESL-EPFL/ESS-loop-blocks',
  
  } ,
  {
    title: 'Impact Assessment of 1kWh Batterie Through Co-Production of Lithium and CO₂ Mineralization',
    company: 'Industrial Process and Energy Systems Engineering , IPESE',
    companyUrl: 'https://www.epfl.ch/labs/ipese/',
    location: 'EPFLSion, Switzerland',
    period: 'february - jully 2025',
    description: [
      'At the IPESE Lab, Impact Assessment of 1 kWh battery produced via co-extraction of lithium, Ca and Mg from European brines coupled with Carbon seques- tration using a mineralization processes.',
      'Tools : Activity-Browser, Quarto, Python, Brightway2',
    ],
    website: 'https://salomelavine.github.io/Impact-Assessment-of-1kWh-Batteries-Through-Co-Production-of-Lithium-and-CO-Mineralization/'
  }, 
]
  const workingExperiences: ExperienceItem[] = [
    {
      title: "Teaching Assistant",
      company: "EPFL",
      location: "Lausanne, Switzerland",
      period: "2022 - Present",
      description: [
        "Helping student during a semester to understand the theory and answering questions during the exercice session, in different courses since 4 years, supervising around (100 students for 3 TA)",
        "Teaching assistant for the following courses: Algebra I, Vibrating Mechanics, Calculus I, Thermodynamics ",
      ]
    },
    {
      title: "Scientastic",
      company: "EPFL",
      companyUrl: "https://scientastic.epfl.ch",
      location: "Lausanne, Switzerland",
      period: "2025",
      description: [
        "During an entire weekend, as a team of 3 we were in charge to animate a discovery seesion of arduino, for teenager ",
        "Also presnetation of a module for an entire other weekend",
      ]
    },
  ];

  const associativeExperiences = [
    {
      id: 1,
      organization: 'Artiphys Festival',
      role: 'Entertainment Manager, V-P',
      period: '2022 – 2024',
      description: [
      "Organisation of a music festival on the EPFL campus, with the goal to create a safe place for students, focusing on prevention and sustainability.",
      ]
    },
    {
      id: 2,
      organization: 'Polyquity',
      role: 'Member',
      period: '2022 - 2023',
      description:[ 'Student organization working towards gender at the EPFL. My role was to comunicate with the EPFL administration on school inclusivity policies'
        ]
    },
    {
      id: 3,
      organization: 'Coaching',
      role: 'Vice-President',
      period: '2020 - 2021',
      description: 'Student organization to integrate first-year mechanical students.',
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          {/* Professional Experience */}
          <div className="mb-16">
            <h4 className="text-xl font-bold text-primary mb-4">Semester Projects</h4>
            <div className="space-y-12 mb-10">
              {Semester_projects.map((exp, index) => (
                <div
                  key={index}
                  className="card hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary">{exp.title}</h4>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-gray-600 underline hover:text-primary"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-600">{exp.company}</p>
                      )}
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                    <p className="text-primary font-medium mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  {(exp.website || exp.githubUrl) && (
                    <div className="mt-4 flex gap-3">
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                        >
                          More Info
                        </a>
                      )}
                      {exp.githubUrl && (
                        <a
                          href={exp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-gray-800 text-white rounded hover:bg-black transition-colors duration-200"
                          aria-label="View on GitHub"
                          title="GitHub"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-8">Professional Experience</h3>
            <div className="space-y-12">
              {workingExperiences.map((exp, index) => (
                <div
                  key={index}
                  className="card hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-primary">{exp.title}</h4>
                      <p className="text-lg text-gray-600">{exp.company}</p>
                      <p className="text-gray-500">{exp.location}</p>
                    </div>
                    <p className="text-primary font-medium mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  {(exp.website || exp.githubUrl) && (
                    <div className="mt-4 flex gap-3">
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                        >
                          More Info
                        </a>
                      )}
                      {exp.githubUrl && (
                        <a
                          href={exp.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1 bg-gray-800 text-white rounded hover:bg-black transition-colors duration-200"
                          aria-label="View on GitHub"
                          title="GitHub"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Associative Experience */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Associative Experience</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {associativeExperiences.map((exp) => (
                <div key={exp.id} className="card">
                  <h4 className="text-xl font-bold text-primary mb-2">{exp.organization}</h4>
                  <p className="text-lg font-medium text-gray-600">{exp.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 