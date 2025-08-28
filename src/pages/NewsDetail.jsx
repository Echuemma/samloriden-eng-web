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

  // Get current URL for sharing
  const currentUrl = window.location.href;
  const shareTitle = encodeURIComponent(article.title);
  const shareDescription = encodeURIComponent(article.excerpt || article.title);

  // Social media sharing URLs
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    instagram: currentUrl // Instagram doesn't support direct URL sharing, so we'll copy to clipboard
  };

  const handleShare = (platform) => {
    if (platform === 'instagram') {
      // For Instagram, copy URL to clipboard since direct sharing isn't available
      navigator.clipboard.writeText(currentUrl).then(() => {
        alert('Link copied to clipboard! You can now paste it in your Instagram post or story.');
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = currentUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copied to clipboard! You can now paste it in your Instagram post or story.');
      });
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="relative">
      <div className="w-[90%] md:w-4/5 mx-auto lg:h-[600px] bg-white overflow-hidden flex my-0 md:mt-16 md:flex-row flex-col gap-4 md:gap-0">
        <div className="lg:w-4/5 flex flex-col lg:h-full">
          <div className="text-white p-4 sm:p-6 flex-shrink-0"
            style={{
              transition: 'background-color 0.3s ease',
            }}
          >
            <h6 className="text-lg sm:text-xl font-light mb-0">
              BLOG DETAIL
            </h6>
          </div>

          <div className="flex-1 lg:h-full lg:overflow-y-auto scrollbar-custom lg:min-h-0"
            style={{
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y'
            }}
          >
            <style jsx>{`
              .scrollbar-custom {
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none; /* IE and Edge */
              }
              
              .scrollbar-custom::-webkit-scrollbar {
                display: none; /* Chrome, Safari and Opera */
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

              {/* Social Media Sharing Section - Moved to bottom */}
              <div className="mt-8 mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h6 className="text-base font-semibold text-gray-800 mb-3">Enjoyed this article? Share it!</h6>
                <div className="flex gap-3 flex-wrap">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>

                  <button
                    onClick={() => handleShare('twitter')}
                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>

                  <button
                    onClick={() => handleShare('linkedin')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </button>

                  <button
                    onClick={() => handleShare('instagram')}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-colors duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </button>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
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