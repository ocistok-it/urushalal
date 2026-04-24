'use client';

import { use } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import CTA from '@/app/components/ui/CTA';
import useSWR from 'swr';
import { ArticleDetailResponse } from '@/app/types';
import ArticleDetailSkeleton from './_components/ArticleDetailSkeleton';
import BlogErrorState from '@/app/blog/_components/BlogErrorState';
import Card from '@/components/molecules/Card';
import BackToTop from '@/app/components/organisms/BackToTop';
import { ApiError } from '@/app/lib/fetcher';
import Footer from '@/app/components/organisms/Footer';

function formatDate(isoString: string) {
  return new Date(isoString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

interface Props {
  params: Promise<{ handle: string }>;
}



const Article = ({ article }: { article: ArticleDetailResponse['data'] }) => {
  return (          
          <article>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-tight mb-4">{article.title}</h1>

            <p className="text-sm text-gray-400 mb-8 text-center">
              <span className="text-teal-600 font-medium">{article.author}</span>
              <span className="mx-2">|</span>
              {formatDate(article.created_at)}
            </p>

            <div className="relative w-full aspect-video overflow-hidden rounded-xl mb-10">
              <Image src={article.image.src} alt={article.image.alt || article.title} fill className="object-cover" unoptimized priority />
            </div>

            {article.tag?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tag.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700">
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="prose prose-gray prose-img:rounded-xl prose-a:text-teal-600 hover:prose-a:text-teal-700 max-w-none" dangerouslySetInnerHTML={{ __html: article.body_html }} />
          </article>)
}

const Page = ({ params }: Props) => {
  const { handle } = use(params);

  const { data, isLoading, error } = useSWR<ArticleDetailResponse, ApiError>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/${handle}`);

  const article = data?.data;


  let content: React.ReactNode;

  if (isLoading) {
    content = <ArticleDetailSkeleton />;
  }
    else if (error) {
    content = <BlogErrorState />; 
  } else {
content = <Article article={article!} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 md:pt-32 pb-16 px-4 max-w-4xl mx-auto">
        {/* <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Blog
        </Link> */}
          {content}
      </div>

      {article?.recomended?.length && (
        <div className="px-4 max-w-7xl mx-auto pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Blog Terkait</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="grid grid-cols-3 gap-x-8 gap-y-0 min-w-160">
              {article.recomended.map((rec) => (
                <div className="w-full" key={rec.id}>
                  <Card
                    href={`/blog/${rec.handle}`}
                    imageSrc={rec.banner}
                    imageAlt={rec.title}
                    title={rec.title}
                    meta={
                      <>
                        <span className="text-teal-600 font-medium">{rec.author}</span>
                        <span className="text-gray-400 mx-2">|</span>
                        <span className="text-gray-400">{formatDate(new Date(rec.date).toLocaleString())}</span>
                      </>
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Page;
