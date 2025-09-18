import React from 'react';
import { Users, Star, Home } from 'lucide-react';
import useAOS from '../../hooks/useAOS';

const WhyChooseUs = () => {
  useAOS({ duration: 1000, once: true });
  
  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: 'Integrated Civil Engineering & Real Estate Solutions Nigeria',
      description: 'Complete in-house management combining civil engineering expertise with real estate development, delivering consistency, cost-efficiency, and accelerated project delivery across Nigeria\'s major cities including Abuja, Lagos, and Port Harcourt.'
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: 'Proven Engineering Excellence & Construction Track Record',
      description: 'SAMLORIDEN\'s portfolio spans structural engineering, geotechnical investigations, sustainable building design, and infrastructure development with 100% regulatory compliance and internationally recognized quality standards across residential, commercial, and mixed-use projects.'
    },
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: 'Engineering-Backed Property Value Optimization Nigeria',
      description: 'Our unique approach leverages civil engineering expertise to maximize property investment returns through sustainable design, infrastructure integration, and technical excellence that enhances long-term asset performance and market competitiveness.'
    }
  ];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-down">
          <h5 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-wide" data-aos="fade-up">
            Why Choose SAMLORIDEN Engineering & Real Estate Consultancy Nigeria?
          </h5>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Selecting the right engineering and real estate partner is critical for project success in Nigeria's competitive market.
            SAMLORIDEN ENGINEERING AND CONSULTANCY LTD combines world-class civil engineering expertise with comprehensive 
            real estate solutions, delivering innovative infrastructure design, sustainable construction practices, and 
            property development strategies that maximize investment returns while meeting Nigeria's unique environmental 
            and regulatory requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4" data-aos="fade-up">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  {benefit.icon}
                </div>

                <div className="flex-1">
                  <h6 className="text-xl font-bold text-gray-900 mb-2 tracking-wide">
                    {benefit.title}
                  </h6>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Additional SEO-focused benefits */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <h6 className="text-lg font-bold text-gray-900 mb-3">
                Comprehensive Engineering & Real Estate Services Include:
              </h6>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full  mr-2" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span>Structural Engineering Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full  mr-2" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span>Geotechnical Site Investigation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full  mr-2" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span>Construction Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full  mr-2" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span>Property Development Planning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full  mr-2" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span>BIM Modeling & 3D Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full  mr-2" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span>Sustainable Building Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-2" style={{ background: 'var(--color-primary-alt)' }} ></div>
                  <span>Real Estate Marketing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full  mr-2"style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span>Property Management Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="SAMLORIDEN Engineering civil engineering consultation Nigeria structural design"
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-100 rounded-lg -z-10"></div>

            {/* SEO-focused testimonial or certification badge */}
            <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md" data-aos="zoom-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25+</div>
                <div className="text-xs text-gray-600">Engineering Projects</div>
                <div className="text-xs text-gray-600">Completed 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional SEO content section */}
        {/* <div className="mt-16 bg-white p-8 rounded-lg shadow-md" data-aos="fade-up">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h6 className="text-lg font-bold text-gray-900 mb-2">
                Nigerian Civil Engineering Expertise
              </h6>
              <p className="text-gray-600 text-sm">
                Licensed engineers with deep understanding of Nigerian Building Code, 
                environmental conditions, and construction standards across Lagos, Abuja, 
                Port Harcourt, and emerging markets.
              </p>
            </div>
            <div>
              <h6 className="text-lg font-bold text-gray-900 mb-2">
                Real Estate Market Intelligence
              </h6>
              <p className="text-gray-600 text-sm">
                Comprehensive market analysis, property valuation expertise, and 
                investment strategy development leveraging engineering insights for 
                maximum ROI in Nigeria's real estate sector.
              </p>
            </div>
            <div>
              <h6 className="text-lg font-bold text-gray-900 mb-2">
                Sustainable Development Focus
              </h6>
              <p className="text-gray-600 text-sm">
                Green building design, renewable energy integration, and climate-resilient 
                engineering solutions meeting international sustainability standards while 
                optimizing operational costs.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WhyChooseUs;