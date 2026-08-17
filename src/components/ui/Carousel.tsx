"use client";

import React, { ReactNode, useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: ReactNode;
  options?: EmblaOptionsType;
  className?: string;
  slideClassName?: string;
  showArrows?: boolean;
}

export default function Carousel({
  children,
  options,
  className,
  slideClassName,
  showArrows = false,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
    ...options,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {React.Children.map(children, (child) => (
            <div className={cn("min-w-0 flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.333333%] pl-4 first:pl-0", slideClassName)}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={cn(
              "absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 shadow-md flex items-center justify-center text-black dark:text-white transition-opacity disabled:opacity-0 disabled:pointer-events-none opacity-0 md:group-hover:opacity-100 z-10 hidden md:flex"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={cn(
              "absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 shadow-md flex items-center justify-center text-black dark:text-white transition-opacity disabled:opacity-0 disabled:pointer-events-none opacity-0 md:group-hover:opacity-100 z-10 hidden md:flex"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  );
}
