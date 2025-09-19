import React from 'react';
import useAOS from '../../hooks/useAOS';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function EngineeringRealEstateServices() {
  useAOS({ duration: 1000, once: true });
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <div className="text-center mb-16">
        <h4 className="text-4xl font-bold text-gray-900 mb-6" data-aos="fade-down">
          Civil Engineering & Real Estate Services 
        </h4>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up">
          SAMLORIDEN ENGINEERING AND CONSULTANCY LTD combines world-class civil engineering expertise 
          with comprehensive real estate solutions. Our integrated approach ensures every project is 
          built on solid engineering foundations while maximizing property investment potential across Nigeria.
        </p>
      </div>

      {/* Site Assessment & Development Planning */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 lg:order-first order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Geotechnical site investigation Nigeria"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Site planning and feasibility analysis Nigeria"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">
              Site Assessment & Development Planning Nigeria
            </h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our civil engineers conduct comprehensive site investigations combining geotechnical analysis, 
              topographical surveys, and market feasibility studies. This engineering-first approach ensures 
              optimal land acquisition decisions with complete understanding of soil conditions, drainage 
              requirements, and development potential for Nigerian conditions.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Engineering & Development Services:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Geotechnical Site Investigation</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Topographical & Boundary Surveys</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Environmental Impact Assessment</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Market Feasibility & ROI Analysis</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Infrastructure Connectivity Assessment</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Regulatory Compliance Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structural Design & Architecture */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 lg:order-last order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Structural engineering design Nigeria"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable building design Nigeria"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:order-first order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">
              Structural Engineering Design & Architecture Nigeria
            </h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our structural engineers collaborate with architects to create buildings optimized for Nigerian 
              climate conditions, seismic requirements, and market demands. We integrate Building Information 
              Modeling (BIM) with sustainable design principles to deliver structures that maximize both 
              safety and real estate value.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Design & Engineering Services:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Structural Analysis & Design</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">BIM Modeling & 3D Visualization</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Sustainable Building Systems</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Nigerian Building Code Compliance</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Value Engineering & Cost Optimization</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Climate-Responsive Design Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Construction Management & Quality Control */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 lg:order-first order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction management Nigeria"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Quality construction materials Nigeria"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">
              Construction Management & Quality Control Nigeria
            </h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced construction managers oversee every aspect of building delivery, ensuring 
              adherence to engineering specifications, safety protocols, and quality standards. We coordinate 
              skilled professionals, manage material procurement, and maintain strict timeline and budget 
              control for optimal project outcomes and long-term property performance.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Project Management Services:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Engineering-Led Project Management</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Quality Assurance & Testing</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Schedule & Budget Control</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Safety & Regulatory Compliance</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Material Specification & Procurement</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Contractor Coordination & Supervision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Development Marketing */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 lg:order-last order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Property marketing strategy Nigeria"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Engineering-backed property promotion Nigeria"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:order-first order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">
              Engineering-Backed Property Marketing Nigeria
            </h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our marketing approach leverages our engineering credibility to showcase technical superiority 
              and build buyer confidence. We create compelling campaigns that highlight structural quality, 
              sustainable features, and engineering innovations that differentiate properties in the Nigerian 
              real estate market.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Marketing & Positioning Services:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Technical Feature Highlighting</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Engineering Credibility Marketing</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Digital Platform Development</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Professional Property Photography</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Market Analysis & Positioning</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Lead Generation & Conversion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sales & Technical Consultation */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 lg:order-first order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Technical property consultation Nigeria"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Engineering-informed client support Nigeria"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">
              Sales & Technical Consultation Nigeria
            </h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our sales team includes qualified engineers who provide technical expertise throughout the 
              sales process. Clients receive detailed explanations of structural systems, material quality, 
              and long-term performance expectations, building confidence through engineering transparency 
              and professional expertise.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Sales & Consultation Services:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Engineer-Led Sales Consultations</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Technical Specification Explanations</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Investment Performance Analysis</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Transparent Process Management</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Documentation & Legal Coordination</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Long-term Relationship Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Support & Property Management */}
      <div className="mb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4 lg:order-last order-first" data-aos="fade-up">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Engineering property maintenance Nigeria"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Technical property support Nigeria"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="lg:order-first order-last" data-aos="fade-down">
            <h5 className="text-3xl font-bold text-gray-900 mb-4">
              Engineering Support & Property Management Nigeria
            </h5>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our post-completion services leverage engineering expertise to maintain optimal property 
              performance. We provide technical maintenance guidance, structural monitoring, and engineering 
              support that protects your investment while ensuring long-term structural integrity and 
              operational efficiency.
            </p>

            <h6 className="text-lg font-bold text-gray-900 mb-4">Post-Completion Engineering Services:</h6>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Structural Health Monitoring</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Preventive Maintenance Planning</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Engineering Warranty Support</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Property Performance Optimization</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">Technical Upgrade Consulting</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ background: 'var(--color-primary-alt)' }}></div>
                  <span className="text-gray-700">24/7 Engineering Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gray-50 p-8 rounded-lg text-center" data-aos="fade-up">
        <h5 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Start Your Engineering-Backed Real Estate Project?
        </h5>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Contact SAMLORIDEN ENGINEERING for comprehensive civil engineering and real estate solutions 
          that combine technical excellence with market insight across Nigeria.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
          <Button className=" text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" style={{ background: 'var(--color-primary-alt)' }}>
            Consultation
          </Button>
          </Link>
          <Link to="/projects">
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            View Projects
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}