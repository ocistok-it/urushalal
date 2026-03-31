"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

const items = [
  {
    title: "Makanan dan minuman kemasan",
    src: "/carousel2/0.webp",
  },
  {
    title: "Kosmetik dan produk perawatan tubuh",
    src: "/carousel2/1.webp",
  },
  {
    title: "Obat-obatan dan suplemen kesehatan",
    src: "/carousel2/2.webp",
  },
  {
    title: "Bahan baku dan rempah-rempah",
    src: "/carousel2/3.webp",
  },
  {
    title: "Produk daging dan olahan",
    src: "/carousel2/4.webp",
  },
  {
    title: "Makanan siap saji dan katering",
    src: "/carousel2/5.webp",
  },
];

const loopedItems = [...items, ...items, ...items];

export default function ProdukCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const isPaused = useRef(false);
  const isScrolling = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const getCardWidth = useCallback(() => {
    if (!scrollRef.current) return 0;
    return scrollRef.current.scrollWidth / loopedItems.length;
  }, []);

  const updateCurrent = useCallback(() => {
    if (!scrollRef.current) return;
    const cardWidth = getCardWidth();
    if (cardWidth === 0) return;
    const rawIdx = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setCurrent(((rawIdx % items.length) + items.length) % items.length);
  }, [getCardWidth]);

  const resetToMiddle = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = getCardWidth();
    if (cardWidth === 0) return;
    const oneSetWidth = cardWidth * items.length;
    const scrollLeft = container.scrollLeft;

    if (scrollLeft < oneSetWidth * 0.75 || scrollLeft >= oneSetWidth * 2.25) {
      const offset = ((scrollLeft % oneSetWidth) + oneSetWidth) % oneSetWidth;
      container.scrollLeft = oneSetWidth + offset;
    }
  }, [getCardWidth]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.scrollWidth / loopedItems.length;
    container.scrollLeft = cardWidth * items.length;
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => updateCurrent();
    const onScrollEnd = () => {
      isScrolling.current = false;
      resetToMiddle();
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    container.addEventListener("scrollend", onScrollEnd, { passive: true });
    return () => {
      container.removeEventListener("scroll", onScroll);
      container.removeEventListener("scrollend", onScrollEnd);
    };
  }, [updateCurrent, resetToMiddle]);

  const scrollTo = useCallback(
    (direction: "prev" | "next") => {
      if (!scrollRef.current || isScrolling.current) return;
      isScrolling.current = true;
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        scrollTo("next");
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [scrollTo]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const cardWidth = getCardWidth();
      const oneSetWidth = cardWidth * items.length;
      const middleStart = oneSetWidth;
      container.scrollTo({
        left: middleStart + index * cardWidth,
        behavior: "smooth",
      });
    },
    [getCardWidth],
  );

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = container.scrollLeft;
    container.setPointerCapture(e.pointerId);
    container.style.scrollSnapType = "none";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      const container = scrollRef.current;
      if (!container) return;
      container.releasePointerCapture(e.pointerId);
      container.style.scrollSnapType = "x mandatory";
      // Snap to nearest card
      const cardWidth = getCardWidth();
      if (cardWidth === 0) return;
      const target = Math.round(container.scrollLeft / cardWidth) * cardWidth;
      container.scrollTo({ left: target, behavior: "smooth" });
    },
    [getCardWidth],
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      {/* Slide counter */}
      <div className="absolute top-10 right-10 z-10 flex items-baseline justify-end mb-4">
        <span className="text-4xl font-light text-white leading-none tabular-nums">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="text-lg text-[#4FBA78] ml-0.5">
          /{String(items.length).padStart(2, "0")}
        </span>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="h-full flex gap-0 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {loopedItems.map((item, i) => (
          <div key={i} className="shrink-0 w-full snap-center relative">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 768px) 100vw, 50vw"
                draggable={false}
              />
              {/* Label overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 pt-12">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute z-10 bottom-2 left-2 right-2 flex gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 cursor-pointer ${
              i === current ? "bg-teal-400" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
