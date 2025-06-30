import React from 'react';
import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profilepic from "../images/profile pic.jpg"

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-500"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800/30 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200 dark:bg-teal-800/30 rounded-full opacity-20 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200 dark:bg-orange-800/30 rounded-full opacity-20 animate-float"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400">
                {portfolioData.personal.name}
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              {portfolioData.personal.title}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {portfolioData.personal.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ExternalLink className="ml-2" size={18} />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 font-semibold rounded-full border-2 border-purple-600 dark:border-purple-400 hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white dark:hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Let's Connect
                <Mail className="ml-2" size={18} />
              </button>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up-delayed">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700">
                <img
                  src={profilepic}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute -inset-4 border-2 border-purple-200 dark:border-purple-800/50 rounded-full animate-spin-slow opacity-30"></div>
              <div className="absolute -inset-8 border-2 border-teal-200 dark:border-teal-800/50 rounded-full animate-spin-reverse opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;