import React, { useEffect, useState } from 'react';

const carouselImages = [
  {
    src: '/images/about/construction-building.jpg',
    label: 'Ongoing Residential Construction Site',
  },
  {
    src: '/images/about/sky-scrapper.jpg',
    label: 'Modern Skyscraper Development',
  },
  {
    src: '/images/about/over-head.jpg',
    label: 'Overhead View of a Construction Zone',
  },
  {
    src: '/images/about/structure.jpg',
    label: 'Structural Reinforcement in Progress',
  },
  {
    src: '/images/about/tall-building.jpg',
    label: 'High-rise Building Project in Urban Area',
  },
  {
    src: '/images/about/construction-building.jpg',
    label: 'Commercial Complex Under Construction',
  },
  {
    src: '/images/about/boat.jpg',
    label: 'Coastal Engineering and Boat Docking',
  },
];

export default function AboutUsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6">
            <h1 className="text-on-dark text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide">
              About Us
            </h1>
            <div className="mt-4 w-24 h-0.5 bg-white mx-auto opacity-60"></div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="bg-primary text-white py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-5">



            <h4 className="text-4xl md:text-5xl lg:text-6xl font-light text-on-dark leading-tight">
              Building the future with precision and integrity. <br />
              Engineering excellence since 2001.
            </h4>

          </div>

          <div className="mb-16">
            <p className="text-[var(--color-text-light)] text-sm leading-relaxed text-lg leading-relaxed max-w-3xl text-justify">
              At SAMLORIDEN ENGINEERING AND CONSULTANCY LTD, we bring over two decades of trusted experience in civil engineering, construction, and strategic consultancy. Since 2001, our passion has been transforming ideas into infrastructure delivering innovative and sustainable solutions across residential, commercial, and industrial projects. From foundational design to final execution, we combine technical expertise, quality materials, and a commitment to excellence to exceed expectations. Our consultancy services empower clients with data-driven guidance, helping them navigate complex projects with clarity and confidence. At Samloriden, we don't just build we shape environments, empower communities, and create lasting value.
            </p>




          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="hidden md:block"></div>

            <div>
              <h3 className="text-2xl font-semibold text-on-dark mb-3">Mission</h3>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed text-lg leading-relaxed text-justify">
                Our mission is to simplify property ownership through trust, transparency,
                expertise, care, commitment, and innovation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-on-dark mb-3">Vision</h3>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed text-lg leading-relaxed text-justify">
                Our vision is to redefine real estate experiences through innovation,
                excellence, accessibility, trust, technology, and lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-primary">
        <div className="relative w-[90%] mx-auto h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg transition-all duration-700">
          <div
            className="w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${carouselImages[currentIndex].src}')`,
            }}
          ></div>

          <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white py-3 px-4 text-sm md:text-base transition-opacity duration-700">
            {carouselImages[currentIndex].label}
          </div>
        </div>
      </div>
    </>
  );
}
