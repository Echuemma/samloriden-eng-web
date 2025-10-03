// import React, { useState } from 'react';
// import { Phone, Mail, User, MessageSquare, Award, Users, Clock } from 'lucide-react';

// export default function CaspiraWebsite() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="relative min-h-screen overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('/images/about/construction-building.jpg')`
//           }}
//         />

//         <div className="relative z-10 min-h-screen">
//           <div className="container mx-auto px-6 py-8 lg:py-16">
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh] lg:min-h-[70vh]">

//               <div className="lg:col-span-6 text-white space-y-6 flex flex-col justify-center" data-aos="fade-left">
//                 <div className="flex items-center space-x-2 text-yellow-400 font-medium">
//                   <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
//                   <span>Get started today</span>
//                 </div>

//                 <h1 className="text-4xl lg:text-6xl font-bold text-on-dark leading-tight">
//                   Let's Build Something
//                   <br />
//                   <span className="text-yellow-400">Great Together</span>
//                 </h1>

//                 <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-xl">
//                   Ready to bring your vision to life? Caspira is here to deliver
//                   quality, efficiency, and excellence in every project. Contact us
//                   today and let's start building your future!
//                 </p>
//               </div>

//               <div className="lg:col-span-5 flex items-center justify-center lg:justify-end" data-aos="fade-right">
//                 <div className="bg-white rounded-2xl p-6 lg:p-8 w-full max-w-sm shadow-xl">
//                   <h4 className="text-2xl font-bold text-gray-800 mb-6">Engineering Excellence</h4>

