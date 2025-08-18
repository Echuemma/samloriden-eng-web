import React from 'react';
import useAOS from '../../hooks/useAOS';


export default function CivilEngineeringServices() {
  useAOS({ duration: 1000, once: true });
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <div className="text-center mb-16">
        <h3 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-down" >OUR SERVICES</h3>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up">
          SAMLORIDEN ENGINEERING AND CONSULTANCY LTD delivers comprehensive civil engineering solutions to build tomorrow's infrastructure.
          We combine technical expertise with innovative approaches, creating structures that serve
          communities for generations while meeting the highest safety and sustainability standards.
        </p>
      </div>

      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 lg:order-first order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern bridge construction"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Steel structure framework"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">STRUCTURAL ENGINEERING</h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Do you envision infrastructure that stands the test of time and perfectly serves your
              community's needs? Our structural engineering services at Apex transform your concepts
              into robust, safe, and efficient structures that exceed industry standards.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Our services include:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Structural Analysis & Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Foundation Engineering</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Seismic & Wind Load Analysis</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Bridge & Infrastructure Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Construction Documentation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Code Compliance & Permitting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images - show first on mobile, last on desktop */}
          <div className="grid grid-cols-2 gap-4 lg:order-last order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Highway interchange"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1486718448742-163d73305c64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Urban road planning"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:order-first order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">TRANSPORTATION ENGINEERING</h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your community deserves efficient, safe transportation networks. Our comprehensive
              transportation engineering services at Apex create seamless mobility solutions,
              transforming how people and goods move through your area with optimized traffic flow and safety.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Our services include:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Highway & Road Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Traffic Engineering & Analysis</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Intersection Design & Optimization</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Signal Design & Timing</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Pavement Design & Assessment</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Safety Studies & Improvements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images - show first on mobile */}
          <div className="grid grid-cols-2 gap-4 lg:order-last order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Water treatment facility"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1589722717808-9cdda1e85193?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Water pipeline construction"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">WATER & ENVIRONMENTAL ENGINEERING</h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Clean water and environmental protection are fundamental to thriving communities. Our water and
              environmental engineering services at Apex design sustainable systems that safeguard public health
              and preserve natural resources for future generations.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Our services include:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Water Treatment System Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Stormwater Management</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Wastewater Treatment Design</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Environmental Impact Assessments</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Flood Control & Drainage</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Water Resources Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images - show first on mobile, last on desktop */}
          <div className="grid grid-cols-2 gap-4 lg:order-first order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Soil testing equipment"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1553866126-e6e3b0c2b5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Foundation construction"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:order-first order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">GEOTECHNICAL ENGINEERING</h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The foundation of every successful project lies beneath the surface. Our geotechnical
              engineering services at Apex provide essential ground investigation and analysis, ensuring
              your structures are built on solid foundations with comprehensive soil and rock mechanics expertise.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Our services include:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Soil Investigation & Testing</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Foundation Design & Analysis</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Slope Stability Analysis</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Retaining Wall Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Ground Improvement Solutions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Earthquake Risk Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images - show first on mobile */}
          <div className="grid grid-cols-2 gap-4 lg:order-first order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Urban planning model"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Site development planning"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">SITE DEVELOPMENT & PLANNING</h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform raw land into thriving developments with strategic vision and technical precision.
              Our site development and planning services at Apex guide projects from initial concept through
              final construction, ensuring optimal land use and seamless integration with existing infrastructure.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Our services include:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Master Planning & Layout Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Grading & Earthwork Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Utility Infrastructure Planning</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Zoning & Permit Assistance</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Construction Administration</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Environmental Site Assessment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}