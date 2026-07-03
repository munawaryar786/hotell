"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function GalleryGrid({ limit, featuredOnly = false }: { limit?: number; featuredOnly?: boolean }) {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const filtered = useMemo(() => {
    const source = featuredOnly ? galleryItems.filter((image) => image.featured) : galleryItems;
    return source.filter((image) => category === "All" || image.category === category).slice(0, limit ?? source.length);
  }, [category, featuredOnly, limit]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (active !== null && filtered.length > 0 && event.key === "ArrowRight") setActive((active + 1) % filtered.length);
      if (active !== null && filtered.length > 0 && event.key === "ArrowLeft") setActive((active - 1 + filtered.length) % filtered.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, filtered.length]);

  return (
    <>
      {!limit ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {galleryCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setActive(null);
              }}
              className={`focus-ring rounded-full border px-4 py-2 text-sm font-bold transition ${
                category === item ? "border-accent bg-primary text-white" : "border-slate-200 bg-white text-primary hover:border-accent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="focus-ring group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg bg-light text-left shadow-soft"
          >
            <span className={`relative block ${index % 5 === 1 ? "aspect-[3/4]" : index % 5 === 3 ? "aspect-[5/4]" : "aspect-[4/3]"}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm font-bold text-white">
                {image.title}
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && filtered[active] ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={filtered[active].title}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setActive(null)}
          >
            <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="focus-ring absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary"
                aria-label="Close gallery image"
              >
                <Icon name="X" className="h-5 w-5" />
              </button>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-primary">
                <Image src={filtered[active].src} alt={filtered[active].alt} fill sizes="100vw" className="object-contain" />
              </div>
              <div className="mt-3 flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
                <p className="font-bold">{filtered[active].title}</p>
                <div className="flex gap-2">
                  <Button type="button" variant="light" onClick={() => setActive((active - 1 + filtered.length) % filtered.length)}>
                    Previous
                  </Button>
                  <Button type="button" variant="gold" onClick={() => setActive((active + 1) % filtered.length)}>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
