"use client";
import { useState } from "react";

export default function ProductCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <img
        src={images[index]}
        alt=""
        className="w-full h-80 object-cover rounded mb-2"
      />
      <div className="flex gap-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            onClick={() => setIndex(i)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border 
              ${i === index ? "border-blue-500" : "border-transparent"}`}
          />
        ))}
      </div>
    </div>
  );
}
