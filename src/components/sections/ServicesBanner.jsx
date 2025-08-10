import React from 'react';

export default function ConstructionBanner() {
  return (
    <section className="py-16 px-1 pt-24"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h5 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-on-dark mb-4 leading-tight">
            SERVICES TO CREATE<br />
            YOUR DREAM HOME
          </h5>
          <p className="text-gray-300 text-lg lg:text-xl max-w-4xl leading-relaxed">
            At the forefront of innovation and infrastructure, our civil engineering team designs and delivers reliable, sustainable, and cost-effective solutions. From roadways and bridges to water systems and large-scale developments, we transform ideas into lasting structures that shape communities and drive progress.
          </p>

        </div>

        <div className="grid grid-cols-12 gap-6 h-[28rem]">
          <div className="col-span-12 lg:col-span-7 h-full overflow-hidden">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Beautiful custom home with white exterior and green shutters"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right stacked images - split vertically */}
          <div className="col-span-12 lg:col-span-5 h-full overflow-hidden">
            <div className="flex flex-col h-full gap-6">
              {/* Top Image */}
              <div className="h-1/2 overflow-hidden">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Modern contemporary home design"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Bottom Image */}
              <div className="h-1/2 overflow-hidden">
                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Elegant traditional home with landscaping"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
