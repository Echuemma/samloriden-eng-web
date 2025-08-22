import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from '../data/newsData';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return <div className="p-8">Article not found.</div>;
  }

  // Get similar articles (exclude current article and limit to 3)
  const similarArticles = newsData
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return (
    <div className="relative">
      {/* Main Article Container - with right margin for sidebar */}
      <div className="max-w-3xl mx-auto px-4 py-16 mt-10 lg:mr-96">
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

      {/* Fixed Similar Articles Sidebar */}
      {similarArticles.length > 0 && (
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 w-72 max-h-[80vh] overflow-y-auto hidden lg:block z-10 mt-10">
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <h5 className="text-lg font-bold text-gray-800 mb-1 sticky top-0 bg-white pb-2">Similar Articles</h5>
            <div className="space-y-4">
              {similarArticles.map((similarArticle) => (
                <Link
                  key={similarArticle.slug}
                  to={`/news/${similarArticle.slug}`}
                  className="group block bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-300 overflow-hidden"
                >
                  {similarArticle.image && (
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={similarArticle.image}
                        alt={similarArticle.title}
                        className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-3">
                    <h6 className="font-medium text-gray-800 group-hover:text-[var(--color-primary-alt)] transition-colors duration-300 text-sm line-clamp-2 mb-2">
                      {similarArticle.title}
                    </h6>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span className="font-medium truncate mr-2">{similarArticle.author}</span>
                      <span className="whitespace-nowrap">{new Date(similarArticle.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;