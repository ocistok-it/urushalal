'use client';

import { useCallback, useState } from 'react';
import CTA from '@/app/components/ui/CTA';
import useSWR from 'swr';
import { BlogResponse } from '@/app/types';
// import Pagination from '@/components/molecules/Pagination'
import BlogErrorState from './_components/BlogErrorState';
import ArticleCardSkeleton from './_components/ArticleCardSkeleton';
import Card from '@/components/molecules/Card';
import BackToTop from '@/components/organisms/BackToTop';
import { ApiError } from '@/app/lib/fetcher';
import Footer from '@/components/organisms/Footer';
import Pagination from '@/components/molecules/Pagination';

const LIMIT_OPTIONS = [5, 10, 20, 100];

const Page = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const { data, isLoading, error } = useSWR<BlogResponse, ApiError>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/pages?page=${page}&limit=${limit}`);

  const articles = data?.data?.articles ?? [];
  const totalPages = Math.ceil((data?.data?.total_articles ?? 0) / limit);

  const handleLimitChange = useCallback((newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  }, []);

  if (error) {
    return <BlogErrorState />;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="pt-24 md:pt-32 pb-12 px-4 max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Blog</h1>
        </div>
        <section className="px-4 max-w-7xl mx-auto pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (articles.length === 0)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20 text-center">
        <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-gray-400 text-lg">Belum ada artikel.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 md:pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Blog</h1>
      </div>

      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="flex justify-end items-center gap-2 mb-6">
          <span className="text-sm text-gray-500">Tampilkan:</span>
          {LIMIT_OPTIONS.map((opt) => (
            <button
              key={opt}
              onClick={() => handleLimitChange(opt)}
              className={`px-3 py-1 rounded-lg text-sm font-medium border transition-colors ${
                limit === opt ? 'bg-teal-600 text-white border-teal-600' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {articles.map((article) => (
            <Card
              key={article.id}
              href={`/blog/${article.handle}`}
              imageSrc={article.image.src}
              imageAlt={article.image.alt || article.title}
              title={article.title}
              meta={
                <>
                  <span className="text-teal-600 font-medium">{article.author}</span>
                  <span className="text-gray-400 mx-2">|</span>
                  <span className="text-gray-400">
                    {new Date(article.created_at).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </>
              }
            />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
      </section>

      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Page;
