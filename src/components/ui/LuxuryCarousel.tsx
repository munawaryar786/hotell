"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function LuxuryCarousel({ children, className }: { children: ReactNode[]; className?: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", loop: false, dragFree: false });
  const [selected, setSelected] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative w-full max-w-full overflow-hidden", className)}>
      <div className="w-full max-w-full overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {children.map((child, index) => (
            <div key={index} className="min-w-0 max-w-full flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]">
              <div className="h-full w-full max-w-full overflow-hidden">{child}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-5">
        <div className="flex gap-2" aria-label="Carousel pagination">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn("h-2.5 rounded-full transition-all", selected === index ? "w-9 bg-gold" : "w-2.5 bg-black/20 hover:bg-gold/70")}
            />
          ))}
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={scrollPrev} aria-label="Previous slide" className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-primary transition hover:border-gold hover:text-gold">
            <Icon name="ChevronLeft" className="h-5 w-5" />
          </button>
          <button type="button" onClick={scrollNext} aria-label="Next slide" className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-primary transition hover:border-gold hover:text-gold">
            <Icon name="ChevronRight" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
