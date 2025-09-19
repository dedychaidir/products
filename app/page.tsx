"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  }, []);

  function handleFilter(category: string, sort: string) {
    let list = [...products];
    if (category) list = list.filter((p) => p.category === category);
    list.sort((a, b) =>
      sort === "asc" ? a.price - b.price : b.price - a.price
    );
    setFiltered(list);
  }

  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductFilter categories={categories} onFilter={handleFilter} />
      <div
        className="grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4"
      >
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
