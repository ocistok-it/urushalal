import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface CardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  meta?: ReactNode;
}

const Card = ({ href, imageSrc, imageAlt, title, meta }: CardProps) => (
  <Link href={href} className="group block border-b border-gray-200 pb-8 mb-8">
    <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl mb-4">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        unoptimized
      />
    </div>
    {meta && <div className="text-sm mb-2">{meta}</div>}
    <h2 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-teal-700 transition-colors">
      {title}
    </h2>
  </Link>
);

export default Card;
