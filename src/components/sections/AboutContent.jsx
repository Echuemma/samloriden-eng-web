import { Link } from 'react-router-dom';
import CallToActionSection from './CallToActionSection';
import { Target, Award, Users, Building } from 'lucide-react';
import Button from '../common/Button';
import Carousel from '../common/Carousel';
import { projects } from '../../data/carouselData';
import useAOS from '../../hooks/useAOS';

export default function AboutSection() {
  useAOS({ duration: 1000, once: true });

  return (
    <>
      <div className="w-[90%] md:w-4/5 mx-auto h-[600px] bg-white overflow-hidden flex my-0 md:my-16 md:flex-row flex-col gap-4 md:gap-0" data-aos="fade-up">
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

        <div className="hidden md:block md:flex-1 h-64 sm:h-80 md:h-full relative bg-gray-900">
          <Carousel
            items={projects}
            autoPlay={true}
            interval={5000}
          />
        </div>

        <div className="md:flex-1 flex flex-col h-full" data-aos="fade-up">
          <div className="text-white p-4 sm:p-6 md:p-8 text-center flex-shrink-0"
            style={{
              backgroundColor: 'var(--color-primary-alt)',
              transition: 'background-color 0.3s ease',
            }}
          >
            <h6 className="text-xl sm:text-2xl md:text-4xl font-light mb-2 md:mb-3">
              SAMLORIDEN ENGINEERING AND CONSULTANCY LTD
            </h6>
            <p className="text-blue-100 text-sm sm:text-base md:text-lg">
              Building Tomorrow's Infrastructure Today
            </p>
          </div>

          <div className="flex-1 h-[100%] overflow-y-auto scrollbar-custom min-h-0 mobile-scroll-container"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y'
            }}
          >
            <style jsx>{`
              @media (max-width: 768px) {
                .mobile-scroll-container {
                  height: calc(100% - 120px);
                  max-height: 95%;
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
                  style={{ backgroundColor: 'var(--color-primary-alt)' }}
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
                  style={{ backgroundColor: 'var(--color-primary-alt)' }}
                >
                  <Award size={12} className="text-white sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                </div>
                Key Achievements
              </h5>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Over the past two decades, we have established ourselves as industry leaders through our commitment to excellence and innovation. Our achievements reflect our dedication to pushing the boundaries of what's possible in construction and engineering.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 md:p-6  rounded-xl text-white"
                  style={{ backgroundColor: 'var(--color-bg-dark)' }}>


                  <span className="text-lg sm:text-xl md:text-3xl font-bold block">500+</span>
                  <span className="text-xs sm:text-sm opacity-90">Projects Completed</span>
                </div>
                <div className="text-center p-3 sm:p-4 md:p-6  rounded-xl text-white"
                  style={{ backgroundColor: 'var(--color-primary-alt)' }}>


                  <span className="text-lg sm:text-xl md:text-3xl font-bold block"
                  >25+</span>
                  <span className="text-xs sm:text-sm opacity-90">Years Experience</span>
                </div>
                <div className="text-center p-3 sm:p-4 md:p-6  rounded-xl text-white"
                  style={{ backgroundColor: 'var(--color-primary-alt)' }}>
                  <span className="text-lg sm:text-xl md:text-3xl font-bold block">50+</span>
                  <span className="text-xs sm:text-sm opacity-90">Expert Engineers</span>
                </div>
                <div className="text-center p-3 sm:p-4 md:p-6  rounded-xl text-white"
                  style={{ backgroundColor: 'var(--color-bg-dark)' }}>


                  <span className="text-lg sm:text-xl md:text-3xl font-bold block">15+</span>
                  <span className="text-xs sm:text-sm opacity-90">Awards Won</span>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
              <h5 className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-primary-alt)' }}
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
                  style={{ backgroundColor: 'var(--color-primary-alt)' }}
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

      <CallToActionSection
        badge="Get Started"
        title="Building the Future, One Project at a Time"
        description="From residential homes to large-scale infrastructure, we combine innovation, precision, and engineering excellence to deliver lasting results. Partner with us to turn your vision into a structure built to stand the test of time."
      >
        <Link to="/contact">
          <Button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
            Contact Us
          </Button>
        </Link>
      </CallToActionSection>
    </>
  );
}