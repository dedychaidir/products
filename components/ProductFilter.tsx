"use client";
import { useEffect, useState } from "react";

export default function ProductFilter({
  categories,
  onFilter,
}: {
  categories: string[];
  onFilter: (category: string, sort: string) => void;
}) {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("asc");

  function applyFilter() {
    onFilter(category, sort);
  }

  useEffect(() => {
    applyFilter();
  }, [category, sort]);

  return (
    <div className="flex gap-4 mb-6">
      <select
        value={category}
        onChange={(e) => {
          console.log(e.target.value);
          setCategory(e.target.value)
          
        }}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map((c: any) => (
          <option key={c.slug} value={c.name}>
            {c.slug}
          </option>
        ))}
      </select>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="asc">Price Asc</option>
        <option value="desc">Price Desc</option>
      </select>
    </div>
  );
}
