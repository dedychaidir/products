"use client";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="border rounded-lg p-4 bg-white hover:shadow-md transition"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{product.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">
        {product.description}
      </p>
      <p className="mt-1 font-bold text-green-600">${product.price}</p>
    </Link>
  );
}
