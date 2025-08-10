// import React from 'react';
// import { Link } from 'react-router-dom';
// import newsData from '../../data/newsData';

// const News = () => {
//   return (
//     <div className="min-h-screen bg-white pt-10 pb-16">
//       <div className="max-w-6xl mx-auto px-4 py-16">

//         <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg mb-16">
//           <div 
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage: `url('/images/news/construction-building.jpg')`,
//             }}
//           />

//           <div className="absolute inset-0 bg-black/40"></div>

//           <div className="absolute inset-0">
//             <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-600/30 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
//             <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-red-600/25 to-transparent rounded-full transform translate-x-20 translate-y-20" />
//           </div>

//           <div className="relative h-full flex flex-col justify-center px-4 md:px-16 text-white">
//             <div className="inline-block bg-green-400 text-black px-3 py-1 rounded text-xs font-medium mb-4 w-fit">
//               International Women in Engineering Day 2025
//             </div>

//             <h3 className="text-4xl md:text-5xl text-on-dark lg:text-6xl font-bold mb-6 leading-tight">
//               #TogetherWeEngineer
//             </h3>

//             <button className="inline-flex items-center text-white border border-[var(--color-primary-alt)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--color-primary-alt)] hover:text-black transition-colors duration-200 w-fit mt-4">
//               Read more
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 ml-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <h2 className="text-4xl font-bold text-gray-900 mb-12">News & Insights</h2>

//         <div className="space-y-5">
//           {newsData.map((item, index) => (
//             <div
//               key={item.id}
//               className={`flex flex-col lg:flex-row ${
//                 index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
//               } overflow-hidden rounded-lg bg-white w-full`} 
//             >
//               <div className="lg:w-1/2 w-full p-1 lg:p-4 flex items-center justify-center">
//                 <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover rounded-lg"
//                   />
//                 </div>
//               </div>

//               <div className="lg:w-1/2 w-full p-4 lg:p-6 flex flex-col justify-center min-h-[320px]">
//                 <h5 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
//                   {item.title}
//                 </h5>
//                 <p className="text-gray-700 text-sm mb-4 line-clamp-3">{item.description}</p>

//                 <div className="text-sm text-gray-600 mb-6">
//                   by{' '}
//                   <span className="text-[var(--color-primary-alt)] font-semibold">
//                     {item.author}
//                   </span>
//                   <br />
//                   <span>
//                     {new Date(item.date).toLocaleDateString('en-US', {
//                       year: 'numeric',
//                       month: 'long',
//                       day: 'numeric',
//                     })}
//                   </span>
//                 </div>

//                 <Link
//                   to={`/news/${item.slug}`}
//                   className="inline-flex items-center text-[var(--color-primary-alt)] border border-[var(--color-primary-alt)] px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-primary-alt)] hover:text-white transition-colors duration-200 w-fit"
//                 >
//                   Read More
//                   <svg
//                     xmlns="http://www.w3.svg"
//                     className="h-4 w-4 ml-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;


import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../../data/newsData';
import useAOS from '../../hooks/useAOS'; 

const News = () => {
  useAOS({ duration: 1000, once: true }); 

  return (
    <div className="min-h-screen bg-white pt-10 pb-16">
      <div className="max-w-6xl mx-auto px-4 py-16">

        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg mb-16" data-aos="fade-up">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/news/construction-building.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-600/30 to-transparent rounded-full transform translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-red-600/25 to-transparent rounded-full transform translate-x-20 translate-y-20" />
          </div>
          <div className="relative h-full flex flex-col justify-center px-4 md:px-16 text-white">
            <div className="inline-block bg-green-400 text-black px-3 py-1 rounded text-xs font-medium mb-4 w-fit">
              International Women in Engineering Day 2025
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-on-dark font-bold mb-6 leading-tight">
              #TogetherWeEngineer
            </h3>
            <button className="inline-flex items-center text-white border border-[var(--color-primary-alt)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[var(--color-primary-alt)] hover:text-black transition-colors duration-200 w-fit mt-4">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <h3
          data-aos="fade-right"
          // data-aos-delay={index * 100}
          className="text-4xl font-bold text-gray-900 mb-2"
        >
          News & Insights
        </h3>

        <div className="space-y-5">
          {newsData.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                } overflow-hidden rounded-lg bg-white w-full`}
            >
              <div className="lg:w-1/2 w-full p-1 lg:p-4 flex items-center justify-center">
                <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="lg:w-1/2 w-full p-4 lg:p-6 flex flex-col justify-center min-h-[320px]">
                <h5 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h5>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">{item.description}</p>
                <div className="text-sm text-gray-600 mb-6">
                  by <span className="text-[var(--color-primary-alt)] font-semibold">{item.author}</span>
                  <br />
                  <span>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <Link
                  to={`/news/${item.slug}`}
                  className="inline-flex items-center text-[var(--color-primary-alt)] border border-[var(--color-primary-alt)] px-4 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-primary-alt)] hover:text-white transition-colors duration-200 w-fit"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
