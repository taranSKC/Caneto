'use client';

import { ProductCard } from '@/components/product-card';
import { featuredProducts } from '@/lib/products';

interface ProductGridProps {
  category?: string;
  limit?: number;
}

export function ProductGrid({ category, limit }: ProductGridProps) {
  let products = featuredProducts;
  
  if (category) {
    products = products.filter(product => product.category === category);
  }
  
  if (limit) {
    products = products.slice(0, limit);
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}