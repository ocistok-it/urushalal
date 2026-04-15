const BlogErrorState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <svg
      className="w-16 h-16 text-gray-300 mb-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <p className="text-gray-600 text-lg font-medium mb-2">
      Gagal memuat artikel
    </p>
    <p className="text-gray-400 text-sm mb-4">
      Terjadi kesalahan saat mengambil data. Silakan coba lagi.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="px-5 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition-colors"
    >
      Coba Lagi
    </button>
  </div>
);

export default BlogErrorState;
