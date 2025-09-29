'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                I am an Energy Engineer with a strong focus on renewable energy systems 
                and sustainable technology solutions. Currently pursuing my studies at 
                École Polytechnique Fédérale de Lausanne (EPFL), I am passionate about 
                developing innovative solutions for a sustainable future.
              </p>
              
              <p className="text-lg text-gray-600">
                My expertise lies in energy optimization, solar systems, and sustainable 
                building design. I combine technical knowledge with practical experience 
                to create efficient and environmentally conscious solutions.
              </p>
              
              <p className="text-lg text-gray-600">
                Through my academic and professional journey, I have developed strong 
                analytical skills and a deep understanding of energy systems. I am 
                constantly seeking opportunities to contribute to projects that make 
                a positive impact on our environment.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">Key Interests</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Renewable Energy Systems</li>
                  <li>• Energy Storage Solutions</li>
                  <li>• Sustainable Building Design</li>
                  <li>• Energy Efficiency Optimization</li>
                  <li>• Clean Technology Innovation</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
                <p className="text-gray-600">
                  Master's in Energy Science and Technology<br />
                  École Polytechnique Fédérale de Lausanne
                  <a
                    href="https://www.epfl.ch/education/master/programs/energy-science-and-technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    EPFL
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 