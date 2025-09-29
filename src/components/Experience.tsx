'use client';

import React from 'react';

const Experience = () => {
  
  const Semester_project =[ {
    title: 'Impact assesment on lithium extraction and mineralization',
    company: 'EPFL',
    location: 'Sion, Switzerland',
    period: 'february - jully 2024',
    description: [
      'Impact assessment on lithium extraction and mineralization.',
      'Collaborated on a project to optimize building energy efficiency through innovative design solutions.',
      'Technologies: Activity-Browser, Quarto, Python, Brightway2',
      'Category: Life Cycle Assessment'
    ],
    website: 'https://salomelavine.github.io/Impact-Assessment-of-1kWh-Batteries-Through-Co-Production-of-Lithium-and-CO-Mineralization/'
  }]
  const experiences = [
    {
      title: "Teaching assistant",
      company: "EPFL",
      location: "Lausanne, Switzerland",
      period: "2022 - Present",
      description: [
        "Helping student during the exercice session, in collaboration with the cours teatcher",
        "Algebra I",
        "Vibrating Mechanics",
        "Calculus I",
        "Physics I: Thermodynamics", 
      ]
    },
    {
      title: "Scientastic",
      company: "EPFL",
      location: "Lausanne, Switzerland",
      period: "2025",
      description: [
        "During an entire weekend, as a team of 3 we were in charge to animate a discovery seesion of arduino, for teenager ",
        "Scientastic", <a href="https://scientastic.epfl.ch" target="red" rel="noopener noreferrer">EPFL</a> ,
      ]
    },
  ];

  const associativeExperiences = [
    {
      id: 1,
      organization: 'Artiphys Festival',
      role: 'Entertainment Manager & Board Committee Member',
      period: '2022 – 2024',
      description: ['Student organization for a music festival on campus',
      'member then board committee (entertainment manager)', 
      'This event is a msuic festival with the goal to create a safe place for the student, focusing on prevention and sustainability', 
      'I spent 2 year working on the project'
      ]
    },
    {
      id: 2,
      organization: 'Polyquity',
      role: 'Member',
      period: '2022 - 2023',
      description:[ 'Student organization working towards gender at the EPFL.', 
        'My role was to comunicate and relate question, propose better option, to the administative comitee'
        ]
    },
    {
      id: 3,
      organization: 'Coaching',
      role: 'Vice-President',
      period: '2020 - 2021',
      description: 'Student organization for the first year starting their bachelor in mechanical.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          {/* Professional Experience */}
          <div className="mb-16">
            <h4 className="text-xl font-bold text-primary mb-4">Semester Project</h4>
            <div className="space-y-12 mb-10">
              {Semester_project.map((exp, index) => (
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
                  {exp.website && (
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Project Website
                    </a>
                  )}
                </div>
              ))}
            </div>
            <h3 className="text-2xl font-bold text-primary mb-8">Professional Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
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