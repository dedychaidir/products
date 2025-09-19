"use client";

import { useEffect, useState } from "react";

export default function ProductCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 2000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      <img
        src={images[index]}
        alt=""
        className="w-full h-80 object-cover transition-all duration-500"
      />
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 
                   bg-black/50 text-white rounded-full 
                   w-14 h-14 text-3xl flex items-center justify-center
                   hover:bg-black/70"
      >
        ‹ Prev
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 
                   bg-black/50 text-white rounded-full 
                   w-14 h-14 text-3xl flex items-center justify-center
                   hover:bg-black/70"
      >
        Next ›
      </button>
    </div>
  );
}
