// import React from 'react';
// import Button from '../common/Button';

// const CaspiraHeroBanner = () => {
//   return (
//     <div className="relative min-h-screen bg-cover bg-center bg-no-repeat mt-5"
//          style={{
//            backgroundImage: `url('https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
//          }}>
      
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/60"></div>
//       {/* <div className="relative z-10 bg-black/30 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-6 py-3">
//           <p className="text-white/80 text-sm">Welcome Caspira</p>
//         </div>
//       </div> */}

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex items-center min-h-[calc(100vh-60px)]">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
          
//           <div className="lg:col-span-2 space-y-8">
//             <div>
//               <h1 className="text-5xl lg:text-6xl text-on-dark font-bold text-white leading-tight mb-6">
//                 Where Vision Meets
//                 <br />
//                 <span className="text-[var(--color-secondary)]">Solid Foundations</span>

//               </h1>
              
//               <p className="text-lg text-white/90 leading-relaxed max-w-2xl mb-8">
//                 At
//               <span className='text-[var(--color-secondary)]'> SAMLORIDEN ENGINEERING AND CONSULTANCY LTD</span>
//               , we bring expertise, precision, and innovation to every project. 
//                 From concept to completion, we build with integrity, efficiency, and excellence.
//               </p>
              
//               <div className="flex items-center gap-4">
//                 <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 group">
//                   EXPLORE NOW
//                   <span className="transform group-hover:translate-x-1 transition-transform">→</span>
//                 </Button>
                
//                 <button className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group">
//                   <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
//                 </button>
//               </div>
//             </div>

//             <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm">
//               <div className="flex items-center gap-4">
//                 <div className="w-20 h-16 bg-gray-200 rounded-lg overflow-hidden">
//                   <img 
//                     src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
//                     alt="Building" 
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div>
//                   <div className="text-3xl font-bold text-gray-800 mb-1">20+</div>
//                   <div className="text-sm text-gray-600">Nation wide satisfied customer</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:col-span-1">
//             <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 max-w-sm ml-auto">
//               <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-4">
//                 <img 
//                   src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
//                   alt="Modern Villa" 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
              
//               <h3 className="text-xl font-bold text-gray-800 mb-2">Elevating Lifestyles</h3>
//               <p className="text-gray-600 text-sm mb-4">
//                 Lorem ipsum dolor sit amet consectetur adipiscing elit.
//               </p>
              
//               <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group">
//                 GET STARTED
//                 <span className="transform group-hover:translate-x-1 transition-transform">→</span>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Logo Bar */}
//       {/* <div className="relative z-10 bg-black/80 backdrop-blur-sm">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-between opacity-60">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white/20 rounded-full"></div>
//               <span className="text-white/60 text-sm font-medium">LOREM IPSUM</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <div className="w-4 h-4 border-2 border-white/60 rounded-full"></div>
//               </div>
//               <span className="text-white/60 text-sm font-medium">LOREM IPSUM</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
//               </div>
//               <span className="text-white/60 text-sm font-medium">LOREM IPSUM</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <div className="w-1 h-4 bg-white/60 rounded-full mr-0.5"></div>
//                 <div className="w-1 h-3 bg-white/60 rounded-full mr-0.5"></div>
//                 <div className="w-1 h-5 bg-white/60 rounded-full"></div>
//               </div>
//               <span className="text-white/60 text-sm font-medium">LOREM IPSUM</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <div className="w-4 h-4 border-2 border-white/60 rounded-full relative">
//                   <div className="absolute inset-1 bg-white/60 rounded-full"></div>
//                 </div>
//               </div>
//               <span className="text-white/60 text-sm font-medium">LOREM IPSUM</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <div className="w-0 h-0 border-l-[6px] border-l-white/60 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></div>
//               </div>
//               <span className="text-white/60 text-sm font-medium">LOREM IPSUM</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                 <div className="w-4 h-2 bg-white/60 rounded-full"></div>
//               </div>
//               <span className="text-white/60 text-sm font-medium">LOREM IPSUM</span>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default CaspiraHeroBanner;


import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const CaspiraHeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      backgroundImage: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Where Vision Meets",
      subtitle: "Solid Foundations",
      description: "At SAMLORIDEN ENGINEERING AND CONSULTANCY LTD, we bring expertise, precision, and innovation to every project. From concept to completion, we build with integrity, efficiency, and excellence.",
      statNumber: "20+",
      statText: "Nation wide satisfied customer",
      statImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      cardTitle: "Elevating Lifestyles",
      cardDescription: "Creating spaces that inspire and transform communities across the nation.",
      cardImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      backgroundImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Engineering Excellence",
      subtitle: "Beyond Expectations",
      description: "Our cutting-edge engineering solutions combine traditional craftsmanship with modern innovation. We deliver projects that stand the test of time, exceeding industry standards and client expectations.",
      statNumber: "150+",
      statText: "Projects completed successfully",
      statImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      cardTitle: "Innovative Design",
      cardDescription: "Pushing boundaries with sustainable and forward-thinking architectural solutions.",
      cardImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      backgroundImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Building Tomorrow's",
      subtitle: "Infrastructure Today",
      description: "From residential complexes to commercial landmarks, we shape the future of urban development. Our commitment to quality and sustainability creates lasting value for generations to come.",
      statNumber: "25",
      statText: "Years of industry expertise",
      statImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      cardTitle: "Sustainable Future",
      cardDescription: "Leading the industry with eco-friendly practices and green building solutions.",
      cardImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 10000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden mt-5">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${slide.backgroundImage}')`
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute top-6 right-6 z-30 flex gap-2">
        <button
          onClick={toggleAutoPlay}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex items-center min-h-[calc(100vh-60px)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
          <div className="lg:col-span-2 space-y-8">
            <div className="transform transition-all duration-700">
              <h1 className="text-5xl lg:text-6xl text-on-dark font-bold text-white leading-tight mb-6">
                {currentSlideData.title}
                <br />
                <span className="text-[var(--color-secondary)]">
                  {currentSlideData.subtitle}
                </span>
              </h1>

              <p className="text-lg text-white/90 leading-relaxed max-w-2xl mb-8 transform transition-all duration-700 delay-100">
                {currentSlideData.description}
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-sm transform transition-all duration-700 delay-200">
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={currentSlideData.statImage}
                    alt="Statistic illustration"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">
                    {currentSlideData.statNumber}
                  </div>
                  <div className="text-sm text-gray-600">
                    {currentSlideData.statText}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 max-w-sm ml-auto transform transition-all duration-700 delay-300">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden mb-4">
                <img
                  src={currentSlideData.cardImage}
                  alt={currentSlideData.cardTitle}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentSlideData.cardTitle}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {currentSlideData.cardDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-[var(--color-secondary)] transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>
    </div>
  );
};

export default CaspiraHeroBanner;