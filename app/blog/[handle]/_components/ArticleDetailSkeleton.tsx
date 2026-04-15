const ArticleDetailSkeleton = () => (
  <div className="animate-pulse max-w-3xl mx-auto">
    <div className="h-4 w-24 bg-gray-200 rounded mb-8" />
    <div className="h-8 w-3/4 bg-gray-200 rounded mb-4" />
    <div className="h-4 w-48 bg-gray-200 rounded mb-8" />
    <div className="w-full aspect-video rounded-xl bg-gray-200 mb-10" />
    <div className="space-y-3">
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-4/6 bg-gray-200 rounded" />
    </div>
  </div>
);

export default ArticleDetailSkeleton;
