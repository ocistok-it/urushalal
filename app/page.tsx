import Image from "next/image";
import Navbar from "./components/Navbar";
import PendampinganCarousel from "./components/PendampinganCarousel";
import ProdukCarousel from "./components/ProdukCarousel";
import BackToTop from "./components/BackToTop";

import jumbotronWeb from "@/public/jumbotron_web.png";
import jumbotron from "@/public/jumbotron.webp";
import sertifikasi from "@/public/sertifikasi.webp";
import prosesSertifikasi from "@/public/18.webp";
import ctaDesktop from "@/public/CTA.png";
import ctaMobile from "@/public/CTA-mobile.png";
import logoImg from "@/public/logo.png";

import iconManufacturer from "@/public/icons/manufacturer.svg";
import iconImportir from "@/public/icons/importir.svg";
import iconCompany from "@/public/icons/company.svg";
import iconCulinary from "@/public/icons/culinary.svg";

import iconK5 from "@/public/icons/k5.svg";
import iconK4 from "@/public/icons/k4.svg";
import iconK3 from "@/public/icons/k3.svg";
import iconK2 from "@/public/icons/k2.svg";
import iconK1 from "@/public/icons/k1.svg";

import client0 from "@/public/clients/Client.png";
import client1 from "@/public/clients/Client-1.png";
import client2 from "@/public/clients/Client-2.png";
import client3 from "@/public/clients/Client-3.png";
import client4 from "@/public/clients/Client-4.png";
import client5 from "@/public/clients/Client-5.png";
import client6 from "@/public/clients/Client-6.png";
import client7 from "@/public/clients/Client-7.png";
import client8 from "@/public/clients/Client-8.png";
import client9 from "@/public/clients/Client-9.png";
import PendampinganCarouselInfinite from "./components/PendampinganCarouselInfinite";

const phoneNumber = "6281219478493";
const message =
  "Halo saya berminat untuk urus sertifikasi halal di urushalal.id";

