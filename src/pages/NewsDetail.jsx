import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from '../data/newsData';

const NewsDetail = () => {
  const { slug } = useParams();
  const [sidebarFixed, setSidebarFixed] = useState(true);
  const article = newsData.find((item) => item.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const motherContainer = document.querySelector('.mother-container');
      const mainContent = document.querySelector('.main-content');
      
      if (!motherContainer || !mainContent) return;

      const motherRect = motherContainer.getBoundingClientRect();
      const mainContentRect = mainContent.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if we're very close to the end of the main content (5px buffer)
      const contentEndDistance = mainContentRect.bottom - windowHeight;
      const shouldStartMoving = contentEndDistance <=-0; 

      setSidebarFixed(!shouldStartMoving);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (!article) {
    return <div className="p-8">Article not found.</div>;
  }

  // Get similar articles (exclude current article and limit to 3)
  const similarArticles = newsData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <div className="relative">
      {/* Mother Container - Contains both main content and sidebar */}
      <div className="mother-container relative max-w-7xl mx-auto px-4 py-16 mt-10">
        
        {/* Main Content Container */}
        <div className="main-content max-w-3xl mx-auto lg:mr-80">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 object-cover rounded-xl mb-6"
            />
          )}

          <h6 className="text-3xl font-bold text-gray-800 mb-1">{article.title}</h6>

          <div
            className="pt-0 mt-0 text-gray-700 leading-loose whitespace-pre-line prose prose-lg max-w-none prose-h3:mb-2"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="flex justify-end gap-2 text-sm px-6 text-gray-600 mb-3">
            <span>
              by: <span className="text-[var(--color-primary-alt)] font-semibold">{article.author},</span>
            </span>
            <span>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <div className="mt-12">
            <Link
              to="/news"
              className="hover:underline"
              style={{
                color: 'var(--color-primary-alt)',
              }}
            >
              &larr; Back to News
            </Link>
          </div>
        </div>

        {/* Similar Articles Sidebar - Initially fixed, then moves with container */}
        {similarArticles.length > 0 && (
          <div 
            className={`hidden lg:block w-72 pt-16 transition-all duration-500 ease-out ${
              sidebarFixed 
                ? 'fixed top-20 right-8' 
                : 'absolute top-0 right-0'
            }`}
          >
            <div className={`w-64 max-h-[70vh] overflow-y-auto ${sidebarFixed ? '' : 'sticky top-20'}`}>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h6 className="text-base font-bold text-gray-800 mb-3 sticky top-0 bg-white pb-2">Similar Articles</h6>
                <div className="space-y-3">
                  {similarArticles.map((similarArticle) => (
                    <Link
                      key={similarArticle.slug}
                      to={`/news/${similarArticle.slug}`}
                      className="group block bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300 overflow-hidden"
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
                      <div className="p-3">
                        <p className="font-medium text-gray-800 group-hover:text-[var(--color-primary-alt)] transition-colors duration-300 text-sm line-clamp-2 mb-2">
                          {similarArticle.title}
                        </p>
                        <div className="flex justify-between text-xs items-center text-gray-500">
                          <span className="font-medium truncate mr-1">{similarArticle.author}</span>
                          <span className="whitespace-nowrap">{new Date(similarArticle.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    );
};

export default NewsDetail;