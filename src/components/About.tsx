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
                My expertise lies in energy optimization and electrical grid knowledge.
                Combining my mechanical engineering background and electrical, I've built strong knowledge and skills in energy generation and transmission. 
              </p>
              
              <p className="text-lg text-gray-600">
                Through my academic and professional journey, I have developed strong 
                analytical skills and a deep understanding of energy systems. And more soft skills threw groups projetcs and associative experiences.
              </p>
              <p className="text-lg text-gray-600">
                As a French and Canadian national, I’ve developed strong adaptability while studying and living abroad in Switzerland.

              </p>
            </div>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">Key Interests</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Renewable Energy Systems</li>
                  <li>• Energy Storage Solutions, BESS</li>
                  <li>• Energical transition solutions </li>
                  <li>• Power systems</li>
                  <li>• Electrical Grid market and frequency balacing </li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
                <p className="text-gray-600">
                  Master's in Energy Science and Technology<br />
                  École Polytechnique Fédérale de Lausanne
               
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