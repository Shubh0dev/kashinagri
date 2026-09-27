import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  aspectRatio?: "video" | "square" | "portrait" | "tall" | "wide";
  overlay?: "none" | "subtle" | "dark" | "gradient";
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
}

export function ImageCard({
  src,
  alt,
  aspectRatio = "video",
  overlay = "subtle",
  className = "",
  priority = false,
  children,
}: ImageCardProps) {
  const aspectClasses = {
    video: "aspect-[16/10]",
    wide: "aspect-[21/9]",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    tall: "aspect-[2/3]",
  };

  const overlayClasses = {
    none: "",
    subtle: "bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent",
    dark: "bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10",
    gradient: "editorial-overlay",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-sm group bg-charcoal/10 ${aspectClasses[aspectRatio]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {overlay !== "none" && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${overlayClasses[overlay]}`}
        />
      )}

      {children && (
        <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end z-10">
          {children}
        </div>
      )}
    </div>
  );
}
