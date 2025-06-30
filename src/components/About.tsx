import React from 'react';
import { portfolioData } from '../data/portfolioData';
import * as Icons from 'lucide-react';

const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent size={24} /> : <Icons.Star size={24} />;
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">My Story</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {portfolioData.personal.bio}
            </p>

            {/* Skills Grid */}
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Skills & Expertise</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-900/20 dark:to-teal-900/20 p-4 rounded-xl hover:shadow-lg dark:hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-purple-600 dark:text-purple-400 mr-3">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 block">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="animate-fade-in-up-delayed">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Experience & Education</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400"></div>

              {portfolioData.timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-4 h-4 bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-purple-500/10 transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">{item.year}</div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                    <div className="text-teal-600 dark:text-teal-400 font-semibold mb-3">{item.company}</div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;