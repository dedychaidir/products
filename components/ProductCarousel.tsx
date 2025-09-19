"use client";

import { useState } from "react";

// import { Carousel } from "antd";

export default function ProductCarousel({ images }: { images: string[] }) {
  // return (
  //   <Carousel autoplay dots className="rounded overflow-hidden">
  //     {images.map((img, i) => (
  //       <div key={i}>
  //         <img
  //           src={img}
  //           alt={`Image ${i + 1}`}
  //           className="w-full h-80 object-cover"
  //         />
  //       </div>
  //     ))}
  //   </Carousel>
  // );

  const [index, setIndex] = useState(0);

  return (
    <div>
      <img
        src={images[index]}
        alt=""
        className="w-full h-80 object-cover rounded mb-2"
      />
      <div className="flex gap-2">
        {images.map((img, i) => {
          return (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => setIndex(i)}
              className={`w-20 h-20 object-cover rounded cursor-pointer border
              ${i === index ? "border-blue-500" : "border-transparent"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
