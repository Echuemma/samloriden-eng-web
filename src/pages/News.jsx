import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/newsData';

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-gray-800 mb-10">News & Insights</h3>
        
        {/* Changed grid to single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <Link to={`/news/${item.slug}`} key={item.id}>
              <div className="bg-white hover:shadow-lg transition-shadow duration-300 rounded-lg border border-gray-100 cursor-pointer h-full overflow-hidden p-4">
                
                <div className="w-full h-full object-center object-cover">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-4">
                    <span className="text-blue-600 text-sm font-medium hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
