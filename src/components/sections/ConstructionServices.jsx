import React from 'react';
import { ArrowRight, Link } from 'lucide-react';
import Button from '../common/Button';

const CivilEngineeringServices = () => {
  const services = [
    {
      id: 1,
      title: "Structural Engineering",
      description: "Structural analysis, foundation design, and bridge infrastructure solutions",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "col-span-1"
    },
    {
      id: 2,
      title: "Transportation Engineering",
      description: "Highway design, traffic analysis, and intersection optimization",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "col-span-1"
    },
    {
      id: 3,
      title: "Water & Environmental Engineering",
      description: "Water treatment systems, stormwater management, and environmental assessments",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "col-span-1"
    },
    {
      id: 4,
      title: "Geotechnical Engineering",
      description: "Soil investigation, foundation analysis, and slope stability solutions",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "col-span-1"
    },
    {
      id: 5,
      title: "Site Development & Planning",
      description: "Master planning, grading design, and utility infrastructure planning",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "col-span-1"
    },
    {
      id: 6,
      title: "Project Management",
      description: "Construction administration, permit assistance, and project coordination",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      className: "col-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative dots pattern - top left */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 opacity-30">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-1">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 opacity-30">
        <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-10 gap-1">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-1 sm:mb-12 lg:mb-8">
          <div className="flex-1 mb-2 lg:mb-0">
            <div className="flex items-center mb-1">
              <div className="w-8 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center" >
                <span className="text-white text-sm">⚙️</span>
              </div>
              <span className="text-blue-600 font-medium">Our Services</span>
            </div>
            <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Civil Engineering Services
            </h4>
          </div>

          <div className="flex-1 lg:max-w-md lg:ml-8 flex flex-col items-end">
            <p className="text-gray-600 mb-0 sm:mb-2 leading-relaxed text-sm sm:text-base text-right">
              SAMLORIDEN ENGINEERING delivers comprehensive civil engineering solutions
              to build tomorrow's infrastructure with technical expertise and innovation.
            </p>
            <a href="/services" className="mt-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-full font-medium flex items-center transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start">
              EXPLORE ALL SERVICES
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            </a>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${service.className} relative group cursor-pointer`}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-on-dark">{service.title}</h3>
                  {service.description && (
                    <p className="text-gray-200 text-xs sm:text-sm mb-4 opacity-90 line-clamp-2">
                      {service.description}
                    </p>
                  )}
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
    </div>
  );
};

export default CivilEngineeringServices;