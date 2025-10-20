'use client';

import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "MSc in Energy Science and Technology",
      institution: "École Polytechnique Fédérale de Lausanne",
      institutionUrl: "https://www.epfl.ch/education/master/programs/energy-science-and-technology/",
      location: "Lausanne, Switzerland",
      period: "2024 - Present",
      description: [
        "Specializing A : in renewable energy systems and sustainable technologies",
        "Key courses : Smart Grid Technologies , Power system Analysis, Convex Optimization, Aplied Data Analysis",
      ]
    },
    {
      degree: "BSc in Mechanical Engineering",
      institution: "École Polytechnique Fédérale de Lausanne",
      institutionUrl: "https://www.epfl.ch/education/bachelor/programs/mechanical-engineering/",
      location: "Lausanne, Switzerland",
      period: "2019 - 2022",
      description: [
        "Key courses : Mechanics, Dynamics, Vubratung Mechanics, Thermodynamics, Fluid Mechanics, Heat and Mass Transfer",
      ]
    }, 
    {
      degree: "High school", 
      institution: "Ecole Alsacienne", 
      location: "Paris, France", 
      description:[
        "Graduated Scientific Baccalauréat, specialization in physics and chemistry, option ancient grec Highest honours - mention Très Bien",
        "Multiple international experiences : Humanitarian trip to Senegal (1 week in 2017) ; Education and linguistic exchange in New York (1 month in 2015) ; Education and linguistic exchange in San Francisco (2 weeks in 2015)"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                    {edu.institutionUrl ? (
                      <a
                        href={edu.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-600 underline hover:text-primary"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      <p className="text-lg text-gray-600">{edu.institution}</p>
                    )}
                    <p className="text-gray-500">{edu.location}</p>
                  </div>
                  <p className="text-primary font-medium mt-2 md:mt-0">{edu.period}</p>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {edu.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 