const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl mx-2 sm:mx-4 mt-2 sm:mt-4 md:h-[80vh]">
        <Image
          src={jumbotronWeb}
          alt=""
          fill
          className="object-cover"
          priority
          placeholder="blur"
        />
        <div className="relative z-10 max-w-fit mx-0 w-max px-4 sm:px-6 lg:px-8 h-full mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-8 md:gap-12 items-center">
            <div className="pt-24 sm:pt-28 md:pt-0 h-full flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 md:mb-6">
                Permudah Proses <br />
                <span className="font-semibold bg-auto bg-[#3b82f6_70%] leading-normal">
                  Sertifikasi Halal <br />
                </span>{" "}
                untuk Bisnis Anda
              </h1>
              <p className="text-white text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Urushalal.id membantu perusahaan lokal maupun internasional
                mendapatkan sertifikasi halal resmi di Indonesia dengan
                pendampingan profesional sesuai regulasi BPJPH, LPH, dan MUI.
                Mulai dari konsultasi awal hingga sertifikat halal diterbitkan,
                tim kami siap membantu memastikan produk Anda memenuhi standar
                halal Indonesia secara efisien dan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center cursor-pointer px-6 sm:px-8 py-3 bg-teal-800 text-white rounded-full hover:bg-teal-400 transition font-semibold text-sm sm:text-base"
                >
                  Mulai Proses Sertifikasi Halal
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer px-6 sm:px-8 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Konsultasi Gratis
                </a>
              </div>
            </div>

            <div className="h-full w-full flex items-end">
              {/* Parent container is relative */}
              <div className="relative w-full max-w-md md:max-w-none">
                <Image
                  alt="Gambar Wanita dengan Sertifikat"
                  src={jumbotron}
                  priority
                  className="w-full"
                  sizes="(max-width: 768px) 100vw, 100vw"
                  placeholder="blur"
                />

                {/* Add absolute, bottom-0, left-0, z-index, and pointer-events-none here */}
              </div>
            </div>
          </div>
          <svg
            className="absolute -bottom-1/12 -right-1/12 z-10 pointer-events-none"
            width="1281"
            height="431"
            viewBox="0 0 1281 431"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_f_180_2022)">
              <ellipse
                cx="922.828"
                cy="614.656"
                rx="729.372"
                ry="402.84"
                transform="rotate(-9.25841 922.828 614.656)"
                fill="#4FBA78"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_180_2022"
                x="0"
                y="0"
                width="1845.66"
                height="1229.31"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB" /* Note: React uses camelCase for this */
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />{" "}
                {/* camelCase */}
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_180_2022"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </section>

      {/* Why Halal Certification Section */}
      <section id="tentang" className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-2xl h-64 sm:h-80 md:h-full w-full">
              <Image
                className="object-fit"
                src={sertifikasi}
                alt="Sertifikasi Halal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 text-teal-800 text-xs font-semibold tracking-wider mb-4">
                <span className="md:w-1.5 md:h-1.5 w-1 h-1 bg-teal-400" />
                TENTANG SERTIFIKASI HALAL
              </span>
              <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
                Mengapa Sertifikasi Halal Penting?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed sm:text-sm md:text-base">
                Indonesia merupakan negara dengan populasi Muslim terbesar di
                dunia. Seiring dengan regulasi yang terus berkembang, banyak
                produk yang wajib memiliki sertifikasi halal. Berikut lembaga
                dan sistem penting dalam proses sertifikasi halal di Indonesia:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  {
                    bold: "BPJPH",
                    desc: "— Badan Penyelenggara Jaminan Produk Halal",
                  },
                  { bold: "LPH", desc: "— Lembaga Pemeriksa Halal" },
                  { bold: "MUI", desc: "— Majelis Fatwa Halal" },
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-gray-700">
                    <span className="text-teal-600">•</span>
                    <span>
                      <strong>{item.bold}</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
              <div>
                <p>Banyak perusahaan menghadapi tantangan seperti:</p>
                <ul className="space-y-3 my-6">
                  {[
                    {
                      desc: "Kurangnya pemahaman mengenai regulasi halal",
                    },
                    { desc: "Persiapan dokumen yang kompleks" },
                    { desc: "Implementasi Sistem Jaminan Produk Halal (SJPH)" },
                    { desc: "Persiapan audit dan inspeksi halal" },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-teal-600">•</span>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-500">
                Kami hadir untuk membantu menyederhanakan proses tersebut bagi
                bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pendampingan Section */}
      <section
        id="layanan"
        className="py-12 md:py-20 bg-white rounded-2xl mx-2 my-8 sm:mx-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6 mb-8 md:mb-12">
            <div>
              <span className="inline-flex items-center gap-2 text-teal-800 text-xs font-semibold tracking-wider mb-4">
                <span className="md:w-1.5 md:h-1.5 w-1 h-1 bg-teal-400" />
                LAYANAN KAMI
              </span>
              <h2 className="text-2xl md:text-4xl text-gray-900">
                Pendampingan Sertifikasi Halal Secara Menyeluruh
              </h2>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed md:pt-6 text-sm md:text-base">
              Kami menyediakan layanan pendampingan yang mencakup seluruh proses
              sertifikasi halal, mulai dari tahap persiapan hingga sertifikat
              halal diterbitkan.
            </p>
          </div>

          <PendampinganCarouselInfinite />
        </div>
      </section>

      {/* Siapa yang Kami Bantu */}
      <section id="industri" className="py-12 md:py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center justify-center gap-2 text-teal-700 text-xs font-semibold tracking-wider mb-4">
              <span className="md:w-1.5 md:h-1.5 w-1 h-1 bg-teal-400" />
              INDUSTRI YANG KAMI LAYANI
            </span>
            <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
              Siapa yang Kami Bantu
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Layanan kami dirancang untuk membantu berbagai jenis bisnis,
              antara lain:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Produsen / Manufacturer",
                desc: "Perusahaan makanan, minuman, kosmetik, farmasi, dan produk konsumen lainnya.",
                icon: iconManufacturer,
              },
              {
                title: "Importir dan Distributor",
                desc: "Perusahaan yang mengimpor produk ke Indonesia yang memerlukan sertifikasi halal.",
                icon: iconImportir,
              },
              {
                title: "Perusahaan Internasional",
                desc: "Manufaktur luar negeri yang ingin memasuki pasar Indonesia.",
                icon: iconCompany,
              },
              {
                title: "Bisnis Kuliner",
                desc: "Restoran, catering, dan industri makanan yang ingin memperoleh sertifikasi halal.",
                icon: iconCulinary,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-teal-900 text-white p-6 rounded-xl border border-teal-700/30 sm:text-sm text-base"
              >
                <div className="w-12 h-12 bg-teal-400 rounded-lg mb-6 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-teal-400">
                  {item.title}
                </h3>
                <p className="text-teal-50 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proses Sertifikasi Halal */}
      <section id="tahapan" className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-flex items-center justify-center gap-2 text-teal-700 text-xs font-semibold tracking-wider mb-4">
              <span className="md:w-1.5 md:h-1.5 w-1 h-1 bg-teal-400" />
              TAHAPAN SERTIFIKASI
            </span>
            <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
              Proses Sertifikasi Halal
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Kami membantu Anda melalui setiap tahap proses sertifikasi halal:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={prosesSertifikasi}
                alt="Proses Sertifikasi Halal"
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </div>
            <div className="space-y-0 md:space-y-5">
              {[
                {
                  step: "Step 1",
                  title: "Konsultasi Awal",
                  desc: "Memahami kebutuhan bisnis Anda dan memberikan saran terkait proses sertifikasi halal yang sesuai.",
                },
                {
                  step: "Step 2",
                  title: "Persiapan Dokumen",
                  desc: "Mempersiapkan dokumen yang diperlukan untuk pengajuan sertifikasi halal.",
                },
                {
                  step: "Step 3",
                  title: "Implementasi SJPH",
                  desc: "Pendampingan implementasi Sistem Jaminan Produk Halal sesuai standar regulasi.",
                },
                {
                  step: "Step 4",
                  title: "Pengajuan Sertifikasi",
                  desc: "Mengajukan permohonan sertifikasi halal ke BPJPH melalui sistem yang berlaku.",
                },
                {
                  step: "Step 5",
                  title: "Audit Halal",
                  desc: "Pendampingan selama proses audit halal oleh Lembaga Pemeriksa Halal (LPH).",
                },
                {
                  step: "Step 6",
                  title: "Penerbitan Sertifikat Halal",
                  desc: "Setelah lulus audit, sertifikat halal diterbitkan oleh BPJPH.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  name="steps"
                  className="border-b border-gray-200 group"
                >
                  <summary className="flex items-center justify-between py-5 cursor-pointer">
                    <span className="font-bold text-gray-900">
                      {item.step} - {item.title}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="details-content">
                    <div>
                      <p className="pb-4 text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Produk yang Memerlukan Sertifikasi Halal */}

      <section id="produk" className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full bg-teal-900 px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-16 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-12">
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold tracking-wider mb-6">
                <span className="w-3 h-3 bg-teal-400 rounded-sm" />
                KATEGORI PRODUK
              </span>
              <h2 className="text-2xl md:text-4xl text-white mb-6">
                Produk yang Memerlukan Sertifikasi Halal
              </h2>
              <p className="text-xs md:text-base text-white/80 mb-8 leading-relaxed">
                Beberapa kategori produk yang memerlukan atau berpotensi
                memerlukan sertifikasi halal antara lain:
              </p>
            </div>
            <p className="text-white/50 text-sm mt-12 hidden md:block">
              *Seiring perkembangan regulasi, semakin banyak kategori produk
              yang akan diwajibkan memiliki sertifikasi halal.
            </p>
          </div>
        </div>
        <ProdukCarousel />
        <p className="text-white/50 bg-teal-900 text-sm px-6 py-6 sm:px-10 md:px-12 md:py-16 block md:hidden">
          *Seiring perkembangan regulasi, semakin banyak kategori produk yang
          akan diwajibkan memiliki sertifikasi halal.
        </p>
      </section>

      {/* Mengapa Memilih Kami */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Header cell */}
            <div className="flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 text-teal-800 text-xs font-semibold tracking-wider mb-4">
                <span className="md:w-1.5 md:h-1.5 w-1 h-1 bg-teal-400" />
                KEUNGGULAN KAMI
              </span>
              <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
                Mengapa Memilih Kami
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Pendamping Sertifikasi Halal yang Profesional
              </p>
            </div>

            {/* Cards */}
            {[
              {
                icon: iconK5,
                title: "Memahami regulasi halal di Indonesia",
                desc: "Memahami regulasi halal terbaru di Indonesia agar proses sertifikasi berjalan sesuai ketentuan.",
              },
              {
                icon: iconK4,
                title: "Pendampingan proses secara terstruktur",
                desc: "Pendampingan setiap tahapan sertifikasi secara terstruktur agar proses berjalan lebih jelas dan terarah.",
              },
              {
                icon: iconK3,
                title: "Dukungan dokumentasi dan sistem halal",
                desc: "Membantu penyusunan dokumentasi dan sistem halal agar sesuai dengan standar sertifikasi yang berlaku.",
              },
              {
                icon: iconK2,
                title:
                  "Pengalaman bekerja dengan perusahaan lokal dan internasional",
                desc: "Berpengalaman mendampingi berbagai perusahaan lokal dan internasional dalam proses sertifikasi halal.",
              },
              {
                icon: iconK1,
                title: "Proses transparan dan efisien",
                desc: "Menjalankan proses sertifikasi secara transparan dan efisien untuk meminimalkan hambatan dan waktu.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-teal-25 border border-teal-50 flex flex-col"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-lg mb-6 flex items-center justify-center">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-center mt-12 max-w-3xl mx-auto text-sm">
            Kami berkomitmen membantu bisnis Anda memenuhi standar halal secara
            profesional dan terpercaya.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-semibold tracking-wider mb-4">
              &#9632; KLIEN KAMI
            </span>
            <h2 className="text-2xl md:text-4xl text-gray-900 mb-4">
              Dipercaya oleh Berbagai Brand dan Perusahaan
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Kami telah membantu berbagai perusahaan dalam memahami dan
              mempersiapkan proses sertifikasi halal di Indonesia. Klien kami
              berasal dari berbagai industri, mulai dari makanan dan minuman,
              kosmetik, hingga produk konsumen yang ingin memastikan produknya
              memenuhi standar halal di Indonesia.
            </p>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-marquee items-center w-max">
            {[...Array(2)].map((_, setIndex) =>
              [
                client0,
                client1,
                client2,
                client3,
                client4,
                client5,
                client6,
                client7,
                client8,
                client9,
              ].map((src, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="shrink-0 h-16 w-40 flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`Client ${setIndex * 10 + i + 1}`}
                    width={160}
                    height={64}
                    className="object-contain max-h-16"
                  />
                </div>
              )),
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <span className="inline-flex items-center gap-2 text-teal-800 text-xs font-semibold tracking-wider mb-4">
                <span className="md:w-1.5 md:h-1.5 w-1 h-1 bg-teal-400" />
                FAQ
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                Pertanyaan yang Sering Ditanyakan
              </h2>
            </div>
            <div>
              {[
                {
                  q: "Berapa lama proses sertifikasi halal?",
                  a: "Proses sertifikasi halal biasanya membutuhkan waktu 2-6 bulan tergantung pada kompleksitas bisnis dan kesiapan dokumen Anda.",
                },
                {
                  q: "Apakah perusahaan luar negeri bisa mendapatkan sertifikasi halal Indonesia?",
                  a: "Ya, perusahaan luar negeri dapat memperoleh sertifikasi halal dengan mengikuti prosedur yang berlaku.",
                },
                {
                  q: "Apakah semua produk wajib memiliki sertifikasi halal?",
                  a: "Sesuai regulasi terbaru, semakin banyak kategori produk yang wajib memiliki sertifikasi halal di Indonesia.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  name="faq"
                  className="border-b border-gray-200 group"
                >
                  <summary className="flex items-center justify-between py-6 cursor-pointer [&::-webkit-details-marker]:hidden list-none">
                    <span className="font-bold text-gray-900 text-sm">
                      {item.q}
                    </span>
                    <span className="text-gray-400 text-2xl shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="details-content">
                    <div>
                      <p className="pb-6 text-gray-500 text-xs leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={ctaDesktop}
              alt="CTA Background"
              fill
              className="object-cover hidden md:block"
              sizes="1280px"
              loading="lazy"
              placeholder="blur"
            />
            <Image
              src={ctaMobile}
              alt="CTA Background"
              fill
              className="object-cover md:hidden"
              sizes="100vw"
              loading="lazy"
              placeholder="blur"
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center p-6 sm:p-10 md:p-16 mb-72 md:mb-0">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Mulai Proses Sertifikasi Halal Anda Sekarang
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed text-sm">
                  Tim kami siap membantu Anda memahami proses sertifikasi halal
                  dan memastikan bisnis Anda memenuhi regulasi yang berlaku di
                  Indonesia.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "Konsultasi awal gratis",
                    "Pendampingan profesional",
                    "Proses yang jelas dan terstruktur",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-white/90 text-sm"
                    >
                      <span className="text-white">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <button className=" cursor-pointer px-6 sm:px-8 py-3 bg-teal-800 text-white rounded-full hover:bg-teal-700 transition font-semibold text-sm sm:text-base">
                    Mulai Proses Sertifikasi Halal
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" cursor-pointer px-6 sm:px-8 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition font-semibold flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Konsultasi Gratis
                  </a>
                </div>
              </div>
              <div>
                {/* Right side reserved for background image content */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="bg-teal-25 py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <Image src={logoImg} alt="urushalal" width={180} height={60} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-6">Navigasi</h3>
                <ul className="space-y-3 text-gray-600 text-sm">
                  <li>
                    <a href="#tentang" className="hover:text-gray-900">
                      Tentang Sertifikasi Halal
                    </a>
                  </li>
                  <li>
                    <a href="#layanan" className="hover:text-gray-900">
                      Layanan
                    </a>
                  </li>
                  <li>
                    <a href="#industri" className="hover:text-gray-900">
                      Industri
                    </a>
                  </li>
                  <li>
                    <a href="#tahapan" className="hover:text-gray-900">
                      Tahapan Sertifikasi
                    </a>
                  </li>
                  <li>
                    <a href="#produk" className="hover:text-gray-900">
                      Kategori Produk
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-6">
                  Layanan Pelanggan
                </h3>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-700 text-sm mb-8"
                >
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>
                    <strong>Whatsapp:</strong> +62 812 1947 8493
                  </span>
                </a>
                <h3 className="font-bold text-gray-900 mb-4">Ikuti Kami</h3>
                <div className="flex items-center gap-3">
                  {/* <a
                    href="#"
                    className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a> */}
                  <a
                    href="https://www.instagram.com/urushalal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
                    style={{
                      background:
                        "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  {/* <a
                    href="#"
                    className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a> */}
                  {/* <a
                    href="#"
                    className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 border-0 h-px bg-gray-200" />
          <span className="text-[#707070] text-sm mt-6 block text-center">
            Copyright © 2026 UrusHalal. All Rights Reserved
          </span>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
