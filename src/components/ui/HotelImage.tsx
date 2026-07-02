"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function HotelImage({
  src,
  alt,
  className,
  fill = true,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw"
}: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex h-full min-h-[220px] w-full items-center justify-center bg-[linear-gradient(135deg,#0B0B0B,#E11D2E_58%,#F4B400)] text-white",
          className
        )}
      >
        <div className="rounded-full border border-white/25 bg-white/10 p-5">
          <Icon name="ImageIcon" className="h-10 w-10" />
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        onError={() => setFailed(true)}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      priority={priority}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
