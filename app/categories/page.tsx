'use client';

import { Card } from '@/components/ui/card';
import { CategoryCard } from '@/components/category-card';
import { ProductGrid } from '@/components/product-grid';
import { categories } from '@/lib/categories';

export default function CategoriesPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">Shop by Category</h1>
      
      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category.id}>
            <h2 className="mb-8 text-2xl font-semibold">{category.name}</h2>
            <ProductGrid category={category.id} limit={4} />
          </section>
        ))}
      </div>
    </div>
  );
}