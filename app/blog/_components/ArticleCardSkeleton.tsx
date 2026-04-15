const ArticleCardSkeleton = () => (
  <div className="border-b border-gray-200 pb-8 mb-8 animate-pulse">
    <div className="w-full aspect-4/3 rounded-xl bg-gray-200 mb-4" />
    <div className="flex items-center gap-2 mb-2">
      <div className="h-4 w-20 bg-gray-200 rounded" />
      <div className="h-4 w-1 bg-gray-100 rounded" />
      <div className="h-4 w-28 bg-gray-200 rounded" />
    </div>
    <div className="h-5 w-3/4 bg-gray-200 rounded" />
  </div>
);

export default ArticleCardSkeleton;
