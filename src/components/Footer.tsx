'use client';

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Name and Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Salomé Lavine</h2>
            <p className="text-gray-400">
              Msc in Energy Science and Technology Engineering at EPFL
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:salome@lavine.com" className="hover:text-white transition-colors">
                  salome@lavine.com
                </a>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Connect</h2>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/salomé-lavine-aa68102b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/salomelavine"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 