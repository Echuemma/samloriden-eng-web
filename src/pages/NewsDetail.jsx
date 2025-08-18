import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from '../data/newsData';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    return <div className="p-8">Article not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 mt-10">

      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />
      )}
      {/* <p className="text-sm text-gray-500 mb-2">{new Date(article.date).toLocaleDateString()}</p> */}
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

      <div className="mt-10">
        <Link to="/news" className=" hover:underline"
          style={{
            color: 'var(--color-primary-alt)',
          }}
        >&larr; Back to News</Link>
      </div>
    </div>
  );
};

export default NewsDetail;