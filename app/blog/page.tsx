import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

import img0 from "@/public/carousel/0.webp";
import img1 from "@/public/carousel/1.webp";
import img2 from "@/public/carousel/2.webp";
import img3 from "@/public/carousel/3.webp";
import img4 from "@/public/carousel/4.webp";
import img5 from "@/public/carousel/5.webp";
import img6 from "@/public/carousel/6.webp";

const articles = [
  {
    slug: "mengapa-sertifikasi-halal-penting",
    image: img0,
    author: "Welno Hedi",
    date: "25 Februari 2026",
    title: "Mengapa Sertifikasi Halal Penting untuk Bisnis di Indonesia?",
  },
  {
    slug: "langkah-langkah-mendapatkan-sertifikasi-halal",
    image: img1,
    author: "Welno Hedi",
    date: "25 Februari 2026",
    title: "Langkah-Langkah Mendapatkan Sertifikasi Halal dengan Mudah",
  },
  {
    slug: "5-kesalahan-umum-sertifikasi-halal",
    image: img2,
    author: "Welno Hedi",
    date: "25 Februari 2026",
    title: "5 Kesalahan Umum Saat Mengurus Sertifikasi Halal",
  },
  {
    slug: "studi-kasus-umkm-sertifikasi-halal",
    image: img3,
    author: "Welno Hedi",
    date: "25 Februari 2026",
    title: "Studi Kasus: UMKM Berhasil Mendapatkan Sertifikasi Halal",
  },
  {
    slug: "update-regulasi-sertifikasi-halal",
    image: img4,
    author: "Welno Hedi",
    date: "25 Februari 2026",
    title: "Update Regulasi Sertifikasi Halal Terbaru di Indonesia",
  },
  {
    slug: "pendampingan-implementasi-sjph",
    image: img5,
    author: "Welno Hedi",
    date: "25 Februari 2026",
    title:
      "Pendampingan Implementasi Sistem Jaminan Produk Halal (SJPH): Kunci Keberhasilan Sertifikasi",
  },
  {
    slug: "proses-perpanjangan-sertifikat-halal",
    image: img6,
    author: "Welno Hedi",
    date: "25 Februari 2026",
    title: "Proses Perpanjangan Sertifikat Halal: Panduan Lengkap",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header spacing for fixed navbar */}
      <div className="pt-24 md:pt-32 pb-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">
          Blog
        </h1>
      </div>

      {/* Article Grid */}
      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block border-b border-gray-200 pb-8 mb-8"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm mb-2">
                <span className="text-teal-600 font-medium">
                  {article.author}
                </span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-400">{article.date}</span>
              </p>
              <h2 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-teal-700 transition-colors">
                {article.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Page;
