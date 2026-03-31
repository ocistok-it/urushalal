"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
const items = [
  {
    title: "Konsultasi sertifikasi halal",
    desc: "Memberikan konsultasi awal untuk memahami persyaratan, alur proses, dan kesiapan bisnis dalam sertifikasi halal.",
    src: "/carousel/0.webp",
  },
  {
    title: "Persiapan dan review dokumen halal",
    desc: "Membantu menyiapkan dan meninjau dokumen agar sesuai dengan persyaratan sertifikasi halal.",
    src: "/carousel/1.webp",
  },
  {
    title: "Pendampingan implementasi Produk Halal (SJPH)",
    desc: "Pendampingan implementasi SJPH agar proses produksi dan operasional memenuhi standar halal.",
    src: "/carousel/2.webp",
  },
  {
    title: "Persiapan audit halal",
    desc: "Mempersiapkan perusahaan menghadapi audit halal dengan memastikan sistem dan dokumen telah sesuai.",
    src: "/carousel/3.webp",
  },
  {
    title: "Koordinasi dengan lembaga sertifikasi halal",
    desc: "Membantu koordinasi dengan lembaga sertifikasi agar proses pengajuan berjalan lancar.",
    src: "/carousel/4.webp",
  },
  {
    title: "Pendampingan proses sertifikasi hingga selesai",
    desc: "Pendampingan setiap tahapan sertifikasi halal hingga sertifikat resmi diterbitkan.",
    src: "/carousel/5.webp",
  },
  {
    title: "Bantuan perpanjangan sertifikasi halal",
    desc: "Membantu proses perpanjangan sertifikasi halal agar bisnis tetap memenuhi standar halal.",
    src: "/carousel/6.webp",
  },
];

export default function PendampinganCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const getCardWidth = useCallback(() => {
    if (!scrollRef.current) return 0;
    return scrollRef.current.scrollWidth / items.length;
  }, []);

  const updateCurrent = useCallback(() => {
    if (!scrollRef.current) return;
    const cardWidth = getCardWidth();
    if (cardWidth === 0) return;
    const rawIdx = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setCurrent(Math.min(rawIdx, items.length - 1));
  }, [getCardWidth]);

  const scrollTo = useCallback(
    (direction: "prev" | "next") => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const cardWidth = getCardWidth();
      const target =
        direction === "next"
          ? container.scrollLeft + cardWidth
          : container.scrollLeft - cardWidth;
      container.scrollTo({ left: target, behavior: "smooth" });
    },
    [getCardWidth],
  );

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4">
      <div className="flex flex-row md:flex-col md:w-1/4 justify-between items-center md:items-start pb-0 md:pb-4">
        <div className="flex items-end gap-6 mb-0 md:mb-8">
          <div className="flex items-baseline">
            <span className="text-5xl sm:text-7xl md:text-8xl font-light text-gray-900 leading-none tabular-nums">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-xl sm:text-2xl text-gray-400 ml-1">
              /{items.length}
            </span>
          </div>
        </div>

        <div className="flex gap-3 mt-0 md:mt-6">
          <button
            onClick={() => scrollTo("prev")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border hover:bg-teal-600 border-gray-300 hover:border-0 bg-white hover:text-white text-gray-600 flex items-center justify-center transition"
            aria-label="Previous"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("next")}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border hover:bg-teal-600 border-gray-300 hover:border-0 bg-white hover:text-white text-gray-600 flex items-center justify-center transition"
            aria-label="Next"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        onScroll={updateCurrent}
        className="flex gap-4 sm:gap-10 overflow-x-auto mx-auto snap-x snap-mandatory pb-4 px-2 sm:px-4 w-full md:w-11/12"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-around shrink-0 w-[80vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="p-6 pb-4">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="px-6 pb-6">
              <Image
                className="rounded-2xl"
                alt={`Gambar Layanan ${i + 1}`}
                src={item.src}
                width={400}
                height={400}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
