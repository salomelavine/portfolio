'use client';

import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software & Tools',
      skills: [
        'MATLAB',
        'Python',
        'CAD Software',
        'Arduino (C/C++/C#)',
        'Labview',
        'Simulink', 
        'CFD',
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        'Project Management',
        'Research',
        'Technical Writing',
        'Problem Solving',
        'Team Leadership',
        'Communication'
      ]
    }, 
    {
      title:'Languages',
      skills:[
        'French - native', 
        'English - fluent', 
        'Italien - beginner', 
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 