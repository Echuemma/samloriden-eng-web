import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Award, Users, Building } from 'lucide-react';

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Metropolitan Bridge Construction",
      description: "A 2.5km suspension bridge connecting two major districts",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Commercial Complex Development",
      description: "50-story mixed-use building with sustainable design",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Highway Infrastructure Project",
      description: "120km highway with smart traffic management systems",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Residential Township",
      description: "Eco-friendly housing complex for 5000 families",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Industrial Facility",
      description: "State-of-the-art manufacturing plant with green technology",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-[90%] md:w-4/5 mx-auto h-[600px] bg-white shadow-2xl overflow-hidden flex my-8 md:my-16 md:flex-row flex-col gap-4 md:gap-0">
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-scroll-container {
            height: calc(100% - 120px);
            max-height: 400px;
            overflow-y: scroll !important;
            -webkit-overflow-scrolling: touch;
            transform: translateZ(0);
          }
        }
      `}</style>
      <div className="hidden md:block md:flex-1 h-64 sm:h-80 md:h-full relative bg-gray-900 gap-4">
        <div className="relative w-full h-full overflow-hidden">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8 text-white">
                <h5 className="text-base sm:text-lg md:text-2xl font-bold mb-1 md:mb-2 text-on-dark drop-shadow-lg">
                  {project.title}
                </h5>
                <p className="text-white/90 text-xs sm:text-sm md:text-lg drop-shadow-md">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
{/* 
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button> */}

        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'scale-125'
                : 'bg-white/40 hover:bg-white/60'
                }`}
              style={index === currentSlide ? { backgroundColor: 'var(--color-primary-alt)' } : {}}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="md:flex-1 flex flex-col h-full">
        <div className=" text-white p-4 sm:p-6 md:p-8 text-center flex-shrink-0"
          style={{
            backgroundColor: 'var(--color-primary-alt)',
            transition: 'background-color 0.3s ease',
          }}
        >
          <h5 className="text-xl sm:text-2xl md:text-4xl font-light mb-2 md:mb-3">SAMLORIDEN ENGINEERING AND CONSULTANCY LTD</h5>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg">Building Tomorrow's Infrastructure Today</p>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-custom min-h-0 mobile-scroll-container" style={{
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y'
        }}>
          <style jsx>{`
            @media (max-width: 768px) {
              .mobile-scroll-container {
                height: calc(100% - 120px);
                max-height: 400px;
                overflow-y: scroll !important;
                -webkit-overflow-scrolling: touch;
                transform: translateZ(0);
              }
            }
            
            .scrollbar-custom {
              scrollbar-width: thin;
              scrollbar-color: rgba(59, 130, 246, 0.5) rgba(243, 244, 246, 0.3);
            }
            
            .scrollbar-custom::-webkit-scrollbar {
              width: 6px;
            }
            
            .scrollbar-custom::-webkit-scrollbar-track {
              background: rgba(243, 244, 246, 0.3);
              border-radius: 3px;
            }
            
            .scrollbar-custom::-webkit-scrollbar-thumb {
              background-color: rgba(59, 130, 246, 0.5);
              border-radius: 3px;
              transition: background-color 0.2s ease;
            }
            
            .scrollbar-custom::-webkit-scrollbar-thumb:hover {
              background-color: rgba(59, 130, 246, 0.7);
            }
            
            .scrollbar-custom::-webkit-scrollbar-thumb:active {
              background-color: rgba(59, 130, 246, 0.8);
            }
          `}</style>

          <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
            <h5 className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              <div
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-primary-alt)',
                }}
              >
                <Target size={12} className="text-white sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </div>
              Our Approach to Excellence
            </h5>
            <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              At SAMLORIDEN ENGINEERING AND CONSULTANCY LTD, our approach is rooted in delivering precise and practical civil engineering solutions tailored to the unique needs of each client. We focus on combining technical expertise with in-depth consultation to ensure every project is planned and executed flawlessly.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Whether it's urban infrastructure, site development, or structural assessments, our team is driven by a commitment to quality, innovation, and sustainability. Through collaborative planning and expert consultation, we aim to bring your vision to life—safely, efficiently, and cost-effectively.
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
            <h5 className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-primary-alt)',
                }}
              >
                <Award size={12} className="text-white sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </div>
              Key Achievements
            </h5>
            <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Over the past two decades, we have established ourselves as industry leaders through our commitment to excellence and innovation. Our achievements reflect our dedication to pushing the boundaries of what's possible in construction and engineering.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl text-white">
                <span className="text-lg sm:text-xl md:text-3xl font-bold block">500+</span>
                <span className="text-xs sm:text-sm opacity-90">Projects Completed</span>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white">
                <span className="text-lg sm:text-xl md:text-3xl font-bold block">25+</span>
                <span className="text-xs sm:text-sm opacity-90">Years Experience</span>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white">
                <span className="text-lg sm:text-xl md:text-3xl font-bold block">50+</span>
                <span className="text-xs sm:text-sm opacity-90">Expert Engineers</span>
              </div>
              <div className="text-center p-3 sm:p-4 md:p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white">
                <span className="text-lg sm:text-xl md:text-3xl font-bold block">15+</span>
                <span className="text-xs sm:text-sm opacity-90">Awards Won</span>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
            <h5 className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-primary-alt)',
                }}
              >
                <Users size={12} className="text-white sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </div>
              Our Team
            </h5>
            <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Our diverse team of experienced engineers, architects, project managers, and construction specialists brings together decades of collective expertise. We pride ourselves on fostering a collaborative environment where innovation thrives and every team member contributes to our shared success.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              From structural engineers specializing in high-rise construction to environmental experts focused on sustainable practices, our team covers every aspect of modern civil engineering and construction management.
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-8 hover:bg-gray-50 transition-colors duration-300">
            <h5 className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--color-primary-alt)',
                }}
              >
                <Building size={12} className="text-white sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </div>
              Core Services
            </h5>
            <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              We offer comprehensive engineering and construction services across multiple sectors, including commercial, residential, industrial, and infrastructure development. Our expertise spans from initial feasibility studies and design through construction management and post-completion support.
            </p>
            <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              Our specialized services include structural engineering, geotechnical analysis, project management, sustainable design consulting, and advanced construction technologies. We leverage Building Information Modeling (BIM), drone surveying, and smart construction techniques to deliver superior results.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Whether you're planning a small renovation or a large-scale infrastructure project, we have the expertise, resources, and commitment to bring your vision to life while ensuring safety, quality, and timely delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}