//                   <div className="space-y-6">
//                     <div className="flex items-start space-x-3">
//                       <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
//                         <Award className="w-5 h-5 text-yellow-600" />
//                       </div>
//                       <div>
//                         <h6 className="font-bold text-gray-800 text-sm mb-1">25+ Years Experience</h6>
//                         <p className="text-gray-600 text-xs leading-relaxed">
//                           Proven track record in delivering complex civil engineering projects across Nigeria and West Africa.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-3">
//                       <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
//                         <Users className="w-5 h-5 text-blue-600" />
//                       </div>
//                       <div>
//                         <h6 className="font-bold text-gray-800 text-sm mb-1">Expert Team</h6>
//                         <p className="text-gray-600 text-xs leading-relaxed">
//                           Licensed professional engineers specializing in structural, geotechnical, and infrastructure design.
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-3">
//                       <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
//                         <Clock className="w-5 h-5 text-green-600" />
//                       </div>
//                       <div>
//                         <h6 className="font-bold text-gray-800 text-sm mb-1">On-Time Delivery</h6>
//                         <p className="text-gray-600 text-xs leading-relaxed">
//                           Committed to meeting project deadlines while maintaining the highest quality standards.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="py-12 lg:py-16 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl" data-aos="fade-up">
//             <div className="flex items-center space-x-2 text-yellow-500 font-medium mb-4">
//               <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//               <span>Our Goal</span>
//             </div>
//             <h4 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
//               Building Solutions That Last
//             </h4>
//             <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
//               At SAMLORIDEN, we are committed to delivering innovative, reliable, and sustainable
//               solutions tailored to our clients' unique needs. Our focus is on combining creativity
//               with technical expertise to transform challenges into opportunities.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, User, MessageSquare, Award, Users, Clock } from 'lucide-react';
import Button from '../common/Button';
export default function SamloridensContactHero() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/site-construction.jpeg')`
          }}
        />

        <div className="relative z-10 min-h-screen">
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="container mx-auto px-6 py-8 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh] lg:min-h-[70vh]">

              <div className="lg:col-span-6 text-white space-y-6 flex flex-col justify-center" data-aos="fade-left">
                <div className="flex items-center space-x-2 text-yellow-400 font-medium">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Engineering Excellence In Nigeria</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold text-on-dark leading-tight">
                  Let's Engineer Your Vision Into
                  <br />
                  <span className="text-yellow-400">Built Reality</span>
                </h1>

                <p className="text-lg lg:text-xl text-blue-100 leading-relaxed max-w-xl">
                  Ready to transform your engineering and real estate project? SAMLORIDEN
                  ENGINEERING AND CONSULTANCY LTD delivers comprehensive civil engineering,
                  structural design, and property development solutions across Nigeria.
                  Contact our licensed engineers today for expert consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="flex-1 sm:flex-none sm:w-auto">
                    <Button className="w-full text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center" style={{ background: 'var(--color-primary-alt)' }}>
                      Consultation
                    </Button>
                  </Link>
                  <Link to="/projects" className="flex-1 sm:flex-none sm:w-auto">
                    <button className=" w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                      View Projects
                    </button>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end" data-aos="fade-right">
                <div className="bg-white rounded-2xl p-6 lg:p-8 w-full max-w-sm shadow-xl">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">
                    Civil Engineering & Real Estate Excellence Nigeria
                  </h4>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                        <Award className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-gray-800 text-sm mb-1">25+ Years Engineering Experience</h6>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          Proven track record in structural engineering, BIM modeling, geotechnical investigations,
                          and infrastructure development across Nigeria including Abuja, Lagos, Port Harcourt.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0"
                      >
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-gray-800 text-sm mb-1">Licensed Professional Engineers</h6>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          Certified civil engineers specializing in structural design, construction management,
                          real estate development, and Nigerian Building Code compliance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h6 className="font-bold text-gray-800 text-sm mb-1">Integrated Project Delivery</h6>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          End-to-end engineering and real estate solutions from site investigation
                          to construction completion and property management services.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional credibility indicators */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold "
                        style={{color: 'var(--color-bg-dark)'}}
                        >150+</div>
                        <div className="text-xs text-gray-600">Projects Complete</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600"
                        style={{color: 'var(--color-bg-dark)'}}
                        >98%</div>
                        <div className="text-xs text-gray-600">Client Satisfaction</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-yellow-600"
                        style={{color: 'var(--color-bg-dark)'}}
                        >24/7</div>
                        <div className="text-xs text-gray-600">Engineering Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl" data-aos="fade-up">
            <div className="flex items-center space-x-2 text-yellow-500 font-medium mb-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Engineering Mission In Nigeria</span>
            </div>
            <h4 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6">
              Building Nigeria's Infrastructure Through Engineering Innovation
            </h4>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl">
              At SAMLORIDEN ENGINEERING AND CONSULTANCY LTD, we deliver comprehensive civil engineering
              and real estate solutions that combine technical excellence with sustainable development practices.
              Our integrated approach covers structural design, BIM modeling, construction management,
              geotechnical investigations, and property development across Nigeria's major markets.
            </p>

            {/* Service highlights for SEO */}
            {/* <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h6 className="font-bold text-gray-900 text-sm mb-2">Structural Engineering</h6>
                <p className="text-gray-600 text-xs">BIM modeling, structural analysis, Nigerian Building Code compliance</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h6 className="font-bold text-gray-900 text-sm mb-2">Construction Management</h6>
                <p className="text-gray-600 text-xs">Project oversight, quality control, timeline management</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h6 className="font-bold text-gray-900 text-sm mb-2">Real Estate Development</h6>
                <p className="text-gray-600 text-xs">Property development, market analysis, investment consulting</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h6 className="font-bold text-gray-900 text-sm mb-2">Infrastructure Engineering</h6>
                <p className="text-gray-600 text-xs">Road design, drainage systems, utility infrastructure</p>
              </div>
            </div> */}

            {/* Location coverage for local SEO */}
            {/* <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h6 className="font-bold text-gray-900 mb-4">Service Coverage Areas Nigeria:</h6>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Abuja FCT - Civil Engineering Services</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Lagos State - Structural Design & Real Estate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Port Harcourt - Infrastructure Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Kano State - Industrial Engineering</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Kaduna - Commercial Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  <span>Nationwide Engineering Consultancy</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}