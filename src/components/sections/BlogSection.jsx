import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../../data/newsData'; 
import Button from '../common/Button';

const BlogSection = () => {
  const latestNews = newsData.slice(0, 3);

  return (
    <section className="bg-gray-50 py-16 px-4">
     <div className="w-full md:w-11/12 lg:w-4/5 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <span className="text-yellow-600 text-sm font-medium">📝 News & Blog</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Articles & blog posts
            </h2>
            <p className="text-gray-600 max-w-md mb-6 lg:mb-0">
              Stay updated with the latest news and insights from our platform.
            </p>
          </div>
          
         
               <div className="mt-10">
                 <Link to="/news" className=" hover:underline"
                    style={{
                           color: 'var(--color-primary-alt)',
                         }}
                 >
                  VIEW ALL BLOG →</Link>
               </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 lg:mb-0">
          {latestNews.map((item) => (
            <Link
              to={`/news/${item.slug}`}
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group block"
            >
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h6 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h6>
                <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <Link to="/news" className="block"
              style={{
                  color: 'var(--color-primary-alt)',
                }}
        >
                  VIEW ALL BLOG →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;