"use client";

import { useMemo, useState } from "react";
import { roomCategories, rooms } from "@/data/rooms";
import { RoomCard } from "@/components/rooms/RoomCard";

export function RoomFilters() {
  const [category, setCategory] = useState("All");
  const visible = useMemo(() => rooms.filter((room) => category === "All" || room.category === category), [category]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {roomCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`focus-ring rounded-full border px-4 py-2 text-sm font-bold transition ${category === item ? "border-primary bg-primary text-white" : "border-slate-200 bg-white text-primary hover:border-accent"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((room) => <RoomCard key={room.slug} room={room} />)}
      </div>
    </>
  );
}
