'use client';
import { useState } from 'react';

export default function ProductFilter({ categories, onFilter }: {
  categories: string[];
  onFilter: (category: string, sort: string) => void;
}) {
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('asc');

  function applyFilter() {
    onFilter(category, sort);
  }

  return (
    <div className="flex gap-4 mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Categories</option>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="asc">Price Asc</option>
        <option value="desc">Price Desc</option>
      </select>
      <button
        onClick={applyFilter}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
}
