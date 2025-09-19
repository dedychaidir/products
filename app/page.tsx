"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const [sort, setSort] = useState<string>("asc");
  const [byCategory, setByCategory] = useState<string | null>(null);

  const loadData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  };

  const loadCategories = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  };

  const sortData = () => {
    fetch(`https://dummyjson.com/products?sortBy=title&order=${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  };

  const byCategoryData = () => {
    fetch(`https://dummyjson.com/products/category/${byCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFiltered(data.products);
      });
  };

  function handleFilter(category: string, sort: string) {
    if (category) {
      setByCategory(category);
    }
    setSort(sort);
  }

  useEffect(() => {
    loadData();
    loadCategories();
  }, []);

  useEffect(() => {
    sortData();
  }, [sort]);

  useEffect(() => {
    byCategoryData();
  }, [byCategory]);

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
