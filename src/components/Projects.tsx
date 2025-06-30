import React from 'react';
import { Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

// interface Project {
//   id: number;
//   title: string;
//   category: string;
//   image: string;
//   tools: string[];
//   overview: string;
//   challenge: string;
//   solution: string;
//   results: string;
//   link: string;
// }

const Projects: React.FC = () => {
  // const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // const openProject = (project: Project) => {
  //   setSelectedProject(project);
  //   document.body.style.overflow = 'hidden';
  // };

  // const closeProject = () => {
  //   setSelectedProject(null);
  //   document.body.style.overflow = 'auto';
  // };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-500 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 dark:from-purple-400 dark:to-teal-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my design process and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <Link to={project.link} key={project.id}>
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              // onClick={() => openProject(project)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      {/* <div className="flex items-center text-white">
                        <ExternalLink size={20} className="mr-2" />
                        <span className="font-semibold">View Case Study</span>
                      </div> */}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <Zap className="text-teal-600 dark:text-teal-400" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

        {/* Project Modal */}
        {/* {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 py-8">
              <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={closeProject}
              ></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors shadow-lg"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-300" />
                </button>

                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <span className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tools Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.overview}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Challenge</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Solution</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Results</h3>
                      <p className="text-teal-600 dark:text-teal-400 font-semibold leading-relaxed">{selectedProject.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Projects;