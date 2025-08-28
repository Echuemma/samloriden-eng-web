import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from '../data/newsData';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return <div className="p-8">Article not found.</div>;
  }

  const similarArticles = newsData
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  return (
    <div className="relative">
      <div className="w-[90%] md:w-4/5 mx-auto lg:h-[600px] bg-white overflow-hidden flex my-0 md:my-16 md:flex-row flex-col gap-4 md:gap-0">
                <div className="lg:w-4/5 flex flex-col lg:h-full">

          <div className="text-white p-4 sm:p-6 flex-shrink-0"
            style={{
              transition: 'background-color 0.3s ease',
            }}
          >
            <h6 className="text-lg sm:text-xl font-light mb-0">
              BLOG DETAIL
            </h6>
            {/* <p className="text-blue-100 text-sm">
              Stay informed with our latest updates
            </p> */}
          </div>

          <div className="flex-1 lg:h-full lg:overflow-y-auto scrollbar-custom lg:min-h-0"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y'
            }}
          >
            <style jsx>{`
              .scrollbar-custom {
                scrollbar-width: thin;
                scrollbar-color: rgba(59, 130, 246, 0.5) rgba(243, 244, 246, 0.3);
              }
              
              .scrollbar-custom::-webkit-scrollbar {
                width: 6px;
              }
              
              .scrollbar-custom::-webkit-scrollbar-track {
                background: rgba(243, 244, 246, 0.3);
                border-radius: 3px;
              }
              
              .scrollbar-custom::-webkit-scrollbar-thumb {
                background-color: rgba(59, 130, 246, 0.5);
                border-radius: 3px;
                transition: background-color 0.2s ease;
              }
              
              .scrollbar-custom::-webkit-scrollbar-thumb:hover {
                background-color: rgba(59, 130, 246, 0.7);
              }
            `}</style>

            <div className="p-4 sm:p-6 md:p-8">
              {article.image && (
                <div className="mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-sm"
                  />
                </div>
              )}

              <h6 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-tight">
                {article.title}
              </h6>

              <div className="flex justify-between items-center text-sm text-gray-600 mb-6 pb-4 border-b border-gray-200">
                <span>
                  by: <span className="text-[var(--color-primary-alt)] font-semibold">{article.author}</span>
                </span>
                <span>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <div
                className="text-gray-700 leading-relaxed prose prose-lg max-w-none prose-h3:mb-3 prose-p:mb-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <div className="mt-12 pt-6 border-t border-gray-200">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 hover:underline transition-colors duration-300"
                  style={{
                    color: 'var(--color-primary-alt)',
                  }}
                >
                  <span>&larr;</span>
                  Back to News
                </Link>
              </div>

              <div className="h-8"></div>
            </div>
          </div>
        </div>

        {similarArticles.length > 0 && (
          <div className="hidden lg:block lg:w-1/5 h-full relative ml-4">
            <div className="h-full overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="text-white px-3 flex-shrink-0"
                  style={{
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <h6 className="text-sm font-semibold mb-0">
                    Similar Articles
                  </h6>
                </div>
                <div className="flex-1 p-3 flex flex-col justify-start">
                  <div className="space-y-3">
                    {similarArticles.slice(0, 3).map((similarArticle) => (
                      <Link
                        key={similarArticle.slug}
                        to={`/news/${similarArticle.slug}`}
                        className="group block bg-white hover:bg-gray-50 rounded-lg transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md border border-gray-100"
                      >
                        {similarArticle.image && (
                          <div className="aspect-video overflow-hidden rounded-t-lg h-16 w-full">
                            <img
                              src={similarArticle.image}
                              alt={similarArticle.title}
                              className="w-full h-16 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <div className="p-2">
                          <p className="font-medium text-gray-800 group-hover:text-[var(--color-primary-alt)] transition-colors duration-300 text-xs line-clamp-2 mb-1 leading-tight">
                            {similarArticle.title}
                          </p>
                          <div className="text-xs text-gray-500">
                            <span className="font-medium truncate">{similarArticle.author}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="block lg:hidden w-[90%] mx-auto mt-8 mb-4">
        <h6 className="text-lg font-bold text-gray-800 mb-3">Similar Articles</h6>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {similarArticles.map((similarArticle) => (
            <Link
              key={similarArticle.slug}
              to={`/news/${similarArticle.slug}`}
              className="group block bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300 overflow-hidden flex-shrink-0 w-48"
            >
              {similarArticle.image && (
                <div className="aspect-video overflow-hidden rounded-t-lg h-24 w-full">
                  <img
                    src={similarArticle.image}
                    alt={similarArticle.title}
                    className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-3">
                <p className="font-medium text-gray-800 group-hover:text-[var(--color-primary-alt)] transition-colors duration-300 text-sm line-clamp-2 mb-1">
                  {similarArticle.title}
                </p>
                <div className="text-xs text-gray-500">
                  <span className="font-medium">{similarArticle.author}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;