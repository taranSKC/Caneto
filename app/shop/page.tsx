'use client';

import { ProductCard } from '@/components/product-card';
import { featuredProducts } from '@/lib/products';

export default function ShopPage() {
  return (
    <div className="container py-12">
      <h1 className="mb-8 text-3xl font-bold">Our Products</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}