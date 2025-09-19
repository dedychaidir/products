"use client";

import ProductCarousel from "@/components/ProductCarousel";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>();

  const router = useRouter();

  const loadProductData = () => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    loadProductData();
  }, []);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <button onClick={() => router.back()} className="mb-4">
        ← Back
      </button>
      <ProductCarousel images={product.images} />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="mt-2 text-2xl font-bold text-green-600">${product.price}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full text-white ${
          product.availabilityStatus === "Low Stock"
            ? "bg-red-500"
            : "bg-green-500"
        }`}
      >
        {product.availabilityStatus}
      </span>
    </div>
  );
}
