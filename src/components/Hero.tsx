'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/salomelavine',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/salomé-lavine-aa68102b6/',
      icon: FaLinkedin
    },
    {
      name: 'Email',
      url: 'mailto:salome@lavine.com',
      icon: FaEnvelope
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Salomé Lavine</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Energy Science and Technology Engineer
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Passionate about developing innovative solutions for renewable energy systems 
            and sustainable development. Frustated of unfufulled enrgy potential. Combining engineering and mechanival knowledge with a 
            
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="text-3xl" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View My Projects
            </a>
            <a
              href="#experience"
              className="btn bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              View My Semester Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 