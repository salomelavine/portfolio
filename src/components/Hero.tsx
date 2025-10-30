'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from 'react-icons/fa';

const Hero = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const email = 'salome@lavine.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };


  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Salomé Lavine</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Energy Science and Technology Engineer 
          </p>

          <p className="text-sm md:text-xl text-gray-600 mb-8">
            Seecking for a six months internship starting in febuary 2026 
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Passionate about shaping the futur energy transition and frustrated by unfulfilled potential. I am eager to combine my mechanical background and electrical engineering insight to make a meaningful impact.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/salomé-lavine-aa68102b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            
            {/* Email */}
            <button
              onClick={copyEmail}
              className="text-gray-600 hover:text-primary transition-colors relative group"
              aria-label="Copy email address"
              title={emailCopied ? "Email copied!" : "Copy email address"}
            >
              {emailCopied ? (
                <FaCheck className="text-3xl text-green-500" />
              ) : (
                <FaEnvelope className="text-3xl" />
              )}
              {!emailCopied && (
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Copy email
                </span>
              )}
            </button>
            
            {/* GitHub */}
            <a
              href="https://github.com/salomelavine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-3xl" />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#experience"
              className="btn btn-primary"
            >
              Semester Projects
            </a>
            <a
              href="#projects"
              className="btn btn-primary"
            >
              Academic Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 