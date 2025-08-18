import React from 'react';
import useAOS from '../../hooks/useAOS'; 

export default function ConstructionBanner() {
  useAOS({ duration: 1000, once: true }); 
  
  return (
    <section className="py-16 px-1 pt-24"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-6 px-4">
          <h5 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-on-dark mb-4 leading-tight" data-aos="fade-down">
            SERVICES TO CREATE<br />
            YOUR DREAM HOME
          </h5>
          <p className="text-gray-300 text-lg lg:text-xl max-w-4xl leading-relaxed" data-aos="fade-up">
            At the forefront of innovation and infrastructure, our civil engineering team designs and delivers reliable, sustainable, and cost-effective solutions. From roadways and bridges to water systems and large-scale developments, we transform ideas into lasting structures that shape communities and drive progress.
          </p>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden lg:grid grid-cols-12 gap-6 h-[28rem] overflow-hidden">
          <div className="col-span-7 h-full overflow-hidden" data-aos="fade-right">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/services/services-one.jpeg"
                alt="Beautiful custom home with white exterior and green shutters"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right stacked images - split vertically */}
          <div className="col-span-5 h-full overflow-hidden">
            <div className="flex flex-col h-full gap-6">
              {/* Top Image */}
              <div className="h-1/2 overflow-hidden" data-aos="fade-up">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/services/services-two.jpeg"
                    alt="Modern contemporary home design"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Bottom Image */}
              <div className="h-1/2 overflow-hidden" data-aos="fade-down">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/images/services/services-three.jpeg"
                    alt="Elegant traditional home with landscaping"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Single Column Stack */}
        <div className="lg:hidden space-y-4 px-4">
          {/* First Image - Full Width */}
          <div className="w-full h-64 sm:h-72 overflow-hidden" data-aos="fade-up">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/services/services-one.jpeg"
                alt="Beautiful custom home with white exterior and green shutters"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Second and Third Images - Side by Side on Mobile */}
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-48 sm:h-56 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/services/services-two.jpeg"
                  alt="Modern contemporary home design"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="w-full h-48 sm:h-56 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/services/services-three.jpeg"
                  alt="Elegant traditional home with landscaping"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}