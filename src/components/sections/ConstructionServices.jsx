import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import useAOS from '../../hooks/useAOS';
import { projects } from '../../data/projects-data';
import { Building2 } from "lucide-react"; 


const ProjectsLandingSection = () => {
  useAOS({ duration: 1000, once: true });

  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        setProjectsData(projects.slice(0, 6));
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-30">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{
              background: 'var(--color-primary-alt)',
            }}></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-30">
        <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{
              background: 'var(--color-primary-alt)',
            }}></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-1 sm:mb-12 lg:mb-8">
          <div className="flex-1 mb-2 lg:mb-0" data-aos="fade-up">
            <div className="flex items-center mb-1">
              <div
                className="w-8 h-8 rounded mr-3 flex items-center justify-center"
                style={{ background: 'var(--color-primary-alt)' }}
              >
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium"
              style={{ color: 'var(--color-primary-alt)' }}
              >Our Projects</span>
            </div>
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Featured Construction Projects
            </h4>
          </div>

          <div className="flex-1 lg:max-w-md lg:ml-8 flex flex-col items-end" data-aos="fade-down">
            <p className="text-gray-600 mb-0 sm:mb-2 leading-relaxed text-sm sm:text-base text-left sm:text-right">
              MASON delivers exceptional construction projects that transform communities
              with innovative design, quality craftsmanship, and sustainable building practices.
            </p>

            <div className="mt-0 hidden sm:block">
              <Link
                to="/projects"
                className="hover:underline"
                style={{
                  color: 'var(--color-primary-alt)',
                }}
              >
                VIEW ALL PROJECTS →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="col-span-1 relative group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Project Category Badge */}
                {/* <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div> */}

                {/* Project Status Badge */}
                {/* <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' :
                    project.status === 'In Progress' ? 'bg-blue-500 text-white' :
                    project.status === 'Under Construction' ? 'bg-orange-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div> */}

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                  <h5 className="text-lg sm:text-xl font-semibold mb-2 text-on-dark" data-aos="fade-up">
                    {project.title}
                  </h5>
                  {project.description && (
                    <p className="text-gray-200 text-xs sm:text-sm mb-4 opacity-90 line-clamp-2" data-aos="fade-up">
                      {project.description}
                    </p>
                  )}

                  <div className="flex items-center text-gray-300 text-xs mb-2">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {project.location}
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-200"
                    style={{ background: 'var(--color-primary-alt)' }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden text-right px-4">
        <Link
          to="/projects"
          className="block"
          style={{
            color: 'var(--color-primary-alt)',
          }}
        >
          VIEW ALL PROJECTS →
        </Link>
      </div>
    </div>
  );
};

export default ProjectsLandingSection;